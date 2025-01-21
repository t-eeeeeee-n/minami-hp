export const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;

        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}