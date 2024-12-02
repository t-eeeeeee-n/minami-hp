import HeroSection from "@/components/HeroSection";
import StrengthPoints from "@/components/StrengthPoints";
import Testimonials from "@/components/Testimonials";
import ScrollBox from "@/components/ScrollBox";

export default function HomePage() {
    return (

        <div className="min-h-screen">
            <HeroSection/>
            <div className="bg-white py-24">
                <ScrollBox/>
            </div>
            <StrengthPoints/>
            <Testimonials/>
        </div>
    );
}