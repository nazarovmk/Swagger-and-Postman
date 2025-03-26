import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // ✅ Foydalanuvchini localStorage dan olish
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ LocalStorage-ga saqlash
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // ✅ LocalStorage-dan o‘chirish
    },
  },
});

export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
