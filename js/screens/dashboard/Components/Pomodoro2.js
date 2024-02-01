import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { useSelector,useDispatch } from 'react-redux';
import { setFocusTime } from '../../../redux/userReducer/focustimeReducer';
import { setLocalSession } from '../../../redux/userReducer/localSessionReducer';

export const Pomodoro2 = ({handleSkipBreak,playSound,handleStart,totalfocusTime,isTimerActive,time,setTime,FocusTime,currentTimer,BreakTime,barColor,setIsTimerActive,setProgress,setCurrentTimer,setBarColor,currentButton,setCurrentButton,handleContinue,handlepause,handleStop,displayTime,setDisplayTime,totalSessionTime,setTotalSessionTime,completedPomodoro,displaySession,completionSound,setTotalFocusTime}) => {

  const dispatch = useDispatch();

  const sessionNumber = useSelector((state)=>state.user.taskSessions.session);
  const localSession = useSelector((state)=>state.user.localSession.localSession);
  const taskDetails = useSelector((state)=>state.user.userTasks.userTask.completed);
  console.log('taskDetails',taskDetails)
  const disableBreak = useSelector((state)=>state.user.breakSwitch.disableBreak)
  console.log('disableBreak',disableBreak)
  const autoStartBreak = useSelector((state)=>state.user.autoBreak.autoBreak)
  console.log('autoBreak',autoStartBreak)
  const autoStartFocus = useSelector((state)=>state.user.autoFocus.focusStart)
  console.log('focusStart',autoStartFocus)
  // const FocusTime = useSelector((state)=>state.user.focusTime.focusTime);
  const taskId =  useSelector((state)=>state.user.userTasks.userTask.map(task=>task.id))
    console.log(taskId);
  const maxSession = sessionNumber;
  // const [displayTime,setDisplayTime] = useState(focusTime)
  // const [displaSession,setDisplaSession] = useState('No Sessions')

  useEffect(()=>{
    setDisplayTime(FocusTime);
    setTotalSessionTime(FocusTime)
  // dispatch(setLocalSession(localSession))
  },[FocusTime])

  useEffect(() => {
    let intervalId;
  
    const updateTimer = () => {
      if (isTimerActive) {
        setDisplayTime((prevTime) => {
          const newTime = prevTime - 1;
          console.log('completedTime', FocusTime - newTime)
          setTotalFocusTime(FocusTime - newTime);
          console.log('totalfocusTime',totalfocusTime)
    
          const newTotalSessionTime = currentTimer === 0 && !disableBreak ? BreakTime : FocusTime;
    
          if (newTime <= 0) {
            setIsTimerActive(false);
            setProgress(0);
            // playSound();
            setCurrentTimer((prevTimer) => (prevTimer === 0 ? 1 : 0));
            setBarColor((prevColor) => (prevColor === 0 ? '#ff6347' : '#ff6347'));
            
            if(currentTimer === 0){
              completionSound()
            }
            if(currentTimer === 1 ){
              dispatch(setLocalSession(localSession + 1))
            }
            if(localSession === maxSession){
              completedPomodoro()
              setTotalFocusTime((FocusTime - newTime) * localSession);
            }
            console.log(localSession,'Updatedsession')
            setCurrentButton( 
              (currentTimer === 0  && !disableBreak? 3 : 0));


            if(disableBreak === true && currentTimer === 0){
              setDisplayTime(FocusTime)
              setTotalSessionTime(FocusTime)
              dispatch(setLocalSession(localSession+ 1))
            } 
            else if(disableBreak === false) {
              if(currentTimer === 0){
              setDisplayTime(BreakTime)
              setTotalSessionTime(BreakTime);
              } else if(currentTimer ===1 ){
              setTotalSessionTime(FocusTime);

              }
          }
          if(autoStartBreak === true && disableBreak === false && currentTimer === 0){
            setTimeout(()=>{
              handleStart(1)
            },1000)
          }

          if(autoStartFocus === true && currentTimer ===1){
            setTimeout(()=>{
              handleStart(0)
            },1000)
          }
          if(autoStartFocus === true && currentTimer === 1 && disableBreak === true ){
            setTimeout(()=>{
              handleStart(0)
            },1000)
          }
            return newTotalSessionTime;
          }
          const newProgress = Math.max(0, Math.floor(((newTotalSessionTime - newTime) / newTotalSessionTime) * 100));
          setProgress(newProgress);
          setBarColor(currentTimer === 0 ? '#ff6347' : '#ff6347');
          setTime((prevTime) => prevTime - 1);
          return newTime;
        });
      }
    };
    if (isTimerActive) {
      intervalId = setInterval(updateTimer, 1000);
    }
  
    return () => clearInterval(intervalId);
  }, [isTimerActive, currentTimer, FocusTime, BreakTime,maxSession]);

  return (
    <View style={[styles.centerHorizontal]}>
    <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10), styles.allCenter]}>
        <AnimatedCircularProgress
          size={230}
          width={20}
          fill={(displayTime/totalSessionTime)*100}
          tintColor={barColor}
          backgroundColor="#efefef"
          rotation={0}
          lineCap='round'
        >
          {() => (
            <View style={[styles.allCenter,{marginTop:-25}]}>
            <Text style={[{fontSize:50,fontWeight:'500'},styles.black]}>
              {`${Math.floor(displayTime / 60)}:${(displayTime % 60).toString().padStart(2, '0')}`}
            </Text>
            <Text style={[styles.black]}>{displaySession}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={[marginPosition(10), { width: widthValue(1) }]}>
        {currentButton === 0 &&
          <TimerButton onPress={()=>handleStart(0)} buttonText={'Start to focus'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 1 &&
          <TimerButton onPress={handlepause} buttonText={'Pause'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={[borderWidth(1)]} />}
        {currentButton === 2 &&
          <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1) }]}>
            <TimerButton onPress={handleStop} buttonText={'Stop'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} borderWidth={[borderWidth(0)]} />
            <TimerButton onPress={handleContinue} buttonText={'Continue'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
          </View>}
        {currentButton === 3 &&
          <TimerButton onPress={()=>handleStart(1)} buttonText={'Start Break Time'} widthVal={{ width: widthValue(2) }} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 4 &&
          <TimerButton onPress={handleSkipBreak} buttonText={'Skip Break'} widthVal={{ width: widthValue(2) }} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={borderWidth(1)} />}
      </View>
    </View>
  );
};
