
import { calendar } from "../screens/Calendar/calendar";
import { Manage } from "../screens/Manage/Manage";
import { Report } from "../screens/Report/Report";
import Homepage from "../screens/auth/login/Homepage/Homepage";
import { Timer } from "../screens/dashboard/Components/Timer";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen"
import { Settings } from "../screens/settings/Settings";

export const  BottomTabs = [

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
        name:'calendar',
        component:calendar,
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
    }
]