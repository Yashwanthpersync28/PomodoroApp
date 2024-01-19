import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    // addUser(state, action) {
    //   state.userList.push(action.payload);
    // },
    addUser: (state, action) => {
      const newUser = action.payload;
      state.userList.push(newUser);
    },
    addTask: (state, action) => {
      const { email, taskData } = action.payload;
      const user = state.userList.find(user => user.email === email);

      if (user) {
        user.tasks.push(taskData);
      }
    },
    // addTags: (state, action) => {
    //   const { email, tagsData } = action.payload;
    //   const user = state.userList.find(user => user.email === email);

    //   if (user) {
    //     user.Tags.push(tagsData);
    //   }
    // },
    // addProject: (state, action) => {
    //   const { email, projectData } = action.payload;
    //   const user = state.userList.find(user => user.email === email);

    //   if (user) {
    //     user.Project.push(projectData);
    //   }
    // },
  },
});

export const { addUser , addTask } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
