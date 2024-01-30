import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const completionSoundSlice = createSlice({

    name:'CompletionSound',
    initialState:{
        selectedCompletionSound:modalData.CompletionSounds[0].MusicName,
    },
    reducers:{
        setSelectedCompletionSound(state,action){
            state.selectedCompletionSound = action.payload
        }
    }

}) 

export const {setSelectedCompletionSound} = completionSoundSlice.actions
export const completionSoundReducer = completionSoundSlice.reducer;