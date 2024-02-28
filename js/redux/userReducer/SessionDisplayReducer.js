import { createSlice } from "@reduxjs/toolkit";

const SessionDisplaySlice = createSlice({
    name:'displaySession',
    initialState:{
        displaySession:'No Sessions'
    },
    reducers:{
        SetDisplaySession(state,action){
            state.session = action.payload
        }
    }
})
export const {setTaskSession} = SessionDisplaySlice.actions
export const taskSessionsReducer = SessionDisplaySlice.reducer