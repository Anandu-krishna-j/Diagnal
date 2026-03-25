// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { contentApi } from "../services/contentApi";
import uiReducer from "../features/uiSlice";

export const store = configureStore({
    reducer: {
        [contentApi.reducerPath]: contentApi.reducer,
        ui: uiReducer
    },
    middleware: (gDM) => gDM().concat(contentApi.middleware),
});