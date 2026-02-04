"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPostWithCategory, Category, formatDate } from "@/lib/s3";
import BlogCard from "@/components/blog/BlogCard";
import LikeButton from "@/components/blog/LikeButton";
import FadeIn from "@/components/FadeIn";
import { FaChevronLeft, FaFacebook, FaLine } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface BlogDetailClientProps {
  post: BlogPostWithCategory;
  relatedPosts: BlogPostWithCategory[];
  categories: Category[];
}

const BlogDetailClient: React.FC<BlogDetailClientProps> = ({
  post,
  relatedPosts,
}) => {
  // シェアURL（初期値は本番URL、クライアントで実際のURLに更新）
  const defaultUrl = `https://inoutgyms.com/blog/${post.slug}`;
  const [shareUrl, setShareUrl] = useState(defaultUrl);
  const shareText = post.title;

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  return (
    <div className="font-sans text-stone-700 bg-stone-50 antialiased">
      <main className="pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Back Link */}
        <div className="px-6 lg:px-12 mb-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors group"
              >
                <FaChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium tracking-wide">
                  ブログ一覧に戻る
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Article Header */}
        <article>
          <header className="px-6 lg:px-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                {/* Category */}
                <Link
                  href={`/blog/category/${post.category.slug}`}
                  className="inline-block px-4 py-1.5 bg-stone-800 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-stone-700 transition-colors mb-6"
                >
                  {post.category.name}
                </Link>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-stone-800 leading-tight tracking-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                  <time className="font-light">
                    {post.publishedAt ? formatDate(post.publishedAt) : ""}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span className="w-1 h-1 bg-stone-300 rounded-full" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-stone-400 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </header>

          {/* Eye Catch */}
          {post.eyecatch && (
            <div className="px-6 lg:px-12 mb-12 md:mb-16">
              <div className="max-w-5xl mx-auto">
                <FadeIn>
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={post.eyecatch}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div
                  className="prose prose-stone prose-lg max-w-none
                    prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-stone-800
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-stone-200
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-stone-600 prose-p:leading-relaxed prose-p:font-light
                    prose-a:text-stone-800 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-stone-800 prose-strong:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-stone-300 prose-blockquote:bg-stone-100 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-stone-600
                    prose-ul:list-disc prose-ol:list-decimal
                    prose-li:text-stone-600 prose-li:font-light prose-li:my-2
                    prose-img:rounded-2xl prose-img:shadow-lg
                    prose-code:bg-stone-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-stone-900 prose-pre:rounded-2xl prose-pre:shadow-lg
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </FadeIn>

              {/* Like & Share */}
              <FadeIn>
                <div className="mt-16 pt-8 border-t border-stone-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <LikeButton slug={post.slug} />
                    <div className="flex items-center gap-3">
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-stone-500 hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg"
                        aria-label="Xでシェア"
                      >
                        <FaXTwitter className="w-4 h-4" />
                      </a>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-stone-500 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm hover:shadow-lg"
                        aria-label="Facebookでシェア"
                      >
                        <FaFacebook className="w-4 h-4" />
                      </a>
                      <a
                        href={shareLinks.line}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-stone-500 hover:bg-[#06C755] hover:text-white transition-all shadow-sm hover:shadow-lg"
                        aria-label="LINEでシェア"
                      >
                        <FaLine className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 md:mt-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className="text-stone-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                    Related Articles
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                    関連記事
                  </h2>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-24 md:mt-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="relative bg-stone-800 rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    無料体験で、変化を体感。
                  </h2>
                  <p className="text-stone-400 font-light mb-8 max-w-md mx-auto">
                    記事を読んで興味を持ったら、
                    <br />
                    まずは無料体験からスタートしませんか？
                  </p>
                  <Link
                    href="/reserve"
                    className="inline-flex items-center px-8 py-4 bg-white text-stone-800 font-medium rounded-full hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span className="text-sm tracking-wide">無料体験を予約する</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetailClient;
