"use client"

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
        <div className="max-w-4xl mx-auto">
            <SectionTitle label="features"><span className="noto-sans">INOUT</span>の特徴</SectionTitle>
            <div className="space-y-12">
                {points.map((point, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* 左側：ポイント詳細 */}
                        <div className="space-y-4">
                            <h2 className="text-as-primary font-bold">Point <span className="text-2xl">{String(index + 1).padStart(2, '0')}</span></h2>
                            <h3 className="text-xl font-bold">{point.title}</h3>
                            <p className="text-sm">{point.description}</p>
                        </div>
                        {/* 右側：画像 */}
                        <div className="w-full">
                            <Image
                                src={point.imageSrc}
                                alt={point.title}
                                width={500}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesSection;