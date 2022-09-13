import { createSlice } from "@reduxjs/toolkit";

import { CartData } from "./types";

const initialState: CartData = {
    items: [],
};

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            let itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else
                state.items = [
                    { ...action.payload, quantity: 1 },
                    ...state.items,
                ];

            localStorage.setItem("cartItem", JSON.stringify(state.items));
        },
        removeProduct(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem("cartItem", JSON.stringify(state.items));
        },
        removeAll(state, action) {},
    },
});

export const { addProduct, removeProduct } = cart.actions;

export default cart.reducer;
