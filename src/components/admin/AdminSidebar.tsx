"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  PlusCircle,
  Tags,
  Settings,
  ChevronLeft,
  ExternalLink,
  LogOut,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  {
    label: "記事一覧",
    href: "/admin/blog",
    icon: FileText,
    match: "/admin/blog",
  },
  {
    label: "新規作成",
    href: "/admin/blog/new",
    icon: PlusCircle,
    match: "/admin/blog/new",
  },
  {
    label: "カテゴリ",
    href: "/admin/categories",
    icon: Tags,
    match: "/admin/categories",
  },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onToggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isActive = (match: string) => {
    if (match === "/admin/blog/new") {
      return pathname === match;
    }
    return pathname?.startsWith(match) && !pathname?.includes("/new");
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white border-r border-zinc-200 transition-all duration-300 flex flex-col fixed left-0 top-0 h-screen z-20`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-zinc-100">
        <Link
          href="/admin/blog"
          className="flex items-center gap-3 overflow-hidden"
        >
          <div className="w-10 h-10 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-center flex-shrink-0">
            <Image
              src="/icon-192x192.png"
              alt="INOUT GYMS"
              width={28}
              height={28}
            />
          </div>
          {isOpen && (
            <span className="font-bold text-base tracking-tight text-zinc-900 whitespace-nowrap">
              INOUT GYMS
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.match);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                active
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              <Icon
                size={18}
                className={active ? "text-white" : "group-hover:text-zinc-900"}
              />
              {isOpen && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
            </Link>
          );
        })}

        <div className="my-4 mx-2 border-t border-zinc-100" />

        <Link
          href="/admin/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
            pathname === "/admin/settings"
              ? "bg-zinc-900 text-white shadow-sm"
              : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
          }`}
        >
          <Settings
            size={18}
            className={
              pathname === "/admin/settings"
                ? "text-white"
                : "group-hover:text-zinc-900"
            }
          />
          {isOpen && <span className="font-medium text-sm">設定</span>}
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-zinc-100 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all duration-200 group"
        >
          <ExternalLink size={18} className="group-hover:text-zinc-900" />
          {isOpen && <span className="font-medium text-sm">サイトを見る</span>}
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={18} />
          {isOpen && <span className="font-medium text-sm">ログアウト</span>}
        </button>
      </div>

      {/* Toggle Button - サイドバー右端中央 */}
      <button
        onClick={onToggle}
        className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white border border-zinc-200 rounded-full shadow-sm flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-all z-30"
      >
        <ChevronLeft
          className={`transition-transform duration-300 ${
            isOpen ? "" : "rotate-180"
          }`}
          size={14}
        />
      </button>
    </aside>
  );
};

export default AdminSidebar;
