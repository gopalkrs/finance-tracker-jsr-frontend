import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import accountReducer from "./slices/accountSlice";
import transactionReducer from "./slices/transactionSlice";
import userStatsReducer from "./slices/dashboardSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer,
        account: accountReducer,
        transaction: transactionReducer,
        userStats : userStatsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;