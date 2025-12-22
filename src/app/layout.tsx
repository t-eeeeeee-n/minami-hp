import '@/styles/globals.css';
import '@/styles/globalicons.css';
import '@/styles/globalFont.css'

import { Metadata } from 'next';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Toaster} from "react-hot-toast";
import {DEFAULT_METADATA} from "@/constants/metadata";
import {DEFAULT_SCHEMA_ORG_JSON} from "@/constants/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="ja">
        <head>
            <link rel="canonical" href="https://inoutgyms.com/"/>
            <meta name="thumbnail" content="https://minami-hp.s3.ap-northeast-1.amazonaws.com/24078482_m.jpg" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(DEFAULT_SCHEMA_ORG_JSON),
                }}
            ></script>
        </head>
        <body>
        <GoogleAnalytics />
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 5000,
                className: 'single-line-toast',
            }}
        />
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}