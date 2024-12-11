"use client"

import SectionTitle from "@/components/section/SectionTitle";
import React from "react";
import Image from "next/image";

const PlanSection = () => {

    const plans = [
        {
            id: 1,
            title: "月2回プラン",
            totalPrice: "14,900円",
            taxPrice: "（税込）",
            perSessionPrice: "隔週1回40分×月2回",
            taxPerSessionPrice: "※月額制",
            isRecommended: false,
        },
        {
            id: 2,
            title: "月4回プラン",
            totalPrice: "29,800円",
            taxPrice: "（税込）",
            perSessionPrice: "週1回40分×月4回",
            taxPerSessionPrice: "※月額制",
            isRecommended: true,
        },
        {
            id: 3,
            title: "月8回プラン",
            totalPrice: "59,600円",
            taxPrice: "（税込）",
            perSessionPrice: "週2回40分×月8回",
            taxPerSessionPrice: "※月額制",
            isRecommended: false,
        },
    ];

    const additionalServices = [
        {
            id: 1,
            title: "ペアトレーニング可能",
            description: "追加料金なし。\n1名様¥5,500〜でご家族やお友達とトレーニングができます。",
            icon: "👫",
        },
        {
            id: 2,
            title: "お子様連れOK",
            description: "小さなお子様をお連れの方も大歓迎です。\n産後ダイエットでお子様連れの方も多くご来店いただいています。",
            icon: "👶",
        },
    ];

    const additionalInfo = [
        "入会金11,000円（税込）。",
        "時間は60分・90分もございます。",
        "チケット制プランもご用意しております。",
    ];

    const services = [
        {
            id: 1,
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078482_m.avif",
            title: "歯のホワイトニング",
        },
        {
            id: 2,
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078483_m.avif",
            title: "プロテイン",
        },
        {
            id: 3,
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078484_m.avif",
            title: "ウェア・シューズ\nタオル",
        },
        {
            id: 4,
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078485_m.avif",
            title: "食事管理",
        },
        {
            id: 5,
            icon: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/25078486_m.avif",
            title: "ミネラルウォーター",
        },
    ];

    return (
        <div>
            <SectionTitle label="Plan">料金プラン</SectionTitle>
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative bg-white p-6 rounded-lg shadow ${
                            plan.isRecommended ? "border-2 border-primary" : "border"
                        }`}
                    >
                        {plan.isRecommended && (
                            <div
                                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-on-primary text-sm py-1 px-4 rounded-full">
                                人気No.1
                            </div>
                        )}
                        <h3 className="text-lg font-bold text-primary mb-4 text-center">
                            {plan.title}
                        </h3>
                        <div className="text-center mb-4">
                            <p className="text-2xl font-bold text-as-accent">{plan.totalPrice}</p>
                            <p className="text-sm text-secondary">{plan.taxPrice}</p>
                        </div>
                        <div className="text-center">
                            {plan.perSessionPrice && (
                                <>
                                    <p className="text-sm text-primary">{plan.perSessionPrice}</p>
                                    <p className="text-xs text-secondary">{plan.taxPerSessionPrice}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow mt-12 max-w-5xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h2 className="text-xl md:text-2xl font-bold">
                        パーソナルジムINOUTは手ぶらで
                        <span className="text-as-primary">OK</span>
                    </h2>
                    <p className="text-base md:text-lg mt-2">
                        以下のサービスが全て無料
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center text-center space-y-4 "
                        >
                            <div className="relative w-12 md:w-20 aspect-square">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    priority
                                    width={800}
                                    height={800}
                                    className=""
                                />
                            </div>
                            <p className="text-sm md:text-base leading-tight whitespace-pre-line">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Services */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
                {additionalServices.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white p-6 rounded-lg shadow flex items-start"
                    >
                        <span className="text-4xl mr-4">{service.icon}</span>
                        <div>
                            <h4 className="text-lg font-bold text-primary mb-2">{service.title}</h4>
                            <p className="text-sm text-secondary whitespace-pre-line">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <div className="bg-white p-6 rounded-lg shadow mt-12 max-w-5xl mx-auto">
                <h3 className="text-lg font-bold text-primary mb-4">その他</h3>
                <ul className="text-sm text-primary list-disc pl-5 space-y-2">
                    {additionalInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
                <button
                    className="px-8 py-3 bg-accent text-on-accent rounded-3xl shadow hover:bg-secondary-dark transition">
                    ご料金の確認はこちらから
                </button>
            </div>
        </div>
    )
}

export default PlanSection;