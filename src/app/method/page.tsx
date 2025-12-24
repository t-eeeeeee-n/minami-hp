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
    const schemaOrgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "選ばれる理由 - INOUTジム",
        "description": "INOUTジムの独自メソッドをご紹介。",
        "author": {
            "@type": "Organization",
            "name": "INOUTジム"
        },
        "publisher": {
            "@type": "Organization",
            "name": "INOUTジム",
            "logo": {
                "@type": "ImageObject",
                "url": "https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg"
            }
        },
        "datePublished": "2025-02-01",
        "dateModified": "2025-02-01",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://inoutgyms.com/method"
        }
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
            />
            <main>
                <Client />
            </main>
        </>
    )
};

export default Page;
