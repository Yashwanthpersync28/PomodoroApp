import { createSlice } from "@reduxjs/toolkit";

const selectedDateSlice = createSlice({
    name:'selecteddate',
    initialState:{
        selectedDate:new Date().toISOString().split('T')[0]
    },reducers:{
        setSelectedDate(state,action){
            state.selectedDate = action.payload
        }
    }
})

export const {setSelectedDate} = selectedDateSlice.actions
export const SelecteddateReducer = selectedDateSlice.reducer