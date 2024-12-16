import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

// Define the type for the state
interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | false;
}

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: false,
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
};

const handleRejected = (state: AuthState, action: PayloadAction<unknown>) => {
  state.isLoading = false;

  // Checking if the action payload is a string (from rejectWithValue)
  if (typeof action.payload === "string") {
    state.error = action.payload;
  } else {
    // You can customize this based on your expected error structure
    state.error = "An unknown error occurred";
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
        console.log("Register Fulfilled Payload:", action.payload);
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
