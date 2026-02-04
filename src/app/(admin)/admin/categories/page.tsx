"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Edit3, Trash2, Check, X, Tags, AlertCircle } from "lucide-react";

type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
};

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const [showNewForm, setShowNewForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [formError, setFormError] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editSlug, setEditSlug] = useState("");

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
      setError("カテゴリの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleCreate = async () => {
    setFormError("");

    if (!newName.trim() || !newSlug.trim()) {
      setFormError("名前とスラッグを入力してください");
      return;
    }

    try {
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.trim(), slug: newSlug.trim() }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "作成に失敗しました");
      }

      const data = await response.json();
      setCategories([...categories, data.category]);
      setShowNewForm(false);
      setNewName("");
      setNewSlug("");
    } catch (err: any) {
      setFormError(err.message || "作成に失敗しました");
    }
  };

  const startEditing = (category: Category) => {
    setEditingId(category.id);
    setEditName(category.name);
    setEditSlug(category.slug);
    setFormError("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
    setEditSlug("");
    setFormError("");
  };

  const handleUpdate = async () => {
    setFormError("");

    if (!editName.trim() || !editSlug.trim()) {
      setFormError("名前とスラッグを入力してください");
      return;
    }

    try {
      const response = await fetch("/api/admin/categories", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          name: editName.trim(),
          slug: editSlug.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "更新に失敗しました");
      }

      const data = await response.json();
      setCategories(
        categories.map((c) => (c.id === editingId ? data.category : c))
      );
      cancelEditing();
    } catch (err: any) {
      setFormError(err.message || "更新に失敗しました");
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`「${name}」を削除しますか？`)) return;

    try {
      const response = await fetch(`/api/admin/categories?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("削除に失敗しました");
      }

      setCategories(categories.filter((c) => c.id !== id));
    } catch (err) {
      alert("削除に失敗しました");
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            カテゴリ管理
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            ブログ記事のカテゴリを管理
          </p>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
        >
          <PlusCircle size={16} />
          <span>新規作成</span>
        </button>
      </div>

      {/* Stats Card */}
      <div className="max-w-xs">
        <div className="bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-lg bg-zinc-900/5">
              <Tags size={18} className="text-zinc-900" />
            </div>
          </div>
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
            カテゴリ数
          </p>
          <p className="text-3xl font-bold mt-1 text-zinc-900">
            {categories.length}
          </p>
        </div>
      </div>

      {/* New Category Form */}
      {showNewForm && (
        <div className="bg-white border border-zinc-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold mb-4 text-zinc-900">
            新規カテゴリ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-500">
                カテゴリ名
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                  if (!newSlug) {
                    setNewSlug(generateSlug(e.target.value));
                  }
                }}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                placeholder="例: トレーニング"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-500">
                スラッグ
              </label>
              <input
                type="text"
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-zinc-900 transition-colors"
                placeholder="例: training"
              />
            </div>
          </div>
          {formError && (
            <p className="text-red-600 text-sm mb-4">{formError}</p>
          )}
          <div className="flex gap-3">
            <button
              onClick={handleCreate}
              className="px-5 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              作成
            </button>
            <button
              onClick={() => {
                setShowNewForm(false);
                setNewName("");
                setNewSlug("");
                setFormError("");
              }}
              className="px-5 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-semibold transition-colors"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}

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
      ) : categories.length === 0 ? (
        <div className="bg-white border border-zinc-200 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Tags size={28} className="text-zinc-900" />
          </div>
          <h2 className="text-lg font-bold text-zinc-900 mb-2">
            カテゴリがありません
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            最初のカテゴリを作成してみましょう
          </p>
          <button
            onClick={() => setShowNewForm(true)}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <PlusCircle size={18} />
            <span>最初のカテゴリを作成</span>
          </button>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 text-zinc-500 text-xs font-medium uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">カテゴリ名</th>
                  <th className="px-6 py-4">スラッグ</th>
                  <th className="px-6 py-4 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="hover:bg-zinc-50/50 transition-colors group"
                  >
                    {editingId === category.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-zinc-900"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={editSlug}
                            onChange={(e) => setEditSlug(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-zinc-900"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={handleUpdate}
                              className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-emerald-500 border border-zinc-200 hover:border-emerald-500 hover:text-white rounded-lg transition-all text-zinc-500"
                              title="保存"
                            >
                              <Check size={14} />
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-zinc-200 border border-zinc-200 rounded-lg transition-all text-zinc-500"
                              title="キャンセル"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 font-medium text-zinc-900 group-hover:text-zinc-900 transition-colors">
                          {category.name}
                        </td>
                        <td className="px-6 py-4 text-zinc-500 font-mono text-sm">
                          {category.slug}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => startEditing(category)}
                              className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-zinc-900 border border-zinc-200 hover:border-zinc-900 hover:text-white rounded-lg transition-all text-zinc-500"
                              title="編集"
                            >
                              <Edit3 size={14} />
                            </button>
                            <button
                              onClick={() =>
                                handleDelete(category.id, category.name)
                              }
                              className="w-8 h-8 flex items-center justify-center bg-zinc-50 hover:bg-red-500 border border-zinc-200 hover:border-red-500 hover:text-white rounded-lg transition-all text-zinc-500"
                              title="削除"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {formError && editingId && (
            <p className="text-red-600 text-sm px-6 py-3 border-t border-zinc-100">{formError}</p>
          )}
        </div>
      )}
    </div>
  );
}
