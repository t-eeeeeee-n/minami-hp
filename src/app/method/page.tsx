"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
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
            mainTitle: "溜まった疲労をリセットし、活力を取り戻したい！",
            title: "最新休息マシンによる超回復",
            description:
                "身体作りにおいて、休むことを大切にした方がいいとは言われておりますが、日本人は圧倒的に休むことが不足していると言われています。お忙しい日々で簡単には休むことが難しい世の中。疲労の影響は身体作りだけではなく、様々な健康に響きます。INOUTでは、この点にも力を入れており疲労回復や美容効果も高い「酸素カプセル」を設置しております！",
            imageSrc:
                "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__25990810.avif",
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
                className="relative text-white py-24 px-6 text-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/9802a6_99acba2fe810436d992736c0e146e013.avif')",
                }}
            >
                <div className="flex flex-col gap-2 items-center justify-center">
                    {/* 左側のタイトル */}
                    <h1 className="text-2xl font-bold bg-black bg-opacity-50 inline-block px-4 py-2">INOUTメソッド</h1>

                    {/* 右側のサブタイトル */}
                    <p className="text-sm md:text-base bg-black bg-opacity-50 inline-block px-4 py-2">
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

export default Page;
