import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // LocalStorage ishlatilmaydi, boshlang‘ich qiymat `null`
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
