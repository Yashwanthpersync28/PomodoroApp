import { createSlice } from "@reduxjs/toolkit";

const ShowOnboarding = createSlice({
    name: "ShowOnboardingReducer",
    initialState: {
        ShowOnboarding: false,
    },
    reducers: {
        setOnboarding(state, action) {
            state.ShowOnboarding = action.payload
        }
    }
})
export const { setOnboarding } = ShowOnboarding.actions
export const ShowOnboardingReducer =  ShowOnboarding.reducer