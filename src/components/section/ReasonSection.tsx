"use client"

import Image from "next/image";
import SectionTitle from "@/components/section/SectionTitle";
import Link from "next/link";

const reasons = [
    {
        id: 1,
        title: "オーダートレーニング\n×ベストフード",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990807.avif",
    },
    {
        id: 2,
        title: "整体によるケア",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990809.avif",
    },
    {
        id: 3,
        title: "美容・医療のご紹介",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__39600168.jpg",
    },
    {
        id: 4,
        title: "コーチング",
        imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__15990811.avif",
    },
];

const ReasonSection = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <SectionTitle label="Reason">
                <span className="noto-sans">INOUT</span>が選ばれる<br/>
                <span className="text-primary text-xl font-bold"><span className="text-as-primary text-3xl">4</span>つの理由</span>
            </SectionTitle>
            {/* メソッドリスト */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl lg:max-w-5xl mx-auto mb-12"
                 style={{placeItems: "center"}}>
                {reasons.map((reason) => (
                    <div
                        key={reason.id}
                        className="text-center flex flex-col items-center relative"
                    >
                        {/* 番号 */}
                        <div
                            className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 text-as-primary text-xl md:text-3xl font-bold flex items-center justify-center rounded-full z-10"
                        >
                            {reason.id < 10 ? `0${reason.id}` : reason.id}
                        </div>

                        {/* 画像 */}
                        <div
                            className="relative mb-4 w-36 h-36 sm:w-52 sm:h-52 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={reason.imgSrc}
                                alt={reason.title}
                                priority
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* タイトル */}
                        <p className="h-12 text-sm md:text-base font-bold whitespace-pre-line">
                            {reason.title}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Link href="/method" passHref>
                    <button
                        className="px-8 py-3 bg-accent text-on-accent rounded-3xl shadow hover:bg-secondary-dark transition">
                        詳しくはこちら
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ReasonSection;