"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaExternalLinkAlt, FaTimes, FaSpinner } from "react-icons/fa";

export interface PageInfo {
  url: string;
  title: string;
  description: string;
  image: string | null;
  siteName: string | null;
  favicon: string | null;
}

interface LinkCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (pageInfo: PageInfo) => void;
  initialUrl?: string;
}

const LinkCardModal: React.FC<LinkCardModalProps> = ({
  isOpen,
  onClose,
  onInsert,
  initialUrl = "",
}) => {
  const [url, setUrl] = useState(initialUrl);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setUrl(initialUrl);
      setPageInfo(null);
      setError(null);
    }
  }, [isOpen, initialUrl]);

  const fetchPageInfo = useCallback(async (targetUrl: string) => {
    if (!targetUrl.trim()) {
      setPageInfo(null);
      return;
    }

    // Add protocol if missing
    let normalizedUrl = targetUrl.trim();
    if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/ogp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: normalizedUrl }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "ページ情報の取得に失敗しました");
      }

      const data: PageInfo = await response.json();
      setPageInfo(data);
      setUrl(normalizedUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
      setPageInfo(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced fetch on URL change
  useEffect(() => {
    if (!isOpen || !url.trim()) return;

    const timer = setTimeout(() => {
      // Only fetch if URL looks complete
      if (url.includes(".") && url.length > 5) {
        fetchPageInfo(url);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [url, isOpen, fetchPageInfo]);

  const handleInsert = () => {
    if (!pageInfo) return;
    onInsert(pageInfo);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && pageInfo && !loading) {
      handleInsert();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800">リンクカードを挿入</h3>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* URL Input */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-shadow"
              autoFocus
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-8 text-stone-400">
              <FaSpinner className="w-6 h-6 animate-spin" />
              <span className="ml-3">ページ情報を取得中...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Preview */}
          {pageInfo && !loading && (
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                プレビュー
              </label>
              <div className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <a
                  href={pageInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row no-underline"
                  onClick={(e) => e.preventDefault()}
                >
                  {pageInfo.image && (
                    <div className="sm:w-40 sm:flex-shrink-0">
                      <img
                        src={pageInfo.image}
                        alt={pageInfo.title}
                        className="w-full h-32 sm:h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1 p-4">
                    <div className="font-medium text-stone-800 line-clamp-2 mb-1">
                      {pageInfo.title}
                    </div>
                    {pageInfo.description && (
                      <div className="text-sm text-stone-500 line-clamp-2 mb-2">
                        {pageInfo.description}
                      </div>
                    )}
                    <div className="flex items-center text-xs text-stone-400">
                      {pageInfo.favicon && (
                        <img
                          src={pageInfo.favicon}
                          alt=""
                          className="w-4 h-4 mr-2"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      )}
                      <span>{new URL(pageInfo.url).hostname}</span>
                      <FaExternalLinkAlt className="w-3 h-3 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-stone-200 bg-stone-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-stone-600 hover:text-stone-800 hover:bg-stone-200 rounded-lg transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={handleInsert}
            disabled={!pageInfo || loading}
            className="px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            挿入
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCardModal;
