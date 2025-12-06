import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import { addAccountModalReducer } from "./slices/addAccountModalSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer,
        addAccountModal: addAccountModalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;