const HeroSection = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-cover bg-center py-12 md:py-24"
            style={{
                backgroundImage: `url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__38994045.jpg')`,
                backgroundPosition: 'center 40%',
                height: '600px'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center bg-white bg-opacity-70 p-6 rounded-md">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">あなた本来の美しさと強さを</h1>
                    <p className="mb-6">継続しやすさＮｏ．1</p>
                    <button className="px-6 py-3 bg-[#6fd8ef] text-white rounded hover:bg-orange-600">
                        初回体験 0円
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
