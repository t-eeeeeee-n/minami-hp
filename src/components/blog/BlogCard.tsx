"use client";

import React from "react";
import Link from "next/link";
import { BlogPostWithCategory, formatDate } from "@/lib/s3";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  post: BlogPostWithCategory;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden rounded-t-3xl ${
            featured ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          {post.eyecatch ? (
            <img
              src={post.eyecatch}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <span className="text-stone-400 text-4xl font-light">INOUT</span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm text-stone-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
              {post.category.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
          {/* Date */}
          <time className="text-stone-400 text-xs font-medium tracking-wider">
            {post.publishedAt ? formatDate(post.publishedAt) : ""}
          </time>

          {/* Title */}
          <h3
            className={`mt-3 text-stone-800 font-semibold leading-snug line-clamp-2 group-hover:text-stone-600 transition-colors ${
              featured ? "text-xl md:text-2xl" : "text-base"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`mt-3 text-stone-500 font-light leading-relaxed line-clamp-2 ${
              featured ? "text-sm md:text-base" : "text-sm"
            }`}
          >
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-stone-400 font-medium tracking-wide"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Indicator */}
          <div className="mt-5 flex items-center gap-2 text-stone-400 group-hover:text-stone-800 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">
              Read More
            </span>
            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
