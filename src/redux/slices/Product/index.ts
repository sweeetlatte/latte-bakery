import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { randomNumber } from "../../../utils/functions";

// 1. init state
const initialState = {
    products: [
        {
            id: 0,
            name: "default",
            price: 0,
            type: "default",
            description: "default",
            filling: "default",
            size: "default",
            image: "default",
        },
    ],
};

// 2. create slice
const product = createSlice({
    // 2.1. name of this slice
    name: "product",
    // 2.2. initial state
    initialState,
    // 2.3. actions
    reducers: {
        setProductData(state, action) {
            state.products = action.payload;
        },
    },
});

// 3. export action
export const { setProductData } = product.actions;

export const fetchProductData =
    () => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
        const res = await axios.get(
            "https://623c87828e9af58789528049.mockapi.io/api/v1/bakery/product"
        );
        dispatch(setProductData(res.data));
    };


// 4. export reducer
export default product.reducer;
