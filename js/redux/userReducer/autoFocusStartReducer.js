import { createSlice } from "@reduxjs/toolkit";

const autoFocusStart = createSlice({

    name:'autoFocusStart',
    initialState:{
        focusStart:false,
    },
    reducers:{
        setFocusStart(state,action){
            state.focusStart = action.payload
        }
    }
})

export const {setFocusStart} = autoFocusStart.actions
export const autoFocusStartReducer = autoFocusStart.reducer