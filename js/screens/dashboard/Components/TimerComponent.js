import React, { useState, useEffect, useRef } from 'react';
import { View,Text } from 'react-native';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth, padding } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useDispatch, useSelector } from 'react-redux';

export const TimerComponent = ({secondFocusProgress,setSecondTime,secondTime,setSecondFocusProgress, isTimerActive, handlepause,currentButton, handleContinue, breakTime, handleStop, handleSkipBreak, handleBreak,barColor,handleSecondStart,setSecondFocusTime
  ,secondFocusTime}) => {
  const darkMode = useSelector(state=>state.system.darkMode)
  

  const focusTime = useSelector((state)=>state.user.focusTime.focusTime)
  console.log('focusTime',focusTime)
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    let timer ;
    
    const secondTimer = ()=>{
      if(isTimerActive){
        setSecondTime((prevTime)=>{
        const newTime = prevTime + 1;
        console.log('newTime',newTime)
        setSecondFocusTime(newTime)
        if(secondFocusTime=focusTime){
          setSecondFocusProgress(0)
        }
        const newProgress = Math.floor((newTime/focusTime)*100)
        setSecondFocusProgress(newProgress)
        return newTime;
      })
      }
    }
    if(isTimerActive){
      timer = setInterval(secondTimer,1000)
    }
    return ()=>clearInterval(timer)
  },[isTimerActive,secondTime,focusTime])


  return (
    <View style={[styles.centerHorizontal]}>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)),darkMode?styles.bgdarkmodeBlack: styles.bgWhite,  shadow(10), styles.allCenter]}>
      <View style={[styles.allCenter]}>
      <AnimatedCircularProgress
        size={widthValue(1.6)}
        width={18}
        fill={secondFocusProgress}
        tintColor={barColor}
        backgroundColor={darkMode?'#20222a':"#efefef"}
        lineCap='round'
        rotation={0}
      >
        {() => 
        <View style={[styles.allCenter]}>
        <Text style={[{fontWeight:'500',marginTop:-30,fontSize:60 },darkMode?styles.lightWhite:styles.black]}>{`${Math.floor(secondTime / 60)}:${(secondTime % 60).toString().padStart(2, '0')}`}</Text>
        </View>
        }
      </AnimatedCircularProgress>
    </View>
      </View>
      <View style={[marginPosition(10), { width: widthValue(1) }]}>
        {currentButton === 0 &&
          <TimerButton onPress={handleSecondStart} buttonText={'Start to focus'} widthVal={{ width: widthValue(2.3) }} paddingval={[padding(0,10,20)]} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 1 &&
          <TimerButton onPress={handlepause} buttonText={'Pause'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''}paddingval={[padding(0,15,20)]}  BgColor={[darkMode?'transparent':styles.bgWhite]} textColor={[styles.Orange]} borderWidth={[borderWidth(1)]} />}
        {currentButton === 2 &&
          <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1) }]}>
            <TimerButton onPress={handleStop} buttonText={'Stop'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} paddingval={[padding(0,15,20)]} BgColor={[darkMode?styles.bgDarkmodebutton:styles.bglightPink]} textColor={[darkMode?styles.lightWhite:styles.Orange]} borderWidth={[borderWidth(0)]} />
            <TimerButton onPress={handleContinue} buttonText={'Continue'} widthVal={{ width: widthValue(2.3) }} paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
          </View>}
       </View>
    </View>
  );
};


