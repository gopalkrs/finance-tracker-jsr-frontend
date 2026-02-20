import type { TransactionFormInput, TransactionOutput, TransactionState } from "@/types/transaction";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import api from "../api";

export const createTransaction = createAsyncThunk<TransactionOutput, TransactionFormInput>(
  "/transactions/add",
  async (transactionFormData, thunkAPI) => {
    try {
      const res = await api.post("/transactions/add", transactionFormData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to add transaction"
      );
    }
  }
);

export const getAllTransaction = createAsyncThunk<Array<TransactionOutput>>(
  "/transactions/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/transactions/getAll");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to get transactions"
      );
    }
  }
);


const initialState: TransactionState = {
  transactionsList: [],
  isLoadingTxn: false,
  error: null,
  txnResponse: null,
};

const transactionSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        //get user data
        state.isLoadingTxn = true;
      })
      .addCase(
        createTransaction.fulfilled,
        (state: TransactionState, action: PayloadAction<TransactionOutput>) => {
          state.isLoadingTxn = false;
          state.txnResponse = action.payload;
        }
      )
      .addCase(createTransaction.rejected, (state) => {
        state.isLoadingTxn = false;
        state.error = "Failed to add account";
      })
      .addCase(getAllTransaction.pending, (state) => {
        //get user data
        state.isLoadingTxn = true;
      })
      .addCase(
        getAllTransaction.fulfilled,
        (state: TransactionState, action: PayloadAction<Array<TransactionOutput>>) => {
          state.isLoadingTxn = false;
          state.transactionsList = action.payload;
        }
      )
      .addCase(getAllTransaction.rejected, (state) => {
        state.isLoadingTxn = false;
        state.error = "Failed to get transactions";
      })
  },
});

export const transactionReducer = transactionSlice.reducer;
export default transactionReducer;
