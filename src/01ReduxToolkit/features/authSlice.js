import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    handleLogin: (state, action) => {
      state.isLogin = true;
    },
    handleLogOut: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { handleLogOut, handleLogin } = authSlice.actions;
export default authSlice.reducer;
