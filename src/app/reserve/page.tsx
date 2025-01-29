import React from "react";
import { Metadata } from 'next';
import Head from "next/head";
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
    const schemaOrgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "INOUTジム 体験予約",
        "description": "INOUTジムの体験予約はこちら。",
        "startDate": "2025-02-01T10:00:00+09:00",
        "endDate": "2025-12-31T22:00:00+09:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": [
            {
                "@type": "Place",
                "name": "INOUTジム 新富町店",
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
                "@type": "Place",
                "name": "INOUTジム 目黒店",
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
        "organizer": {
            "@type": "Organization",
            "name": "INOUTジム",
            "url": "https://inoutgyms.com/"
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
                />
            </Head>
            <main>
                <Client />
            </main>
        </>
    )
};

export default Page;
