import '@/styles/globals.css';
import '@/styles/globalicons.css';
import '@/styles/globalFont.css'
import { Metadata } from 'next';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
    title: 'INOUT',
    description: 'INOUTのホームページです',
};

export default function RootLayout({children,}: { children: React.ReactNode;
}) {
    return (
        <html lang="ja">
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