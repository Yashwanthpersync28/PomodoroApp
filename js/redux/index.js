import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { systemReducer } from './systemReducer';
import { userReducer } from './userReducer';
import { showComponent } from './ShowComponentReducer';
import { Userdetails } from './userDataReducer';
import { Rememberme } from './rememberReducer';
import { focustime } from './TimerReducer/Index';
import { focusTimeReducer } from './userReducer/focustimeReducer';


export const reducer = combineReducers({
    auth: authReducer,
    system: systemReducer,
    user: userReducer,
    showcomponent:showComponent,
    UserDetails:Userdetails,
    RememberMe:Rememberme,
})

export const resetReducer = (state,action)=>{
    if (action.type === 'RESET_STATE') {
        return reducer(undefined, action)
      }
      return reducer(state, action)
    }
