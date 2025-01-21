"use client"

import React from 'react';
import {handleScroll} from "@/utils/globalActions";
import {menuItems} from "@/constants/menuItem";

const ScrollBox = () => {
    return (
        <div className="flex justify-center flex-wrap">
            {menuItems.map((item) => (
                <div key={item.id}>
                    {item.scrollBox && (
                        <div
                            className="bg-white relative w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center border border-primary px-2 md:p-4 hover:opacity-65 transition-shadow duration-300 cursor-pointer"
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
                            <p className="text-center text-as-primary text-sm md:mt-2">
                                {item.jp}
                            </p>
                            {/* 下矢印 */}
                            <div className="flex justify-end">
                                <span className="material-symbols-outlined text-as-primary">keyboard_arrow_down</span>
                            </div>
                        </div>
                    )}

                </div>

            ))}
        </div>
    );
};

export default ScrollBox;
