import { createSlice } from "@reduxjs/toolkit";

// get user form localStorage

const user = JSON.parse(localStorage.getItem("user"));

const userState = user && {
  email: user.email,
  isAdmin: user.isAdmin,
  name: user.name,
  token: user.token,
  _id: user._id,
};

export const resetState = {
  email: "",
  isAdmin: "",
  name: "",
  token: null,
  _id: "",
};

const initialState = { user: user ? userState : null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
