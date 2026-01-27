"use client";

import SectionTitle from "@/components/section/SectionTitle";
import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
    const points = [
        {
            title: "短期間の成果ではなく、長期的な健康習慣の形成を目指す",
            description:
                "IN-OUTでは、心理的に無理のないペースで進め、継続しやすさを重視しております。 短期間での追い込みはストレスも多くリバウンド率も上がるため心身の健康は望みにくいです。 その為にライフスタイルに合わせやすいプランを相場よりも安価な料金体系でご提供させて頂きます。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
        },
        {
            title: "心と体の統合的サポート",
            description:
                "IN-OUTでは、1人1人にあった運動によって綺麗に痩せながらストレス軽減や、メンタルを整えるプログラムをご提供いたします。また、モチベーションの維持のサポートの為、定期的なカウンセリングや目標設定を行い圧倒的な結果を出します。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600159.jpg",
        },
        {
            title: "ストレッチ整体を組み合わせ、美しく健康的な身体を実現",
            description:
                "美しく健康的な身体にはコンディショニングが重要になってきます。ストレッチ整体により歪んだ体を整えると同時に心身のリフレッシュが可能となります。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600161.jpg",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle label="Features" subtitle="INOUTの3つの特徴">
                INOUTの特徴
            </SectionTitle>

            <div className="space-y-16 md:space-y-24">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-10 md:gap-16 items-center`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div
                                    className={`absolute top-6 ${
                                        index % 2 === 0 ? "right-0 md:-right-6" : "left-0 md:-left-6"
                                    } w-full h-full bg-stone-100 rounded-[2rem] -z-10 hidden md:block`}
                                ></div>
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                                    <Image
                                        src={point.imageSrc}
                                        alt={point.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={90}
                                        className="object-cover hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl font-light text-stone-200">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-xs font-medium text-stone-400 tracking-widest uppercase">
                                    Point
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-stone-800 leading-relaxed">
                                {point.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed font-light">
                                {point.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
