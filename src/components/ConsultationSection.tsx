"use client";

import React from "react";

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

    return (
        <section className="px-6">
            {/* 上部の画像とテキスト */}
            <div
                className="relative bg-cover bg-center h-[300px] md:h-[400px]"
                style={{ backgroundImage: "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/consultation.avif')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">INOUTだから叶うボディメイク</h2>
                    <p className="text-md md:text-lg">
                        INOUTには痩せたいといった方から<br />
                        このようなお悩み・ご相談をいただきます。
                    </p>
                    <hr className="border-t border-white w-12 mt-4" />
                </div>
            </div>

            {/* 下部のリスト */}
            <div className="mt-8 max-w-5xl mx-auto md:px-4">
                <div className="bg-primary shadow-md rounded-lg p-6">
                    <h3 className="noto-sans-jp text-on-primary text-2xl font-semibold text-center mb-6">こんなお悩みはありませんか？</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-md md:text-lg leading-relaxed">
                        {concerns.map((concern, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <span className="material-symbols-outlined text-as-secondary pt-0.5">task_alt</span>
                                <span className="noto-sans-jp text-on-primary">{concern}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ConcernsSection;
