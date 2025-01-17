"use client"

import SectionTitle from "@/components/section/SectionTitle";
import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
    const points = [
        {
            title: "プロフェッショナルな指導を、低価格で。",
            description:
                "かたやすでは、トレーニング分野の豊富な専門知識をお持ちの経験豊富な指導者により指導を受けられます。業界平均より大幅にお得な価格でご提供し、満足いただけるサービスをお約束します。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
        },
        {
            title: "今までにない気軽に痩せる体験。",
            description:
                "かたやすでは、日常生活やライフスタイルに合わせたプログラムで、無理なくダイエットをお手伝いします。科学的アプローチで健康をサポートします。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600159.jpg",
        },
        {
            title: "科学的なアプローチで、健康な身体を取り戻す。",
            description:
                "医学的知識を活かした科学的根拠に基づく体調管理を行います。健康をサポートし、理想の体作りをお手伝いします。",
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