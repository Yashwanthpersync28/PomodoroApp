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
    deleteUserProject(state, action) {
      const ProjectNameToDelete = action.payload;
      state.UserProjects = state.UserProjects.filter(project => project.name !== ProjectNameToDelete);
    },
    addBackUserProject(state, action) {
      state.UserProjects.push(action.payload);
    },
   
  },
});

export const { addproject , deleteUserProject , addBackUserProject } = UserProjects.actions;
export const userProjectlist = UserProjects.reducer;
