import { Metadata } from "next";
import {
  getPublishedPosts,
  getCategories,
  getTotalPages,
} from "@/lib/s3";
import BlogListClient from "./client";

export const metadata: Metadata = {
  title: "ブログ | INOUT PERSONAL GYM",
  description:
    "パーソナルジムINOUTのブログ。トレーニングのコツ、栄養管理、ダイエット情報など、身体づくりに役立つ情報を発信しています。",
  openGraph: {
    title: "ブログ | INOUT PERSONAL GYM",
    description:
      "パーソナルジムINOUTのブログ。トレーニングのコツ、栄養管理、ダイエット情報など、身体づくりに役立つ情報を発信しています。",
    type: "website",
  },
};

// 動的レンダリングを強制（S3からリアルタイムで取得）
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  // データ取得
  const [postsResponse, categories] = await Promise.all([
    getPublishedPosts(currentPage),
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
    />
  );
}
