"use client"

import { FaInstagram, FaLine } from "react-icons/fa";
import Image from "next/image";
import SectionTitle from "@/components/section/SectionTitle";

const ProfileSection = () => {
    const profile = {
        name: "Minami Ichinokawa",
        japaneseName: "市ノ川 陽",
        qualifications: ["健康運動指導士", "メンタル心理カウンセラー"],
        expertise: "【栄養・運動・精神】",
        expertiseDescription:
            "この3つの観点からアプローチし、皆様を人生史上最高の身体へと仕上げます！",
        message:
            "元大手パーソナルジムで年間200名以上の方を指導して来ました。\n皆様が持っているセンスやポテンシャル、考え方など1人1人違います。\nそれぞれの個別性を大切に。",
        imageSrc:
            "https://minami-hp.s3.ap-northeast-1.amazonaws.com/profile_1662367589441.avif",
        socialLinks: {
            instagram: "https://www.instagram.com/__inoutgym__/?hl=ja",
            line: "https://line.me/R/ti/p/@243otxyn",
        },
    };

    return (
        <div className="max-w-xl mx-auto">
            <SectionTitle label="Trainer profile">トレーナー紹介</SectionTitle>
            <div className="p-6 bg-white rounded-lg shadow max-w-2xl mx-auto">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <Image
                        width={500}
                        height={500}
                        src={profile.imageSrc}
                        alt={profile.name}
                        priority
                        className="w-56 h-56 rounded-full shadow-lg object-cover border-2 border-primary"
                    />
                </div>

                {/* Name and Social Links */}
                <div className="mb-4 text-center">
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-sm text-gray-500">{profile.japaneseName}</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a
                            href={profile.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={30}/>
                        </a>
                        <a
                            href={profile.socialLinks.line}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500"
                            aria-label="Line"
                        >
                            <FaLine size={30}/>
                        </a>
                    </div>
                </div>

                <div className="px-3 sm:px-10">
                    {/* Qualifications */}
                    <div className="text-left mb-6">
                        <h3 className="text-base font-bold mb-2">資格</h3>
                        <ul className="text-sm list-disc list-inside text-primary">
                            {profile.qualifications.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div className="text-left mb-6">
                        <h3 className="text-base font-bold mb-2">{profile.expertise}</h3>
                        <p className="text-sm text-primary">{profile.expertiseDescription}</p>
                    </div>

                    {/* Message */}
                    <div className="text-left">
                        <h3 className="text-base font-bold bg-black text-white inline-block px-3 py-1 rounded-md mb-2">
                            メッセージ
                        </h3>
                        <p className="text-sm text-primary whitespace-pre-line">{profile.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
