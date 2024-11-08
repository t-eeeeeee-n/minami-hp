import HeroSection from "@/app/Components/HeroSection";
import StrengthPoints from "@/app/Components/StrengthPoints";
import Testimonials from "@/app/Components/Testimonials";
import Header from "@/app/Components/Header";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header /> {/* Adding the Header component */}
            <HeroSection />
            <StrengthPoints />
            <Testimonials /> {/* Adding the Testimonials component */}
        </div>
    );
}