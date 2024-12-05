import HeroSection from "@/components/HeroSection";
import StrengthPoints from "@/components/StrengthPoints";
import Testimonials from "@/components/Testimonials";
import ScrollBox from "@/components/ScrollBox";
import AboutSection from "@/components/section/AboutSection";
import ConcernsSection from "@/components/section/ConsultationSection";
import BeforeAfterSection from "@/components/section/BeforeAfterSection";
import ReasonSection from "@/components/section/ReasonSection";

export default function HomePage() {
    return (

        <div className="min-h-screen">
            <div id="home" className="pb-12">
                <HeroSection/>
            </div>
            <div className="bg-white py-12">
                <ScrollBox/>
            </div>
            <div id="about-us" className="py-16 md:px-12">
                <AboutSection/>
            </div>
            <div className="bg-white py-16 md:px-12">
                <ConcernsSection/>
            </div>
            <div id="before-after" className="py-16 md:px-12">
                <BeforeAfterSection/>
            </div>
            <div id="reason" className="bg-white py-16 md:px-12">
                <ReasonSection/>
            </div>
            <StrengthPoints/>
            <Testimonials/>
        </div>
    );
}