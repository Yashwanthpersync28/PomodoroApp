import { createSlice } from "@reduxjs/toolkit";

const longBreakSlice = createSlice({
    name:'longBreakDFetails',
    initialState:{
        longBreak: 900,
    },
    reducers:{
        setLongBreak(state,action){
            state.longBreak = action.payload
        }
    }
}) 

export const {setLongBreak} = longBreakSlice.actions
export const longBreakReducer = longBreakSlice.reducer