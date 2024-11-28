const HeroSection = () => {
    return (
        <div>
            {/* 上部キャッチコピー */}
            <div className="text-center py-8">
                <p className="zen-old-mincho font-bold text-xs">
                    Your True Beauty and Strength
                </p>
                <h1 className="zen-old-mincho text-5xl font-extrabold">
                    <span className="block">あなた本来の</span>
                    <span className="block">美しさと強さを</span>
                </h1>
            </div>

            <div className="flex justify-center">
                <div
                    className="relative bg-cover bg-center h-[300px] md:h-[500px] w-full max-w-6xl md:mx-20 rounded-[36px]"
                    style={{
                        backgroundImage: `url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/test.jpg')`,
                    }}
                >
                    {/* 背景に重なるテキスト */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-12">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">INSIDE</h2>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">AND OUT.</h2>
                        <p className="noto-sans-jp text-sm md:text-base mt-4">
                            継続しやすさNo.1を目指して、あなたの美しさと健康をサポートします。
                        </p>
                        <div className="mt-6">
                            <button
                                className="noto-sans-jp px-8 py-3 bg-primary text-on-primary text-sm md:text-base rounded-md hover:bg-primary">
                                初回体験 0円
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
