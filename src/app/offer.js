import { createSlice } from "@reduxjs/toolkit";

export const offerSlice = createSlice({
    name: 'offer',
    initialState: {
        value: {},
    },
    reducers: {
        setOfferData: (state, data) => {
            console.log(data.payload);
            state.value = data.payload;
        }
    }
})

export const { setOfferData } = offerSlice.actions;
export default offerSlice.reducer;