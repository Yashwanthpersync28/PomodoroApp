import { createSlice } from "@reduxjs/toolkit";
import { profile } from "../../constants/imageConstant";
import { modalData } from "../../constants/ModalsData";

const UserInformation = createSlice({
  name: "UserInformation",
  initialState: {
  },
  reducers: {
    addUserData(state, action) {
      state.UserInfo=action.payload;
    },
    
   
  },
});

export const { addUserData } = UserInformation.actions;
export const userInformationReducer = UserInformation.reducer;
