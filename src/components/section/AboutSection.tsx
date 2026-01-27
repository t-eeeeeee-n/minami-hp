"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
    const features = [
        "完全個室・予約制のプライベート空間",
        "ウェア・タオル・水 無料レンタル（手ぶらでOK）",
        "お子様連れ・ペアトレーニングも歓迎",
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                {/* Image */}
                <div className="order-2 md:order-1 relative px-4 md:px-0">
                    <div className="absolute top-8 -left-4 md:-left-8 w-full h-full bg-stone-100 rounded-[2.5rem] -z-10"></div>
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600159.jpg"
                            alt="Training Scene"
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            quality={100}
                            className="object-cover hover:scale-105 transition-all duration-1000"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2">
                    <span className="text-stone-400 font-bold tracking-widest text-xs mb-3 block uppercase">
                        CONCEPT
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-800 mb-10 leading-snug">
                        内側と外側から、
                        <br />
                        理想のあなたへ。
                    </h2>
                    <div className="space-y-6 text-stone-600 leading-8 font-light">
                        <p>
                            INOUT（インアウト）は、トレーニングを通じて身体の「外側」を変えるだけでなく、
                            食事指導やメンタルケアを通じて「内側」からの変化も大切にするパーソナルジムです。
                        </p>
                        <p>
                            ただ痩せるだけではなく、健康的で持続可能なライフスタイルを提案します。
                            運動初心者の方から、さらなる高みを目指す方まで、
                            一人ひとりの目的とペースに合わせたオーダーメイドのプログラムをご提供いたします。
                        </p>

                        {/* Feature list */}
                        <div className="pt-6 space-y-4">
                            {features.map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-center space-x-4 p-4 bg-stone-50 rounded-2xl"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-stone-400">
                                        <FaCheck size={14} />
                                    </div>
                                    <span className="text-sm font-medium text-stone-700">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
