import { createSlice } from "@reduxjs/toolkit";

const UserTag = createSlice({
  name: "UserTag",
  initialState: {
    UserTags: [],
  },
  reducers: {
    addTags(state, action) {
      state.UserTags.push(action.payload);
    },
   
  },
});

export const { addTags } = UserTag.actions;
export const userTaglist = UserTag.reducer;
