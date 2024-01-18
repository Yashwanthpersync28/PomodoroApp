import { createSlice } from "@reduxjs/toolkit";

const rememberMeSlice = createSlice({
  name: "rememberMe",
  initialState: {
    email: "",
    password: "",
    rememberMe: false,
  },
  reducers: {
    setRememberMe(state, action) {
      const { email, password, rememberMe } = action.payload;
      state.email = email;
      state.password = password;
      state.rememberMe = rememberMe;
    },
  },
});

export const { setRememberMe } = rememberMeSlice.actions;
export const rememberMeReducer = rememberMeSlice.reducer;
