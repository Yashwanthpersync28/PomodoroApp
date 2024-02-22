import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { systemReducer } from './systemReducer';
import { userReducer } from './userReducer';
import { showComponent } from './ShowComponentReducer';
import { Userdetails } from './userDataReducer';
import { Rememberme } from './rememberReducer';
import { focustime } from './TimerReducer/Index';
import { focusTimeReducer } from './userReducer/focustimeReducer';


export const appReducer = combineReducers({
    auth: authReducer,
    system: systemReducer,
    user: userReducer,
    showcomponent:showComponent,
    UserDetails:Userdetails,
    RememberMe:Rememberme,
})

export const reducer = (state,action)=>{
    if (action.type === 'RESET_STATE') {
      console.log('redux state is cleared')
        return appReducer(undefined, action)
      }
      return appReducer(state, action)
    }
