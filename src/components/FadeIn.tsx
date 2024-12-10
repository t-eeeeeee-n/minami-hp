"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    pcThreshold?: number;
    mobileThreshold?: number;
    pcDuration?: string;
    mobileDuration?: string;
    pcRootMargin?: string;
    mobileRootMargin?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
                                           children,
                                           className = "",
                                           pcThreshold = 0.2,
                                           mobileThreshold = 0.1,
                                           pcDuration = "0.7s",
                                           mobileDuration = "0.5s",
                                           pcRootMargin = "0px",
                                           mobileRootMargin = "50px",
                                       }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [currentDuration, setCurrentDuration] = useState(pcDuration);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        const currentThreshold = isMobile ? mobileThreshold : pcThreshold;
        const currentRootMargin = isMobile ? mobileRootMargin : pcRootMargin;

        setCurrentDuration(isMobile ? mobileDuration : pcDuration);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: currentThreshold, rootMargin: currentRootMargin }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [pcThreshold, mobileThreshold, pcRootMargin, mobileRootMargin, pcDuration, mobileDuration]);

    return (
        <div
            ref={elementRef}
            className={`${className} transition-opacity ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
                transition: `opacity ${currentDuration} ease-out, transform ${currentDuration} ease-out`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
