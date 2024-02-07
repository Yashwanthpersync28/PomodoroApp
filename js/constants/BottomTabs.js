import { Manage } from "../screens/Manage/Manage";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen";
import { CalendarScreen } from "../screens/Calendar/CalendarScreen";
import { Settings } from "../screens/SettingsScreen/Settings";
import {Report} from '../screens/Report/Report'
import { Icons } from "../components/Icons";

export const BottomTabs = [
    {
        name:'PomodoroScreen',
        component:PomodoroScreen,
        label:'Pomodoro',
        icon:'clock-time-five',
        iconType:Icons.MaterialCommunityIcons,
    },
    {
        name:'ManageScreen',
        component:Manage,
        label:'Manage',
        icon:'view-grid-plus',
        iconType:Icons.MaterialCommunityIcons,
    },
    {
        name:'CalendarScreen',
        component:CalendarScreen,
        label:'Calendar',
        icon:'calendar-month',
        iconType:Icons.MaterialCommunityIcons,
    },
    {
        name:'Report',
        component:Report,
        label:'Report',
        icon:'chart-line-stacked',
        iconType:Icons.MaterialCommunityIcons,
    },
    {
        name:'Settings',
        component:Settings,
        label:'Settings',
        icon:'settings',
        iconType:Icons.Feather,
    },
]
