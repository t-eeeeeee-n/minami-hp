"use client";

import HeroSection from "@/components/HeroSection";
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
import React, { useEffect, useRef } from "react";
import FeaturesSection from "@/components/section/FeaturesSection";
import { event as gtagEvent } from "@/lib/gtag";

const Client = () => {
    const sentScrollPercents = useRef<{ [key: number]: boolean }>({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

            [25, 50, 75, 100].forEach((percent) => {
                if (scrollPercent >= percent && !sentScrollPercents.current[percent]) {
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
        <div className="font-sans text-stone-700 bg-stone-50 antialiased">
            <main>
                <Campaign />

                {/* Hero Section */}
                <div id="home">
                    <HeroSection />
                </div>

                {/* About Section */}
                <section id="about-us" className="py-24 md:py-32 bg-white px-6 lg:px-12">
                    <FadeIn>
                        <AboutSection />
                    </FadeIn>
                </section>

                {/* Concerns Section */}
                <section className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                    <FadeIn>
                        <ConcernsSection />
                    </FadeIn>
                </section>

                {/* Before After Section */}
                <section id="before-after" className="py-24 md:py-32 bg-white px-6 lg:px-12">
                    <FadeIn>
                        <BeforeAfterSection />
                    </FadeIn>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                    <FadeIn>
                        <FeaturesSection />
                    </FadeIn>
                </section>

                {/* Reason Section */}
                <section id="reason" className="py-24 md:py-32 bg-white">
                    <FadeIn>
                        <ReasonSection />
                    </FadeIn>
                </section>

                {/* Plan Section - Has its own dark background */}
                <section id="plan" className="py-8 md:py-12 bg-stone-50">
                    <FadeIn>
                        <PlanSection />
                    </FadeIn>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                    <FadeIn>
                        <TestimonialsSection />
                    </FadeIn>
                </section>

                {/* Profile Section */}
                <section id="profile" className="py-24 md:py-32 bg-white px-6 lg:px-12">
                    <FadeIn>
                        <ProfileSection />
                    </FadeIn>
                </section>

                {/* Apply Flow Section */}
                <section id="apply-flow" className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                    <FadeIn>
                        <ApplyFlowSection />
                    </FadeIn>
                </section>

                {/* Trial Flow Section */}
                <section id="trial-flow" className="py-24 md:py-32 bg-white px-6 lg:px-12">
                    <FadeIn>
                        <TrialFlowSection />
                    </FadeIn>
                </section>

                {/* Access Section */}
                <section id="access" className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                    <FadeIn>
                        <AccessSection />
                    </FadeIn>
                </section>
            </main>
        </div>
    );
};

export default Client;
