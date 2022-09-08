import banner1 from "../assets/images/banner-1.png";

export default function Carousel() {
    return (
        <div className="w-screen h-screen absolute top-0 bg-no-repeat bg-cover">
            <img src={banner1} alt="banner" />
        </div>
    );
}
