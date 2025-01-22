"use client";

import React from "react";
import Image from "next/image";

const ConcernsSection = () => {
    // お悩みリストデータ
    const concerns = [
        "体力が減り、姿勢も悪くなった…",
        "頑張ってるのに痩せない…",
        "以前着てた服が着れなくなった…",
        "30代すぎてから、太りやすくなった…",
        "身体を変えて自信をつけたい…",
        "継続ができない…",
    ];

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
        <div className="max-w-4xl mx-auto">
            <div
                className="relative bg-cover bg-center h-[300px] md:h-[400px]"
                style={{backgroundImage: "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/consultation.avif')"}}
            >
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4"><span className="noto-sans">INOUT</span>で叶う理想の身体
                    </h2>
                    <p className="text-base md:text-lg">
                        <span className="noto-sans">INOUT</span>にはダイエットやボディメイク、<br/>
                        様々なお悩みにお応えしております
                    </p>
                    <hr className="border-t border-white w-12 mt-4"/>
                </div>
            </div>

            <div className="my-10 md:my-16 max-w-5xl mx-auto md:px-0">
                <div className="bg-primary shadow-md rounded-lg p-10 md:p-6">
                    <h3 className="text-on-primary text-base md:text-xl font-bold text-center mb-6">こんなお悩みはありませんか？</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-base text-center leading-relaxed">
                        {concerns.map((concern, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="material-symbols-outlined text-as-secondary pt-0.5">task_alt</span>
                                <span className="text-on-primary">{concern}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-lg h-40 lg:h-80"
                    >
                        <Image
                            src={card.imgSrc}
                            alt={card.alt}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 "
                            style={{objectPosition: card.objectPosition}}
                            priority
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition duration-300"
                        >
                            <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConcernsSection;
