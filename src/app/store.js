import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import formReducer from './form';

export default configureStore({
    reducer: {
        popupHandler: popupReducer,
        formContainer: formReducer
    }
});