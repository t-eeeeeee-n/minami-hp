"use client";

import React from "react";
import Image from "next/image";

const ConcernsSection = () => {
    const concerns = [
        { text: "体力が減り、姿勢も悪くなった", num: "01" },
        { text: "頑張ってるのに痩せない", num: "02" },
        { text: "以前着てた服が着れなくなった", num: "03" },
        { text: "30代すぎてから、太りやすくなった", num: "04" },
        { text: "身体を変えて自信をつけたい", num: "05" },
        { text: "継続ができない", num: "06" },
    ];

    const cards = [
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/warrior.avif",
            alt: "痩せたい方",
            title: "痩せたい",
            subtitle: "LOSE WEIGHT",
            objectPosition: "50% 20%",
        },
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/weightlifting.avif",
            alt: "筋肉をつけたい方",
            title: "鍛えたい",
            subtitle: "BUILD MUSCLE",
            objectPosition: "50% 15%",
        },
        {
            imgSrc: "https://minami-hp.s3.ap-northeast-1.amazonaws.com/stretch.avif",
            alt: "運動不足を解消したい方",
            title: "動きたい",
            subtitle: "GET ACTIVE",
            objectPosition: "50% 30%",
        },
    ];

    return (
        <div className="relative">
            {/* === HERO: 斜めクリップ + オーバーラップテキスト === */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                {/* 背景画像 - 斜めクリップ */}
                <div 
                    className="absolute inset-0"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
                >
                    <Image
                        src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/consultation.avif"
                        alt="Consultation"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-900/90 via-stone-900/70 to-stone-800/80" />
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
                    {/* 大きな装飾テキスト */}
                    <div 
                        className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-white/[0.03] leading-none select-none pointer-events-none"
                        style={{ fontFamily: "'Arial Black', sans-serif" }}
                    >
                        FOR<br/>YOU
                    </div>

                    <div className="relative">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs tracking-[0.3em] uppercase mb-6">
                            Transform Your Body
                        </span>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            INOUT で叶う
                            <br />
                            <span className="text-stone-300">
                                理想の身体
                            </span>
                        </h2>
                        
                        <p className="text-white/70 text-lg md:text-xl max-w-md font-light leading-relaxed">
                            ダイエットやボディメイクなど、
                            <br className="hidden md:block" />
                            様々なお悩みにお応えします
                        </p>
                    </div>
                </div>

                {/* 右下の装飾ライン */}
                <div className="absolute bottom-20 right-0 w-32 md:w-48 h-px bg-gradient-to-l from-white/40 to-transparent" />
            </div>

            {/* === CONCERNS: 斜めスクロールカード === */}
            <div className="relative -mt-16 md:-mt-20 z-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* カードコンテナ - 斜めに配置 */}
                    <div 
                        className="bg-stone-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
                        style={{ transform: "rotate(-1deg)" }}
                    >
                        {/* 背景パターン */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `repeating-linear-gradient(
                                    45deg,
                                    transparent,
                                    transparent 10px,
                                    rgba(255,255,255,0.03) 10px,
                                    rgba(255,255,255,0.03) 20px
                                )`
                            }} />
                        </div>

                        <div style={{ transform: "rotate(1deg)" }}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
                                <h3 className="text-stone-400 text-sm tracking-[0.2em] uppercase font-medium">
                                    Your Concerns
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
                            </div>

                            <p className="text-center text-white text-xl md:text-2xl font-semibold mb-10">
                                こんな<span className="text-stone-300">お悩み</span>はありませんか？
                            </p>

                            {/* 悩みリスト - ずらし配置 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {concerns.map((concern, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-stone-500/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                                        style={{ 
                                            transform: `translateY(${index % 2 === 0 ? '0' : '8px'})`,
                                        }}
                                    >
                                        <span className="absolute -top-2 -left-2 text-stone-600/30 text-4xl font-black">
                                            {concern.num}
                                        </span>
                                        <p className="text-stone-300 group-hover:text-white text-sm md:text-base font-medium transition-colors pl-4">
                                            {concern.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* === TARGET CARDS: マガジンスタイル非対称グリッド === */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-24 md:py-32">
                {/* セクションヘッダー - 左寄せ */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-6 mb-4">
                        <span className="text-stone-400 text-xs tracking-[0.3em] uppercase font-bold">
                            Target
                        </span>
                        <div className="h-px w-16 bg-stone-300" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-stone-800 tracking-tight">
                        こんな方に
                        <br className="md:hidden" />
                        <span className="text-stone-400">おすすめ</span>
                    </h3>
                </div>

                {/* マガジングリッド */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* メインカード - 左大 */}
                    <div className="col-span-12 md:col-span-7 relative group">
                        <div className="relative h-[400px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/50">
                            <Image
                                src={cards[0].imgSrc}
                                alt={cards[0].alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: cards[0].objectPosition }}
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
                            
                            {/* テキストオーバーレイ */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                <span className="text-white/50 text-xs tracking-[0.3em] uppercase block mb-2">
                                    {cards[0].subtitle}
                                </span>
                                <h4 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                                    {cards[0].title}
                                </h4>
                            </div>

                            {/* 装飾ナンバー */}
                            <span className="absolute top-6 right-6 text-white/10 text-8xl md:text-9xl font-black">
                                01
                            </span>
                        </div>
                    </div>

                    {/* サブカード - 右縦積み */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
                        {cards.slice(1).map((card, index) => (
                            <div key={index} className="relative group flex-1 min-h-[200px] md:min-h-0">
                                <div className="relative h-full rounded-[1.5rem] overflow-hidden shadow-xl shadow-stone-200/50">
                                    <Image
                                        src={card.imgSrc}
                                        alt={card.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ objectPosition: card.objectPosition }}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
                                    
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase block mb-1">
                                            {card.subtitle}
                                        </span>
                                        <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                                            {card.title}
                                        </h4>
                                    </div>

                                    <span className="absolute top-4 right-4 text-white/10 text-5xl md:text-6xl font-black">
                                        0{index + 2}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConcernsSection;
