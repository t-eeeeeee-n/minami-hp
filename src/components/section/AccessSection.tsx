"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";

const AccessSection = () => {
    const accessInfo = [
        {
            title: "住所",
            subTitle: "Address",
            content: [
                { store: "新富店", address: "東京都中央区新富1-17-6 正金アパートメント入船 204" },
                { store: "目黒店", address: "東京都品川区上大崎1-5-63 エクセレント白金台 201" },
            ],
            isLink: false,
        },
        {
            title: "電話番号",
            subTitle: "Phone Number",
            content: "080-4131-9781",
            isLink: true,
            linkPrefix: "tel:",
        },
        {
            title: "メールアドレス",
            subTitle: "Email Address",
            content: "gym.inout.official@gmail.com",
            isLink: true,
            linkPrefix: "mailto:",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <SectionTitle label="Access">アクセス</SectionTitle>

            {/* レイアウト全体 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* 左側: アクセス情報 */}
                <div className="space-y-8">
                    {accessInfo.map((info, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between border-b pb-2 mb-4">
                                <h3 className="text-base font-bold">{info.title}</h3>
                                <span className="text-xs text-as-primary uppercase tracking-widest">
                                    {info.subTitle}
                                </span>
                            </div>
                            {Array.isArray(info.content) ? (
                                <ul className="space-y-4">
                                    {info.content.map((location, idx) => (
                                        <li key={idx}>
                                            <p className="text-sm mb-1">{location.store}</p>
                                            <p className="whitespace-pre-line text-base">{location.address}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : info.isLink ? (
                                <a
                                    href={`${info.linkPrefix}${info.content}`}
                                    className="text-primary text-base underline"
                                >
                                    {info.content}
                                </a>
                            ) : (
                                <p className="whitespace-pre-line text-base">{info.content}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Google Map */}
                <div className="w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2152753292503!2d139.77283697659104!3d35.671700930495945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018896721d00fad%3A0x64beca37283b31e7!2z44OR44O844K944OK44Or44K444OgSU5PVVQg6YqA5bqn44O75paw5a-M5bqX!5e0!3m2!1sja!2sjp!4v1737135502420!5m2!1sja!2sjp"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        className="w-full h-[300px] md:h-[400px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AccessSection;
