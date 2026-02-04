"use client";

import React from "react";
import Link from "next/link";
import { Category } from "@/lib/s3";

interface CategoryListProps {
  categories: Category[];
  currentSlug?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  currentSlug,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* ALL カテゴリ */}
      <Link
        href="/blog"
        className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
          !currentSlug
            ? "bg-stone-800 text-white shadow-lg"
            : "bg-white text-stone-600 hover:bg-stone-100 shadow-sm hover:shadow"
        }`}
      >
        ALL
      </Link>

      {/* カテゴリ一覧 */}
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.slug}`}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
            currentSlug === category.slug
              ? "bg-stone-800 text-white shadow-lg"
              : "bg-white text-stone-600 hover:bg-stone-100 shadow-sm hover:shadow"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
