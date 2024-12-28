"use client";

import { useState } from "react";
import Image from "next/image";
import Hamburger from "@/components/Hamburger";
import {handleScroll} from "@/utils/globalActions";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-root text-primary flex items-center px-6 py-4 sticky top-0 z-50 shadow-md">
            <div
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center cursor-pointer"
                onClick={() => handleScroll("home")}
            >
                <Image
                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__389940471.jpg"
                    alt="Logo"
                    priority
                    width={25}
                    height={25}
                    className="mr-2 w-auto"
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
                <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
