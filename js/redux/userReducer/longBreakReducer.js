import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const longBreakSlice = createSlice({
    name:'longBreakDFetails',
    initialState:{
        longBreak: modalData.longBreakTime[0].longBreak,
    },
    reducers:{
        setLongBreak(state,action){
            state.longBreak = action.payload
        }
    }
}) 
export const {setLongBreak} = longBreakSlice.actions
export const longBreakReducer = longBreakSlice.reducer