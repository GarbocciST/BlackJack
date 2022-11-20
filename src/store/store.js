import { configureStore } from "@reduxjs/toolkit";
import { blackJackSlice } from "./blackJack";



export const store = configureStore({
    reducer: {
        blackJack: blackJackSlice.reducer
    }
});