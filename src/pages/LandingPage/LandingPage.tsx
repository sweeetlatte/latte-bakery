import HeroSection from "../../components/Landing Page/HeroSection";
// import Carousel from "./components/Landing Page/Carousel";
import AboutUs from "../../components/Landing Page/AboutUs";
import Products from "../../components/Landing Page/Products";
import Blog from "../../components/Landing Page/Blog";
import GetInTouch from "../../components/Landing Page/GetInTouch";
import ScrollToTop from "../../components/Landing Page/ScrollToTop";

export default function LandingPage() {
    return (
        <div className="font-body text-center mx-auto bg-dark-bg text-white">
            <HeroSection />
            <ScrollToTop />
            <AboutUs />
            <div className="relative pt-20 pr-[9.875rem]">
                <Products />
            </div>
            <Blog />
            <GetInTouch />
        </div>
    );
}
