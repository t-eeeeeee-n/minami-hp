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
            "https://minami-hp.s3.ap-northeast-1.amazonaws.com/profile.png",
        socialLinks: {
            instagram: "https://www.instagram.com/__inoutgym__/?hl=ja",
            line: "https://line.me/R/ti/p/@243otxyn",
        },
    },
];
