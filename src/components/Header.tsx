"use client";

import { useState } from "react";
import Image from "next/image";
import MenuList from "@/components/MenuList";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#6fd8ef] text-white flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
                <Image
                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__38994047.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 mr-3"
                />
                <span className="text-lg font-bold font-sans">INOUT</span>
            </div>
            <div className="flex items-center md:space-x-6">
                {/* ハンバーガーボタン */}
                <button
                    aria-label="Toggle menu"
                    className="flex flex-col justify-between h-5 w-6"
                    onClick={toggleMenu}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>

                {/* モーダル */}
                <div
                    className={`fixed inset-0 z-50 transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="absolute right-0 top-0 h-full w-full md:w-[300px] max-w-sm bg-white shadow-lg p-6 overflow-y-auto">
                        <div className="w-full flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <Image
                                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__38994047.jpg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 mr-3"
                                />
                                <span className="text-xl font-bold text-gray-800">INOUT</span>
                            </div>
                            <button onClick={toggleMenu}>
                                <span className="material-symbols-outlined text-gray-800">
                                    close
                                </span>
                            </button>
                        </div>

                        {/* ナビゲーションメニュー */}
                        <nav className="w-full">
                            <MenuList/>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
