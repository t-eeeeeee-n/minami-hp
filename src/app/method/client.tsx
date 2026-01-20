"use client";

import React, { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const Client = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const methods = [
        {
            number: "01",
            mainTitle: "自分に合った方法で効率よく痩せたい！",
            title: "オーダートレーニング × ベストフード",
            description:
                "身体作りにおいては、切っても切り離せないトレーニングと食事。まず、辛いと思われがちなトレーニングですが、INOUTではトレーナーのマンツーマン指導による週1〜2回、1日60分で無理なく無駄なく必要最低限の努力で成果を出します。そして、ライフスタイルや体質に合わせ痩せた先を見据えた食事指導。とにかく続けやすさを重視し無理な食事制限はしません。痩せた後でもご自身で意識できるように適切な知識を身につけ、個々に合ったベストな食事プランを提案致します！",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990807.avif",
            accent: "bg-amber-50",
            accentText: "text-amber-700",
        },
        {
            number: "02",
            mainTitle: "姿勢を整え、トレーニングの効果を最大化したい！",
            title: "整体によるケア",
            description:
                "ただ闘雲にトレーニングを開始してしまうのは危険です！悪い姿勢や筋肉の張りがあるままトレーニングをしてしまえば、美健康な身体になりにくく、怪我にも繋がってしまいます。ほぐしと調整をしっかり繰り返しながら理想の身体へと繋げて行きます。",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990809.avif",
            accent: "bg-emerald-50",
            accentText: "text-emerald-700",
        },
        {
            number: "03",
            mainTitle: "美と健康を追求するあなたに最適なご提案！",
            title: "美容・医療のご紹介",
            description:
                "IN-OUTではより綺麗で健康を目指すため、様々な美容・医療のクリニックと提携させて頂いております。ご要望にあった物を割引にてご紹介可能となります。(例:ホワイトニング、脱毛、エステ、医療クリニックなど)",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600168.jpg",
            accent: "bg-rose-50",
            accentText: "text-rose-700",
        },
        {
            number: "04",
            mainTitle: "目標を確実に達成したい方へ、全力でサポートします！",
            title: "コーチング",
            description:
                "それぞれの目的・目標を達成する為には、最も重要なことは具体的に目標をイメージし、継続していくことです。どれだけお客様の想いに寄り添い、それにどれだけ全力でサポートができるか。様々なノウハウや技術はもちろん大切ではありますが、INOUTではそれ以上にメンタル面からのアプローチを大切にしております。お客様の結果に責任を持ち、成功まで最短最速で導くことが可能です。",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990811.avif",
            accent: "bg-sky-50",
            accentText: "text-sky-700",
        },
    ];

    return (
        <div className="font-sans text-stone-700 bg-stone-50 antialiased min-h-screen">
            {/* Hero Section */}
            <section className="py-24 md:py-32 bg-white px-6 lg:px-12">
                <FadeIn>
                    <div className="max-w-6xl mx-auto text-center">
                        <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            METHOD
                        </span>
                        <h1 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">
                            INOUTメソッド
                        </h1>
                        <p className="text-stone-400 text-sm font-light max-w-xl mx-auto">
                            美と健康にこだわり尽くす、4つのアプローチ
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Methods Section */}
            <section className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-12 md:space-y-16">
                        {methods.map((method, index) => (
                            <FadeIn key={index}>
                                <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                                    <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        {/* Image Section */}
                                        <div className="relative w-full md:w-2/5 h-64 md:h-auto md:min-h-[360px] overflow-hidden">
                                            <Image
                                                src={method.imageSrc}
                                                alt={method.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Number Badge */}
                                            <div className={`absolute top-6 left-6 w-14 h-14 ${method.accent} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                <span className={`text-xl font-bold ${method.accentText}`}>{method.number}</span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                            {/* Problem Badge */}
                                            <div className={`inline-flex px-4 py-2 ${method.accent} rounded-full mb-5 self-start`}>
                                                <span className={`text-xs font-medium ${method.accentText}`}>
                                                    {method.mainTitle}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl md:text-2xl font-semibold text-stone-800 mb-5">
                                                {method.title}
                                            </h2>

                                            {/* Description */}
                                            <p className={`text-sm text-stone-600 leading-relaxed font-light ${
                                                expandedIndex === index ? '' : 'line-clamp-3'
                                            }`}>
                                                {method.description}
                                            </p>

                                            {/* Read More Button */}
                                            <button
                                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                                className="mt-5 text-sm text-stone-500 hover:text-stone-700 font-medium transition-colors duration-200 self-start"
                                            >
                                                {expandedIndex === index ? '閉じる' : 'もっと見る'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-white px-6 lg:px-12">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            TRIAL
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">
                            まずは体験から始めてみませんか？
                        </h2>
                        <p className="text-stone-400 text-sm font-light mb-10 max-w-xl mx-auto">
                            INOUTのメソッドを実際に体験いただけます
                        </p>
                        <a
                            href="/reserve"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-all duration-300 shadow-lg shadow-stone-300/30 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <span>体験予約はこちら</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
};

export default Client;
