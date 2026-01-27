"use client";

import React from "react";
import Image from "next/image";

const ApplyFlowSection = () => {
    const steps = [
        {
            id: 1,
            title: "体験お申し込み",
            description:
                "LINEまたはお問い合わせフォームより、ご希望の日時をお知らせください。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24497038_m.avif",
        },
        {
            id: 2,
            title: "ご来店・カウンセリング",
            description:
                "現在の身体のお悩みや目標をヒアリング。ウェア等は全てご用意しています。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/22830622_m.jpg",
        },
        {
            id: 3,
            title: "体験トレーニング",
            description:
                "実際のセッションを体験。無理のない範囲で、プロの指導を体感してください。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078484_m.jpg",
        },
        {
            id: 4,
            title: "プランのご提案",
            description:
                "体験後、お客様に最適なプランをご提案します。強引な勧誘は一切ありません。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                    FLOW
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                    無料体験の流れ
                </h2>
            </div>

            {/* Steps */}
            <div className="relative">
                {/* Connector Line */}
                <div className="absolute top-8 left-8 w-0.5 h-[85%] bg-stone-200 hidden md:block"></div>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col md:flex-row items-start relative bg-white p-8 md:p-6 rounded-3xl shadow-sm border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-300"
                        >
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-xl font-medium text-stone-600 mb-6 md:mb-0 md:mr-10 md:ml-2 relative z-10">
                                {String(step.id).padStart(2, "0")}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>

                            {/* Thumbnail */}
                            <div className="hidden lg:block w-20 h-20 rounded-2xl overflow-hidden ml-6 flex-shrink-0">
                                <Image
                                    src={step.imageSrc}
                                    alt={step.title}
                                    width={80}
                                    height={80}
                                    sizes="80px"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApplyFlowSection;
