import { combineReducers } from "redux";

import productModalReducer from "./slices/ProductModal";
import productReducer from "./slices/Product";
import cartReducer from "./slices/Cart";

// 6. combine slices
const reducer = combineReducers({
    modal: productModalReducer,
    product: productReducer,
    cart: cartReducer,
});

export default reducer;
