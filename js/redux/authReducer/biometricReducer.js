import { createSlice } from "@reduxjs/toolkit";

const BiometricSlice = createSlice({
    name:'Biometrics',
    initialState:{
        BiometricEnabled:false,
        faceIdEnabled:false,
    },
    reducers:{
        setBiometrics(state,action){
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setBiometrics} = BiometricSlice.actions
export const biometricReducer = BiometricSlice.reducer