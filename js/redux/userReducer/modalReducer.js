import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
   name:'currentModal',
   initialState:{
    currentModal: 0,
   },
   reducers:{
    setCurrentModal(state,action){
        state.currentModal = action.payload
    }
   } 
})

export const  {setCurrentModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer