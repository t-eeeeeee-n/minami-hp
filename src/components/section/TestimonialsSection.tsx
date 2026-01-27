"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const testimonials = [
        {
            name: "30代女性",
            occupation: "主婦",
            title: "健康的に痩せるための第一歩",
            feedback:
                "コロナの時期で外に出なくなり、体重がかなり増えてしまったので通い始めました。\nフィットネスジムはコロナが心配なので避けました。\n価格が業界最安値ということもありフィットネスジムに通うより安く、何をやればいいかわからない私にとってパーソナルジムはとてもありがたいこともあり継続してトレーニングをしています。\n体重は元に戻り体脂肪率はー5%になりました。\n今は痩せるというよりボディメイクでお尻を上げて脚を長く見えるようなトレーニングを中心にやってます。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157737_m.avif",
        },
        {
            name: "40代男性",
            occupation: "自営業",
            title: "トレーニングが楽しくなりました",
            feedback:
                "通い始めてから1ヶ月程度経った者です。\n初回時だけでなく、毎度毎度丁寧にヒアリングしてくれる為、方向性の相違がなく自分の目的に合った指導を的確にして頂けるイメージがあります。\n教え方が丁寧で、今行っているトレーニングの目的や効果を明確にしてくれる為、ジム初心者の方には特にオススメな店舗なのではないかと思います(私もジム初心者)。\n他ジムでは、ただ気合いで追い込むようなトレーナーさんも居るとよく聞きますが、ここでは体調やレベルに合わせて無理なく追い込んで頂けるので続けられそうです。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157739_m.avif",
        },
        {
            name: "20代女性",
            occupation: "接客業",
            title: "初心者でも安心して通えました",
            feedback:
                "初めてパーソナルジムに通いましたが、トレーニング・食事等丁寧に指導していただいています。会話も楽しくて、続けられそうです！\nとても丁寧に体の使い方について教えてくれて、筋トレの効果が毎回実感できます。\nトレーナーさんも優しく親近感があり、なんでも聞きやすいです。\n銀座築地で駅近という好立地でありながら、良心的な料金で継続もしやすく助かります！",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157738_m.avif",
        },
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                    VOICE
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                    お客様の声
                </h2>
                <p className="text-stone-400 mt-4 text-sm font-light">
                    実際にご利用いただいた方の声をご紹介
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                            <Image
                                src={testimonial.imageSrc}
                                alt={testimonial.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                quality={90}
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>

                            {/* Quote Icon */}
                            <div className="absolute bottom-4 left-6 w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center shadow-sm">
                                <FaQuoteLeft size={14} className="text-stone-400" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            {/* Customer Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-lg font-medium text-stone-800">
                                    {testimonial.name}
                                </span>
                                <span className="text-xs text-stone-400 font-light">
                                    {testimonial.occupation}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-stone-800 mb-4 leading-relaxed">
                                {testimonial.title}
                            </h3>

                            {/* Feedback */}
                            <p className={`text-sm text-stone-600 leading-relaxed font-light ${expandedIndex === index ? '' : 'line-clamp-4'}`}>
                                {testimonial.feedback}
                            </p>

                            {/* Read More Button */}
                            <button
                                onClick={() => toggleExpand(index)}
                                className="mt-4 text-sm text-stone-500 hover:text-stone-700 font-medium transition-colors duration-200"
                            >
                                {expandedIndex === index ? '閉じる' : 'もっと見る'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
