import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import accountReducer from "./slices/accountSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer,
        account: accountReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;