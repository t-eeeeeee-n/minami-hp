import React from "react";
import { Metadata } from 'next';
import Client from "@/app/method/client";

export const metadata: Metadata = {
    title: '選ばれる理由 - INOUTジム',
    description: 'INOUTジムの独自メソッドをご紹介。オーダートレーニング、整体ケア、食事指導、コーチングを組み合わせた最適なアプローチで理想の体を目指します。',
    openGraph: {
        title: 'INOUTメソッド | 効果的なトレーニングとケア',
        description: 'INOUTジムが提供するオーダートレーニング、整体ケア、食事指導、コーチングのメソッドを詳しく解説。',
        url: 'https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg',
    },
};

const Page = () => {
    return <Client />
};

export default Page;
