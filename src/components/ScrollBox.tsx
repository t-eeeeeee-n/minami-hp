"use client"

import React from 'react';
import {handleScroll} from "@/utils/globalActions";

// アイテムデータ
const items = [
    { id: "about-us", icon: "person", text: "INOUTとは" },
    { id: "program", icon: "edit", text: "プログラム" },
    { id: "reason", icon: "flag_2", text: "選ばれる理由" },
    { id: "flow", icon: "play_circle", text: "お申し込みの流れ" },
    { id: "plan", icon: "currency_yen", text: "料金プラン" },
    { id: "faq", icon: "chat", text: "お客様の声" },
];

const ScrollBox = () => {
    return (<div className="container md:mx-auto flex justify-center flex-wrap">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="relative w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center border border-primary px-2 md:p-4 hover:opacity-65 transition-shadow duration-300 cursor-pointer"
                    style={{
                        outline: "1px solid var(--primary)",
                    }}
                    onClick={() => handleScroll(item.id)}
                >
                    {/* アイコン */}
                    <div className="mt-5 md:mt-8">
                        <span
                            className="material-symbols-outlined text-as-primary text-xl md:text-4xl">{item.icon}</span>
                    </div>
                    {/* テキスト */}
                    <p className="noto-sans-jp text-center text-as-primary text-sm md:mt-2">
                        {item.text}
                    </p>
                    {/* 下矢印 */}
                    <div className="flex justify-end">
                        <span className="material-symbols-outlined text-as-primary">keyboard_arrow_down</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScrollBox;
