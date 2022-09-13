import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 0,
            name: "default",
            price: 0,
            filling: "default",
            size: "default",
            image: "default",
            quantity: 0,
        },
    ],
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
                    ...state.items,
                    { ...action.payload, quantity: 1 },
                ];
        },
    },
});

export const { addProduct } = cart.actions;

export default cart.reducer;
