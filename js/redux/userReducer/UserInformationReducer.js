import { createSlice } from "@reduxjs/toolkit";

const UserInformation = createSlice({
  name: "UserInformation",
  initialState: {
    UserInfo: [],
  },
  reducers: {
    addUserData(state, action) {
      state.UserInfo=action.payload;
    },
    
   
  },
});

export const { addUserData } = UserInformation.actions;
export const userInformationReducer = UserInformation.reducer;
