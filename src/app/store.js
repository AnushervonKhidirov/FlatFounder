import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';

export default configureStore({
    reducer: {
        popupHandler: popupReducer
    }
});