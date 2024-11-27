import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrengthPoints from "@/components/StrengthPoints";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
    return (

        <div className="min-h-screen bg-gray-100">

            <Header />
            <HeroSection />
            <StrengthPoints />
            <Testimonials /> {/* Adding the Testimonials component */}
        </div>
    );
}