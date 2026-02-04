import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-stone-50 pt-24 pb-16">
        <div className="text-center px-6">
          <p className="text-stone-400 text-sm font-medium tracking-widest mb-4">
            404 ERROR
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              トップページへ
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 bg-white text-stone-800 text-sm font-medium rounded-full border border-stone-200 hover:bg-stone-50 transition-all"
            >
              ブログを見る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
