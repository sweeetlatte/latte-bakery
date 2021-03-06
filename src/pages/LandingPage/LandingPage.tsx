import HeroSection from "../../components/Landing Page/HeroSection";
// import Carousel from "./components/Landing Page/Carousel";
import AboutUs from "../../components/Landing Page/AboutUs";
import Products from "../../components/Landing Page/Products";
import Blog from "../../components/Landing Page/Blog";
import GetInTouch from "../../components/Landing Page/GetInTouch";
import ScrollToTop from "../../components/Landing Page/ScrollToTop";
import useScroll from "../../utils/hooks/useScroll";

export default function LandingPage() {
    const [aboutUsRef, executeAboutUsScroll] = useScroll() as [
        HTMLElement | null,
        () => void
    ];
    const [productsRef, executeProductsScroll] = useScroll() as [
        HTMLElement | null,
        () => void
    ];
    const [blogRef, executeBlogScroll] = useScroll() as [
        HTMLElement | null,
        () => void
    ];
    const [getInTouchRef, executeGetInTouchScroll] = useScroll() as [
        HTMLElement | null,
        () => void
    ];

    const navBarProps = {
        executeAboutUsScroll,
        executeProductsScroll,
        executeBlogScroll,
        executeGetInTouchScroll,
    };

    return (
        <div className="font-body text-center mx-auto bg-dark-bg text-white">
            <HeroSection navBarProps={navBarProps} />
            <ScrollToTop />
            <div className="space-y-20 md:space-y-14 px-36 2xl:px-16 sm:px-8 py-20">
                <div ref={aboutUsRef as any}>
                    <AboutUs />
                </div>
                <div ref={productsRef as any}>
                    <Products />
                </div>
                <div ref={blogRef as any}>
                    <Blog />
                </div>
                <div ref={getInTouchRef as any}>
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
}
