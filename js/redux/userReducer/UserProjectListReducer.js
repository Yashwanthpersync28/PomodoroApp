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
      const ProjectIdToDelete = action.payload;
      state.UserProjects = state.UserProjects.filter(project => project.id !== ProjectIdToDelete);
    },
    addBackUserProject(state, action) {
      state.UserProjects.push(action.payload);
    },
   
  },
});

export const { addproject , deleteUserProject , addBackUserProject } = UserProjects.actions;
export const userProjectlist = UserProjects.reducer;
