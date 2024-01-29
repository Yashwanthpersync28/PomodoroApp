import { createSlice } from "@reduxjs/toolkit";

const localSession = createSlice({
    name:'localSession',
    initialState:{
        localSession: 1,

    },
    reducers:{
        setLocalSession(state,action){
            state.localSession = action.payload;
        }
    }
}) 

export  const {setLocalSession}  = localSession.actions;
export const localSessionReducer = localSession.reducer;