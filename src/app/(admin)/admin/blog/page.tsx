"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PlusCircle,
  Eye,
  Edit3,
  Trash2,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  categoryId: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"ALL" | "PUBLISHED" | "DRAFTS">(
    "ALL"
  );
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

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

      setPosts(postsData.posts);
      setCategories(categoriesData.categories);
    } catch (err) {
      setError("データの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`「${title}」を削除しますか？`)) return;

    try {
      const response = await fetch(`/api/admin/posts?slug=${slug}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("削除に失敗しました");
      }

      setPosts(posts.filter((p) => p.slug !== slug));
    } catch (err) {
      alert("削除に失敗しました");
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.name || "未分類";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const publishedCount = posts.filter((p) => p.status === "published").length;
  const draftCount = posts.filter((p) => p.status === "draft").length;

  const filteredPosts = posts.filter((post) => {
    if (activeTab === "PUBLISHED") return post.status === "published";
    if (activeTab === "DRAFTS") return post.status === "draft";
    return true;
  });

  const stats = [
    {
      label: "総記事数",
      value: posts.length,
      icon: <FileText size={18} />,
      color: "text-zinc-900",
      bg: "bg-zinc-900/5",
    },
    {
      label: "公開中",
      value: publishedCount,
      icon: <CheckCircle size={18} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "下書き",
      value: draftCount,
      icon: <Clock size={18} />,
      color: "text-zinc-600",
      bg: "bg-zinc-100",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">記事一覧</h1>
          <p className="text-zinc-500 text-sm mt-1">
            全記事の管理・編集
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
        >
          <PlusCircle size={16} />
          <span>新規作成</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-3xl font-bold mt-1 text-zinc-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Content */}
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
      ) : posts.length === 0 ? (
        <div className="bg-white border border-zinc-200 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <FileText size={28} className="text-zinc-900" />
          </div>
          <h2 className="text-lg font-bold text-zinc-900 mb-2">
            記事がありません
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            最初の記事を作成してみましょう
          </p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <PlusCircle size={18} />
            <span>最初の記事を作成</span>
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
          {/* Tabs */}
          <div className="px-4 py-3 flex gap-1 border-b border-zinc-100 bg-zinc-50/50">
            {(
              [
                { key: "ALL", label: "すべて" },
                { key: "PUBLISHED", label: "公開中" },
                { key: "DRAFTS", label: "下書き" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 text-zinc-500 text-xs font-medium uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">タイトル</th>
                  <th className="px-6 py-4">ステータス</th>
                  <th className="px-6 py-4">更新日</th>
                  <th className="px-6 py-4 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-zinc-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-zinc-900 transition-colors">
                          {post.title}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {getCategoryName(post.categoryId)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
                          post.status === "published"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        {post.status === "published" ? (
                          <>
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            公開中
                          </>
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                            下書き
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500">
                      {formatDate(post.updatedAt)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {post.status === "published" && (
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-zinc-900 border border-zinc-200 hover:border-zinc-900 rounded-lg transition-all text-zinc-500 hover:text-white"
                          >
                            <Eye size={14} />
                          </Link>
                        )}
                        <Link
                          href={`/admin/blog/${post.slug}/edit`}
                          className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-zinc-900 border border-zinc-200 hover:border-zinc-900 rounded-lg transition-all text-zinc-500 hover:text-white"
                        >
                          <Edit3 size={14} />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.slug, post.title)}
                          className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-red-500 border border-zinc-200 hover:border-red-500 rounded-lg transition-all text-zinc-500 hover:text-white"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
