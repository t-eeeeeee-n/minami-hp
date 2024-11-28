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
        <header className="bg-root text-primary flex items-center px-6 py-4 sticky top-0 z-50 shadow-md">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <Image
                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__389940471.jpg"
                    alt="Logo"
                    width={25}
                    height={25}
                    className="mr-2"
                />
                <span className="noto-sans text-sm">INOUT</span>
            </div>
            <div className="ml-auto flex items-center">
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
                    className={`fixed inset-0 z-50 transition-transform duration-300  ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute bg-root right-0 top-0 h-full w-full md:w-[300px] max-w-sm shadow-lg p-6 overflow-y-auto">
                        <div className="w-full flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <Image
                                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__389940471.jpg"
                                    alt="Logo"
                                    width={25}
                                    height={25}
                                    className="mr-2 rounded-2xl"
                                />
                                <span className="noto-sans text-sm text-black">INOUT</span>
                            </div>
                            <button onClick={toggleMenu}>
                                <span className="material-symbols-outlined text-primary">
                                    close
                                </span>
                            </button>
                        </div>

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
