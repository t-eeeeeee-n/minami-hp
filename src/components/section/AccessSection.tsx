"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

const AccessSection = () => {
    const accessInfo = [
        {
            icon: <FaMapMarkerAlt size={20} />,
            title: "住所",
            content: "東京都中央区新富1-17-6 正金アパートメント入船 204",
            store: "新富店",
        },
        {
            icon: <FaClock size={20} />,
            title: "営業時間",
            content: "7:00 - 23:00（不定休）",
        },
        {
            icon: <FaPhone size={20} />,
            title: "電話番号",
            content: "080-4131-9781",
            isLink: true,
            linkPrefix: "tel:",
        },
        {
            icon: <FaEnvelope size={20} />,
            title: "メールアドレス",
            content: "gym.inout.official@gmail.com",
            isLink: true,
            linkPrefix: "mailto:",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                {/* Info Section */}
                <div className="flex-1 space-y-8">
                    <div>
                        <span className="text-stone-400 font-bold tracking-widest text-xs mb-3 block uppercase">
                            ACCESS
                        </span>
                        <h2 className="text-3xl font-semibold text-stone-800 mb-8">店舗情報</h2>

                        <div className="space-y-4">
                            {accessInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start p-5 bg-stone-50 rounded-2xl"
                                >
                                    <div className="text-stone-400 mr-5 mt-0.5 flex-shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        {info.store && (
                                            <p className="font-semibold text-stone-800 mb-1">
                                                {info.store}
                                            </p>
                                        )}
                                        {info.isLink ? (
                                            <a
                                                href={`${info.linkPrefix}${info.content}`}
                                                className="text-stone-600 text-sm font-light hover:text-stone-800 transition-colors"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-stone-600 text-sm font-light">
                                                {info.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="flex-1 min-h-[400px] bg-stone-100 rounded-[2.5rem] overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2152753292503!2d139.77283697659104!3d35.671700930495945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018896721d00fad%3A0x64beca37283b31e7!2z44OR44O844K944OK44Or44K444OgSU5PVVQg6YqA5bqn44O75paw5a-M5bqX!5e0!3m2!1sja!2sjp!4v1737135502420!5m2!1sja!2sjp"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-none absolute inset-0"
                    ></iframe>
                    {/* Overlay border for soft look */}
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/30 rounded-[2.5rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default AccessSection;
