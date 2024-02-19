import { createSlice } from "@reduxjs/toolkit";

const ShowOnboarding = createSlice({
    name: "ShowOnboardingReducer",
    initialState: {
        ShowOnboarding: false,
        ShowDashboard:false,
    },
    reducers: {
        setOnboarding(state, action) {
            state.ShowOnboarding = action.payload
        },
        setDashboard(state , action) {
            state.ShowDashboard=action.payload
        }
    }
})
export const { setOnboarding , setDashboard } = ShowOnboarding.actions
export const ShowOnboardingReducer =  ShowOnboarding.reducer