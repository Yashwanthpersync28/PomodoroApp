import { createSlice } from "@reduxjs/toolkit";

const breakTime = createSlice({
    name:'breakTimeReducer',
    initialState :{
       breakTime: 300
    },
    reducers:{
        setBreakTime(state,action){
            state.breakTime = action.payload;
        }
    }

})

export  const {setBreakTime} = breakTime.actions
export const breakTimeReducer = breakTime.reducer