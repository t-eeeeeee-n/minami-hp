"use client";

import React from "react";
import { BlogPostWithCategory, Category } from "@/lib/s3";
import BlogCard from "@/components/blog/BlogCard";
import CategoryList from "@/components/blog/CategoryList";
import Pagination from "@/components/blog/Pagination";
import FadeIn from "@/components/FadeIn";
import { FileText, PenLine } from "lucide-react";

interface BlogListClientProps {
  posts: BlogPostWithCategory[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  currentCategory?: Category;
}

const BlogListClient: React.FC<BlogListClientProps> = ({
  posts,
  categories,
  currentPage,
  totalPages,
  totalCount,
  currentCategory,
}) => {
  const basePath = currentCategory
    ? `/blog/category/${currentCategory.slug}`
    : "/blog";

  return (
    <div className="font-sans text-stone-700 bg-stone-50 antialiased">
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 mb-8 md:mb-12">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center">
                <span className="text-stone-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                  BLOG
                </span>
                <h1 className="text-3xl md:text-5xl font-semibold text-stone-800 tracking-tight">
                  {currentCategory ? currentCategory.name : "ブログ"}
                </h1>
                <p className="mt-6 text-stone-500 font-light max-w-2xl mx-auto leading-relaxed">
                  トレーニングのコツ、栄養管理、ダイエット情報など、
                  <br className="hidden sm:block" />
                  身体づくりに役立つ情報を発信しています。
                </p>

                {/* Article Count */}
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="w-2 h-2 bg-stone-800 rounded-full" />
                  <span className="text-sm text-stone-600 font-medium">
                    {totalCount} 件の記事
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <section className="px-6 lg:px-12 mb-6 md:mb-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex justify-center">
                <CategoryList
                  categories={categories}
                  currentSlug={currentCategory?.slug}
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {posts.length > 0 ? (
              <>
                <FadeIn>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post, index) => (
                      <BlogCard
                        key={post.id}
                        post={post}
                        featured={index === 0 && currentPage === 1 && !currentCategory}
                      />
                    ))}
                  </div>
                </FadeIn>

                {/* Pagination */}
                <FadeIn>
                  <div className="mt-16 md:mt-24">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      basePath={basePath}
                    />
                  </div>
                </FadeIn>
              </>
            ) : (
              <FadeIn>
                <div className="flex flex-col items-center justify-center py-12 md:py-16">
                  {/* Decorative Icon Container */}
                  <div className="relative mb-10">
                    {/* Background decorative circles */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-stone-100 to-stone-50 rounded-full opacity-60" />
                    <div className="absolute -inset-8 border border-stone-200/50 rounded-full" />
                    <div className="absolute -inset-12 border border-stone-100/30 rounded-full" />

                    {/* Main icon container */}
                    <div className="relative w-24 h-24 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center">
                      <FileText className="w-10 h-10 text-stone-300" strokeWidth={1.5} />
                      {/* Small accent icon */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center shadow-md">
                        <PenLine className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center max-w-md">
                    <h2 className="text-2xl font-semibold text-stone-800 tracking-tight mb-4">
                      記事がありません
                    </h2>
                    <p className="text-stone-500 font-light leading-relaxed mb-8">
                      {currentCategory
                        ? `「${currentCategory.name}」カテゴリの記事はまだ公開されていません。`
                        : "現在、公開されている記事はありません。"}
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent to-stone-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                      <div className="w-12 h-px bg-gradient-to-l from-transparent to-stone-300" />
                    </div>

                    <p className="mt-6 text-xs text-stone-400 tracking-wide uppercase">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogListClient;
