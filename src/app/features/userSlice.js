import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = null;
    },
    authIsReady: (state) => {
      state.isAuthReady = false;
    },
  },
});

export const { login, logOut, authIsReady } = userSlice.actions;
export default userSlice.reducer;
