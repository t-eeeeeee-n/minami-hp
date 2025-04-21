'use client';

import Script from 'next/script';
import {GA_MEASUREMENT_ID} from "@/lib/gtag";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                  });
                `}
            </Script>
        </>
    );
}
