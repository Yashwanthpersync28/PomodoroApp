import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthValue, radius, styles, shadow, fontSize, marginPosition, borderWidth,padding } from '../../../styles/Styles';
import { TimerButton } from './TimerButton';
import { useSelector,useDispatch } from 'react-redux';
import { setFocusTime } from '../../../redux/userReducer/focustimeReducer';
import { setLocalSession } from '../../../redux/userReducer/localSessionReducer';
import { setBreakTime } from '../../../redux/userReducer/breaktimeReducer';
import { modalData } from '../../../constants/ModalsData';

export const PomodoroTimer = ({handleSkipBreak,handleStart,totalfocusTime,isTimerActive,setTime,FocusTime,currentTimer,BreakTime,barColor,setIsTimerActive,setProgress,setCurrentTimer,setBarColor,currentButton,setCurrentButton,handleContinue,handlepause,handleStop,displayTime,setDisplayTime,totalSessionTime,setTotalSessionTime,completedPomodoro,displaySession,setTotalFocusTime,stopSound,}) => {

  const dispatch = useDispatch();

  const selectedCompletionSound = useSelector(state=>state.user.completionSound.selectedCompletionSound)
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
  const longBreakTime = useSelector((state)=>state.user.longBreak.longBreak)
  console.log('longBreak',longBreakTime)
  const longBreakSession = useSelector((state)=>state.user.longBreakSession.longBreakSession)
  const longBreakNumber= parseInt(longBreakSession)
  // console.log(longBreakSessionNumber,'longBreakSessionNumber')

  // const FocusTime = useSelector((state)=>state.user.focusTime.focusTime);
  const taskId =  useSelector((state)=>state.user.userTasks.userTask.map(task=>task.id))
    console.log(taskId);
  const maxSession = sessionNumber;
  // const [displayTime,setDisplayTime] = useState(focusTime)
  console.log('localSession:', localSession);
const completedSound = modalData.CompletionSounds.find(item=>item.MusicName === selectedCompletionSound)


  // const [displaSession,setDisplaSession] = useState('No Sessions')

  const [currentBreakTime,setCurrentBreakTime] = useState(BreakTime)
// const [CompletedTime,setCompletedTime]= useState(0)
  console.log(
    'currentBreak',currentBreakTime
  )
  // const [longBreak,setLongBreak] = useState(false)

  useEffect(()=>{
    setDisplayTime(FocusTime);
    setTotalSessionTime(FocusTime)
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
    
         let  newTotalSessionTime =  (currentTimer === 0 && !disableBreak) ? currentBreakTime:FocusTime
         
    
          if (newTime <= 0) {
            setIsTimerActive(false);
            setProgress(0);
            // playSound();
            setCurrentTimer((prevTimer) => (prevTimer === 0 ? 1 : 0));
            setBarColor((prevColor) => (prevColor === 0 ? '#ff6347' : '#ff6347'))
            
            if (localSession === longBreakNumber){
              console.log('mathcing',localSession === longBreakNumber)
              setBreakTime(longBreakTime)
            }
            if(currentTimer === 1 ){
              dispatch(setLocalSession(localSession + 1))
            }     
            if(localSession === maxSession){
              completedPomodoro()
              setCurrentTimer(1)   
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
                if(localSession === longBreakNumber ){
                  console.log('it here',localSession === longBreakNumber )
                  setCurrentBreakTime(longBreakTime)
                  setTotalSessionTime(longBreakTime)
                  setDisplayTime(longBreakTime)
                  setBarColor('#ff6347')
                  
                } else if(longBreakTime ===0){
              setCurrentBreakTime(BreakTime)
              setDisplayTime(BreakTime)
              setTotalSessionTime(BreakTime);
              
                } else if (autoStartFocus ===true){
              setDisplayTime(BreakTime)
              setTotalSessionTime(BreakTime);
              
                }
                 else {
                  setCurrentBreakTime(BreakTime)
                  setDisplayTime(BreakTime)
                  setTotalSessionTime(BreakTime);
                  
                 }
              } else if(currentTimer === 1 ){
              setTotalSessionTime(FocusTime);
              }
          } 
         /*  //Long Break functionality
          // else if (disableBreak === false) {
          //   if (currentTimer === 0) {
          //     if (localSession === longBreakNumber) {
          //       console.log('it here', localSession === longBreakNumber);
          //       if (longBreakTime === 0) {
          //         setCurrentBreakTime(BreakTime);
          //         setTotalSessionTime(BreakTime);
          //         setDisplayTime(BreakTime);
          //         setBarColor('#ff6347');
          //       } else {
          //         setCurrentBreakTime(longBreakTime);
          //         setTotalSessionTime(longBreakTime);
          //         setDisplayTime(longBreakTime);
          //         setBarColor('skyblue');
          //       }
          //     } else {
          //       setDisplayTime(BreakTime);
          //       setTotalSessionTime(BreakTime);
          //     }
          //   } else if (currentTimer === 1) {
          //     setTotalSessionTime(FocusTime);
          //   }
          // } */
          

          if(autoStartBreak === true && disableBreak === false && currentTimer === 0){
            setTimeout(()=>{
              handleStart(1)
            },1000)
          }

          if(autoStartFocus === true && currentTimer === 1){
            if(disableBreak === true && currentTimer === 1){
            setTimeout(()=>{
              handleStart(0)
            },1000)}
            else {
              setTimeout(()=>{
                handleStart(0)
              },1000)
            }
          }
        
          if( disableBreak ===true && autoStartFocus === true && currentTimer === 1 ){
            setTimeout(()=>{
              handleStart(0)
            },1000)
          }
          if(autoStartFocus === true && currentTimer === 1 && disableBreak === true ){
            setTimeout(()=>{
              handleStart(0)
            },1000)
          }
          console.log('Stopping sound...');
          // stopSound();
            return newTotalSessionTime;
          }
          const newProgress = Math.max(0, Math.floor(((newTotalSessionTime - newTime) / newTotalSessionTime) * 100));
          setProgress(newProgress);
          setBarColor(currentTimer === 0 ? '#ff6347' : '#ff6347');
          setTime((prevTime) => prevTime - 1);
          // stopSound();
          return newTime;
        });
      }
    };
    if (isTimerActive) {
      intervalId = setInterval(updateTimer, 1000);
    } 
    if(!isTimerActive){
      stopSound();
    }
  
    return () => clearInterval(intervalId);
  }, [isTimerActive, currentTimer, FocusTime, BreakTime,maxSession,longBreakSession,longBreakTime,currentBreakTime,setTotalSessionTime,setCurrentBreakTime]);

