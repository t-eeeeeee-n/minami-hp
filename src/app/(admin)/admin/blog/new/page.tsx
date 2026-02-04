"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogPostForm from "@/components/admin/BlogPostForm";

type Category = {
  id: string;
  name: string;
  slug: string;
};

export default function NewBlogPostPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/categories");

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error("カテゴリの取得に失敗しました");
      }

      const data = await response.json();
      setCategories(data.categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
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
      ) : (
        <BlogPostForm
          categories={categories}
          pageTitle="新規記事作成"
          pageSubtitle="新しいブログ記事を作成します"
        />
      )}
    </div>
  );
}
