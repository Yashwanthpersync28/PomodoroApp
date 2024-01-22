import { combineReducers } from '@reduxjs/toolkit';
import { focusTimeReducer } from './focustimeReducer';
import { breakTimeReducer } from './breaktimeReducer';


export const userReducer = combineReducers({
    focusTime:focusTimeReducer,
    breakTime:breakTimeReducer,
})