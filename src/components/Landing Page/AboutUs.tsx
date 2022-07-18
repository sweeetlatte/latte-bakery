import bread1 from "../../assets/images/bread-1.svg";
import about1 from "../../assets/images/about-1.png";
import about2 from "../../assets/images/about-2.png";
import SectionTitle from "./SectionTitle";

export default function AboutUs() {
    return (
        <div className="relative">
            <SectionTitle title={"About us"} />
            <img
                className="absolute -right-20 2xl:-right-16 top-40"
                src={bread1}
                alt="bread-1"
            />
            <div className="w-full mx-auto">
                <img width={"100%"} src={about1} alt="about-1" />
                <div className="pt-7 flex items-center">
                    <img src={about2} alt="about-2" />
                    <div className="pl-12 text-left">
                        <div className="text-lg">LATTE BAKERY</div>
                        <div className="pt-6 text-justify xl:text-sm">
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
