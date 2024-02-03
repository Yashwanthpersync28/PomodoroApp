import { createSlice } from "@reduxjs/toolkit";

const UserTag = createSlice({
  name: "UserTag",
  initialState: {
    UserTags: [],
  },
  reducers: {
    addTag(state, action) {
      state.UserTags.push(action.payload);
    },
    deleteUserTag(state, action) {
      const TagIdToDelete = action.payload;
      state.UserTags = state.UserTags.filter(Tag => Tag.name !== TagIdToDelete);
    },
    addBackUserTag(state, action) {
      state.UserTags.push(action.payload);
    },
   
  },
});

export const { addTag , deleteUserTag , addBackUserTag} = UserTag.actions;
export const userTaglist = UserTag.reducer;
