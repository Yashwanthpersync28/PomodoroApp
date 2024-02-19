import { createSlice } from "@reduxjs/toolkit";
import { modalData } from "../../constants/ModalsData";

const FaqSlice = createSlice({
    name:'FaqDetails',
    initialState:{
        FaqData:modalData.faqData
    },
    reducers:{
        setFaqData(state,action){
            state.FaqData =action.payload
        }
    }
})

export const  {setFaqData} = FaqSlice.actions;
 export const FaqDataReducer = FaqSlice.reducer;


