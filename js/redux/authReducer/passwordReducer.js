import { createSlice } from "@reduxjs/toolkit";

const PasswordSlice = createSlice({
    name:'AuthPassword',
    initialState:{
        AuthPassword:'',
    },
    reducers:{
        setAuthPassword(state,action){
            state.AuthPassword = action.payload
        }
    }
})

export const {setAuthPassword} = PasswordSlice.actions
export const AuthPasswordReducer = PasswordSlice.reducer