import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    addUser(state, action) {
      state.userList.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
