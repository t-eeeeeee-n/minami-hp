import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-lg font-bold">かたぎり塾</div>
                <div className="space-x-4">
                    {/* Correct usage without <a> tag */}
                    <Link href="/" className="hover:text-orange-400">
                        Home
                    </Link>
                    <Link href="#about" className="hover:text-orange-400">
                        About
                    </Link>
                    <Link href="#contact" className="hover:text-orange-400">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
