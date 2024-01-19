import { createSlice } from "@reduxjs/toolkit";

const UserProjects = createSlice({
  name: "UserProjects",
  initialState: {
    UserProjects: [],
  },
  reducers: {
    addProject(state, action) {
      state.UserProjects.push(action.payload);
    },
   
  },
});

export const { addProject } = UserProjects.actions;
export const userProjectlist = UserProjects.reducer;
