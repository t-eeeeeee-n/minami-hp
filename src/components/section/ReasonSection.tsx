"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaClock, FaStar, FaHeart } from "react-icons/fa";

const reasons = [
    {
        id: 1,
        title: "オーダートレーニング\n×ベストフード",
        description: "一人ひとりに合わせた運動プログラムと食事指導で、最適なアプローチをご提案します。",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990807.avif",
        icon: <FaHeart size={24} />,
    },
    {
        id: 2,
        title: "整体によるケア",
        description: "トレーニングだけでなく、整体で身体のバランスを整え、効果を最大化します。",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990809.avif",
        icon: <FaStar size={24} />,
    },
    {
        id: 3,
        title: "美容・医療のご紹介",
        description: "提携する美容・医療サービスをご紹介。トータルビューティをサポートします。",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600168.jpg",
        icon: <FaUsers size={24} />,
    },
    {
        id: 4,
        title: "コーチング",
        description: "モチベーション維持のためのメンタルサポートで、継続を強力にバックアップ。",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990811.avif",
        icon: <FaClock size={24} />,
    },
];

const ReasonSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 md:mb-20">
                <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                    REASON
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                    INOUTが選ばれる理由
                </h2>
                <p className="text-stone-400 mt-4 text-sm font-light">
                    あなたに寄り添う4つの特徴
                </p>
            </div>

            {/* Reason Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {reasons.map((reason) => (
                    <div
                        key={reason.id}
                        className="group bg-white p-8 rounded-[2rem] shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                    >
                        <div className="flex items-start gap-6">
                            {/* Image */}
                            <div className="relative flex-shrink-0">
                                <span className="absolute -top-2 -left-2 text-4xl font-light text-stone-100 z-0">
                                    {String(reason.id).padStart(2, "0")}
                                </span>
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg z-10">
                                    <Image
                                        src={reason.imgSrc}
                                        alt={reason.title}
                                        priority
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                                <h3 className="text-base md:text-lg font-semibold text-stone-800 mb-2 whitespace-pre-line leading-snug">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed font-light">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
                <Link
                    href="/method"
                    className="inline-flex items-center justify-center px-10 py-4 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                    詳しくはこちら
                </Link>
            </div>
        </div>
    );
};

export default ReasonSection;
