"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigateAndScroll } from "@/utils/useNavigateAndScroll";
import { FaInstagram, FaEnvelope, FaChevronRight, FaLine } from "react-icons/fa";

const Footer = () => {
    const { navigateAndScroll } = useNavigateAndScroll();

    const navLinks = [
        { name: "ABOUT", id: "about-us" },
        { name: "FEATURES", id: "features" },
        { name: "PLAN", id: "plan" },
        { name: "TRAINER", id: "profile" },
        { name: "ACCESS", id: "access" },
    ];

    return (
        <footer className="bg-stone-900 text-white pt-24 md:pt-32 pb-12 rounded-t-[4rem] relative z-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* CTA Section */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight tracking-tight">
                        Start Your Life.
                        <span className="text-stone-500 text-2xl md:text-4xl block mt-4 font-normal">
                            まずは無料体験から。
                        </span>
                    </h2>
                    <p className="text-stone-400 mb-12 max-w-md mx-auto leading-loose font-light">
                        身体が変われば、心も変わる。
                        <br />
                        INOUTで新しい自分に出会いませんか？
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <a
                            href="https://line.me/R/ti/p/@243otxyn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-8 py-4 bg-[#06c755] hover:bg-[#05b54d] text-white font-medium rounded-full transition-all shadow-lg hover:shadow-green-500/20"
                        >
                            <FaLine size={20} className="mr-2" />
                            <span className="text-sm tracking-wide">LINEで予約する</span>
                        </a>
                        <Link
                            href="/reserve"
                            className="flex items-center justify-center px-8 py-4 bg-white text-stone-800 font-medium rounded-full hover:bg-stone-200 transition-all shadow-lg"
                        >
                            <FaEnvelope className="mr-2" size={18} />
                            <span className="text-sm tracking-wide">お問い合わせフォーム</span>
                        </Link>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t border-stone-800 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="relative h-12">
                                <img
                                    src="/icon.svg"
                                    alt="INOUT"
                                    className="h-full w-auto"
                                />
                            </div>
                            <span className="text-xs font-medium tracking-widest text-stone-500">
                                PERSONAL GYM
                            </span>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-wrap justify-center gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => navigateAndScroll(link.id, "/")}
                                    className="text-xs font-medium text-stone-500 hover:text-white transition-colors tracking-widest"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/__inoutgym__/?hl=ja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-stone-800 rounded-full text-stone-400 hover:text-[#E4405F] transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://line.me/R/ti/p/@243otxyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-stone-800 rounded-full text-stone-400 hover:text-[#06c755] transition-colors"
                                aria-label="Line"
                            >
                                <FaLine size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-stone-600 text-xs font-light mt-12">
                        &copy; {new Date().getFullYear()} INOUT GYM. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
