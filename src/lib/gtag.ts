export const GA_MEASUREMENT_ID = 'G-0WFQBT9GEL';

declare global {
    interface Window {
        gtag: (...args: [string, ...unknown[]]) => void;
    }
}

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};
