"use client";

import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { AlertCircle } from "lucide-react";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  eyecatch?: string;
  categoryId: string;
  tags: string[];
  status: "draft" | "published";
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function EditBlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [slug]);

  const fetchData = async () => {
    try {
      const [postsRes, categoriesRes] = await Promise.all([
        fetch("/api/admin/posts"),
        fetch("/api/admin/categories"),
      ]);

      if (postsRes.status === 401 || categoriesRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!postsRes.ok || !categoriesRes.ok) {
        throw new Error("データの取得に失敗しました");
      }

      const postsData = await postsRes.json();
      const categoriesData = await categoriesRes.json();

      const foundPost = postsData.posts.find(
        (p: BlogPost) => p.slug === slug
      );

      if (!foundPost) {
        setError("記事が見つかりません");
      } else {
        setPost(foundPost);
      }

      setCategories(categoriesData.categories);
    } catch (err) {
      setError("データの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {loading ? (
        <div className="bg-white border border-zinc-200 rounded-xl p-12">
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-zinc-500">読み込み中...</p>
          </div>
        </div>
      ) : error ? (
        <div className="bg-white border border-red-200 rounded-xl p-12 text-center">
          <AlertCircle size={32} className="text-red-500 mx-auto mb-3" />
          <p className="text-red-600">{error}</p>
        </div>
      ) : post ? (
        <BlogPostForm
          categories={categories}
          initialData={{
            title: post.title,
            slug: post.slug,
            content: post.content,
            excerpt: post.excerpt,
            eyecatch: post.eyecatch,
            categoryId: post.categoryId,
            tags: post.tags || [],
            status: post.status,
          }}
          isEditing
          originalSlug={slug}
          pageTitle="記事を編集"
          pageSubtitle={post.title}
        />
      ) : null}
    </div>
  );
}
