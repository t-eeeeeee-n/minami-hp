"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";

const AboutSection = () => {

    return (
        <div className="px-6">
            <div className="text-center max-w-4xl mx-auto">
                <SectionTitle
                    label="About us"
                    title={
                        <><span className="noto-sans">INOUT</span>とは</>
                    }
                />
                <p className="noto-sans-jp text-sm md:text-md leading-relaxed">
                    パーソナルトレーナーとマンツーマンで
                    <span className="text-as-primary">自分の身体を鍛え</span>、
                    <span className="text-as-primary">成功を積み重ね</span>、
                    <span className="text-as-primary">健康を維持できる</span>。
                    <br/>
                    それは
                    <span className="text-as-primary">日頃から頑張っている自分への特別なご褒美</span>
                    に他なりません。
                    <br/>
                    運動は運を動かし、それにより生活習慣を整える事ができ、
                    <span className="text-as-primary">理想の身体を持てる事で充実した日々</span>
                    を送れます。
                    <br/>
                    その為に、その人本来のポテンシャルを引き出すためにあらゆる知識、技術、まごころを尽くし、
                    <br/>
                    お客様の身近なサービスとして応えたい。
                    <br/>
                    そして低価格かつ
                    <span className="text-as-primary">1人1人のライフスタイルに合わせたコース設定</span>
                    にて、
                    <br/>
                    多くの方に
                    <span className="text-as-primary">無理なく継続可能なジムをコンセプト</span>
                    しております。
                    <br/>
                    また、当ジムのINOUT（イナウト）には、
                    <br/>
                    INとOUT、ジムと外の境界を無くし繋ぎ合わたいという願いを込めており、
                    <br/>
                    <span className="text-as-primary">より多くの方に幸せと健康を届けさせて頂ければな</span>
                    と思います。
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
