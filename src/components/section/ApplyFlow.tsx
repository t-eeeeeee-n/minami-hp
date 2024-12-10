"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";
import Image from "next/image";

const ApplyFlow = () => {

    const steps = [
        {
            id: 1,
            title: "体験お申し込み",
            description:
                "ご予約方法は下記の2つからお選び頂けます。\n・LINE\n・ご予約フォーム\n\n※各々のお申し込みリンクはページ下部にございます。\n希望日時を指定して、カウンセリングをお申し込みください。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24497038_m.avif",
        },
        {
            id: 2,
            title: "ご来店",
            description:
                "ご来店はご予約された5分前目安にご来店ください。\n当ジムにて、ウェア・シューズ・タオル・ミネラルウォーター、各種無料レンタルしておりますので、手ぶらでお越し頂いて大丈夫です。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/22830622_m.avif",
        },
        {
            id: 3,
            title: "カウンセリング",
            description:
                "過去の運動経験や生活習慣、食事内容などについてヒアリングさせていただきます。\n\nそれらをもとに、痩せたい、体調不良を改善したいといった具体的なお力添えの悩みに対してお話しさせていただく流れを取っています。\n\n1. カウンセリング 過去の運動経験や、生活リズム、食事などお客様の今についてお伺いします。\n2. 目標設定 お客様がなりたいカラダをお聞きし、目標を定めます。\n3. プログラムご提案 目標や身体機能に沿って最適なプログラムをご提案します。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/3868812_m.avif",
        },
        {
            id: 4,
            title: "トレーニング",
            description:
                "カウンセリングさせて頂いた内容を元に、最適なトレーニングメニューを実施させて頂きます。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078484_m.avif",
        },
        {
            id: 5,
            title: "アフターカウンセリング",
            description:
                "トレーニングを終えた後は、ご質問や今後のプラン等詳しくお話しさせて頂きます。\nトレーニング後はプロテインの補給も可能です。",
            imageSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.avif",
        },
    ];

    return (
        <div className="px-6 md:px-0">
            {/* セクションタイトル */}
            <SectionTitle label="Apply Flow">
                お申し込みの流れ
            </SectionTitle>

            {/* ステップリスト */}
            <div className="flex flex-col">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div
                            className={`flex flex-col md:flex-row ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } items-center md:p-6 rounded-2xl bg-white border-2 border-primary`}
                        >
                            <div className="md:w-3/4 p-6 rounded-lg">
                                <h3 className="text-md font-bold text-center mb-6 md:mb-4 border-primary border-b-2">
                                    <span>{step.title}</span>
                                </h3>
                                <p className="leading-6 text-xs">{step.description}</p>
                            </div>
                            <div className="md:w-1/4 px-6 pb-6 md:p-0">
                                <Image
                                    src={step.imageSrc}
                                    alt={`Step ${step.id}`}
                                    priority
                                    width={500}
                                    height={500}
                                    className="object-cover md:rounded-none"
                                />
                            </div>
                        </div>

                        {/* ステップ間の矢印アイコン */}
                        {index < steps.length - 1 && (
                            <div className="flex justify-center my-4">
                                <span className="material-symbols-outlined text-primary text-3xl">keyboard_arrow_down</span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ApplyFlow;
