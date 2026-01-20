"use client";

import React from "react";
import Image from "next/image";

const BeforeAfterSection = () => {
    const results = [
        {
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39559220.jpg",
            period: "3ヶ月",
            age: "30代女性",
        },
        {
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39559218.jpg",
            period: "2ヶ月",
            age: "40代男性",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                    BEFORE & AFTER
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                    お客様の変化
                </h2>
                <p className="text-stone-400 mt-4 text-sm font-light">
                    実際にINOUTでトレーニングされた方々の成果
                </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {results.map((result, index) => (
                    <div key={index} className="group">
                        {/* Card */}
                        <div className="relative">
                            {/* Background offset */}
                            <div className="absolute top-6 -right-4 w-full h-full bg-stone-100 rounded-[2.5rem] -z-10"></div>

                            {/* Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/40 group-hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={result.imageSrc}
                                    alt={`Before After ${index + 1}`}
                                    priority
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-4 z-10">
                                <div className="text-center">
                                    <p className="text-xs text-stone-400 font-light">期間</p>
                                    <p className="text-sm font-semibold text-stone-800">{result.period}</p>
                                </div>
                                <div className="w-px h-8 bg-stone-200"></div>
                                <div className="text-center">
                                    <p className="text-xs text-stone-400 font-light">お客様</p>
                                    <p className="text-sm font-semibold text-stone-800">{result.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Note */}
            <p className="text-center text-stone-400 text-xs font-light mt-16">
                ※効果には個人差があります。結果を保証するものではありません。
            </p>
        </div>
    );
};

export default BeforeAfterSection;
