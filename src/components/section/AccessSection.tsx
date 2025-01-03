"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";

const AccessSection = () => {
    const accessInfo = [
        {
            title: "住所",
            subTitle: "Address",
            content: "東京都中央区新富1-17-6 正金アパートメント入船204",
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

    // const openingHours = [
    //     { day: "月曜日", hours: "10:00~22:00" },
    //     { day: "火曜日", hours: "10:00~23:00" },
    //     { day: "水曜日", hours: "10:00~22:00" },
    //     { day: "木曜日", hours: "09:00~22:00" },
    //     { day: "金曜日", hours: "09:00~22:00" },
    //     { day: "土曜日", hours: "09:00~21:00" },
    //     { day: "日曜日", hours: "09:00~20:00" },
    // ];

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
                            {info.isLink ? (
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

                    {/* 営業時間 */}
                    {/*<div>*/}
                    {/*    <div className="flex items-center justify-between border-b pb-2 mb-4">*/}
                    {/*        <h3 className="text-lg font-bold text-gray-800">営業時間</h3>*/}
                    {/*        <span className="text-xs text-gray-500 uppercase tracking-widest">*/}
                    {/*            Opening Hours*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <table className="w-full text-left text-sm border-collapse">*/}
                    {/*        <tbody>*/}
                    {/*        {openingHours.map((entry, index) => (*/}
                    {/*            <tr key={index} className="border-b">*/}
                    {/*                <td className="py-2 font-medium">{entry.day}</td>*/}
                    {/*                <td className="py-2">{entry.hours}</td>*/}
                    {/*            </tr>*/}
                    {/*        ))}*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                </div>

                {/* Google Map */}
                <div className="w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4575088888283!2d139.77053701528296!3d35.671211480197225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf4df93577f%3A0xb8b9cf98e6f840b7!2sINOUT!5e0!3m2!1sen!2sjp!4v1695365678901!5m2!1sen!2sjp"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[300px] md:h-[400px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AccessSection;
