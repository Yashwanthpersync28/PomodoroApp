import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { systemReducer } from './systemReducer';
import { userReducer } from './userReducer';
import { showComponent } from './ShowComponentReducer';
import { Userdetails } from './userDataReducer';
import { Usertaskdetails } from './UserTaskReducer';
import { Rememberme } from './rememberReducer';
import { userProjectlists } from './UserProjectReducer';
import { userTaglists } from './userTagsReducer';
import { focustime } from './TimerReducer/Index';

export const reducer = combineReducers({
    auth: authReducer,
    system: systemReducer,
    user: userReducer,
    showcomponent:showComponent,
    UserDetails:Userdetails,
    UserTaskDetails:Usertaskdetails,
    RememberMe:Rememberme,
    userProjectlist:userProjectlists,
    userTaglist:userTaglists,
    TimerReducder:focustime,
})