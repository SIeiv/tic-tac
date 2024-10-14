import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "./main.slice.ts";

const store = configureStore({
    reducer: mainSlice
})

export default store;
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']