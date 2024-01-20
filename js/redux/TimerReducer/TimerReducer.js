import { createSlice } from "@reduxjs/toolkit";

const Timerreducer = createSlice({
  name: "TimerReducer",
  initialState: {
    timer:false
  },
  reducers: {
    addTime(state, action) {
      state.timer.push(action.payload);
    },
   
  },
});

export const { addTime } = Timerreducer.actions;
export const focusTime = Timerreducer.reducer;
