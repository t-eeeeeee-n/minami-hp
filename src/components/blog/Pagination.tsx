"use client";

import React from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  if (totalPages <= 1) return null;

  // ページ番号の配列を生成
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // 7ページ以下なら全部表示
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 常に最初のページ
      pages.push(1);

      if (currentPage <= 3) {
        // 最初の方にいる場合
        pages.push(2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // 最後の方にいる場合
        pages.push("...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // 中間にいる場合
        pages.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}?page=${page}`;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="ページネーション">
      {/* 前へ */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-stone-600 hover:bg-stone-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
          aria-label="前のページ"
        >
          <FaChevronLeft className="w-3 h-3" />
        </Link>
      ) : (
        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-stone-100 text-stone-300 cursor-not-allowed">
          <FaChevronLeft className="w-3 h-3" />
        </span>
      )}

      {/* ページ番号 */}
      <div className="flex items-center gap-1.5 mx-2">
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="w-11 h-11 flex items-center justify-center text-stone-400 text-sm"
            >
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={`flex items-center justify-center w-11 h-11 rounded-full text-sm font-medium transition-all duration-300 ${
                currentPage === page
                  ? "bg-stone-800 text-white shadow-lg"
                  : "bg-white text-stone-600 hover:bg-stone-100 shadow-sm hover:shadow"
              }`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* 次へ */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-stone-600 hover:bg-stone-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
          aria-label="次のページ"
        >
          <FaChevronRight className="w-3 h-3" />
        </Link>
      ) : (
        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-stone-100 text-stone-300 cursor-not-allowed">
          <FaChevronRight className="w-3 h-3" />
        </span>
      )}
    </nav>
  );
};

export default Pagination;
