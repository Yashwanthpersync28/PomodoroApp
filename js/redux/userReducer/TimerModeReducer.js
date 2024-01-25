import { createSlice } from "@reduxjs/toolkit";

const TimerModeSlice = createSlice({
    name:'TimerMode',
    initialState:{
        timerDeatilsArray:[
            {id:'timer1', focusTime:1500,endTime:'00:00'},
            {id:'timer2', focusTime:0,endTime:'Infinity'},
        ]
    },
    reducers:{
        setTimerMode(state,action){
            const {timerId, focusTime,endTime} = action.payload;

            const timerIndex = state.timerDeatilsArray.findIndex((timer)=>timer.id === timerId);


            if(timerIndex !== -1){
                state.timerDeatilsArray[timerIndex] = {id:timerId,focusTime,endTime};
            } else {
                state.timerDeatilsArray.push({id:timerId,focusTime,endTime})
            }

        }
    }
})

export const {setTimerMode} = TimerModeSlice.actions;
export const TimerModeReducer = TimerModeSlice.reducer;
export const selectedTimerDetailsArray = (state)=>state.timerDeatilsArray