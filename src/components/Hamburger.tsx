import Image from "next/image";
import {FC} from "react";
import {handleScroll} from "@/utils/globalActions";
import {menuItems} from "@/constants/constants";
import {useRouter, usePathname} from "next/navigation";

export type HamburgerProps = {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Hamburger: FC<HamburgerProps> = ({isOpen, toggleMenu}) => {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <div
            className={`fixed inset-0 z-50 transition-transform duration-300  ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="absolute bg-root right-0 top-0 h-full w-full md:w-[350px] shadow-lg p-6 overflow-y-auto">
                <div className="w-full flex justify-between items-center mb-4">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => {
                            handleScroll("home")
                            toggleMenu()
                        }}
                    >
                        <Image
                            src="https://minami-hp.s3.ap-northeast-1.amazonaws.com/S__389940471.jpg"
                            alt="Logo"
                            priority
                            width={25}
                            height={25}
                            className="mr-2 w-auto rounded-2xl"
                        />
                        <span className="noto-sans text-sm text-black">INOUT</span>
                    </div>
                    <button onClick={toggleMenu}>
                        <span className="material-symbols-outlined text-primary">
                            close
                        </span>
                    </button>
                </div>
                <nav className="w-full">
                    <ul className="space-y-4">
                        {pathname === "/" ? (
                            menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer"
                                    onClick={() => {
                                        handleScroll(item.id);
                                        toggleMenu();
                                    }}
                                >
                                    <span className="noto-sans text-sm text-as-primary uppercase">{item.en}</span>
                                    <span className="text-base font-medium text-primary">{item.jp}</span>
                                </li>
                            ))
                        ) : (
                            <li
                                className="flex justify-center items-center border-b border-gray-300 pb-2 cursor-pointer"
                                onClick={() => {
                                    router.push("/");
                                    toggleMenu();
                                }}
                            >
                                <span className="noto-sans text-sm text-primary">ホームに戻る</span>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Hamburger;