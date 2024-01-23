import { createSlice } from "@reduxjs/toolkit";

const UserProjects = createSlice({
  name: "UserProjects",
  initialState: {
    UserProjects: [],
  },
  reducers: {
    addproject(state, action) {
      state.UserProjects.push(action.payload);
    },
   
  },
});

export const { addproject } = UserProjects.actions;
export const userProjectlist = UserProjects.reducer;
