import HeroSection from "@/components/HeroSection";
import StrengthPoints from "@/components/StrengthPoints";
import Testimonials from "@/components/Testimonials";
import ScrollBox from "@/components/ScrollBox";
import AboutSection from "@/components/AboutSection";
import ConcernsSection from "@/components/ConsultationSection";

export default function HomePage() {
    return (

        <div className="min-h-screen">
            <div className="">
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
            <StrengthPoints/>
            <Testimonials/>
        </div>
    );
}