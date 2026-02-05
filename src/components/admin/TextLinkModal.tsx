"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface TextLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (url: string) => void;
  onRemove: () => void;
  initialUrl?: string;
  hasSelection: boolean;
}

const TextLinkModal: React.FC<TextLinkModalProps> = ({
  isOpen,
  onClose,
  onInsert,
  onRemove,
  initialUrl = "",
  hasSelection,
}) => {
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (isOpen) {
      setUrl(initialUrl);
    }
  }, [isOpen, initialUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      let normalizedUrl = url.trim();
      if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
        normalizedUrl = `https://${normalizedUrl}`;
      }
      onInsert(normalizedUrl);
    }
    onClose();
  };

  const handleRemove = () => {
    onRemove();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800">リンクを設定</h3>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              リンク先URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-shadow"
              autoFocus
            />
            {!hasSelection && (
              <p className="mt-2 text-sm text-amber-600">
                テキストを選択してからリンクを設定してください
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            <div>
              {initialUrl && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors text-sm"
                >
                  リンクを解除
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-stone-600 hover:text-stone-800 hover:bg-stone-200 rounded-lg transition-colors"
              >
                キャンセル
              </button>
              <button
                type="submit"
                disabled={!url.trim() || !hasSelection}
                className="px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                設定
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextLinkModal;
