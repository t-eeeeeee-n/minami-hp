"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight, FaLine } from "react-icons/fa";

const TrialFlowSection = () => {
    const steps = [
        {
            num: "01",
            title: "公式LINEで予約",
            text: "下記ボタンから友だち追加してください",
            isHighlight: true,
        },
        {
            num: "02",
            title: "メッセージ受信",
            text: "友達追加後にINOUTからメッセージが届きます",
        },
        {
            num: "03",
            title: "希望日を送信",
            text: "メッセージに希望日を入力して送信",
        },
        {
            num: "04",
            title: "予約確定",
            text: "スタッフから直接LINEにて返信いたします",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                    RESERVATION
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                    体験のお申込み
                </h2>
                <p className="text-stone-400 mt-4 text-sm font-light">
                    簡単4ステップで予約完了
                </p>
            </div>

            {/* Steps Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-stone-200/40 mb-12">
                <div className="space-y-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-5 p-5 rounded-2xl transition-all ${
                                step.isHighlight
                                    ? "bg-[#06c755]/10 border border-[#06c755]/20"
                                    : "bg-stone-50 hover:bg-stone-100"
                            }`}
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                                    step.isHighlight
                                        ? "bg-[#06c755] text-white"
                                        : "bg-stone-800 text-white"
                                }`}
                            >
                                {step.num}
                            </div>
                            <div className="flex-1">
                                <p className="text-stone-800 font-semibold text-sm mb-1">
                                    {step.title}
                                </p>
                                <p className="text-stone-500 text-xs font-light">
                                    {step.text}
                                </p>
                            </div>
                            {step.isHighlight && (
                                <FaLine size={24} className="text-[#06c755]" />
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-stone-400 text-xs text-center mt-8 font-light">
                    ※混雑時は返信が遅れる場合がございます
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://line.me/R/ti/p/@243otxyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-10 py-4 bg-[#06c755] text-white text-sm font-medium rounded-full hover:bg-[#05b54d] transition-all shadow-lg hover:shadow-green-500/20 group"
                >
                    <FaLine size={20} className="mr-2" />
                    <span>LINEで予約する</span>
                </a>
                <Link
                    href="/reserve"
                    className="flex items-center justify-center px-10 py-4 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl group"
                >
                    <span>お問い合わせフォーム</span>
                    <FaChevronRight
                        size={14}
                        className="ml-2 transform group-hover:translate-x-1 transition-transform"
                    />
                </Link>
            </div>
        </div>
    );
};

export default TrialFlowSection;
