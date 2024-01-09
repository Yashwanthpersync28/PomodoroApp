
import { Manage } from "../screens/Manage/Manage";
import Homepage from "../screens/auth/login/Homepage/Homepage";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen";

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
        name:'CalendarScreen',
        component:PomodoroScreen,
        label:'Calendar',
        icon:'calendar',
    },
    {
        name:'ReportScreen',
        component:Homepage,
        label:'Report',
        icon:'clock',
    },
    {
        name:'SettingsScreen',
        component:PomodoroScreen,
        label:'Settings',
        icon:'cog',
    }
]