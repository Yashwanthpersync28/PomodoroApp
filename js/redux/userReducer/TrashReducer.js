import { createSlice } from "@reduxjs/toolkit";

const TrashLists = createSlice({
  name: "Trash",
  initialState: {
    TrashLists: [],
  },
  reducers: {
    addTrashtasks(state, action) {
      state.TrashLists.push(action.payload);
    },
    deleteForeverUserTaskFromTrash(state, action) {
      const taskIdToDelete = action.payload;
      state.TrashLists = state.TrashLists.filter(task => task.id !== taskIdToDelete);
    },
  },
});

export const { addTrashtasks , deleteForeverUserTaskFromTrash} = TrashLists.actions;
export const usersTrashLists = TrashLists.reducer;