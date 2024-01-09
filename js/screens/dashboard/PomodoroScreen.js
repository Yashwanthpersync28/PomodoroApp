import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import {
  flex,
  styles,
  widthValue,
  radius,
  heightValue,
  borderWidth,
  padding,
  paddingPosition,
  marginPosition,
} from '../../styles/Styles';
import {HomepageHeader} from './Components/HomepageHeader';
import {ModeButtons} from './Components/ModeButtons';
import {TimerComponent} from './Components/TimerComponent';
import {TaskComponent} from './Components/TaskComponent';
import { TaskModal } from './Components/TaskModal';
import { TimerModeModal } from './Components/TimerModeModal';
import { StrictModeModal } from '../../components/modals/StrictModeModal';
import { WhiteNoiseModal } from './Components/WhiteNoiseModal';
import { Icons } from '../../components/Icons';

export const PomodoroScreen = () => {

  const [currentModal, setCurrentModal] = useState(0)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [currentButton,setCurrentButton] = useState(0);
  const [selectedTask,setSelectedTask] = useState('Select Task')
  const [session,setSession] = useState('No')
  const [selectedTimeFormat,setSelectedTimeFormat] = useState(null)

  const [InitialTime,setInitialTime] = useState(25*60)

  const [time,setTime] = useState(InitialTime)

  const [barColor,setBarColor] = useState('#ff6347')

  const handleStart = ()=>{
    if(selectedTask === 'Select Task'){
      setCurrentModal(1);
      setCurrentButton(0);
      setIsTimerActive(false)
    } else {
      setIsTimerActive(true)
      console.log('timer is active now')
      setCurrentButton(1);
    }
  }
  const handlepause = ()=>{
    setIsTimerActive(false)
    setCurrentButton(2)
    setBarColor('#1c97f0')
  }
  const handleStop = ()=>{
    setIsTimerActive(false)
    setCurrentButton(0)
    setTime(InitialTime)
    setBarColor('#ff6347')
  }
  const handleContinue = ()=>{
    setIsTimerActive(true)
    setCurrentButton(1)
    setBarColor('#ff6347')
  }
  const handleBreak = ()=>{
    setIsTimerActive(true)
    setCurrentButton(4)
  }
  const handleSkipBreak = ()=>{
    setIsTimerActive(true)
  }

  const handleTasks = () => {
    setCurrentModal(1)
  };

  const closeModal = () => {
    setCurrentModal(0)
  }

  const clearTask = ()=>{
    setSelectedTask('Select Task');
    setTime(InitialTime)
    setSession('No');
    setIsTimerActive(false)
    setCurrentButton(0)
  }

  const selectTimerFormat=(item)=>{
    setSelectedTimeFormat(item)
  }


return (
  <SafeAreaView style={[styles.centerHorizontal, styles.bgWhite, flex(1), styles.positionRelative]}>
    <View style={[styles.bgOrange, { height: heightValue(2), width: widthValue(1) }, styles.centerHorizontal]}>
      <View >
        {/* <HomepageHeader  IconFamily={Icons.Feather} name={'bell'} bgcolor={styles.bgOrange} color={styles.white}/> */}
        {/* <TaskComponent handleTasks={handleTasks}/> */}
        <HomepageHeader />
        <TaskComponent handleTasks={handleTasks} selectedTask={selectedTask} setSession={setSession} setCurrentModal={setCurrentModal} clearTask={clearTask}/>
      </View>
      <View style={[{ backgroundColor: 'white', height: 100, width: 100, bottom: -60, transform: [{ scaleX: 4.5 }, { scaleY: 2 }] }, styles.positionAbsolute, radius(40)]}>
      </View>
      <View style={[styles.positionAbsolute, { bottom: -190 }]}>
        <TimerComponent 
        isTimerActive={isTimerActive} 
        handleStart={handleStart}  
        handlepause={handlepause} 
        currentButton={currentButton} 
        handleStop={handleStop}  
        handleContinue={handleContinue} 
        handleBreak={handleBreak} 
        handleSkipBreak={handleSkipBreak}
        setIsTimerActive={setIsTimerActive} 
        selectedTask={selectedTask} 
        setCurrentModal={setCurrentModal} 
        session={session}
        time={time}
        setTime={setTime}
        InitialTime={InitialTime}
        barColor={barColor}
        // ProgressRef={ProgressRef}
        />
      </View>
    </View>
    <View style={[styles.centerHorizontal, styles.positionAbsolute, { bottom: -15 }]}>
      <ModeButtons currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </View>
    {currentModal === 1 && <TaskModal currentModal={currentModal} closeModal={closeModal} setSelectedTask={setSelectedTask} setSession={setSession}/>}
    {currentModal === 2 && <StrictModeModal closeModal={closeModal} currentModal={currentModal}/>}
    {currentModal === 3 && <TimerModeModal closeModal={closeModal} currentModal={currentModal} selectedTimeFormat={selectedTimeFormat} selectTimerFormat={selectTimerFormat}/>}
    {currentModal === 4 && <WhiteNoiseModal closeModal={closeModal} currentModal={currentModal}/>}
  </SafeAreaView>
);
};

