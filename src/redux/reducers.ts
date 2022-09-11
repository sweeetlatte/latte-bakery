import { combineReducers } from "redux";

import productModalReducer from "./slices/ProductModal";

const reducer = combineReducers({ modal: productModalReducer });

export default reducer;
