import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import api from "../api";
import type {
  AuthState,
  LoginPayload,
  SignupPayload,
  User,
} from "../../types/authTypes";

export const loadUser = createAsyncThunk("/users/me", async (_, thunkAPI) => {
  try {
    const res = await api.get("/users/me");
    //console.log("response in redux : ",res.data);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Failed to load user"
    );
  }
});

export const loginUser = createAsyncThunk<User, LoginPayload>(
  "/auth/login",
  async (loginData, thunkAPI) => {
    try {
      const res = await api.post<User>("/auth/login", loginData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Login Failed"
      );
    }
  }
);

export const createUser = createAsyncThunk<SignupPayload>(
  "/auth/create",
  async (userData, thunkAPI) => {
    try {
      const res = await api.post("/users/create", userData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Signup Failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await api.post("/api/auth/logout");
      return;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Logout failed"
      );
    }
  }
);

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state: AuthState) => {
        //get user data
        state.isLoading = true;
      })
      .addCase(
        loadUser.fulfilled,
        (state: AuthState, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        }
      )
      .addCase(loadUser.rejected, (state: AuthState) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state: AuthState) => {
        //login request
        state.isLoading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state: AuthState, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        }
      )
      .addCase(loginUser.rejected, (state: AuthState) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export default authReducer;
