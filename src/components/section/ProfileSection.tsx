"use client";

import Image from "next/image";
import SectionTitle from "@/components/section/SectionTitle";
import { profiles } from "@/constants/profile";
import { Profile } from "@/constants/profile";
import { FaInstagram, FaLine } from "react-icons/fa";

const ProfileSection = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <SectionTitle label="Trainer">トレーナー紹介</SectionTitle>

            <div className="space-y-12">
                {profiles.map((profile: Profile, index) => (
                    <div
                        key={index}
                        className="bg-stone-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        {/* Profile Image */}
                        <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 bg-white rounded-full overflow-hidden p-2 shadow-lg">
                            <Image
                                width={300}
                                height={300}
                                src={profile.imageSrc}
                                alt={profile.name}
                                priority
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Profile Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-medium text-stone-800 mb-2">
                                {profile.name}
                                <span className="text-xs font-normal text-stone-400 ml-3 tracking-widest uppercase">
                                    {profile.role}
                                </span>
                            </h3>
                            <p className="text-sm text-stone-500 mb-6">
                                {profile.japaneseName}
                            </p>

                            {/* Qualifications */}
                            {profile.qualifications && profile.qualifications.length > 0 && (
                                <div className="flex gap-3 justify-center md:justify-start flex-wrap mb-6">
                                    {profile.qualifications.map((qualification, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-2 bg-white rounded-full text-xs font-medium text-stone-500 shadow-sm"
                                        >
                                            {qualification}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Message */}
                            <p className="text-stone-600 mb-8 leading-loose font-light">
                                {profile.message}
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a
                                    href={profile.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full text-stone-500 hover:text-[#E4405F] transition-colors shadow-sm hover:shadow-md"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={20} />
                                </a>
                                {profile.socialLinks.line && (
                                    <a
                                        href={profile.socialLinks.line}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-stone-500 hover:text-[#06c755] transition-colors shadow-sm hover:shadow-md"
                                        aria-label="Line"
                                    >
                                        <FaLine size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSection;
