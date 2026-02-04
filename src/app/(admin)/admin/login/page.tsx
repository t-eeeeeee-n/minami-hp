"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/admin/blog");
      } else {
        const data = await response.json();
        setError(data.error || "ログインに失敗しました");
      }
    } catch (err) {
      setError("ログインに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="w-full max-w-sm relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl border border-zinc-200 shadow-sm mb-6">
            <Image
              src="/icon-192x192.png"
              alt="INOUT GYMS"
              width={48}
              height={48}
            />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 mb-1">
            INOUT GYMS
          </h1>
          <p className="text-zinc-400 text-xs font-medium tracking-widest uppercase">
            管理画面
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2"
              >
                パスワード
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                    focused ? "text-zinc-900" : "text-zinc-300"
                  }`}
                  size={16}
                />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="w-full pl-11 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all duration-200 text-sm"
                  placeholder="パスワードを入力"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 py-3.5 px-6 rounded-xl font-semibold text-white text-sm tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>ログイン中...</span>
                </>
              ) : (
                <>
                  <span>ログイン</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-400 text-[10px] font-medium tracking-widest uppercase mt-8">
          &copy; {new Date().getFullYear()} INOUT GYMS
        </p>
      </div>
    </div>
  );
}
