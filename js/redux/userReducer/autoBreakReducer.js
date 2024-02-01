import { createSlice } from "@reduxjs/toolkit";


const autoBreakSlice = createSlice({
    name: 'autoBreakReducer',
    initialState:{
        autoBreak:false,
    },
    reducers:{
        setAutoBreak(state,action){
            state.autoBreak = action.payload
        }
    }
})

export const {setAutoBreak} = autoBreakSlice.actions;
export const autoBreakReducer = autoBreakSlice.reducer;