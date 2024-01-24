import { combineReducers } from '@reduxjs/toolkit';
import { focusTimeReducer } from './focustimeReducer';
import { breakTimeReducer } from './breaktimeReducer';
import { userTaglist } from '../userReducer/userTaglistReducer';
import { userProjectlist } from '../userReducer/UserProjectListReducer';
import { usersTasksReducer } from '../userReducer/UserTaskDetails';
import { taskSessionsReducer } from './taskSessionsReducer';
import { modalReducer } from '../userReducer/modalReducer';
import { longBreakReducer } from './longBreakReducer';


export const userReducer = combineReducers({
    focusTime:focusTimeReducer,
    breakTime:breakTimeReducer,
    userTaglist:userTaglist,
    userProjectList:userProjectlist,
    userTasks:usersTasksReducer,
    taskSessions:taskSessionsReducer,
    currentModal:modalReducer,
    longBreak:longBreakReducer,
})