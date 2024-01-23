import { View,SafeAreaView, Text,StatusBar} from 'react-native';
import React, { useState,useRef,useEffect } from 'react';
import {flex,styles, widthValue, radius, heightValue, marginPosition,} from '../../styles/Styles';
import {HomepageHeader} from './Components/HomepageHeader';
import {ModeButtons} from './Components/ModeButtons';
import {TimerComponent} from './Components/TimerComponent';
import {TaskComponent} from './Components/TaskComponent';
import { TaskModal } from './Components/TaskModal';
import { TimerModeModal } from './Components/TimerModeModal';
import { StrictModeModal } from './Components/StrictModeModal';
import { WhiteNoiseModal } from './Components/WhiteNoiseModal';
import { Icons } from '../../components/Icons';
import { modalData } from '../../constants/ModalsData';
import Sound from 'react-native-sound';
import { Header } from './Components/Header';
import { Pomodoro2 } from './Components/Pomodoro2';
import { useDispatch,useSelector } from 'react-redux';
import { Button } from 'react-native';


export const PomodoroScreen = () => {

  // const updatedTime = useSelector((state)=>state.user.focusTime.focusTime);
  // console.log('updatedTime',updatedTime)
  const dispatch = useDispatch();

  const InitialFocusTime = updatedTime;
  const InitialBreakTime = .2*60;
  const [isBreakTimeActive,setIsBreakTimeActive] = useState(false)
  const [currentTimer,setCurrentTimer] = useState(0)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [focusTime,setFocusTime] = useState(InitialFocusTime);
  const [progress,setProgress] = useState(100);
  const [breakTime,setBreakTime] = useState(InitialBreakTime);
  const [breakProgress,setBreakProgress] = useState(100);

  const [time, setTime] = useState(InitialFocusTime);
  const [SecondFocusTime,setSecondFocusTime] = useState(5*60);
  const [secondFocusProgress,setSecondFocusProgress] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [barColor,setBarColor] = useState('#ff6347')


  const [currentButton,setCurrentButton] = useState(0);
  const [session,setSession] = useState('No')
  const [timerMode,setTimerMode] = useState(0);
  const [initialValue,setInitialvalue] = useState(0)
  const [currentModal, setCurrentModal] = useState(0)
  const InitialSelectedState = modalData.TimerMode[0].id
  const [selectedItemId,setSelectedItemId] = useState(InitialSelectedState)

  const taskSelected = 'Select Task';
  const [selectedTask,setSelectedTask] = useState(taskSelected)
  const initialtune = modalData.whiteNoiseMode[0].id
  const [selectedTune,setSelectedTune] = useState(initialtune)
  const [sound,setSound] = useState(null)


  useEffect (()=>{
    let timer;

    const secondFocusTimer = ()=>{
    if(isTimerActive){
     const secondNewTime = time + 1;
      console.log('newTIme',secondNewTime)

      const secondNewProgress = Math.floor((secondNewTime/SecondFocusTime)*100)
      console.log('secondNewProgress',secondNewProgress)
      setSecondFocusProgress(secondNewProgress)
    
      setTime(secondNewTime)
    }
    }
    if(isTimerActive){
      timer = setInterval(secondFocusTimer,1000);
    }
    return ()=>clearInterval(timer)
  },[isTimerActive,time])



  const getDate = ()=>{
    const date = new Date();
    const presentDate = date.getDate();
    const presentDay = date.getDay();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    console.log('presentDate',presentDate,'presentDay',presentDay,'hours',hours)
  }
  //TIMER SETUP//

  const playSound = (song) => {
    // Stop the currently playing sound
    if (sound) {
      sound.stop();
      sound.release();
    }
  
    // Load and play the new sound
    const newSound = new Sound(song, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Failed to load sound', error);
      } else {
        console.log('Sound initialized successfully');
  
        // Continue with playback logic
        newSound.play((success) => {
          if (success) {
            console.log('Sound played successfully');
          } else {
            console.error('Playback failed due to audio decoding errors');
          }
        });
  
        // Save the reference to the new sound
        setSound(newSound);
      }
    });
  };
  

  const stopSound=()=>{
    if(sound){
      sound.stop();
      sound.release();
    }
  }
  //audio section playSound //

  
  const updateTimerMode = ()=>{
    if(selectedItemId === modalData.TimerMode[0].id){
      console.log('first mode, timer 0');
      setCurrentModal(0)
      setTime(InitialFocusTime)
      setTimerMode(0)
      setCurrentTimer(0)
      setProgress(100)
      setBarColor('#ff6347')
    } else if (selectedItemId === modalData.TimerMode[1].id) {
      console.log('second mode, timer 1');
      setCurrentModal(0);
      setTimerMode(1)
      setTime(0*60)
      // setseProgress(0)
      // setSecondFocusProgress(secondFocusProgress)
      setCurrentTimer(2)
    }
  }
  const handleStart = ()=>{
    if(selectedTask === taskSelected){
      setCurrentModal(1);
      // setCurrentButton(0);
      setIsTimerActive(false)
      console.log('timer is not  active now')
      setIsCountingUp(false)
    } else {
      setIsTimerActive(true)
      console.log('timer is active now')
      setCurrentButton(1);
      getDate() 
    }
  }

  const handleStop = () => {
    setIsTimerActive(false);
    setCurrentButton(0);
    setTime(0*60);
    setBarColor('#ff6347')
  };

  const handlepause = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(2)
    setBarColor('blue')
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
    setSession('2 of 4')
    setTime(InitialFocusTime)
    setBarColor('#ff6347')
  }

  const handleTasks = () => {
    setCurrentModal(1)
  };

  const closeModal = () => {
    setCurrentModal(0)
  }

  const clearTask = ()=>{
    setSelectedTask(taskSelected);
    setTime(0*60)
    // setSession('No');
    setIsTimerActive(false)
    console.log('timer is not  active now')
    setCurrentButton(0)
    setBarColor('#ff6347')
    setSecondFocusProgress()
    // setTime(InitialFocusTime)
  }

  // start of TimerModemodal functions
  const handleSelectTimerFormat=(item)=>{
    setSelectedItemId(item.id)
  }

  //  end of TimerModemodal functions

  //  start of StrictModemodal functions

  const updateStrictMode = ()=>{
    setCurrentModal(0);
    console.log('strict mode is enabled')
  }

  //  end of StrictModemodal functions

  //  start of WhiteNoise modal functions


  
  const handleNoise = (item) => {
    setSelectedTune(item.id);
    console.log('selectedTune',selectedTune);

    playSound(item.song);
  };
  
  // Example: Play the first white noise song from the array
  // const selectedWhiteNoise = whiteNoiseSongs[0];
  // handleNoise(selectedWhiteNoise);
  
  
  
  const updateNoise = ()=>{
    setCurrentModal(0);
    console.log(selectedTune)
  }

  //  end of WhiteNoise modal functions

