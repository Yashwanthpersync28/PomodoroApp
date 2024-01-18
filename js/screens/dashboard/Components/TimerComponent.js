import React, { useState, useEffect, useRef } from 'react';
import { View,Text } from 'react-native';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const TimerComponent = ({breakTimer,progress,currentTimer, isTimerActive, handleStart, handlepause, setCurrentButton, currentButton, handleContinue, handleStop, handleSkipBreak, handleBreak, session, time, setTime, InitialTime, barColor, handleTimerComplete, initialValue, progressRef, formatTime }) => {

  return (
    <View style={[styles.centerHorizontal]}>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10), styles.allCenter]}>
       
       {currentTimer === 0 &&
       ( <AnimatedCircularProgress
        key={currentButton}
          size={230}
          width={20}
          fill={progress}
          tintColor={barColor}
          backgroundColor={'#efefef'}
          padding={0}
          rotation={0}
          lineCap={'round'}
          duration={1000}
          // onAnimationComplete={handleTimerComplete}
        >
          {(fill) => (
            <View style={[styles.allCenter]}>
              <Text style={[fontSize(55), styles.black, marginPosition(-30), { fontWeight: '500' }]}>{formatTime(time)}</Text>
              <Text style={{ color: 'black' }}>{session} Session</Text>
            </View>
          )}
        </AnimatedCircularProgress>)}

        {currentTimer === 2 && 
         <AnimatedCircularProgress
         key={currentButton}
           size={230}
           width={20}
           fill={progress}
           tintColor={'black'}
           backgroundColor={'#efefef'}
           padding={0}
           rotation={0}
           lineCap={'round'}
           duration={1000}
         >
           {(fill) => (
             <View style={[styles.allCenter]}>
               <Text style={[fontSize(55), styles.black, marginPosition(-30), { fontWeight: '500' }]}>{formatTime(time)}</Text>
               <Text style={{ color: 'black' }}>Break Session</Text>
             </View>
           )}
         </AnimatedCircularProgress>
         }

       {currentTimer === 1 &&
       ( <AnimatedCircularProgress
        key={currentButton}
          size={230}
          width={20}
          fill={progress}
          tintColor={barColor}
          backgroundColor={'#efefef'}
          padding={0}
          rotation={0}
          lineCap={'round'}
          duration={1000}
        >
          {(fill) => (
            <View style={[styles.allCenter]}>
              <Text style={[fontSize(55), styles.black, marginPosition(-30), { fontWeight: '500' }]}>{formatTime(time)}</Text>
              <Text style={{ color: 'black' }}>{session} Session</Text>
            </View>
          )}
        </AnimatedCircularProgress>)}
      </View>
      <View style={[marginPosition(10), { width: widthValue(1) }]}>
        {currentButton === 0 &&
          <TimerButton onPress={handleStart} buttonText={'Start to focus'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 1 &&
          <TimerButton onPress={handlepause} buttonText={'Pause'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={[borderWidth(1)]} />}
        {currentButton === 2 &&
          <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1) }]}>
            <TimerButton onPress={handleStop} buttonText={'Stop'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} borderWidth={[borderWidth(0)]} />
            <TimerButton onPress={handleContinue} buttonText={'Continue'} widthVal={{ width: widthValue(2.3) }} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
          </View>}
        {currentButton === 3 &&
          <TimerButton onPress={handleBreak} buttonText={'Start Break Time'} widthVal={{ width: widthValue(2) }} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 4 &&
          <TimerButton onPress={handleSkipBreak} buttonText={'Skip Break'} widthVal={{ width: widthValue(2) }} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={borderWidth(1)} />}
      </View>
    </View>
  );
};


