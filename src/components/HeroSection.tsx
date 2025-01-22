"use client"

import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div>
                {/* Web版の画像 */}
                <div className="hidden md:block">
                    <Image
                        src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39444563.jpg"
                        alt="hero"
                        width={800}
                        height={600}
                        className="w-full"
                        priority
                    />
                </div>
                {/* モバイル版の画像 */}
                <div className="block md:hidden">
                    <Image
                        src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39428386.jpg"
                        alt="hero"
                        width={400}
                        height={300}
                        className="w-full"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
