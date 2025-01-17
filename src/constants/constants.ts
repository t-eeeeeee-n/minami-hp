export interface MenuItem {
    id: string;
    en: string;
    jp: string;
}

export const menuItems: MenuItem[] = [
    { id: "about-us", en: "About Us", jp: "INOUTとは" },
    { id: "before-after", en: "Before・After", jp: "ビフォー・アフター" },
    { id: "features", en: "Features", jp: "INOUTの特徴" },
    { id: "reason", en: "Reason", jp: "選ばれる理由" },
    { id: "plan", en: "Plan", jp: "料金プラン" },
    { id: "testimonials", en: "Testimonials", jp: "お客様の声" },
    { id: "profile", en: "Trainer profile", jp: "トレーナー紹介" },
    { id: "apply-flow", en: "Apply Flow", jp: "お申込みの流れ" },
    { id: "trial-flow", en: "Trial Flow", jp: "体験のお申込み" },
    { id: "access", en: "Access", jp: "アクセス" },
    { id: "contact", en: "Contact", jp: "お問い合わせ" },
];