import { createSlice } from "@reduxjs/toolkit";

const breakReducerSlice = createSlice({
    name:'breakReducer',
    initialState:{
        isBreakEnabled: true,
    },
    reducers:{
        setIsBreakEnabled(state,action){
            state.isBreakEnabled = action.payload
        }
    }
})

export const {setIsBreakEnabled} = breakReducerSlice.actions
export const breakReducer = breakReducerSlice.reducer