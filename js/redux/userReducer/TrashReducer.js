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
  },
});

export const { addTrashtasks } = TrashLists.actions;
export const usersTrashLists = TrashLists.reducer;