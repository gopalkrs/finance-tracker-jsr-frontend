import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarIsOpen: false
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.sidebarIsOpen = true;
        }
        ,
        closeSidebar: (state) => {
            state.sidebarIsOpen = false;
        }
    }
});

export const {openSidebar, closeSidebar} = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;