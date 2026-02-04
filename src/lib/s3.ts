import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  CreateBucketCommand,
  HeadBucketCommand,
} from "@aws-sdk/client-s3";

// 環境設定
const isLocal = process.env.S3_ENDPOINT?.includes("localhost") || process.env.S3_ENDPOINT?.includes("minio");

// S3クライアント初期化（ローカルMinIO / 本番S3 対応）
export const s3Client = new S3Client({
  region: process.env.AWS_REGION || "ap-northeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  // ローカル環境の場合はエンドポイントを指定
  ...(process.env.S3_ENDPOINT && {
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: true, // MinIOはパススタイルが必要
  }),
});

export const S3_BUCKET = process.env.S3_BUCKET || "minami-hp";
export const S3_PREFIX = "blog";

// 画像URL生成用のベースURL
const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL || `https://${S3_BUCKET}.s3.ap-northeast-1.amazonaws.com`;

// プレフィックスパス
export const POSTS_PREFIX = `${S3_PREFIX}/posts`;
export const IMAGES_PREFIX = `${S3_PREFIX}/images`;
export const CATEGORIES_KEY = `${S3_PREFIX}/categories.json`;

// バケット初期化フラグ
let bucketInitialized = false;

// バケットが存在しなければ作成（ローカル開発用）
async function ensureBucketExists(): Promise<void> {
  if (bucketInitialized || !isLocal) return;

  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: S3_BUCKET }));
    bucketInitialized = true;
  } catch (error: any) {
    if (error.name === "NotFound" || error.$metadata?.httpStatusCode === 404) {
      try {
        await s3Client.send(new CreateBucketCommand({ Bucket: S3_BUCKET }));
        console.log(`Bucket "${S3_BUCKET}" created`);
        bucketInitialized = true;
      } catch (createError: any) {
        // 既に存在する場合は無視
        if (createError.name !== "BucketAlreadyOwnedByYou") {
          console.error("Failed to create bucket:", createError);
        }
        bucketInitialized = true;
      }
    }
  }
}

// 型定義
export type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  eyecatch?: string;
  categoryId: string;
  tags?: string[];
  status: "draft" | "published";
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostWithCategory = BlogPost & {
  category: Category;
};

// S3からJSONを取得
async function getJsonFromS3<T>(key: string): Promise<T | null> {
  await ensureBucketExists();
  try {
    const command = new GetObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
    });
    const response = await s3Client.send(command);
    const body = await response.Body?.transformToString();
    if (!body) return null;
    return JSON.parse(body) as T;
  } catch (error: any) {
    if (error.name === "NoSuchKey") {
      return null;
    }
    throw error;
  }
}

// S3にJSONを保存
async function putJsonToS3(key: string, data: unknown): Promise<void> {
  await ensureBucketExists();
  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: JSON.stringify(data, null, 2),
    ContentType: "application/json",
  });
  await s3Client.send(command);
}

// S3からオブジェクトを削除
async function deleteFromS3(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
  });
  await s3Client.send(command);
}

// カテゴリ一覧取得
export async function getCategories(): Promise<Category[]> {
  const data = await getJsonFromS3<Category[]>(CATEGORIES_KEY);
  return data || [];
}

// カテゴリ保存
export async function saveCategories(categories: Category[]): Promise<void> {
  await putJsonToS3(CATEGORIES_KEY, categories);
}

// カテゴリ取得（単体）
export async function getCategoryById(id: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.id === id) || null;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) || null;
}

