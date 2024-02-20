import { otpVerifyReducer, userVerifyReducer } from "./loginReducer";
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { biometricReducer } from "./biometricReducer";

export const authReducer = combineReducers({
    user: otpVerifyReducer,
    userVerify: userVerifyReducer,
    webSocket: webSocketConnectionReducer,
    biometric:biometricReducer,
})