import React, { useEffect, useState } from "react";
// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent, TextComponent } from "../../components";
// - - - - - CONSTANTS - - - - - //

// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
    import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
    import { flex, styles } from "../../styles/Styles";

export const DashboardScreen = ({navigation}) => {

    // - - - - - * * DECLARATIONS * * - - - - - //
    const dispatch = useDispatch()
    // Route Params

    // Selectors
    const { data } = useSelector(state => state.user)
    // Re-Selectors

    // States
    const [state, setState] = useState("")
    // - - - - - * * FUNCTIONS * *  - - - - - //

    // - - - - - * * API CALLS * *  - - - - - //

    // - - - - - * * USE EFFECT * *  - - - - - //
    useEffect(() => {

    },[])

    return(
        <ScreenViewComponent>
            <TextComponent title={"Dashboard"}/>
        </ScreenViewComponent>
    )
}





// ... (your existing imports)

export const Pomodoro2 = ({selectedTask, taskSelected, setCurrentModal, getDate}) => {
    const FocusTime = useSelector((state) => state.user.focusTime.focusTime);
    const BreakTime = useSelector((state) => state.user.breakTime.breakTime);
    const dispatch = useDispatch();
  
    const [time, setTime] = useState(FocusTime);
    const [currentButton, setCurrentButton] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [breakTime, setBreakTime] = useState(BreakTime);
    const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break
    const [progress, setProgress] = useState(100);
    const [barColor, setBarColor] = useState('#ff6347');
    const [session, setSession] = useState(1);
  
    const maxSessions = 5; // Set the maximum number of sessions in a cycle
    const initialFocusTime = 60; // Set the initial focus time for each cycle
    const initialBreakTime = 30; // Set the initial break time for each cycle
  
    useEffect(() => {
      let intervalId;
  
      const updateTimer = () => {
        if (isTimerActive) {
          setTime((prevTime) => {
            const newTime = prevTime - 1;
  
            if (newTime <= 0) {
              setIsTimerActive(false);
              setProgress(0);
  
              setCurrentTimer((prevTimer) => (prevTimer === 0 ? 1 : 0));
              setBarColor((prevColor) => (prevColor === 0 ? '#ff6347' : '#ff6347'));
              setCurrentButton((prevButton) => (prevButton === 0 ? 3 : 0));
  
              if (currentTimer === 0) {
                setSession((prevSession) => prevSession + 1);
  
                if (session < maxSessions) {
                  dispatch(setFocusTime(initialFocusTime));
                  setBreakTime(initialBreakTime);
                } else {
                  setSession(1);
                  dispatch(setFocusTime(initialFocusTime));
                }
              }
  
              return currentTimer === 0 ? breakTime : FocusTime;
            }
  
            const newProgress = Math.floor((newTime / (currentTimer === 0 ? FocusTime : breakTime)) * 100);
            setProgress(newProgress);
  
            setBarColor((currentTimer) => (currentTimer === 0 ? '#ff6347' : '#ff6347'));
  
            return newTime;
          });
        }
      };
  
      if (isTimerActive) {
        intervalId = setInterval(updateTimer, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isTimerActive, currentTimer, FocusTime, breakTime, session]);
  
    // ... (rest of your component)
  
    return (
      // ... (JSX for your component)
    );
  };
  