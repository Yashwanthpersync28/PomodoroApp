import React, { useState,useEffect,useRef } from 'react';
import { View,Text } from 'react-native';
import { widthValue, radius, styles, shadow,fontSize, marginPosition, buttonColor, borderWidth } from '../../../styles/Styles';
import CircularProgress,{ProgressRef} from 'react-native-circular-progress-indicator';
import { TimerButton } from './TimerButton';
// import {ProgressRef} from 'react-native-circular-progress-indicator'
 export const TimerComponent = ({isTimerActive,handleStart,handlepause,currentButton,handleContinue,handleStop,handleSkipBreak,handleBreak,session,time,setTime,InitialTime,barColor,ProgressRef}) => {
  // const [barColor,setBarColor] = useState('#ff6347')

  const progressRef = useRef<ProgressRef>(null);

  useEffect(() => {
    let timer;
    if (isTimerActive && time > 0 ) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, time]);
  
   const displayTime = (seconds)=>{
      const minutes = Math.floor(seconds/60);
      const secondsLeft = seconds % 60; 
      return `${minutes} : ${secondsLeft}`
    }

    const calculateProgress = (remainingTime, InitialTime) => {
      if (InitialTime === 0 ) {
        return 0;
      }
      const progress = ((InitialTime - remainingTime) / InitialTime) * 100;
      return Math.max(0, progress);
    };
  return (
    <View style={[styles.centerHorizontal]}>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10),styles.allCenter]}>
        <CircularProgress
          value={calculateProgress(time)} 
          radius={120}
          initialValue={InitialTime}
          maxValue={InitialTime}
          duration={time * 1000}
          progressValueColor='white'
          progressValueFontSize={0}
          progressValueStyle={[{width:1,height:1}]}
          activeStrokeColor={barColor}
          inActiveStrokeWidth={20}
          inActiveStrokeColor='#efefef'
          activeStrokeWidth={20}
          title={displayTime(time)}
          subtitle={`${session} Sessions`}
          subtitleStyle={[styles.black,fontSize(20)]}
          titleColor={[styles.black]}
          titleStyle={[{ fontWeight: 'bold' },fontSize(55),styles.black,{marginTop:-20}]}
          onAnimationComplete={() => alert('time out')}
        />
      </View>
      <View style={[marginPosition(10),{width:widthValue(1)}]}>
        {currentButton === 0 && 
      <TimerButton onPress={()=>handleStart()} buttonText={'Start to focus'} widthVal={{width:widthValue(2.3)}} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>}
        {currentButton === 1 &&  
      <TimerButton onPress={handlepause} buttonText={'Pause'} widthVal={{width:widthValue(2.3)}} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={[borderWidth(1)]}/>}
        {currentButton === 2 &&  
        <View style={[styles.row,styles.spaceEvenly,{width:widthValue(1)}]}>
      <TimerButton onPress={handleStop} buttonText={'Stop'} widthVal={{width:widthValue(2.3)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} borderWidth={[borderWidth(0)]}/>
      <TimerButton onPress={handleContinue} buttonText={'Continue'} widthVal={{width:widthValue(2.3)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>}
        {currentButton === 3 &&  
      <TimerButton onPress={handleBreak} buttonText={'Start Break Time'} widthVal={{width:widthValue(2)}} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>}
       {currentButton === 4 &&  
      <TimerButton onPress={handleSkipBreak} buttonText={'Skip Break'} widthVal={{width:widthValue(2)}} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={borderWidth(1)}/>}
      </View>
    </View>
  );
};






