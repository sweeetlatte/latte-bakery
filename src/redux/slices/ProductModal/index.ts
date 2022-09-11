import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    selectedProduct: {
        id: 0,
        name: "default",
        price: 0,
        type: "default",
        description: "default",
        filling: "default",
        size: "default",
        image: "default",
    },
};

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openProductModal(state, action) {
            state.open = true;
            state.selectedProduct = action.payload;
        },
        closeProductModal(state, action) {
            state.open = false;
        },
    },
});

export const { openProductModal, closeProductModal } = modal.actions;

export default modal.reducer;
