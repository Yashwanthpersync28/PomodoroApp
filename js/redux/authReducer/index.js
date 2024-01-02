import { otpVerifyReducer, userVerifyReducer } from "./loginReducer";
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";

export const authReducer = combineReducers({
    user: otpVerifyReducer,
    userVerify: userVerifyReducer,
    webSocket: webSocketConnectionReducer
})