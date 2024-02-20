import { createSlice } from "@reduxjs/toolkit";

const StrictModeSlice = createSlice({
    name:'StrictMode',
    initialState:{
        BlockAllNotifications:false,
    BlockPhonecalls:false,
    BlockOtherApps:false,
    bLockPhone:false,
    ProhibitToExit:false,
    },
    reducers:{
        setStrictModePreference(state,action){
            return {
                ...state,
                ...action.payload
            }
        }
    }
})
export const {setStrictModePreference} = StrictModeSlice.actions;
export const StrictModeReducers = StrictModeSlice.reducer