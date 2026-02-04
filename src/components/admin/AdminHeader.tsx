"use client";

import React from "react";
import { User, ChevronRight } from "lucide-react";

interface AdminHeaderProps {
  currentPath: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ currentPath }) => {
  const getPageName = () => {
    if (currentPath.includes("/blog/new")) return "新規作成";
    if (currentPath.includes("/blog/") && currentPath.includes("/edit"))
      return "記事編集";
    if (currentPath.includes("/blog")) return "記事一覧";
    if (currentPath.includes("/categories")) return "カテゴリ";
    if (currentPath.includes("/settings")) return "設定";
    return "ダッシュボード";
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 sticky top-0 z-10 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-zinc-200">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-400">管理画面</span>
        <ChevronRight size={14} className="text-zinc-300" />
        <span className="text-zinc-900 font-medium">{getPageName()}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* User */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-900">管理者</p>
            <p className="text-[11px] text-zinc-400">サイト管理</p>
          </div>
          <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
            <User size={16} className="text-zinc-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
