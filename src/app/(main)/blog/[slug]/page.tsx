import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedPosts,
  getCategories,
} from "@/lib/s3";
import BlogDetailClient from "./client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 動的レンダリングを強制
export const dynamic = "force-dynamic";

// 動的メタデータ
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません | INOUT PERSONAL GYM",
    };
  }

  return {
    title: `${post.title} | INOUT PERSONAL GYM`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.eyecatch
        ? [
            {
              url: post.eyecatch,
            },
          ]
        : [],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 関連記事とカテゴリ取得
  const [relatedPosts, categories] = await Promise.all([
    getRelatedPosts(slug, post.categoryId),
    getCategories(),
  ]);

  return (
    <BlogDetailClient
      post={post}
      relatedPosts={relatedPosts}
      categories={categories}
    />
  );
}
