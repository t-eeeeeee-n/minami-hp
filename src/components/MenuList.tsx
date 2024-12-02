const menuItems = [
    { id: "about-us", en: "About Us", jp: "INOUTとは" },
    { id: "program", en: "Program", jp: "プログラム" },
    { id: "before-after", en: "Before・After", jp: "ビフォー・アフター" },
    { id: "reason", en: "Reason", jp: "選ばれる理由" },
    { id: "apply-flow", en: "Apply Flow", jp: "お申込みの流れ" },
    { id: "plan", en: "Pricing", jp: "料金プラン" },
    { id: "faq", en: "Q&A", jp: "お客様の声" },
    { id: "trainer", en: "Trainer profile", jp: "トレーナー紹介" },
    { id: "trial-flow", en: "Trial Flow", jp: "体験のお申込み" },
    { id: "access", en: "Access", jp: "アクセス" },
    { id: "contact", en: "Contact", jp: "お問い合わせ" },
]

const MenuList = () => {
    const handleScroll = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ul className="space-y-4">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer"
                    onClick={() => handleScroll(item.id)}
                >
                    <span className="noto-sans text-sm text-as-primary">{item.en}</span>
                    <span className="noto-sans-jp text-base font-medium text-primary">{item.jp}</span>
                </li>
            ))}
        </ul>
    );
};

export default MenuList;