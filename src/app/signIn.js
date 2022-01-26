import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        value: false
    },
    reducers: {
        signIn: (state) => {
            state.value = true;
        },
        signOut: (state) => {
            state.value = false;
        }
    }
})

export const { signIn, signOut } = signInSlice.actions;
export default signInSlice.reducer;