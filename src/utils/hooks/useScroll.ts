import { useRef } from "react";

/**
 * @input nothing
 * @return { HTMLElement, () => void }
 * Description: dùng useRef để lấy HTMLElement & gán cho ref + 1 function để cuộn đến element trong ref
 * Usage: 
 * gọi useScroll => có 1 ref và 1 function để active ref đó
 * #Code: const [eRef, executeRefScroll] = useScroll() as [HTMLElement | null, () => void];
 * gắn ref vào node cần scroll tới + gắn hàm vào chỗ cần click để khi hàm execute thì nó sẽ scroll đến node đã định
 */

const useScroll = () => {
    const eRef = useRef<null | HTMLElement>(null);
    const executeScroll = () =>
        eRef &&
        eRef.current &&
        eRef.current.scrollIntoView({ behavior: "smooth" });

    return [eRef, executeScroll];
};

export default useScroll;
