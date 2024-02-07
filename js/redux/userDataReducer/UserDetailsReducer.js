import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.userList=newUser;
    },
    // addTask: (state, action) => {
    //   const { email, taskData } = action.payload;
    //   const user = state.userList.find(user => user.email === email);

    //   if (user) {
    //     user.tasks.push(taskData);
    //   }
    // },
    
  },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
