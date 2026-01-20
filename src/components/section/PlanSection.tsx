"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaUsers, FaBaby } from "react-icons/fa";

const PlanSection = () => {
    const plans = [
        {
            id: 1,
            title: "月2回プラン",
            totalPrice: "17,600",
            pricePerSession: "8,800",
            description: "隔週1回40分×月2回",
            note: "※月額制",
            isRecommended: false,
            features: ["隔週1回 40分", "ペース維持に最適", "月額制"],
        },
        {
            id: 2,
            title: "月4回プラン",
            totalPrice: "30,800",
            pricePerSession: "7,700",
            description: "週1回40分×月4回",
            note: "※月額制",
            isRecommended: true,
            features: [
                "週1回 40分 × 4回",
                "一番人気のスタンダード",
                "確実な変化を求める方に",
                "食事アドバイス付き",
            ],
        },
        {
            id: 3,
            title: "月8回プラン",
            totalPrice: "52,800",
            pricePerSession: "6,600",
            description: "週2回40分×月8回",
            note: "※月額制",
            isRecommended: false,
            features: ["週2回 40分 × 8回", "短期間で結果を出したい方", "1回あたりがお得"],
        },
    ];

    const additionalServices = [
        {
            id: 1,
            title: "ペアトレーニング可能",
            description: "追加料金なし。1名様¥5,500〜でご家族やお友達とトレーニングができます。",
            icon: <FaUsers size={24} />,
        },
        {
            id: 2,
            title: "お子様連れOK",
            description:
                "小さなお子様をお連れの方も大歓迎です。産後ダイエットでお子様連れの方も多くご来店いただいています。",
            icon: <FaBaby size={24} />,
        },
    ];

    const services = [
        {
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078483_m.avif",
            title: "プロテイン",
        },
        {
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078484_m.avif",
            title: "ウェア・シューズ\nタオル",
        },
        {
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078485_m.avif",
            title: "食事管理",
        },
        {
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078486_m.avif",
            title: "ミネラルウォーター",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-stone-900 text-stone-100 relative overflow-hidden rounded-[3rem] mx-4 md:mx-6">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-700 rounded-full blur-[100px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-stone-400 font-bold tracking-widest text-xs mb-3 block uppercase">
                        PRICE PLANS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">料金プラン</h2>
                    <p className="text-stone-400 mt-6 text-sm">
                        入会金 11,000円 (税込) / 体験トレーニング 無料
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mb-16">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative ${
                                plan.isRecommended
                                    ? "bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl transform md:scale-105 z-10 text-center"
                                    : "bg-stone-800/50 backdrop-blur rounded-[2rem] p-8 border border-stone-700/50 text-center"
                            }`}
                        >
                            {plan.isRecommended && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-stone-800 text-white px-6 py-2 rounded-full text-xs font-medium tracking-wide shadow-lg">
                                    人気No.1
                                </div>
                            )}

                            <h3
                                className={`text-base font-medium mb-6 ${
                                    plan.isRecommended ? "text-stone-800 text-xl font-semibold" : "text-stone-300"
                                }`}
                            >
                                {plan.title}
                            </h3>

                            <div
                                className={`text-3xl font-semibold mb-2 tracking-tight ${
                                    plan.isRecommended ? "text-stone-800 text-4xl font-bold" : ""
                                }`}
                            >
                                {plan.totalPrice}
                                <span
                                    className={`text-xs font-normal ml-1 ${
                                        plan.isRecommended ? "text-stone-400" : "text-stone-400"
                                    }`}
                                >
                                    円(税込)
                                </span>
                            </div>

                            <p
                                className={`text-xs mb-8 ${
                                    plan.isRecommended ? "text-stone-400 mb-10" : "text-stone-500"
                                }`}
                            >
                                1回あたり {plan.pricePerSession}円
                            </p>

                            <ul
                                className={`space-y-4 mb-8 text-sm text-left ${
                                    plan.isRecommended ? "pl-6 space-y-5 mb-10 text-stone-600" : "pl-4 text-stone-300"
                                }`}
                            >
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        {plan.isRecommended ? (
                                            <FaCheck size={18} className="text-stone-800 mr-3" />
                                        ) : (
                                            <span className="w-1.5 h-1.5 bg-stone-500 rounded-full mr-3"></span>
                                        )}
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {plan.isRecommended && (
                                <Link
                                    href="/reserve"
                                    className="block w-full py-4 bg-stone-800 hover:bg-stone-700 text-white font-medium text-center rounded-full transition-all shadow-lg hover:shadow-xl"
                                >
                                    まずは無料体験へ
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Free Services */}
                <div className="bg-stone-800/30 backdrop-blur rounded-[2rem] p-8 md:p-12 mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                            手ぶらでOK
                        </h3>
                        <p className="text-stone-400 text-sm">以下のサービスが全て無料</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="relative w-16 md:w-20 h-16 md:h-20 mb-4 bg-stone-700/50 rounded-full p-3">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        priority
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <p className="text-sm text-stone-300 whitespace-pre-line">
                                    {service.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Services */}
                <div className="grid md:grid-cols-2 gap-6">
                    {additionalServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-stone-800/30 backdrop-blur rounded-[2rem] p-6 md:p-8 flex items-start gap-5"
                        >
                            <div className="w-12 h-12 bg-stone-700/50 rounded-full flex items-center justify-center flex-shrink-0 text-stone-300">
                                {service.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-stone-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-stone-800/80 rounded-full px-8 py-4 backdrop-blur-sm border border-stone-700/50">
                        <p className="text-stone-300 text-sm">
                            時間は60分・90分もございます。チケット制プランもご用意しております。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanSection;
