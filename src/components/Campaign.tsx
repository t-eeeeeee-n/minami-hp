"use client";

import React from "react";

const StickyFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-center py-4 px-6 md:px-28 lg:px-32 xl:px-72 shadow-lg z-50">
            <div
                className="bg-green-500 text-white py-4 px-2 flex items-center justify-center w-full rounded-lg shadow-lg">
                {/* 左側のテキスト */}
                <div className="flex items-center mr-5 md:mr-10">
                    <div
                        className="bg-white text-green-500 font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
                        ¥0
                    </div>
                </div>
                <div className="flex flex-col items-center text-sm mr-5 md:mr-10">
                    <div className="text-base font-bold">
                        <p>ウェブ限定キャンペーン</p>
                    </div>
                    <div className="flex mt-1">
                        <div className="flex flex-col items-center justify-center text-xs">
                            <p>体験通常価格</p>
                            <p>8,800円</p>
                        </div>
                        <div className="flex items-center mx-2">
                            <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <p className="font-bold">今なら <span className="text-xl">０</span>円 で実施中</p>
                        </div>
                    </div>
                </div>
                <div className="text-white text-3xl font-bold">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>
        </div>
    );
};

export default StickyFooter;
