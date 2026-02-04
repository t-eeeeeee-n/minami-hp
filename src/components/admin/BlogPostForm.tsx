"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";
import { Save, Send, PlusCircle, X, ChevronDown, Check } from "lucide-react";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type BlogPostData = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  eyecatch?: string;
  categoryId: string;
  tags: string[];
  status: "draft" | "published";
};

interface BlogPostFormProps {
  initialData?: BlogPostData;
  categories: Category[];
  isEditing?: boolean;
  originalSlug?: string;
  pageTitle: string;
  pageSubtitle: string;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({
  initialData,
  categories,
  isEditing = false,
  originalSlug,
  pageTitle,
  pageSubtitle,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<BlogPostData>(
    initialData || {
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      eyecatch: "",
      categoryId: categories[0]?.id || "",
      tags: [],
      status: "draft",
    }
  );

  const [tagInput, setTagInput] = useState("");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // カテゴリドロップダウンの外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    setFormData((prev) => ({ ...prev, slug }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const [uploading, setUploading] = useState(false);

  const handleEyecatchUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "アップロードに失敗しました");
      }

      const { imageUrl } = await response.json();
      setFormData((prev) => ({ ...prev, eyecatch: imageUrl }));
    } catch (error: any) {
      console.error("Eyecatch upload error:", error);
      alert(error.message || "アイキャッチ画像のアップロードに失敗しました");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (status: "draft" | "published") => {
    setError("");

    if (!formData.title.trim()) {
      setError("タイトルを入力してください");
      return;
    }
    if (!formData.slug.trim()) {
      setError("スラッグを入力してください");
      return;
    }
    if (!formData.categoryId) {
      setError("カテゴリを選択してください");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        status,
        ...(isEditing && { originalSlug }),
      };

      const response = await fetch("/api/admin/posts", {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "保存に失敗しました");
      }

      router.push("/admin/blog");
    } catch (err: any) {
      setError(err.message || "保存に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {pageTitle}
          </h1>
          <p className="text-zinc-500 text-sm mt-1">{pageSubtitle}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            disabled={loading}
            className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={16} />
            <span>下書き保存</span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("published")}
            disabled={loading}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 shadow-sm"
          >
            <Send size={16} />
            <span>{loading ? "保存中..." : "公開する"}</span>
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Slug */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-500">
                記事タイトル
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={() => !formData.slug && generateSlug()}
                placeholder="タイトルを入力..."
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-xl font-bold focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-500">
                スラッグ（URL）
              </label>
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 text-sm">/blog/</span>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="article-slug"
                  className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-2.5 font-mono text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-2">
            <label className="text-xs font-medium text-zinc-500">
              本文
            </label>
            <RichTextEditor
              content={formData.content}
              onChange={handleContentChange}
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-2">
            <label className="text-xs font-medium text-zinc-500">
              抜粋（記事一覧に表示）
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              placeholder="記事の概要（100〜150文字程度）"
              className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-900 resize-none transition-colors text-zinc-800 leading-relaxed"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Category */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              公開設定
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-500">
                  カテゴリ
                </label>
                {categories.length === 0 ? (
                  <p className="text-sm text-zinc-500">
                    カテゴリがありません。先にカテゴリを作成してください。
                  </p>
                ) : (
                  <div className="relative" ref={categoryDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                      className={`w-full bg-zinc-50 border rounded-lg px-3 py-2.5 text-sm text-left flex items-center justify-between transition-all ${
                        categoryDropdownOpen
                          ? "border-zinc-900 ring-2 ring-zinc-900/10"
                          : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <span className={formData.categoryId ? "text-zinc-900" : "text-zinc-400"}>
                        {formData.categoryId
                          ? categories.find((c) => c.id === formData.categoryId)?.name
                          : "カテゴリを選択"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-400 transition-transform ${
                          categoryDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {categoryDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-zinc-200 rounded-2xl shadow-lg overflow-hidden animate-dropdown-in">
                        <div className="p-1.5 max-h-60 overflow-y-auto">
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, categoryId: cat.id }));
                                setCategoryDropdownOpen(false);
                              }}
                              className={`w-full px-3 py-2.5 text-sm text-left flex items-center justify-between transition-colors rounded-xl ${
                                formData.categoryId === cat.id
                                  ? "bg-zinc-900 text-white"
                                  : "text-zinc-700 hover:bg-zinc-200"
                              }`}
                            >
                              <span>{cat.name}</span>
                              {formData.categoryId === cat.id && (
                                <Check size={14} />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              タグ
            </h3>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTag())
                }
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                placeholder="タグを入力"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-zinc-100 text-zinc-600 rounded-lg hover:bg-zinc-200 transition-colors text-sm font-medium"
              >
                追加
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-900/5 text-zinc-900 text-sm rounded-lg border border-zinc-900/10 font-medium"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6">
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              アイキャッチ画像
            </h3>
            {formData.eyecatch ? (
              <div className="relative group">
                <img
                  src={formData.eyecatch}
                  alt="アイキャッチ"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, eyecatch: "" }))
                  }
                  className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <X size={16} className="text-zinc-600" />
                </button>
              </div>
            ) : uploading ? (
              <div className="aspect-[4/3] bg-zinc-50 rounded-xl border border-dashed border-zinc-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-8 h-8 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-xs font-medium text-zinc-500">
                  アップロード中...
                </p>
              </div>
            ) : (
              <label className="aspect-[4/3] bg-zinc-50 rounded-xl border border-dashed border-zinc-300 flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-zinc-900 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <PlusCircle
                    className="text-zinc-300 group-hover:text-zinc-900"
                    size={20}
                  />
                </div>
                <p className="text-xs font-medium text-zinc-500">
                  画像をアップロード
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleEyecatchUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostForm;
