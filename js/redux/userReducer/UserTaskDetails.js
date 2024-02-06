import { createSlice } from "@reduxjs/toolkit";

const UsersTasks = createSlice({
  name: "usersTasks",
  initialState: {
    userTask: [],
  },
  reducers: {
    addUserTasks(state, action) {
      state.userTask=action.payload;
    },
    deleteUserTask(state, action) {
      const taskIdToDelete = action.payload;
      state.userTask = state.userTask.filter(task => task.id !== taskIdToDelete);
    },
    addBackUserTask(state, action) {
      state.userTask.push(action.payload);
    },
    replaceStatus(state, action) {
      const updatedTask = action.payload;
      const indexToUpdate = state.userTask.findIndex(task => task.id === updatedTask.id);

      if (indexToUpdate !== -1) {
        // Replace the task at the found index
        state.userTask[indexToUpdate] = updatedTask;
      }
    },
  },

});

export const { addUserTasks,isTaskCompleted , deleteUserTask , addBackUserTask,replaceStatus} = UsersTasks.actions;
export const usersTasksReducer = UsersTasks.reducer;
