"use client";

import React from "react";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '選ばれる理由 - INOUTジム',
    description: 'INOUTジムの独自メソッドをご紹介。オーダートレーニング、整体ケア、食事指導、コーチングを組み合わせた最適なアプローチで理想の体を目指します。',
    openGraph: {
        title: 'INOUTメソッド | 効果的なトレーニングとケア',
        description: 'INOUTジムが提供するオーダートレーニング、整体ケア、食事指導、コーチングのメソッドを詳しく解説。',
        url: 'https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg',
    },
};

const Client = () => {
    const methods = [
        {
            mainTitle: "自分に合った方法で効率よく痩せたい！",
            title: "オーダートレーニング × ベストフード",
            description:
                "身体作りにおいては、切っても切り離せないトレーニングと食事。まず、辛いと思われがちなトレーニングですが、INOUTではトレーナーのマンツーマン指導による週1〜2回、1日60分で無理なく無駄なく必要最低限の努力で成果を出します。そして、ライフスタイルや体質に合わせ痩せた先を見据えた食事指導。とにかく続けやすさを重視し無理な食事制限はしません。痩せた後でもご自身で意識できるように適切な知識を身につけ、個々に合ったベストな食事プランを提案致します！",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990807.avif",
        },
        {
            mainTitle: "姿勢を整え、トレーニングの効果を最大化したい！",
            title: "整体によるケア",
            description:
                "ただ闇雲にトレーニングを開始してしまうのは危険です！悪い姿勢や筋肉の張りがあるままトレーニングをしてしまえば、美健康な身体になりにくく、怪我にも繋がってしまいます。ほぐしと調整をしっかり繰り返しながら理想の身体へと繋げて行きます。",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990809.avif",
        },
        {
            mainTitle: "美と健康を追求するあなたに最適なご提案！",
            title: "美容・医療のご紹介",
            description:
                "IN-OUTではより綺麗で健康を目指すため、様々な美容・医療のクリニックと提携させて頂いております。ご要望にあった物を割引にてご紹介可能となります。(例:ホワイトニング、脱毛、エステ、医療クリニックなど)",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600168.jpg",
        },
        {
            mainTitle: "目標を確実に達成したい方へ、全力でサポートします！",
            title: "コーチング",
            description:
                "それぞれの目的・目標を達成する為には、最も重要なことは具体的に目標をイメージし、継続していくことです。どれだけお客様の想いに寄り添い、それにどれだけ全力でサポートができるか。様々なノウハウや技術はもちろん大切ではありますが、INOUTではそれ以上にメンタル面からのアプローチを大切にしております。お客様の結果に責任を持ち、成功まで最短最速で導くことが可能です。",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990811.avif",
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative text-white py-32 px-6 text-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/9802a6_99acba2fe810436d992736c0e146e013.avif')",
                }}
            >
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* コンテンツ */}
                <div className="relative flex flex-col gap-2 items-center justify-center">
                    {/* 左側のタイトル */}
                    <h1 className="text-2xl font-bold inline-block">INOUTメソッド</h1>

                    {/* 右側のサブタイトル */}
                    <p className="text-sm md:text-base inline-block">
                        美と健康にこだわり尽く、4つのアプローチ
                    </p>
                </div>
            </div>

            {/* Methods Section */}
            <div className="max-w-4xl mx-auto px-6 py-8 md:py-16 grid gap-8 md:gap-12">
                {methods.map((method, index) => (
                    <div key={index}>

                        {/* Case Title */}
                        <div className="text-center mb-3 md:mb-6">
                            <h2 className="text-as-primary text-lg font-bold">Case {index + 1 < 10 ? `0${index + 1}` : index + 1}</h2>
                            <h3 className="text-xs md:text-sm font-bold mt-4 bg-primary text-on-primary px-4 py-2 rounded-lg">
                                {method.mainTitle}
                            </h3>
                            {/*<p className="text-gray-600 mt-2">{method.description}</p>*/}
                            <div className="flex justify-center mt-4">
                                <div
                                    className="material-symbols-outlined text-3xl font-bold text-primary animate-slide-vertical">
                                    keyboard_arrow_down
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded-lg">
                            <div
                                className="flex items-center justify-center font-bold py-4 text-as-primary border-b border-primary">
                                {method.title}
                            </div>
                            <div className="p-6 flex flex-col md:flex-row overflow-hidden">
                                {/* Image Section */}
                                <div className="w-full md:w-1/3 aspect-w-16 aspect-h-9">
                                    <Image
                                        src={method.imageSrc}
                                        alt={method.title}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-center w-full md:w-2/3">
                                    <p className="text-sm">
                                        {method.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Client;
