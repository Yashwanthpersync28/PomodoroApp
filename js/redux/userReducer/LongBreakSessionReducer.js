import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const LongBreakSlice = createSlice({
    name:'LongBreakSession',
    initialState:{
        longBreakSession:modalData.longBreakAfter[1].id
    },
    reducers:{
        setLongBreakSession(state,action){
            state.longBreakSession = action.payload
        }
    }
})

export const {setLongBreakSession} = LongBreakSlice.actions;
export const LongBreakSessionReducer = LongBreakSlice.reducer