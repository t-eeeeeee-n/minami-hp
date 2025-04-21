"use client"

import HeroSection from "@/components/HeroSection";
import ScrollBox from "@/components/ScrollBox";
import AboutSection from "@/components/section/AboutSection";
import ConcernsSection from "@/components/section/ConsultationSection";
import BeforeAfterSection from "@/components/section/BeforeAfterSection";
import ReasonSection from "@/components/section/ReasonSection";
import ApplyFlowSection from "@/components/section/ApplyFlowSection";
import FadeIn from "@/components/FadeIn";
import PlanSection from "@/components/section/PlanSection";
import TestimonialsSection from "@/components/section/TestimonialsSection";
import ProfileSection from "@/components/section/ProfileSection";
import TrialFlowSection from "@/components/section/TrialFlowSection";
import AccessSection from "@/components/section/AccessSection";
import Campaign from "@/components/Campaign";
import React, {useEffect, useRef} from "react";
import FeaturesSection from "@/components/section/FeaturesSection";
import { event as gtagEvent } from "@/lib/gtag";


const Client = ()=> {
    const sentScrollPercents = useRef<{ [key: number]: boolean }>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

            [25, 50, 75, 100].forEach((percent) => {
                if (
                    scrollPercent >= percent &&
                    !sentScrollPercents.current[percent]
                ) {
                    gtagEvent({
                        action: "scroll_depth",
                        category: "ScrollTracking",
                        label: `Reached ${percent}%`,
                        value: percent,
                    });
                    sentScrollPercents.current[percent] = true;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <main>
                <div className="min-h-screen">
                    <Campaign />
                    <div id="home" className="bg-white md:px-0">
                        <HeroSection/>
                    </div>
                    <div className="py-12">
                        <ScrollBox/>
                    </div>
                    <div id="about-us" className="bg-white py-16 px-6 lg:px-0">
                        <FadeIn>
                            <AboutSection/>
                        </FadeIn>
                    </div>
                    <div className="py-16 px-6 lg:px-0">
                        <FadeIn>
                            <ConcernsSection/>
                        </FadeIn>
                    </div>
                    <div id="before-after" className="bg-white py-16 px-6 lg:px-0">
                        <FadeIn>
                            <BeforeAfterSection/>
                        </FadeIn>
                    </div>
                    <div id="features" className="py-16 px-6 lg:px-0">
                        <FadeIn>
                            <FeaturesSection/>
                        </FadeIn>
                    </div>
                    <div id="reason" className="bg-white py-16 lg:px-0">
                        <FadeIn>
                            <ReasonSection/>
                        </FadeIn>
                    </div>
                    <div id="plan" className="py-16 px-6 lg:px-0">
                        <FadeIn>
                            <PlanSection/>
                        </FadeIn>
                    </div>
                    <div id="testimonials" className="bg-white py-16 px-6 lg:px-0">
                        <FadeIn>
                            <TestimonialsSection/>
                        </FadeIn>
                    </div>
                    <div id="profile" className="py-16 px-6 lg:px-0">
                        <FadeIn>
                            <ProfileSection/>
                        </FadeIn>
                    </div>
                    <div id="apply-flow" className="bg-white py-16 px-6 lg:px-0">
                        <FadeIn>
                            <ApplyFlowSection/>
                        </FadeIn>
                    </div>
                    <div id="trial-flow" className="py-16 px-6 lg:px-0">
                        <FadeIn>
                            <TrialFlowSection/>
                        </FadeIn>
                    </div>
                    <div id="access" className="bg-white py-16 px-6 lg:px-0">
                        <FadeIn>
                            <AccessSection/>
                        </FadeIn>
                    </div>
                </div>
            </main>
        </>

    );
}

export default Client