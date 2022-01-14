import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        type: '',
        currentStructure: [],
        structures: {
            signIn: [
                {
                    type: 'text',
                    placeholder: 'Логин',
                    name: 'login'
                },
                {
                    type: 'password',
                    placeholder: 'Пароль',
                    name: 'password'
                }
            ],
            signUp: [
                {
                    type: 'text',
                    placeholder: 'Ф.И.О',
                    name: 'userName'
                },
                {
                    type: 'text',
                    placeholder: 'Логин',
                    name: 'login'
                },
                {
                    type: 'password',
                    placeholder: 'Пароль',
                    name: 'password'
                },
                {
                    type: 'password',
                    placeholder: 'Повторите пароль',
                    name: 'repeatPassword'
                }
            ]
        }
    },
    reducers: {
        signInType: (state) => {
            state.name = 'Вход';
            state.type = 'signIn';
            state.currentStructure = state.structures.signIn;
        },
        signUpType: (state) => {
            state.name = 'Регистрация';
            state.type = 'signUp';
            state.currentStructure = state.structures.signUp;
        }
    }
});

export const { signInType, signUpType } = formSlice.actions;
export default formSlice.reducer;