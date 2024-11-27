const menuItems = [
    {en: "About Us", jp: "かたぎり塾について"},
    {en: "Reason", jp: "選ばれる理由"},
    {en: "Case Study", jp: "ケーススタディ"},
    {en: "Free Trial Flow", jp: "無料体験の流れ"},
    {en: "Pricing", jp: "かたぎり塾の料金について"},
    {en: "Trainer", jp: "トレーナー紹介"},
    {en: "Q&A", jp: "よくあるご質問"},
    {en: "Location", jp: "店舗一覧"},
    {en: "News", jp: "お知らせ"},
    {en: "Medical Partnership", jp: "医療機関提携"},
    {en: "Column", jp: "コラム"},
    {en: "Contact", jp: "お問い合わせ"},
    {en: "FC", jp: "加盟店オーナー募集"},
]

const MenuList = () => (
    <ul className="space-y-4">
        {menuItems.map((item, index) => (
            <li
                key={index}
                className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
                <span className="text-sm text-red-500">{item.en}</span>
                <span className="text-base font-medium text-gray-800">{item.jp}</span>
            </li>
        ))}
    </ul>
);

export default MenuList;