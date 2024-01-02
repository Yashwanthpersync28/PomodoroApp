import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
    name: "darkModeReducer",
    initialState: {
        darkMode: false,
    },
    reducers: {
        setDarkMode(state, action) {
            state.darkMode = action.payload
        }
    }
})
export const { setDarkMode } = darkMode.actions
export const darkModeReducer =  darkMode.reducer