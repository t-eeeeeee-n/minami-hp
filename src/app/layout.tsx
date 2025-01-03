import '@/styles/globals.css';
import '@/styles/globalicons.css';
import '@/styles/globalFont.css'
import { Metadata } from 'next';
import React from "react";
import Header from "@/components/Header";
import Campaign from "@/components/Campaign";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'INOUT',
    description: 'INOUTのホームページです',
};

export default function RootLayout({children,}: { children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
                <Header/>
                {children}
                <Campaign />
                <Footer/>
            </body>
        </html>
    );
}