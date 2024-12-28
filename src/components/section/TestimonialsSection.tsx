"use client"

import SectionTitle from "@/components/section/SectionTitle";
import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
    const testimonials = [
        {
            voiceNumber: "Voice 01",
            title: "健康的に痩せるための第一歩",
            name: "30代女性 主婦",
            feedback:
                "コロナの時期で外に出なくなり、体重がかなり増えてしまったので通い始めました。\nフィットネスジムはコロナが心配なので避けました。\n価格が業界最安値ということもありフィットネスジムに通うより安く、何をやればいいかわからない私にとってパーソナルジムはとてもありがたいこともあり継続してトレーニングをしています。\n体重は元に戻り体脂肪率はー5%になりました。\n今は痩せるというよりボディメイクでお尻を上げて脚を長く見えるようなトレーニングを中心にやってます。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157737_m.avif",
        },
        {
            voiceNumber: "Voice 02",
            title: "トレーニングが楽しくなりました",
            name: "40代男性 自営業",
            feedback:
                "通い始めてから1ヶ月程度経った者です。\n初回時だけでなく、毎度毎度丁寧にヒアリングしてくれる為、方向性の相違がなく自分の目的に合った指導を的確にして頂けるイメージがあります。\n教え方が丁寧で、今行っているトレーニングの目的や効果を明確にしてくれる為、ジム初心者の方には特にオススメな店舗なのではないかと思います(私もジム初心者)。\n他ジムでは、ただ気合いで追い込むようなトレーナーさんも居るとよく聞きますが、ここでは体調やレベルに合わせて無理なく追い込んで頂けるので続けられそうです。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157739_m.avif",
        },
        {
            voiceNumber: "Voice 03",
            title: "初心者でも安心して通えました",
            name: "20代女性 接客業",
            feedback:
                "初めてパーソナルジムに通いましたが、トレーニング・食事等丁寧に指導していただいています。会話も楽しくて、続けられそうです！\nとても丁寧に体の使い方について教えてくれて、筋トレの効果が毎回実感できます。\nトレーナーさんも優しく親近感があり、なんでも聞きやすいです。\n銀座築地で駅近という好立地でありながら、良心的な料金で継続もしやすく助かります！",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24157738_m.avif",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <SectionTitle label="Testimonials">お客様の声</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow rounded-lg overflow-hidden p-6"
                    >
                        {/* Voice Number */}
                        <div className="text-as-primary font-bold text-base mb-2">
                            Voice <span className="text-xl">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        {/* Title */}
                        <h3
                            className="text-base font-bold text-primary mb-4 leading-relaxed underline underline-offset-4 decoration-[var(--primary)] decoration-2"
                        >
                            {testimonial.title}
                        </h3>
                        {/* Name */}
                        <p className="text-sm text-secondary mb-4">{testimonial.name}</p>
                        {/* Image */}
                        <div className="mb-4">
                            <Image
                                height={500}
                                width={500}
                                src={testimonial.imageSrc}
                                alt={testimonial.name}
                                className="object-cover w-full h-64 md:h-40  rounded-md"
                            />
                        </div>
                        {/* Feedback */}
                        <p className="text-xs leading-relaxed whitespace-pre-line">
                            {testimonial.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
