import { Metadata } from 'next';

export const DEFAULT_METADATA: Metadata = {
    title: 'INOUTジム - 健康と理想の体作りをサポート',
    description: 'INOUTは、パーソナルトレーニング、栄養指導、メンタルケアを提供するジムです。健康的で理想的な体作りをサポートします！',
    openGraph: {
        title: 'INOUTジム - 健康と理想の体作りをサポート',
        description: 'パーソナルトレーニングと健康管理を提供するINOUT。運動、栄養、メンタルケアをトータルサポート。',
        url: 'https://www.inoutgyms.com',
        siteName: 'INOUT Gym',
        images: [
            {
                url: 'https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg',
                width: 1200,
                height: 630,
                alt: 'INOUT Gym - 理想的な体作り',
            },
        ],
        locale: 'ja_JP',
        type: 'website',
    },
    // instagram: {
    //     username: '@inoutgym',
    //     profile: 'https://www.instagram.com/__inoutgym__/?hl=ja',
    //     title: 'INOUTジム - 健康と理想の体作りをサポート',
    //     description: 'INOUTは、運動、栄養、メンタルケアのトータルサポートを提供します。理想の体作りをお手伝いします！',
    //     images: ['https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg'],
    // },
    alternates: {
        canonical: 'https://www.inoutgyms.com',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    keywords: ['新富町 ジム', '新富町 パーソナルジム', '目黒 ジム', '目黒 パーソナルジム', 'パーソナルトレーニング', '健康管理', 'ダイエット'],
};
