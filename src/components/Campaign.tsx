"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Campaign = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-center py-4 px-6 md:py-4 md:px-0 z-50 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >

            <Link href="/reserve" className="">
                {/*<div*/}
                {/*    className="bg-green-500 text-white py-2 px-2 flex items-center justify-center w-full rounded-lg shadow-lg animate-slide-vertical-sm"*/}
                {/*>*/}
                {/*    /!* 左側のテキスト *!/*/}
                {/*    <div className="flex items-center mr-5 md:mr-10">*/}
                {/*        <div*/}
                {/*            className="bg-[#ffffff] text-green-500 font-bold text-lg md:text-xl rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center"*/}
                {/*        >*/}
                {/*            ¥0*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col items-center mr-5 md:mr-10 text-xs md:text-sm">*/}
                {/*        <div className="font-bold">*/}
                {/*            <p>ウェブ限定キャンペーン</p>*/}
                {/*        </div>*/}
                {/*        <div className="mt-1 md:mt-3 flex">*/}
                {/*            <div className="flex flex-col items-center justify-center">*/}
                {/*                <p>体験通常価格</p>*/}
                {/*                <p>8,800円</p>*/}
                {/*            </div>*/}
                {/*            <div className="flex items-center mx-2">*/}
                {/*                <span className="material-symbols-outlined">keyboard_double_arrow_right</span>*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col items-center font-bold">*/}
                {/*                <p>今なら</p>*/}
                {/*                <p><span>０</span>円 で実施中</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="text-white text-3xl font-bold">*/}
                {/*        <span className="material-symbols-outlined">arrow_forward</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="animate-slide-vertical-sm">
                    <Image
                        src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__40100041.jpg"
                        alt="hero"
                        width={800}
                        height={600}
                        className="w-48 md:w-64 lg:w-80"
                        priority
                    />
                </div>
            </Link>

        </div>
    );
};

export default Campaign;
