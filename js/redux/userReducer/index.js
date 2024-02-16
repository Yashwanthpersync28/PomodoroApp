import { combineReducers } from '@reduxjs/toolkit';
import { focusTimeReducer } from './focustimeReducer';
import { breakTimeReducer } from './breaktimeReducer';
import { userTaglist } from '../userReducer/userTaglistReducer';
import { userProjectlist } from '../userReducer/UserProjectListReducer';
import { usersTasksReducer } from '../userReducer/UserTaskDetails';
import { taskSessionsReducer } from './taskSessionsReducer';
import { modalReducer } from '../userReducer/modalReducer';
import { longBreakReducer } from './longBreakReducer';
import { usersTrashLists } from './TrashReducer';
import { TimerModeReducer } from './TimerModeReducer';
import { localSessionReducer } from './localSessionReducer';
import { breakReducer } from './breakReducer';
import { autoBreakReducer } from './autoBreakReducer';
import { autoFocusStartReducer } from './autoFocusStartReducer';
import { reminderRingtoneReducer } from './reminderRingtoneReducer';
import { WhiteNoiseReducer } from './WhiteNoiseReducer';
import { completionSoundReducer } from './CompletionSoundReducer';
import { ArchieveReducer } from './ArchieveReducer';
import { SelecteddateReducer } from './SelecteddateReducer';
import { LongBreakSessionReducer } from './LongBreakSessionReducer';
import { StrictModeReducers } from './StrictModeReducers';
import { NotificationsReducer } from './NotifricationsReducer';


export const userReducer = combineReducers({
    focusTime:focusTimeReducer,
    breakTime:breakTimeReducer,
    TimerMode:TimerModeReducer,
    userTaglist:userTaglist,
    userProjectList:userProjectlist,
    userTasks:usersTasksReducer,
    taskSessions:taskSessionsReducer,
    currentModal:modalReducer,
    longBreak:longBreakReducer,
    usersTrashLists:usersTrashLists,
    localSession:localSessionReducer,
    breakSwitch: breakReducer,
    autoBreak:autoBreakReducer,
    autoFocus:autoFocusStartReducer,
    reminderRingtone:reminderRingtoneReducer,
    whiteNoise:WhiteNoiseReducer,
    completionSound:completionSoundReducer,
    ProjectAndTagsArchieveReducer:ArchieveReducer,
    selectedDateincalendar:SelecteddateReducer,
    longBreakSession:LongBreakSessionReducer,
    strictMode:StrictModeReducers,
    notifications:NotificationsReducer,
})