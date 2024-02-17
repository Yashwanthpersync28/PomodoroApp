import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const whiteNoiseSlice = createSlice({
    name:'whiteNoise',
    initialState:{
        selectedWhiteNoise:modalData.whiteNoiseMode[0].MusicName,     
        whiteNoiseMode:modalData.whiteNoiseMode,
    },
    reducers:{
        setSelectedWhiteNoise(state,action){
            state.selectedWhiteNoise = action.payload
        }
    }
}) 

export const {setSelectedWhiteNoise} =  whiteNoiseSlice.actions
export const WhiteNoiseReducer = whiteNoiseSlice.reducer