import { createSlice } from "@reduxjs/toolkit";

const NotificationSlice = createSlice({
    name:'NotificationsPreference',
    initialState:{
        PomodoroAlerts:false,
        SecurityAlerts:false,
        TaskReminders:false,
        TaskUpdates:false,
        ProductivityInsights:false,
        TaskNotifications:false,
        WeeklySummary:false,
        GoalProgress:false,
        FeedBacksandUpdates:false,
    },
    reducers:{
        setNotificationsPreference(state,action){
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {setNotificationsPreference} = NotificationSlice.actions;
export const NotificationsReducer = NotificationSlice.reducer