const addsession= ()=>{
  setLocalSession(localSession +1)
}


  return (
    <View style={[styles.centerHorizontal]}>
    <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10), styles.allCenter]}>
        <AnimatedCircularProgress
          size={widthValue(1.6)}
          width={18}
          fill={(displayTime/totalSessionTime)*100}
          tintColor={barColor}
          backgroundColor="#efefef"
          rotation={0}
          lineCap='round'
        >
          {() => (
            <View style={[styles.allCenter,{marginTop:-25}]}>
            <Text style={[{fontSize:55,fontWeight:'500'},styles.black]}>
              {`${Math.floor(displayTime / 60)}:${(displayTime % 60).toString().padStart(2, '0')}`}
            </Text>
            <Text style={[styles.black]}>{displaySession}</Text>
            {/* <Text style={[styles.black]}>{currentBreakTime}</Text> */}
            {/* <Text style={[styles.black]}>{(displayTime / totalSessionTime) * 100)}</Text> */}
            {console.log('Display Time:',currentBreakTime )}
    {console.log('Progress:', (displayTime / totalSessionTime) * 100)}
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={[marginPosition(10), { width: widthValue(1) }]}>
        {currentButton === 0 &&
          <TimerButton onPress={()=>handleStart(0)} buttonText={'Start to focus'} widthVal={{ width: widthValue(2) }}  paddingval={[padding(0,10,20)]} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 1 &&
          <TimerButton onPress={handlepause} buttonText={'Pause'} widthVal={{ width: widthValue(2.3) }}  paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={[borderWidth(1)]}/>}
        {currentButton === 2 &&
          <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1) }]}>
          <TimerButton onPress={handleStop} buttonText={'Stop'} widthVal={{ width: widthValue(2.3) }}  paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} />
          <TimerButton onPress={handleContinue} buttonText={'Continue'} widthVal={{ width: widthValue(2.3) }}  paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
                        </View>}
        {currentButton === 3 &&
          <TimerButton onPress={()=>handleStart(1)} buttonText={'Start Break Time'}  widthVal={{ width: widthValue(2) }} paddingval={[padding(0,10,20)]} ButtonIcon={'play'} BgColor={[styles.bgOrange]} textColor={[styles.white]} />}
        {currentButton === 4 &&
          <TimerButton onPress={()=>{handleSkipBreak()}} buttonText={'Skip Break'}  widthVal={{ width: widthValue(2) }} paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bgWhite]} textColor={[styles.Orange]} borderWidth={borderWidth(1)} />}
      </View>
    </View>
  );
};
