
import { calendar } from "../screens/Calendar/calendar";
import { Manage } from "../screens/Manage/Manage";
import { Report } from "../screens/Report/Report";
import Homepage from "../screens/auth/login/Homepage/Homepage";
import { CircularProgressBar, PomodoroTimer } from "../screens/dashboard/Components/CircularProgressBar";
import Permissions from "../screens/dashboard/Components/Permissions";
import { Pomodoro2 } from "../screens/dashboard/Components/Pomodoro2";
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
        name:'Pomodoro2',
        component:Pomodoro2,
        label:'Calendar',
        icon:'calendar',
    },
    {
        name:'Permissions',
        component:Permissions,
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
// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text } from 'react-native';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

// export const Pomodoro2 = ({ currentButton, setCurrentButton }) => {
//   const initialFocusTime = 0.5 * 60; // 5 minutes for focus
//   const initialBreakTime = 0.15 * 60; // 2 minutes for break

//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [time, setTime] = useState(initialFocusTime);
//   const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break
//   const [progress, setProgress] = useState(100);
//   const [barColor, setBarColor] = useState('#ff6347');
//   const [isCountingUp, setIsCountingUp] = useState(false);

//   const currentButtonRef = useRef(currentButton);

//   useEffect(() => {
//     let intervalId;

//     const updateTimer = () => {
//       if (isTimerActive) {
//         const newTime = time - 1;

//         if (newTime <= 0) {
//           setIsTimerActive(false);
//           setProgress(0);

//           // Switch to the other timer type
//           setCurrentTimer((prevTimer) => (prevTimer === 0 ? 1 : 0));
//           setTime((prevTimer) => (prevTimer === 0 ? initialBreakTime : initialFocusTime));
//           setBarColor((prevTimer) => (prevTimer === 0 ? '#00e0ff' : '#ff6347'));
//           setIsCountingUp(false);

//           // Update currentButtonRef
//           currentButtonRef.current = prevTimer === 0 ? 0 : 3;
//           setCurrentButton(currentButtonRef.current);
//           return;
//         }

//         const newProgress = Math.floor((newTime / (currentTimer === 0 ? initialFocusTime : initialBreakTime)) * 100);
//         setProgress(newProgress);

//         setBarColor(currentTimer === 0 ? '#ff6347' : '#00e0ff');

//         setTime(newTime);
//       }
//     };

//     if (isTimerActive) {
//       intervalId = setInterval(updateTimer, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isTimerActive, time, currentTimer, isCountingUp, setCurrentButton]);