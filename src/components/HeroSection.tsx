"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                {/* Desktop Image */}
                <Image
                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/1768814833766-4aa96dd3-fee3-4d7f-8b15-904fdcf07662_2.jpg"
                    alt="INOUT Personal Gym"
                    fill
                    sizes="(max-width: 768px) 0px, 100vw"
                    quality={90}
                    className="object-cover object-center hidden md:block"
                    priority
                />
                {/* Mobile Image */}
                <Image
                    src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/1768814895009-029c9932-ba84-4fa4-bc9f-f4770b540578_1.jpg"
                    alt="INOUT Personal Gym"
                    fill
                    sizes="(max-width: 768px) 100vw, 0px"
                    quality={90}
                    className="object-cover object-center md:hidden"
                    priority
                />
                {/* Subtle gradient overlay for better text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-900/10"></div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-32">
                    {/* Info + CTA Row */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        {/* Left: Tagline - Hidden on mobile to avoid overlap with image text */}
                        <div className="text-white hidden md:block">
                            <p className="text-white/70 text-xs font-medium tracking-[0.3em] mb-3 uppercase">
                                Shintomicho Personal Gym
                            </p>
                            <p className="text-lg md:text-xl font-light leading-relaxed">
                                初心者歓迎・手ぶらでOK
                                <br />
                                完全個室のプライベート空間
                            </p>
                        </div>

                        {/* Right: CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/reserve"
                                className="px-8 py-4 bg-white text-stone-800 text-sm font-medium rounded-full hover:bg-stone-100 transition-all shadow-lg flex items-center justify-center group"
                            >
                                <span>無料体験を予約する</span>
                                <FaChevronRight
                                    size={14}
                                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <a
                                href="#plan"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 text-sm font-medium rounded-full hover:bg-white/20 transition-all flex items-center justify-center"
                            >
                                料金プランを見る
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center opacity-50 z-10">
                <span className="text-[10px] tracking-[0.2em] uppercase mb-2 text-white/80">
                    Scroll
                </span>
                <div className="w-[1px] h-10 bg-white/50"></div>
            </div>
        </section>
    );
};

export default HeroSection;
