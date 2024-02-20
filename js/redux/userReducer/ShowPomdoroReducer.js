import { createSlice } from "@reduxjs/toolkit";


const ShowPomodoroName = createSlice({
    name:'ShowPomodoroName',
    initialState:{
        name:'Weekly'
    },
    reducers:{
        setName(state,action){
            state.name =action.payload
        }
    }
})

export const  {setName} = ShowPomodoroName.actions;
 export const ShowName = ShowPomodoroName.reducer;