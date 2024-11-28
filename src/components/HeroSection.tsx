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
                        <p className="text-lg md:text-3xl font-bold mt-4">
                            人生を変える
                        </p>
                        <div className="mt-6">
                            <div
                                className="noto-sans-jp px-6 py-2 bg-primary text-on-primary text-sm md:text-base rounded-full shadow-md">
                                月額 ¥14,900～
                            </div>
                        </div>
                    </div>
                    <p className="text-white absolute bottom-4 right-4 noto-sans-jp text-sm md:text-base  text-right leading-relaxed hidden md:block">
                        継続しやすさNo.1を目指して、<br/>
                        あなたの美しさと健康をサポートします。
                    </p>
                </div>
            </div>
            <div className="mt-4 px-4 md:hidden text-center">
                <p className="noto-sans-jp text-sm text-secondary leading-relaxed">
                    継続しやすさNo.1を目指して、<br/>
                    あなたの美しさと健康をサポートします。
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
