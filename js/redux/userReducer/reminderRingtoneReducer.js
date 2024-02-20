import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const reminderRingtoneSlice = createSlice({
    name:'ReminderRingtomne',
    initialState:{
       selectedRingtone:modalData.reminderRintones[0].MusicName
    },
    reducers:{
        setSelectedRingtone(state,action){
            state.selectedRingtone = action.payload
        }
    }
})

export const {setSelectedRingtone}  = reminderRingtoneSlice.actions
export const reminderRingtoneReducer = reminderRingtoneSlice.reducer