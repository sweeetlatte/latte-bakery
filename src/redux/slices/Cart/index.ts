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

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeProduct(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeAll(state, action) {},
        decreaseQuantity(state, action) {
            let itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        increaseQuantity(state, action) {
            let itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.items[itemIndex].quantity < 10) {
                state.items[itemIndex].quantity += 1;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
    },
});

export const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } = cart.actions;

export default cart.reducer;
