import { createSlice } from "@reduxjs/toolkit";


const ShowPomodoroName = createSlice({
    name:'ShowPomodoroName',
    initialState:{
        name:'Weekly',
       togglenames:[{ name:'Weekly', selected: true },
           { name:'Monthly', selected: false },
           { name:'Biweekly', selected: false }], 
       temptogglenames:[]    
    },
    reducers:{
        setName(state,action){
            state.name =action.payload
        },
        setToggleNames(state,action){
            state.togglenames=action.payload
        },
        setTempToggleNames(state,action){
            state.temptogglenames=action.payload
        }

    }
})

export const  {setName,setToggleNames,setTempToggleNames} = ShowPomodoroName.actions;
 export const ShowName = ShowPomodoroName.reducer;