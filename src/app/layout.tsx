import './globals.css';
import './globalicons.css';
import { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
    title: 'INOUT',
    description: 'INOUTのホームページです',
};

export default function RootLayout({children,}: { children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>

    );
}