export const SCHEMA_ORG_JSON = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "INOUT Gym",
    "description": "INOUTは、パーソナルトレーニング、栄養指導、メンタルケアを提供するジムです。健康的で理想的な体作りをサポートします！",
    "url": "https://www.inoutgyms.com",
    "image": "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
    "priceRange": "¥¥",
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "東京都中央区新富1-17-6 正金アパートメント入船 204",
            "addressLocality": "中央区",
            "addressRegion": "東京都",
            "postalCode": "104-0041",
            "addressCountry": "JP",
            "name": "新富町店"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "東京都品川区上大崎1-5-63 エクセレント白金台 201",
            "addressLocality": "品川区",
            "addressRegion": "東京都",
            "postalCode": "141-0021",
            "addressCountry": "JP",
            "name": "目黒店"
        }
    ],
    "telephone": "+81-80-4131-9781",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "22:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
        }
    ],
    "sameAs": [
        "https://www.instagram.com/__inoutgym__/?hl=ja"
    ]
};