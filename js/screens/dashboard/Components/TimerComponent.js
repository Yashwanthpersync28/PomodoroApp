import React, { useState, useEffect, useRef } from 'react';
import { View,Text } from 'react-native';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const TimerComponent = ({InitialFocusTime,progress,currentTimer, isTimerActive, handleStart, handlepause,breakTime,  currentButton, handleContinue, handleStop, handleSkipBreak, handleBreak, session, time,  barColor, handleTimerComplete, initialValue, progressRef, formatTime,secondProgress,breakProgress,initialBreakTime,        sessionBreak
}) => {

  return (
    <View style={[styles.centerHorizontal]}>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10), styles.allCenter]}>
       
      <View style={[styles.allCenter]}>
      <AnimatedCircularProgress
        size={230}
        width={20}
        fill={( (currentTimer === 0 ?time / InitialFocusTime :initialBreakTime)) * 100}
        tintColor={barColor}
        backgroundColor="#efefef"
        lineCap='round'
        rotation={0}
      >
        {() => 
        <View style={[styles.allCenter]}>
        <Text style={[{fontWeight:'500',marginTop:-30 },fontSize(80),styles.black]}>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</Text>
        <Text style={[{fontWeight:'400',},fontSize(25),styles.black]}>session</Text>
        </View>
        }
      </AnimatedCircularProgress>

    </View>

        {/* {currentTimer === 2 && 
         <AnimatedCircularProgress
         key={currentButton}
           size={230}
           width={20}
           fill={breakProgress}
           tintColor={'black'}
           backgroundColor={'#efefef'}
           padding={0}
           rotation={0}
           lineCap={'round'}
           duration={1000}
         >
           {(fill) => (
             <View style={[styles.allCenter]}>
               <Text style={[fontSize(55), styles.black, marginPosition(-30), { fontWeight: '500' }]}>{formatTime(breakTime)}</Text>
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
          fill={secondProgress}
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
        </AnimatedCircularProgress>)} */}
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


