import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import formReducer from './form';
import signInReducer from './signIn';
import offerReducer from './offer';

export default configureStore({
    reducer: {
        popupHandler: popupReducer,
        formContainer: formReducer,
        signInHandler: signInReducer,
        offerData: offerReducer
    }
});