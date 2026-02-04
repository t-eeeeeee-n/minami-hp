"use client";

import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
  slug: string;
  initialCount?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // ローカルストレージからいいね済みかチェック
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setLiked(likedPosts.includes(slug));
  }, [slug]);

  // 初期カウント取得
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`/api/likes?slug=${slug}`);
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch like count:", error);
      }
    };
    fetchCount();
  }, [slug]);

  const handleLike = async () => {
    setIsAnimating(true);

    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");

    if (liked) {
      // いいね解除
      setLiked(false);
      setCount((prev) => Math.max(0, prev - 1));

      // ローカルストレージから削除
      localStorage.setItem(
        "likedPosts",
        JSON.stringify(likedPosts.filter((s: string) => s !== slug))
      );

      try {
        const res = await fetch("/api/likes", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to remove like:", error);
      }
    } else {
      // いいね追加
      setLiked(true);
      setCount((prev) => prev + 1);

      // ローカルストレージに保存
      localStorage.setItem("likedPosts", JSON.stringify([...likedPosts, slug]));

      try {
        const res = await fetch("/api/likes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to add like:", error);
      }
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all shadow-sm ${
        liked
          ? "bg-red-50 text-red-500 hover:bg-red-100 hover:shadow-lg"
          : "bg-white text-stone-500 hover:bg-red-50 hover:text-red-500 hover:shadow-lg"
      }`}
      aria-label={liked ? "いいねを取り消す" : "いいねする"}
    >
      <span
        className={`transition-transform ${isAnimating ? "scale-125" : "scale-100"}`}
      >
        {liked ? (
          <FaHeart className="w-4 h-4" />
        ) : (
          <FaRegHeart className="w-4 h-4" />
        )}
      </span>
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
};

export default LikeButton;
