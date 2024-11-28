const Testimonials = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">お客様の声</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-6 bg-primary shadow rounded">
                        <p className="mb-2 text-on-primary">本当に素晴らしい結果が出ました！</p>
                        <span className="text-on-primary">- お客様A</span>
                    </div>
                    <div className="p-6 bg-primary shadow rounded">
                        <p className="mb-2 text-on-primary">プロフェッショナルな指導で、続けられました！</p>
                        <span className="text-on-primary">- お客様B</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;