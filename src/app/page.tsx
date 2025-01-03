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
import React from "react";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Campaign />
            <div id="home" className="md:px-0">
                <HeroSection/>
            </div>
            <div className="bg-white py-12">
                <ScrollBox/>
            </div>
            <div id="about-us" className="py-16 px-6 lg:px-0">
                <FadeIn>
                    <AboutSection/>
                </FadeIn>
            </div>
            <div id="program" className="bg-white py-16 px-6 lg:px-0">
                <FadeIn>
                    <ConcernsSection/>
                </FadeIn>
            </div>
            <div id="before-after" className="py-16 px-6 lg:px-0">
                <FadeIn>
                    <BeforeAfterSection/>
                </FadeIn>
            </div>
            <div id="reason" className="bg-white py-16 lg:px-0">
                <FadeIn>
                    <ReasonSection/>
                </FadeIn>
            </div>
            <div id="apply-flow" className="py-16 px-6 lg:px-0">
                <FadeIn>
                    <ApplyFlowSection/>
                </FadeIn>
            </div>
            <div id="plan" className="bg-white py-16 px-6 lg:px-0">
                <FadeIn>
                    <PlanSection/>
                </FadeIn>
            </div>
            <div id="testimonials" className="py-16 px-6 lg:px-0">
                <FadeIn>
                    <TestimonialsSection/>
                </FadeIn>
            </div>
            <div id="profile" className="bg-white py-16 px-6 lg:px-0">
                <FadeIn>
                    <ProfileSection/>
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
    );
}
