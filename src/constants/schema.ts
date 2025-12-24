export const DEFAULT_SCHEMA_ORG_JSON = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": "https://inoutgyms.com/#HealthClub",
    "name": "INOUTジム",
    "description": "INOUTは新富町・目黒エリアで、パーソナルトレーニング、栄養指導、メンタルケアを提供するジムです。理想の体作りと健康的なライフスタイルをトータルサポート。初めての方でも安心のプログラムが充実！",
    "url": "https://inoutgyms.com/",
    "thumbnailUrl":
        "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg",
    "telephone": "080-4131-9781",
    "email": "gym.inout.official@gmail.com",
    "image": ["https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg"],
    "priceRange": "$$",

    "address": {
        "@type": "PostalAddress",
        "streetAddress": "東京都中央区新富1-17-6 正金アパートメント入船 204",
        "addressLocality": "中央区",
        "addressRegion": "東京都",
        "postalCode": "104-0041",
        "addressCountry": "JP"
    },

    "subOrganization": [
        {
            "@type": "HealthClub",
            "name": "INOUTジム 新富町店",
            "url": "https://inoutgyms.com/shintomi",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "東京都中央区新富1-17-6 正金アパートメント入船 204",
                "addressLocality": "中央区",
                "addressRegion": "東京都",
                "postalCode": "104-0041",
                "addressCountry": "JP"
            }
        },
        {
            "@type": "HealthClub",
            "name": "INOUTジム 目黒店",
            "url": "https://inoutgyms.com/meguro",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "東京都品川区上大崎1-5-63 エクセレント白金台 201",
                "addressLocality": "品川区",
                "addressRegion": "東京都",
                "postalCode": "141-0021",
                "addressCountry": "JP"
            }
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

    "amenityFeature": [
        {
            "@type": "LocationFeatureSpecification",
            "name": "シャワー",
            "value": "true"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "パーソナルトレーニング",
            "value": "true"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "栄養指導",
            "value": "true"
        },
        {
            "@type": "LocationFeatureSpecification",
            "name": "トレーニングウェア貸し出し",
            "value": "true",
            "description": "ジムではトレーニングウェアの貸し出しを提供しており、手ぶらでご利用いただけます。"
        }
    ],

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

    "currenciesAccepted": "JPY",
    "paymentAccepted": "Cash, Credit Card",

    "sameAs": [
        "https://www.instagram.com/__inoutgym__/?hl=ja",
        "https://maps.app.goo.gl/47qZvaUzPCeA8PzM7",
        "https://maps.app.goo.gl/3DE8DYjbjs6r4stB7"
    ]
};
