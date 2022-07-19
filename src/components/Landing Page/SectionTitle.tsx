import { Link } from "react-router-dom";

type Variant = "regular" | "one-button";

interface ISectionTitleProps {
    title: string;
    linkTo?: string;
    titleRegularButton?: string;
    variant?: Variant;
}

export default function SectionTitle({
    title,
    linkTo = "",
    titleRegularButton = "View all",
    variant = "regular",
}: ISectionTitleProps) {
    return (
        <div className="relative text-left w-full h-fit">
            <h6 className="font-title text-[200px] xl:text-[160px] lg:text-[120px] sm:text-[50px] text-white-rgba">
                {title}
            </h6>
            <div className="absolute left-[5%] bottom-1/3 flex flex-row items-center justify-between w-[95%]">
                <h6 className="font-title text-7xl xl:text-[3.5rem] lg:text-[2.75rem] sm:text-2xl text-white">
                    {title}
                </h6>
                {variant === "one-button" && linkTo && (
                    <Link to={`${linkTo}`}>
                        <button className="regular-button">
                            {titleRegularButton}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
