import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import formReducer from './form';
import signInReducer from './signIn';

export default configureStore({
    reducer: {
        popupHandler: popupReducer,
        formContainer: formReducer,
        signInHandler: signInReducer
    }
});