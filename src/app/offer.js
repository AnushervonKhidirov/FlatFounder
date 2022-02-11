import { createSlice } from "@reduxjs/toolkit";

export const offerSlice = createSlice({
    name: 'offer',
    initialState: {
        value: {
            action: null,
            property: null,
            form: {
                address: null,
                description: null
            }
        }
    },
    reducers: {
        setOfferData: (state, data) => {
            state.value = data.payload;
        },
        setFormData: (state, data) => {
            state.value.form = data.payload;
        },
        setFormDataDefault: (state) => {
            state.value.form = {
                address: null,
                description: null
            };
        }
    }
})

export const { setOfferData, setFormData, setFormDataDefault } = offerSlice.actions;
export default offerSlice.reducer;