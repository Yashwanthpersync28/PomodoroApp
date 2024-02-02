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
    deleteUserTask(state, action) {
      const taskIdToDelete = action.payload;
      state.userTask = state.userTask.filter(task => task.id !== taskIdToDelete);
    },
    addBackUserTask(state, action) {
      state.userTask.push(action.payload);
    },
  },
});

export const { addUserTasks,isTaskCompleted , deleteUserTask , addBackUserTask} = UsersTasks.actions;
export const usersTasksReducer = UsersTasks.reducer;
