const Testimonials = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">お客様の声</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-6 bg-gray-100 shadow rounded">
                        <p className="mb-2">"本当に素晴らしい結果が出ました！"</p>
                        <span className="text-gray-600">- お客様A</span>
                    </div>
                    <div className="p-6 bg-gray-100 shadow rounded">
                        <p className="mb-2">"プロフェッショナルな指導で、続けられました！"</p>
                        <span className="text-gray-600">- お客様B</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;