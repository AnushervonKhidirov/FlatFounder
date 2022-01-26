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
                    placeholder: 'Имя',
                    name: 'name'
                },
                {
                    type: 'text',
                    placeholder: 'Фамилия',
                    name: 'surname'
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
        signInForm: (state) => {
            state.name = 'Вход';
            state.type = 'signIn';
            state.currentStructure = state.structures.signIn;
        },
        signUpForm: (state) => {
            state.name = 'Регистрация';
            state.type = 'signUp';
            state.currentStructure = state.structures.signUp;
        }
    }
});

export const { signInForm, signUpForm } = formSlice.actions;
export default formSlice.reducer;