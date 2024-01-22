import { createSlice } from "@reduxjs/toolkit";

const focusTime = createSlice({
    name:'focusTimeReducer',
    initialState:{
        focusTime: 60,
        
    },
    reducers:{
        setFocusTime(state,action){
            state.focusTime = action.payload
        }
    }
})

export const {setFocusTime} = focusTime.actions
export const focusTimeReducer = focusTime.reducer