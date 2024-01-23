import { createSlice } from "@reduxjs/toolkit";

const taskSession = createSlice({
    name:'taskSessions',
    initialState:{
        session:0,
    },
    reducers:{
        setTaskSession(state,action){
            state.taskSession = action.payload
        }
    }
})
export const {setTaskSession} = taskSession.actions
export const taskSessionsReducer = taskSession.reducer