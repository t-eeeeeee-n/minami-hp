"use client";

import { FC } from "react";
import { menuItems } from "@/constants/menuItem";
import { useNavigateAndScroll } from "@/utils/useNavigateAndScroll";
import Link from "next/link";

export type HamburgerProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const Hamburger: FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
    const { navigateAndScroll } = useNavigateAndScroll();

    const navLinks = [
        { name: "ABOUT", id: "about-us", path: "/" },
        { name: "FEATURES", id: "features", path: "/" },
        { name: "PLAN", id: "plan", path: "/" },
        { name: "TRAINER", id: "profile", path: "/" },
        { name: "ACCESS", id: "access", path: "/" },
    ];

    return (
        <div
            className={`fixed inset-0 bg-stone-50/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col justify-center items-center space-y-8 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
        >
            {/* Nav Links */}
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => {
                        navigateAndScroll(link.id, link.path).then(() => {
                            toggleMenu();
                        });
                    }}
                    className="text-xl font-light text-stone-800 tracking-widest hover:text-stone-400 transition-colors"
                >
                    {link.name}
                </button>
            ))}

            {/* CTA Button */}
            <Link
                href="/reserve"
                onClick={toggleMenu}
                className="mt-8 px-10 py-4 bg-stone-800 text-white text-base font-medium rounded-full shadow-xl hover:bg-stone-700 transition-colors"
            >
                無料体験予約
            </Link>
        </div>
    );
};

export default Hamburger;
