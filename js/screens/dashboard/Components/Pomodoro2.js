import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { useSelector,useDispatch } from 'react-redux';
import { setFocusTime } from '../../../redux/userReducer/focustimeReducer';

export const Pomodoro2 = ({handleSkipBreak,handleStart,setSession,isTimerActive,time,setTime,FocusTime,currentTimer,BreakTime,barColor,setIsTimerActive,setProgress,setCurrentTimer,setBarColor,currentButton,setCurrentButton,session,handleContinue,handlepause,handleStop,}) => {

  
  const Tasks = useSelector((state)=>state.UserTaskDetails.userTask)
  // const sessions = Tasks.filter(Tasks =>{ return Tasks. })
console.log('Tasks',Tasks)
  useEffect(() => {
    let intervalId;
  
    const updateTimer = () => {
      if (isTimerActive) {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          console.log('newTime', newTime);
  
          if (newTime <= 0) {
            setIsTimerActive(false);
            setProgress(0);
  
            // Switch to the other timer type
            setCurrentTimer((prevTimer) => (prevTimer === 0 ? 1 : 0));
            setBarColor((prevColor) => (prevColor === 0 ? '#ff6347' : '#ff6347'));
            setCurrentButton((prevButton) => (prevButton === 0 ? 3 : 0));
            setSession((prevSession) => (prevSession  === 0 ? prevSession + 1 : prevSession));
  
            return currentTimer === 0 ? BreakTime : FocusTime;
          }
  
          const newProgress = Math.floor((newTime / (currentTimer === 0 ? FocusTime : BreakTime)) * 100);
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
  }, [isTimerActive, currentTimer, FocusTime, BreakTime]);
  

  return (
    <View style={[styles.centerHorizontal]}>
    <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10), styles.allCenter]}>
        <AnimatedCircularProgress
          size={230}
          width={20}
          fill={(time / (currentTimer === 0 ? FocusTime : BreakTime)) * 100}
          tintColor={barColor}
          backgroundColor="#efefef"
          rotation={0}
          lineCap='round'
        >
          {() => (
            <View style={[styles.allCenter,{marginTop:-25}]}>
            <Text style={[{fontSize:50,fontWeight:'500'},styles.black]}>
              {`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}
            </Text>
            <Text style={[styles.black]}>{session} Sessions</Text>
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


