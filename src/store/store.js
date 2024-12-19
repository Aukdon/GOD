import { configureStore } from "@reduxjs/toolkit";
import signInTokenReducer from "./reducer/signInTokenReducer.js";

let store = configureStore({
    reducer: {
        signInTokenReducer
    },
    devTools: true
});

export default store