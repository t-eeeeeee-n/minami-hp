export const DEFAULT_SCHEMA_ORG_JSON = {
    "@context": "https://schema.org",
    "name": "INOUTジム",
    "description": 'INOUTは新富町・目黒エリアで、パーソナルトレーニング、栄養指導、メンタルケアを提供するジムです。理想の体作りと健康的なライフスタイルをトータルサポート。初めての方でも安心のプログラムが充実！',
    "url": "https://inoutgyms.com/",
    "telephone": "080-4131-9781",
    "email": "gym.inout.official@gmail.com",
    "image": "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "東京都中央区新富1-17-6 正金アパートメント入船 204",
            "addressLocality": "中央区",
            "addressRegion": "東京都",
            "postalCode": "104-0041",
            "addressCountry": "JP",
            "name": "INOUT 新富町店"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "東京都品川区上大崎1-5-63 エクセレント白金台 201",
            "addressLocality": "品川区",
            "addressRegion": "東京都",
            "postalCode": "141-0021",
            "addressCountry": "JP",
            "name": "INOUT 目黒店"
        }
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "080-4131-9781",
        "contactType": "customer service",
        "email": "gym.inout.official@gmail.com"
    },
    // "aggregateRating": {
    //     "@type": "AggregateRating",
    //     "ratingValue": "4.8",
    //     "reviewCount": "120"
    // },
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
    ]
};