const StrengthPoints = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">かたぎり塾の強み</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl font-bold mb-2">プロフェッショナルな指導</h3>
                        <p>トレーニング時の食事指導や運動の習慣化をお手伝いします。</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl font-bold mb-2">綺麗に痩せる体験</h3>
                        <p>ライフスタイルに合わせたプログラムを提供。</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl font-bold mb-2">科学的なアプローチ</h3>
                        <p>理学療法士が監修したプログラムで健康をサポート。</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrengthPoints;