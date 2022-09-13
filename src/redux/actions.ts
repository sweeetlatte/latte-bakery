// 5. export action in this file for easier import
export { openProductModal, closeProductModal } from "./slices/ProductModal";
export { fetchProductData } from "./slices/Product";
export {
    addProduct,
    removeProduct,
    removeAll,
    decreaseQuantity,
    increaseQuantity,
} from "./slices/Cart";
