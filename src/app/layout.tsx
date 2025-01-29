import '@/styles/globals.css';
import '@/styles/globalicons.css';
import '@/styles/globalFont.css'
import { Metadata } from 'next';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Toaster} from "react-hot-toast";
import {DEFAULT_METADATA} from "@/constants/metadata";
import Head from "next/head";
import {DEFAULT_SCHEMA_ORG_JSON} from "@/constants/schema";

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({children,}: { children: React.ReactNode;
}) {
    return (
        <html lang="ja">
        <Head>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DEFAULT_SCHEMA_ORG_JSON) }} />
        </Head>
            <body>
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