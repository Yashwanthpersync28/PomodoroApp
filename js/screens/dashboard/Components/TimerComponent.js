import React, { useState,useEffect,useRef } from 'react';
import { View,Text } from 'react-native';
import { widthValue, radius, styles, shadow,fontSize, marginPosition, buttonColor, borderWidth } from '../../../styles/Styles';
import CircularProgress,{ProgressRef} from 'react-native-circular-progress-indicator';
import { TimerButton } from './TimerButton';
import { timer } from '../../../constants/imageConstant';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { duration } from 'moment';

export const TimerComponent = ({isTimerActive,handleStart,handlepause,currentButton,handleContinue,handleStop,handleSkipBreak,handleBreak,session,time,setTime,InitialTime,barColor,handleTimerComplete}) => {
  const [progress, setProgress] = useState(InitialTime);

  useEffect(() => {
    let timer;
    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newProgress = ((prevTime - 1) / InitialTime) * 100;
          setProgress(newProgress);
          return prevTime - 1;
        });        
      }, 1000);
    }

    else  if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newProgress = ((prevTime + 1) / InitialTime) * 100;
          setProgress(newProgress);
          return prevTime +1;
        });        
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, time, InitialTime, setTime]);


const displayTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
};

  return (
    <View style={[styles.centerHorizontal]}>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10),styles.allCenter]}>
        <CircularProgress
        initialValue={time}
        value={progress}
        progressValueFontSize={0}
        progressValueColor='white'
        progressValueStyle={{width:1,height:1}}
        // progressFormatter={progress}
        // progressFormatter={(progressValue) => displayTime(progressToSeconds(progressValue))}
        duration={time*1000}
        maxValue={InitialTime}
        radius={120}
        activeStrokeColor='#ff6347'
        activeStrokeWidth={22}
        inActiveStrokeColor='#efefef'
        inActiveStrokeWidth={22}
        subtitle={`${session} Session`}
        subtitleFontSize={15}
        subtitleColor='black'
        title={displayTime(time)}
        titleStyle={[fontSize(55),styles.black,marginPosition(-30),{fontWeight:'500'}]}
        onAnimationComplete={handleTimerComplete}
        />
      </View>
      <View style={[marginPosition(10),{width:widthValue(1)}]}>
        {currentButton === 0 && 
      <TimerButton onPress={handleStart} buttonText={'Start to focus'} widthVal={{width:widthValue(2.3)}} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>}
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

