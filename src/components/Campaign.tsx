"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { event } from "@/lib/gtag";
import { FaChevronRight, FaTimes } from "react-icons/fa";

const Campaign = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400 && !isDismissed) {
                setIsVisible(true);
            } else if (window.scrollY <= 400) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isDismissed]);

    const handleClick = () => {
        event({
            action: "click",
            category: "CampaignBanner",
            label: "campaign-popup",
        });
    };

    const handleDismiss = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDismissed(true);
        setIsVisible(false);
    };

    if (isDismissed) return null;

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 pointer-events-none"
            }`}
        >
            <div className="relative">
                {/* Dismiss Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-stone-600 hover:bg-stone-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
                    aria-label="閉じる"
                >
                    <FaTimes size={10} />
                </button>

                {/* Popup Card */}
                <div className="bg-stone-800 rounded-[2rem] p-6 shadow-2xl min-w-[280px]">
                    {/* Label */}
                    <p className="text-stone-400 text-xs tracking-widest mb-4">
                        ウェブ限定キャンペーン
                    </p>

                    {/* Main Offer */}
                    <div className="mb-2">
                        <span className="text-white text-xl font-semibold">体験通常価格</span>
                        <span className="text-stone-400 line-through text-sm mx-2">¥8,800</span>
                        <span className="text-white text-lg mx-1">→</span>
                        <span className="text-white text-2xl font-bold">¥0</span>
                    </div>

                    {/* Sub Offer */}
                    <p className="text-stone-300 text-sm mb-6">
                        今なら<span className="font-semibold text-white">0円で実施中</span>
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/reserve"
                        onClick={handleClick}
                        className="flex items-center justify-center w-full py-3 bg-stone-700 hover:bg-stone-600 text-white text-sm font-medium rounded-xl transition-colors group"
                    >
                        <span>今すぐ予約する</span>
                        <FaChevronRight
                            size={12}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
