import bread1 from "../../assets/images/bread-1.svg";
import about1 from "../../assets/images/about-1.png";
import about2 from "../../assets/images/about-2.png";
import SectionTitle from "./SectionTitle";

export default function AboutUs() {
    return (
        <div className="relative">
            <SectionTitle title={"About us"} />
            <img
                className="absolute -right-20 2xl:-right-16 top-40 xl:w-44 lg:top-24"
                src={bread1}
                alt="bread-1"
            />
            <div className="w-full mx-auto">
                <img width={"100%"} src={about1} alt="about-1" />
                <div className="pt-7 md:pt-3 flex items-center space-x-9 md:space-x-6">
                    <div className="basis-1/2">
                        <img width={"100%"} src={about2} alt="about-2" />
                    </div>
                    <div className="basis-1/2 text-left">
                        <div className="text-lg md:text-base">LATTE BAKERY</div>
                        <div className="pt-6 md:pt-2 text-justify xl:text-sm md:text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Porttitor vulputate cursus id erat purus quam.
                            Semper egestas ipsum pellentesque sollicitudin. Nunc
                            pellentesque ut posuere condimentum nulla. Imperdiet
                            mauris accumsan elit varius posuere lectus in
                            habitant sed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
