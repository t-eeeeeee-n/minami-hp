"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { BlogPostWithCategory, formatDate } from "@/lib/s3";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BlogSectionProps {
  posts: BlogPostWithCategory[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollButtons();
    scrollContainer.addEventListener("scroll", updateScrollButtons);

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 md:mb-20">
        <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
          BLOG
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
          ブログ
        </h2>
        <p className="text-stone-400 mt-4 text-sm font-light">
          トレーニングや栄養に関する情報をお届け
        </p>
      </div>

      {/* Blog Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-stone-50 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="前へ"
        >
          <FaChevronLeft className="w-4 h-4 text-stone-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-stone-50 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="次へ"
        >
          <FaChevronRight className="w-4 h-4 text-stone-600" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex-shrink-0 w-[320px] bg-white rounded-3xl overflow-hidden shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
                  {post.eyecatch ? (
                    <img
                      src={post.eyecatch}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                      <span className="text-stone-400 text-4xl font-light">
                        INOUT
                      </span>
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
                <div className="p-6">
                  {/* Date */}
                  <time className="text-stone-400 text-xs font-medium tracking-wider">
                    {post.publishedAt ? formatDate(post.publishedAt) : ""}
                  </time>

                  {/* Title */}
                  <h3 className="mt-3 text-stone-800 font-semibold leading-snug line-clamp-2 group-hover:text-stone-600 transition-colors text-base">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-stone-500 font-light leading-relaxed line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>

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
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 px-8 py-4 bg-stone-800 text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-stone-700 transition-colors duration-300"
        >
          <span>すべての記事を見る</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
