import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const AppApearanceSlice = createSlice({
    name:'App Apearance',
    initialState:{
        mode:modalData.darkMode[0].mode,
        language:modalData.language[0].mode
    },
    reducers:{
        setAppApearance(state,action){
            return {
                ...state,
                ...action.payload
            }
        }
    }
})
export const {setAppApearance} = AppApearanceSlice.actions;
export const AppApearanceReducer = AppApearanceSlice.reducer