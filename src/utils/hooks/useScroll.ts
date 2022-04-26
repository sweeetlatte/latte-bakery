import { useRef } from "react";

const useScroll = () => {
    const eRef = useRef<null | HTMLElement>(null);
    const executeScroll = () =>
        eRef &&
        eRef.current &&
        eRef.current.scrollIntoView({ behavior: "smooth" });

    return [eRef, executeScroll];
};

export default useScroll;
