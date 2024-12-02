"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
    // カードデータを定義
    const cards = [
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/warrior.avif",
            alt: "痩せたい方",
            title: "痩せたい方",
            objectPosition: "50% 20%",
        },
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/weightlifting.avif",
            alt: "筋肉をつけたい方",
            title: "筋肉をつけたい方",
            objectPosition: "50% 15%",
        },
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/stretch.avif",
            alt: "運動不足を解消したい方",
            title: "運動不足を解消したい方",
            objectPosition: "50% 30%",
        },
    ];

    return (
        <div className="px-6">
            {/* 上部テキスト */}
            <div className="text-center max-w-4xl mx-auto mb-8">
                <h2 className="noto-sans-jp text-2xl md:text-3xl font-bold mb-6">
                    <span className="noto-sans">INOUT</span>とは
                </h2>
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

            {/* カードセクション */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-lg h-40 lg:h-80"
                    >
                        <Image
                            src={card.imgSrc}
                            alt={card.alt}
                            priority
                            width={500}
                            height={500}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 "
                            style={{objectPosition: card.objectPosition}}
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition duration-300"
                        >
                            <h3 className="noto-sans-jp text-white text-xl font-semibold">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
