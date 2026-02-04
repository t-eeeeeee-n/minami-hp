import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublishedPostsByCategory,
  getCategories,
  getCategoryBySlug,
  getTotalPages,
} from "@/lib/s3";
import BlogListClient from "../../client";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

// 動的レンダリングを強制
export const dynamic = "force-dynamic";

// 動的メタデータ
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "カテゴリが見つかりません | INOUT PERSONAL GYM",
    };
  }

  return {
    title: `${category.name} | ブログ | INOUT PERSONAL GYM`,
    description: `パーソナルジムINOUTの${category.name}に関するブログ記事一覧です。`,
    openGraph: {
      title: `${category.name} | ブログ | INOUT PERSONAL GYM`,
      description: `パーソナルジムINOUTの${category.name}に関するブログ記事一覧です。`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;

  // カテゴリ情報取得
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // データ取得
  const [postsResponse, categories] = await Promise.all([
    getPublishedPostsByCategory(slug, currentPage),
    getCategories(),
  ]);

  const totalPages = getTotalPages(postsResponse.totalCount);

  return (
    <BlogListClient
      posts={postsResponse.posts}
      categories={categories}
      currentPage={currentPage}
      totalPages={totalPages}
      totalCount={postsResponse.totalCount}
      currentCategory={category}
    />
  );
}
