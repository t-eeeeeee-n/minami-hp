import SectionTitle from "@/components/section/SectionTitle";
import React from "react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "30代女性 渡辺様",
            feedback: "コロナの影響で外出も少なくなり、運動習慣が崩れてしまったのを機に始めました。フィットネスと食生活のアドバイスが役立ちました。\n\n体幹を鍛える方法を知ったこともありフィットネス生活をさらに充実させ、徐々に内側からの変化を感じることができています！ジムはとてもきれいで清潔、しかも雰囲気がよくトレーナーが親切です。\n\n特別な空間で贅沢な時間を一緒に楽しめました。\n少しずつ体力とともにポジティブな変化を感じて健康を見直せるきっかけトレーニングになっています。",
            imageSrc: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "40代男性 白井様",
            feedback: "高い対応力でトレーニング指導を受けています。\n短時間でも効率よく、短期間で正確なアプローチしてくれる、万能の体型強化と体型改善に対するサポートは適切に構成されリズムのあるプログラムです。\n\nやはり長い目で見ての内容が一貫性で適切に設計してくれ、過去取り入れた知見が豊富で経験豊かな指導方法だった。正直独りでは手段追求しかね実際進化なしも解消しますね。",
            imageSrc: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "20代女性 渡部様",
            feedback: "新しい出会い！感動ある意味後押し完成！このトレーニングによりフィットアップ調整考えるあなたで始まり。笑顔大切トライ導入後ますます生活が。。。",
            imageSrc: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div>
            <SectionTitle label="Testimonials ">お客様の声</SectionTitle>

        </div>
    )
};

export default TestimonialsSection;