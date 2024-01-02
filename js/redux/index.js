import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { systemReducer } from './systemReducer';
import { userReducer } from './userReducer';

export const reducer = combineReducers({
    auth: authReducer,
    system: systemReducer,
    user: userReducer,
})