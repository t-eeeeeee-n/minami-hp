import React from "react";
import { Metadata } from 'next';
import Client from "@/app/reserve/client";

export const metadata: Metadata = {
    title: '体験予約 - INOUTジム',
    description: 'INOUTジムの体験予約はこちら。新富町・目黒のパーソナルジムで、初回体験を受付中。お気軽にお問い合わせください。',
    openGraph: {
        title: '体験予約 - INOUTジム',
        description: 'INOUTジムの体験予約ページ。新富町・目黒でのパーソナルトレーニング体験を受付中。',
        url: 'https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg',
    },
};

const Page: React.FC = () => {

    return <Client />
};

export default Page;
