import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const TimerModeSlice = createSlice({
    name:'TimerMode',
    initialState:{
        timerMode: modalData.TimerMode
    },
    reducers:{
        setTimerMode(state,action){
        }
    }
})

export const {setTimerMode} = TimerModeSlice.actions;
export const TimerModeReducer = TimerModeSlice.reducer;
export const selectedTimerDetailsArray = (state)=>state.timerDeatilsArray