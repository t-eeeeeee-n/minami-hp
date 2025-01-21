export interface SocialLinks {
    instagram: string;
    line?: string;
}

export interface Profile {
    name: string;
    japaneseName: string;
    role?: string;
    qualifications?: string[];
    expertise?: string;
    expertiseDescription?: string;
    message: string;
    imageSrc: string;
    socialLinks: SocialLinks;
}

export const profiles: Profile[] = [
    {
        name: "Minami Ichinokawa",
        japaneseName: "市ノ川 陽",
        role: "INOUT代表",
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
    },
    {
        name: "Genki Shirayama",
        japaneseName: "臼山 元気",
        role: "目黒・白金台店代表",
        message:
            "前職は心身共に鍛える為に航空自衛隊に勤めておりました！\n" +
            "2022年はSSA関東大会に出場し4位入賞、\n" +
            "2023年はマッスルゲート奈良大会でTOP5の成績を残しました。\n" +
            "僕の持っている実践的な知識、" +
            "ノウハウをわかりやすく丁寧にご指導させて頂けたらと思います！\n" +
            "宜しくお願い致します！",
        imageSrc:
            "https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__145514503.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/example",
        },
    },
];
