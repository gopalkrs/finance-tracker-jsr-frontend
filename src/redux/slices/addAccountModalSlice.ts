import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddAccountModal: false
};

const addAccountModalSlice = createSlice({
    name: "addAccountModal",
    initialState,
    reducers: {
        showAddAccountModal: (state) => {
            state.showAddAccountModal = true;
        }
        ,
        closeAddAccountModal: (state) => {
            state.showAddAccountModal = false;
        }
    }
});

export const {showAddAccountModal, closeAddAccountModal} = addAccountModalSlice.actions;
export const addAccountModalReducer = addAccountModalSlice.reducer;