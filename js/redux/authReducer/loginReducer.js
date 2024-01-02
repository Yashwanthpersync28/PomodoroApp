import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userVerifyApi, otpVerifyApi } from "../../api/authApi";

// - - - - - Verify User Reducer - - - - - //
export const userVerifyReducer = createSlice({
    name: "userVerify",
    initialState: {
        status: "",
        data: "",
        loading: false,
    },
    extraReducers: builder => {
        builder.addCase(userVerifyApi.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userVerifyApi.fulfilled, (state, {payload, meta}) => {
            state.loading = false
            state.data = payload.data
            state.status = meta.requestStatus
        })
        builder.addCase(userVerifyApi.rejected, (state, {payload, meta} ) => {
            state.loading = false
            state.data = payload
            state.status = meta.requestStatus
        })
    },
}).reducer

// - - - - - Login Reducer - - - - - //


    const initialState = {
        status: "",
        data: "",
        at: "",
        loading: false,
    }

const otpVerify = createSlice({
    name: "otpVerify",
    initialState: initialState,
    reducers: { 
        clearToken: state => initialState
    },
    extraReducers: builder => {
        builder.addCase(otpVerifyApi.pending, (state) => {
            state.loading = true
        })
        builder.addCase(otpVerifyApi.fulfilled, (state, {payload, meta}) => {
            state.loading = false
            state.data = payload.data
            state.at = payload.data.userID
            state.status = meta.requestStatus
        })
        builder.addCase(otpVerifyApi.rejected, (state, {payload, meta} ) => {
            state.loading = false
            state.data = payload
            state.status = meta.requestStatus
        })
    },
})

export const { clearToken } = otpVerify.actions
export const otpVerifyReducer =  otpVerify.reducer

