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
   
  },
});

export const { addTag } = UserTag.actions;
export const userTaglist = UserTag.reducer;
