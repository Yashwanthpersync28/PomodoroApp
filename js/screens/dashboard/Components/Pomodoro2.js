import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { useSelector } from 'react-redux';


export const Pomodoro2 = ({selectedTask,taskSelected,setCurrentModal,getDate}) => {

  const FocusTime = useSelector((state)=>state.user.focusTime.focusTime)
  const BreakTime  = useSelector((state)=>state.user.breakTime.breakTime)
  const [time, setTime] = useState(FocusTime);
  console.log(FocusTime,'FocusTime','breakTime',BreakTime)
  // const initialFocusTime = FocusTime; // 5 minutes for focus
  // const initialBreakTime = 0.15 * 60; // 2 minutes for break

  const [currentButton,setCurrentButton] = useState(0)
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [breakTime,setBreakTime] = useState(BreakTime)
  const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break
  const [progress, setProgress] = useState(100);
  const [barColor, setBarColor] = useState('#ff6347');
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [session,setSession] = useState(1)

  useEffect(() => {
    let intervalId;

    const updateTimer = () => {
      if (isTimerActive) {
        const newTime = time - 1;
        console.log('newTime',newTime)

        if (newTime <= 0) {
          setIsTimerActive(false);
          setProgress(0);

          // Switch to the other timer type
          setCurrentTimer(currentTimer === 0 ? 1 : 0);
          setTime(currentTimer === 0 ? BreakTime : FocusTime);
          setBarColor(currentTimer === 0 ? '#ff6347' : '#ff6347');
          setIsCountingUp(false);
          // setCurrentButton(3)
          setCurrentButton(currentTimer === 0 ? 3 : 0);
          setSession( currentTimer===0? session:session +1)
          console.log(currentButton)
          return;
        }

        const newProgress = Math.floor((newTime / (currentTimer === 0 ? FocusTime : BreakTime)) * 100);
        setProgress(newProgress);

        setBarColor(currentTimer === 0 ? '#ff6347' : '#ff6347');

        setTime(newTime);
      }
    };

    if (isTimerActive) {
      intervalId = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive, time, currentTimer, isCountingUp]);

  const handleStart = (timerType) => {
    if(selectedTask === taskSelected){
      setCurrentModal(1)
      setIsTimerActive(false)
      console.log('timer is not  active now')
    } else {
      getDate()
    setIsTimerActive(true);
    setIsCountingUp(false);
    setCurrentTimer(timerType); // Set the current timer type
    setCurrentButton(timerType === 0 ? 1 : 4)
    }
  };

  const handleStop = () => {
    setIsTimerActive(false);
    setCurrentButton(0);
    setTime(FocusTime);
    setBarColor('#ff6347')
  };



  const handlepause = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(2)
    setBarColor('#1c97f0')
  }

  const handleContinue = ()=>{
    setIsTimerActive(true)
    console.log('timer is active now')
    setCurrentButton(1)
    setBarColor('#ff6347')
  }

  const handleSkipBreak = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(0)
    setTime(FocusTime)
    // setSession('2 of 4')
    setProgress(100)
    setBarColor('#ff6347')
  }
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
