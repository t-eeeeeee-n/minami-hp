"use client";

import React from "react";
import { FaInstagram, FaLine } from "react-icons/fa";
import Image from "next/image";
import {handleScroll} from "@/utils/globalActions";
import {menuItems} from "@/constants/constants";

const Footer = () => {
    return (
        <footer className="pt-10 pb-32 px-6 lg:px-0">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 items-start">
                    {/* 左側: ロゴとソーシャルアイコン */}
                    <div className="flex flex-col items-start text-left mb-8 md:mb-0">
                        <div className="flex items-center space-x-4 mb-4">
                            <Image
                                src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__389940471.jpg"
                                alt="INOUT Logo"
                                width={60}
                                height={60}
                                className="w-auto h-auto"
                            />
                            <h2 className="noto-sans text-2xl font-bold">INOUT</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.instagram.com/__inoutgym__/?hl=ja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 text-2xl"
                            >
                                <FaInstagram/>
                            </a>

                            <a
                                href="https://line.me/R/ti/p/@243otxyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 text-2xl"
                            >
                                <FaLine/>
                            </a>
                            <a
                                href="https://beauty.hotpepper.jp/kr/slnH000625331/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                                aria-label="Home"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/Beauty_Logo_135_45.gif"
                                    alt="Beauty Logo"
                                    priority
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* 右側: フッターリンク */}
                    <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <h3 className="noto-sans font-bold text-xs">{item.en}</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <button
                                            onClick={() => handleScroll(item.id)}
                                            className="text-sm transition"
                                        >
                                            {item.jp}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 下部: コピーライト */}
                <div className="border-t pt-4 text-center text-sm mt-8">
                    <p>特定商取引法に基づく表記 | 利用規約 | プライバシーポリシー</p>
                    <p>© 2020-2025 INOUT</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
