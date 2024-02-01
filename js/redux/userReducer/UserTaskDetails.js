import { createSlice } from "@reduxjs/toolkit";

const UsersTasks = createSlice({
  name: "usersTasks",
  initialState: {
    userTask: [],
  },
  reducers: {
    addUserTasks(state, action) {
      state.userTask.push(action.payload);
    },
  },
});

export const { addUserTasks,isTaskCompleted } = UsersTasks.actions;
export const usersTasksReducer = UsersTasks.reducer;
