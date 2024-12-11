"use client"

import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/section/SectionTitle";

const BeforeAfterSection = () => {

    const data = [
        {
            name: "Y様",
            age: 26,
            height: "158cm",
            beforeImg: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__16252982.avif",
            afterImg: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__16252984.avif",
            results: [
                { label: "体重", value: "- 6.3", unit: "kg" },
                { label: "ウエスト", value: "- 10", unit: "cm" },
                { label: "体脂肪", value: "- 4.2", unit: "%" },
            ],
        },
        {
            name: "R様",
            age: 32,
            height: "162.5cm",
            beforeImg: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__16252985.avif",
            afterImg: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__16252986.avif",
            results: [
                { label: "体重", value: "- 4.5", unit: "kg" },
                { label: "ウエスト", value: "- 8", unit: "cm" },
                { label: "体脂肪", value: "- 3.2", unit: "%" },
            ],
        },
    ];

    return (
        <div>
            <div className="text-center max-w-5xl mx-auto">
                <SectionTitle label="Before・After">ビフォー・アフター</SectionTitle>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="text-center rounded-md"
                            >
                                <div className="flex items-center justify-center space-x-4 mb-6">
                                    <div className="relative w-1/2 rounded-md overflow-hidden">
                                        <Image
                                            src={item.beforeImg}
                                            alt="Before"
                                            priority
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                        <span
                                            className="absolute top-2 left-2 bg-white text-as-primary text-xs px-2 py-1 rounded-3xl shadow-md">
                                            Before
                                        </span>
                                    </div>
                                    <div
                                        className="material-symbols-outlined text-3xl font-bold text-primary animate-slide-horizontal">
                                        keyboard_double_arrow_right
                                    </div>
                                    <div className="relative w-1/2 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.afterImg}
                                            alt="After"
                                            priority
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                        <span
                                            className="absolute top-2 left-2 bg-white text-as-primary text-xs px-2 py-1 rounded-3xl shadow-md">
                                            After
                                        </span>
                                    </div>
                                </div>

                                <p className="text-base font-bold text-secondary mb-4">
                                    {item.name} {item.age}歳 {item.height}
                                </p>

                                <div className="flex flex-col items-center space-y-2">
                                    {item.results.map((result, idx) => (
                                        <div
                                            key={idx}
                                            className="flex gap-x-7 justify-center items-center w-48 bg-primary px-4 py-2 rounded-3xl"
                                        >
                                            <span className="text-on-primary text-sm">{result.label}</span>
                                            <span className="font-bold text-on-primary text-2xl">
                                                {result.value}
                                                <span className="text-on-primary text-sm ml-1">{result.unit}</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeAfterSection;