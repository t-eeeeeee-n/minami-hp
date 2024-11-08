const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">続けられる、だから変わる 綺麗なダイエット</h1>
                    <p className="mb-6">ウェア・タオル・靴 無料でレンタル! 手ぶらで通える</p>
                    <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
                        初回体験 0円
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img src="/path/to/hero-image.png" alt="Fitness Training" className="w-full max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
