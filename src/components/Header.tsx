"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from "@/components/Hamburger";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "ABOUT", href: "#about-us" },
        { name: "FEATURES", href: "#features" },
        { name: "PLAN", href: "#plan" },
        { name: "TRAINER", href: "#profile" },
        { name: "ACCESS", href: "#access" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 z-50 group cursor-pointer">
                    <div className="relative h-12 transition-transform group-hover:scale-105">
                        <img
                            src="/icon.svg"
                            alt="INOUT"
                            className="h-full w-auto"
                        />
                    </div>
                    <span
                        className={`text-xs font-medium tracking-widest hidden sm:block transition-colors ${
                            scrolled ? "text-stone-500" : "text-stone-600"
                        }`}
                    >
                        PERSONAL GYM
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        href="/reserve"
                        className="px-6 py-3 bg-stone-800 text-white text-xs font-medium rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        無料体験予約
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-stone-800 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav - Using Hamburger component */}
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;
