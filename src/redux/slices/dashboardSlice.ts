import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
  //type PayloadAction,
} from "@reduxjs/toolkit";
import api from "../api";
import type { UserStatsResponse, UserStatsState } from "@/types/dashboard";

export const getUserStats = createAsyncThunk<UserStatsResponse>(
  "/dashboard/user-stats",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/users/user-stats");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to fetch user stats"
      );
    }
  }
);


const initialState: UserStatsState = {
  accountStats: null,
  isLoadingStats: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserStats.pending, (state) => {
        //get user data
        state.isLoadingStats = true;
      })
      .addCase(
        getUserStats.fulfilled,
        (state: UserStatsState, action: PayloadAction<UserStatsResponse>) => {
          state.isLoadingStats = false;
          state.accountStats = action.payload;
        }
      )
      .addCase(getUserStats.rejected, (state) => {
        state.isLoadingStats = false;
        state.error = "Failed to add account";
      })
      
  },
});

export const userStatsReducer = dashboardSlice.reducer;
export default userStatsReducer;
