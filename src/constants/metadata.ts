import { Metadata } from 'next';

export const DEFAULT_METADATA: Metadata = {
    title: 'INOUTジム - 心身共に豊かにするパーソナルジム',
    description: 'INOUTは新富町・目黒エリアで、パーソナルトレーニング、栄養指導、メンタルケアを提供するジムです。理想の体作りと健康的なライフスタイルをトータルサポート。初めての方でも安心のプログラムが充実！',
    openGraph: {
        title: 'INOUTジム - 心身共に豊かにするパーソナルジム',
        description: '新富町・目黒のパーソナルトレーニングジム「INOUT」。運動、栄養、メンタルケアを通じて健康的で理想の体を目指します。初心者でも安心のサポート付き！',
        url: 'https://inoutgyms.com/',
        siteName: 'INOUT Gym',
        images: [
            {
                url: 'https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg',
                width: 1200,
                height: 630,
                alt: 'INOUT Gym - 理想の体作りを実現するジム',
            },
        ],
        locale: 'ja_JP',
        type: 'website',
    },
    alternates: {
        canonical: 'https://inoutgyms.com/',
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
    keywords: [
        'INOUT ジム',
        'INOUT パーソナルジム',
        '新富町 ジム',
        '新富町 パーソナルジム',
        '築地 ジム',
        '築地 パーソナルジム',
        '目黒 ジム',
        '目黒 パーソナルジム',
        'パーソナルトレーニング',
        '健康管理',
        'ダイエット',
        'メンタルケア',
        '初心者向けジム',
        'ボディメイク',
    ],
};