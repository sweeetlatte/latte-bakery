import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openProductModal(state, action) {
            state.open = true;
        },
        closeProductModal(state, action) {
            state.open = false;
        },
    },
});

export const { openProductModal, closeProductModal } = modal.actions;

export default modal.reducer;
