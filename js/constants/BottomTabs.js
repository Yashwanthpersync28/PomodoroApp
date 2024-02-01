import { Manage } from "../screens/Manage/Manage";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen";
import { CalendarScreen } from "../screens/Calendar/CalendarScreen";
import { Settings } from "../screens/SettingsScreen/Settings";
import {Report} from '../screens/Report/Report'

export const BottomTabs = [
    {
        name:'PomodoroScreen',
        component:PomodoroScreen,
        label:'Pomodoro',
        icon:'clock',
    },
    {
        name:'ManageScreen',
        component:Manage,
        label:'Manage',
        icon:'grid',
    },
    {
        name:'CalendarScreen',
        component:CalendarScreen,
        label:'Calendar',
        icon:'calendar',
    },
    {
        name:'Report',
        component:Report,
        label:'Report',
        icon:'clock',
    },
    {
        name:'Settings',
        component:Settings,
        label:'Settings',
        icon:'settings',
    },
]
