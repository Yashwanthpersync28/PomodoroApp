import { createSlice } from "@reduxjs/toolkit";

const breakReducerSlice = createSlice({
    name:'breakReducer',
    initialState:{
        disableBreak: false,
    },
    reducers:{
        setDisableBreak(state,action){
            state.disableBreak = action.payload
        }
    }
})

export const {setDisableBreak} = breakReducerSlice.actions
export const breakReducer = breakReducerSlice.reducer