import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        value: false
    },
    reducers: {
        openPopup: (state) => {
            state.value = true;
        },
        closePopup: (state) => {
            state.value = false;
        }
    }
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;