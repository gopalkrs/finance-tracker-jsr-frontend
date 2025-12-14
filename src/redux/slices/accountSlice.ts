import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
  //type PayloadAction,
} from "@reduxjs/toolkit";
import api from "../api";
import type { Account, AccountState } from "@/types/account";

export const createAccount = createAsyncThunk<Account, Account>(
  "/account/create",
  async (accountData, thunkAPI) => {
    try {
      const res = await api.post("/account/add", accountData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to add account"
      );
    }
  }
);

export const getAllAccounts = createAsyncThunk<Array<Account>>(
  "/account/getAllAccounts",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/account/users");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to add account"
      );
    }
  }
);

export const deleteAccountById = createAsyncThunk<Account, number>(
  "/account/deleteAccountById",
  async (id, thunkAPI) => {
    try {
      const res = await api.delete(`/account/delete/users/${id}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to add account"
      );
    }
  }
);

const initialState: AccountState = {
  allAccounts: [],
  account: null,
  isLoadingAccount: false,
  error: null,
  deleteAccountStatus: null,
  deletedAccount: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        //get user data
        state.isLoadingAccount = true;
      })
      .addCase(
        createAccount.fulfilled,
        (state: AccountState, action: PayloadAction<Account>) => {
          state.isLoadingAccount = false;
          state.account = action.payload;
        }
      )
      .addCase(createAccount.rejected, (state) => {
        state.isLoadingAccount = false;
        state.error = "Failed to add account";
      })
      .addCase(getAllAccounts.pending, (state) => {
        //get user data
        state.isLoadingAccount = true;
      })
      .addCase(
        getAllAccounts.fulfilled,
        (state: AccountState, action: PayloadAction<Array<Account>>) => {
          state.isLoadingAccount = false;
          state.allAccounts = action.payload;
        }
      )
      .addCase(getAllAccounts.rejected, (state) => {
        state.isLoadingAccount = false;
      })
      .addCase(deleteAccountById.fulfilled, (state: AccountState, action) => {
        state.isLoadingAccount = false;
        state.deleteAccountStatus = "success";
        state.deletedAccount = action.payload;
        state.allAccounts = state.allAccounts.filter(
          (acc) => acc.id !== action.payload.id
        );
      })
      .addCase(deleteAccountById.rejected, (state) => {
        state.isLoadingAccount = false;
      });
  },
});

export const accountReducer = accountSlice.reducer;
export default accountReducer;
