import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const ReminderVibrateSlice = createSlice({
    name:'reminder Vibrate',
    initialState:{
        selectedVibrationMode:modalData.vibrationOptions[0].name,
    },
    reducers:{
        setSelectedVibrationMode(state,action){
            state.selectedVibrationMode = action.payload
        }
    }
})

export const {setSelectedVibrationMode} = ReminderVibrateSlice.actions
export const ReminderVibrateReducer = ReminderVibrateSlice.reducer