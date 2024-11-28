import './globals.css';
import './globalicons.css';
import './globalFont.css'
import { Metadata } from 'next';
import React from "react";
import Header from "@/components/Header";

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
            </body>
        </html>
    );
}