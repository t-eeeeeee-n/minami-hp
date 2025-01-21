export interface MenuItem {
    id: string;
    en: string;
    jp: string;
    path: string;
    scrollBox: boolean
    icon?: string;
}

export const menuItems: MenuItem[] = [
    { id: "about-us", en: "About Us", jp: "INOUTとは", path: "/", scrollBox: true, icon: "person" },
    { id: "before-after", en: "Before・After", jp: "ビフォー・アフター", path: "/", scrollBox: false },
    { id: "features", en: "Features", jp: "INOUTの特徴", path: "/", scrollBox: true, icon: "edit" },
    { id: "reason", en: "Reason", jp: "選ばれる理由", path: "/", scrollBox: true, icon: "flag_2" },
    { id: "reason-detail", en: "Reason Detail", jp: "選ばれる理由 - 詳細", path: "/method", scrollBox: false },
    { id: "plan", en: "Plan", jp: "料金プラン", path: "/", scrollBox: true, icon: "currency_yen" },
    { id: "testimonials", en: "Testimonials", jp: "お客様の声", path: "/", scrollBox: true, icon: "chat" },
    { id: "profile", en: "Trainer profile", jp: "トレーナー紹介", path: "/", scrollBox: false },
    { id: "apply-flow", en: "Apply Flow", jp: "お申込みの流れ", path: "/", scrollBox: true, icon: "play_circle" },
    { id: "trial-flow", en: "Trial Flow", jp: "体験のお申込み", path: "/", scrollBox: false },
    { id: "access", en: "Access", jp: "アクセス", path: "/", scrollBox: false },
    { id: "contact", en: "Contact", jp: "お問い合わせ", path: "/reserve", scrollBox: false },
];
