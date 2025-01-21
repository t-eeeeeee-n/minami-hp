import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigateAndScroll = () => {
    const router = useRouter();
    const currentPath = usePathname();
    const scrollTargetId = useRef<string | null>(null);

    useEffect(() => {
        // パスが変更された後にスクロールを実行
        if (scrollTargetId.current) {
            scrollToElement(scrollTargetId.current);
            scrollTargetId.current = null;
        }
    }, [currentPath]); // パスが変わったら実行

    const navigateAndScroll = async (id: string, targetPath: string) => {
        if (targetPath !== currentPath) {
            // パスが異なる場合は遷移してからスクロール
            scrollTargetId.current = id;
            router.push(targetPath);
        } else {
            // 同じページの場合はスクロールのみ
            scrollToElement(id);
        }
    };

    const scrollToElement = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const headerHeight = document.querySelector("header")?.offsetHeight || 0;

            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return { navigateAndScroll };
};