return (
  <SafeAreaView style={[styles.centerHorizontal, styles.bgWhite, flex(1), styles.positionRelative]}>
    <StatusBar backgroundColor = "#ff6347" barStyle = "dark-content"/>
    <View style={[styles.bgOrange, { height: heightValue(2), width: widthValue(1) }, styles.centerHorizontal]}>
      <View>
        <View style={[marginPosition(0,0,0,20)]}>
          <Header />
        </View>
        <TaskComponent handleTasks={handleTasks} selectedTask={selectedTask} setSession={setSession} setCurrentModal={setCurrentModal} clearTask={clearTask}/>
      </View>
      <View style={[{ backgroundColor: 'white', height: 100, width: 100, bottom: -60, transform: [{ scaleX: 4.5 }, { scaleY: 2 }] }, styles.positionAbsolute, radius(40)]}>
      </View>
      <View style={[styles.positionAbsolute, { bottom: -190 }]}>

        {timerMode ===1 &&
         <TimerComponent 
        handleStart={handleStart}  
        handlepause={handlepause} 
        currentButton={currentButton} 
        handleStop={handleStop}  
        handleContinue={handleContinue} 
        barColor={barColor}
        progress={progress}
        currentTimer={currentTimer}
        time={time}
        InitialFocusTime={InitialFocusTime}
        InitialBreakTime={InitialBreakTime}
        secondFocusProgress={secondFocusProgress}
        />  }
        {timerMode === 0 &&
<Pomodoro2   selectedTask={selectedTask} setSelectedTask={setSelectedTask} taskSelected={taskSelected} setCurrentModal={setCurrentModal} getDate={getDate}/>}
      </View>
    </View>
    <View style={[styles.centerHorizontal, styles.positionAbsolute, { bottom: -15 }]}>
      <ModeButtons currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </View>
    {currentModal === 1 && <TaskModal currentModal={currentModal} closeModal={closeModal} setSelectedTask={setSelectedTask} setSession={setSession}/>}
    {currentModal === 2 && <StrictModeModal closeModal={closeModal} currentModal={currentModal} updateStrictMode={updateStrictMode}/>}
    {currentModal === 3 && <TimerModeModal closeModal={closeModal} currentModal={currentModal}  handleSelectTimerFormat={handleSelectTimerFormat} selectedItemId={selectedItemId} updateTimerMode={updateTimerMode}/>}
    {currentModal === 4 && <WhiteNoiseModal closeModal={closeModal} currentModal={currentModal} selectedTune={selectedTune} handleNoise={handleNoise} updateNoise={updateNoise} playSound={playSound} stopSound={stopSound}/>}
  </SafeAreaView>
);
};