// 記事一覧取得
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: S3_BUCKET,
      Prefix: `${POSTS_PREFIX}/`,
    });
    const response = await s3Client.send(command);

    if (!response.Contents) return [];

    const posts: BlogPost[] = [];
    for (const obj of response.Contents) {
      if (obj.Key && obj.Key.endsWith(".json")) {
        const post = await getJsonFromS3<BlogPost>(obj.Key);
        if (post) {
          posts.push(post);
        }
      }
    }

    // 公開日時または作成日時で降順ソート
    return posts.sort((a, b) => {
      const dateA = a.publishedAt || a.createdAt;
      const dateB = b.publishedAt || b.createdAt;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// 公開済み記事一覧取得（ページネーション付き）
export async function getPublishedPosts(
  page: number = 1,
  limit: number = 9
): Promise<{ posts: BlogPostWithCategory[]; totalCount: number }> {
  const allPosts = await getBlogPosts();
  const categories = await getCategories();

  const publishedPosts = allPosts.filter((p) => p.status === "published");
  const totalCount = publishedPosts.length;

  const offset = (page - 1) * limit;
  const paginatedPosts = publishedPosts.slice(offset, offset + limit);

  const postsWithCategory = paginatedPosts.map((post) => ({
    ...post,
    category: categories.find((c) => c.id === post.categoryId) || {
      id: "",
      name: "未分類",
      slug: "uncategorized",
      createdAt: "",
    },
  }));

  return { posts: postsWithCategory, totalCount };
}

// カテゴリ別記事一覧取得
export async function getPublishedPostsByCategory(
  categorySlug: string,
  page: number = 1,
  limit: number = 9
): Promise<{ posts: BlogPostWithCategory[]; totalCount: number }> {
  const allPosts = await getBlogPosts();
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    return { posts: [], totalCount: 0 };
  }

  const filteredPosts = allPosts.filter(
    (p) => p.status === "published" && p.categoryId === category.id
  );
  const totalCount = filteredPosts.length;

  const offset = (page - 1) * limit;
  const paginatedPosts = filteredPosts.slice(offset, offset + limit);

  const postsWithCategory = paginatedPosts.map((post) => ({
    ...post,
    category,
  }));

  return { posts: postsWithCategory, totalCount };
}

// 記事取得（単体）
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostWithCategory | null> {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug && p.status === "published");

  if (!post) return null;

  const category = await getCategoryById(post.categoryId);

  return {
    ...post,
    category: category || {
      id: "",
      name: "未分類",
      slug: "uncategorized",
      createdAt: "",
    },
  };
}

// 記事取得（管理用・下書き含む）
export async function getBlogPostBySlugAdmin(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

// 記事保存
export async function saveBlogPost(post: BlogPost): Promise<void> {
  const key = `${POSTS_PREFIX}/${post.slug}.json`;
  await putJsonToS3(key, post);
}

// 記事削除
export async function deleteBlogPost(slug: string): Promise<void> {
  const key = `${POSTS_PREFIX}/${slug}.json`;
  await deleteFromS3(key);
}

// 関連記事取得
export async function getRelatedPosts(
  currentSlug: string,
  categoryId: string,
  limit: number = 3
): Promise<BlogPostWithCategory[]> {
  const allPosts = await getBlogPosts();
  const categories = await getCategories();

  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.status === "published" &&
        p.slug !== currentSlug &&
        p.categoryId === categoryId
    )
    .slice(0, limit);

  return relatedPosts.map((post) => ({
    ...post,
    category: categories.find((c) => c.id === post.categoryId) || {
      id: "",
      name: "未分類",
      slug: "uncategorized",
      createdAt: "",
    },
  }));
}

// 全記事のslug取得（SSG用）
export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = await getBlogPosts();
  return posts.filter((p) => p.status === "published").map((p) => p.slug);
}

// 全カテゴリのslug取得（SSG用）
export async function getAllCategorySlugs(): Promise<string[]> {
  const categories = await getCategories();
  return categories.map((c) => c.slug);
}

// 画像をS3にアップロード
export async function uploadImage(
  filename: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  await ensureBucketExists();
  const key = `${IMAGES_PREFIX}/${filename}`;

  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  await s3Client.send(command);

  return `${S3_PUBLIC_URL}/${key}`;
}

// ページ数計算
export function getTotalPages(totalCount: number, perPage: number = 9): number {
  return Math.ceil(totalCount / perPage);
}

// 日付フォーマット
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
