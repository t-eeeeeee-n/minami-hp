"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";

const AboutSection = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="md:text-center mx-auto">
                <SectionTitle label="About us">
                    <span className="noto-sans">INOUT</span>とは
                </SectionTitle>
                <div className="text-sm md:text-base leading-7 md:leading-8">
                    <p className="mb-2 md:mb-4">
                        パーソナルトレーナーとマンツーマンで
                        <span className="text-as-primary">自分の身体を鍛え</span>、
                        <span className="text-as-primary">成功を積み重ね</span>、
                        <span className="text-as-primary">健康を維持できる</span>。
                    </p>
                    <p className="mb-2 md:mb-4">
                        それは
                        <span className="text-as-primary">日頃から頑張っている自分への特別なご褒美</span>
                        に他なりません。
                    </p>
                    <p className="mb-2 md:mb-4">
                        運動は運を動かし、それにより生活習慣を整える事ができ、
                        <span className="hidden md:block h-0"></span>
                        <span className="text-as-primary">理想の身体を持てる事で充実した日々</span>
                        を送れます。
                    </p>
                    <p className="mb-2 md:mb-4">
                        その為に、その人本来のポテンシャルを引き出すためにあらゆる知識、技術、まごころを尽くし、
                        <span className="hidden md:block h-0"></span>
                        お客様の身近なサービスとして応えたい。
                    </p>
                    <p className="mb-2 md:mb-4">
                        そして低価格かつ
                        <span className="text-as-primary">1人1人のライフスタイルに合わせたコース設定</span>
                        にて、
                        <span className="hidden md:block h-0"></span>
                        多くの方に
                        <span className="text-as-primary">無理なく継続可能なジムをコンセプト</span>
                        としております。
                    </p>
                    <p className="mb-2 md:mb-4">
                        また、当ジムのINOUT（イナウト）には、
                        <span className="hidden md:block h-0"></span>
                        INとOUT、ジムと外の境界を無くし繋ぎ合わたいという願いを込めており、
                        <span className="hidden md:block h-0"></span>
                        <span className="text-as-primary">より多くの方に幸せと健康を届けさせて頂ければな</span>
                        と思います。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
