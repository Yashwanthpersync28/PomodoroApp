import { View,SafeAreaView, Text,StatusBar} from 'react-native';
import React, { useState,useRef,useEffect } from 'react';
import {flex,styles, widthValue, radius, heightValue, marginPosition,} from '../../styles/Styles';
import {HomepageHeader} from './Components/HomepageHeader';
import {ModeButtons} from './Components/ModeButtons';
import {TimerComponent} from './Components/TimerComponent';
import {TaskComponent} from './Components/TaskComponent';
import { TaskModal } from './Components/TaskModal';
import { TimerModeModal } from './Components/TimerModeModal';
import { StrictModeModal } from '../../components/modals/StrictModeModal';
import { WhiteNoiseModal } from './Components/WhiteNoiseModal';
import { Icons } from '../../components/Icons';
import { modalData } from '../../constants/ModalsData';
import Sound from 'react-native-sound';
import { Header } from './Components/Header';


export const PomodoroScreen = () => {


  // const InitialTimeecondMode = 100*60;
  const InitialFocusTime = .5*60;
  const initialBreakTime = .15 * 60;
  const [time,setTime] = useState(InitialFocusTime)
  const [sessionBreak,setSessionBreak] = useState(initialBreakTime)
  const [progress,setProgress] = useState(100)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [barColor,setBarColor] = useState('#ff6347')
  const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break






  const [focusTime,setFocusTime] = useState(0)
  const [currentButton,setCurrentButton] = useState(0);
  const [session,setSession] = useState('No')
  const [timerMode,setTimerMode] = useState(0);
  const [initialValue,setInitialvalue] = useState(0)
  const [currentModal, setCurrentModal] = useState(0)
  const InitialSelectedState = modalData.TimerMode[0].id
  const [selectedItemId,setSelectedItemId] = useState(InitialSelectedState)

  // const taskSelected = 'Select Task';
  const [selectedTask,setSelectedTask] = useState('Select Task')
  const initialtune = modalData.whiteNoiseMode[0].id
  const [selectedTune,setSelectedTune] = useState(initialtune)



  useEffect(() => {
    let intervalId;

    const updateTimer = () => {
      if (isTimerActive) {
        const newTime = isCountingUp ? time + 1 : time - 1;
        const breakTime = sessionBreak - 1;
        if (newTime <= 0) {
          setIsTimerActive(false);
          setProgress(0);
          setCurrentTimer(1);
          setCurrentButton(3) // Switch to break timer
          setTime(initialBreakTime);
          setBarColor('#00e0ff');
          setIsCountingUp(false);
          return;
        }

        const newProgress = Math.floor(((currentTimer === 0 ? newTime / InitialFocusTime :breakTime/ initialBreakTime)) * 100);
        setProgress(newProgress);

        setBarColor(currentTimer === 0 ? '#ff6347' : '#00e0ff');

        setTime(newTime);
      }
    };

    if (isTimerActive) {
      intervalId = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive, time, currentTimer, isCountingUp]);



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
      const sound = new Sound(song, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.error('Failed to load sound', error);
        } else {
          console.log('Sound initialized successfully');
  
          // Continue with playback logic
          sound.play((success) => {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.error('Playback failed due to audio decoding errors');
            }
          });
        }
      });
  };
  
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
      setProgress(10)
      setCurrentTimer(1)
    }
  }
  const handleStart = ()=>{
    if(currentTimer === 0){
    if(selectedTask === 'Select Task'){
      setCurrentModal(1);
      // setCurrentButton(0);
      setIsTimerActive(false)
      console.log('timer is not  active now')
      setIsCountingUp(false)
    } else {
      setIsTimerActive(true)
      console.log('timer is active now')
      setCurrentButton(1);
      setInitialvalue(time)
      setIsCountingUp(false)
      getDate()
      
    }
  } 
  else if(currentTimer === 1){
    if(selectedTask === 'Select Task') {
      setCurrentModal(1)
      setIsTimerActive(false)
      setIsCountingUp(false)
    }  else {
      setIsTimerActive(true)
      setCurrentButton(1)
      setIsCountingUp(true)
      setBarColor('#ff6347')
      getDate()
    }
  }
  }

  const handleBreak = () => {
    setCurrentTimer(1)
    setProgress(100)
  setIsTimerActive(true);
  setIsCountingUp(false);
  setCurrentButton(4);
  
};

  const formatTime = (seconds)=>{
    const minutes = Math.floor(seconds/60);
    const secondsLeft = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2,'0')}`;
  };


  const handlepause = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(2)
    setBarColor('#1c97f0')
  }

  const handleStop = ()=>{
    // if(currentTimer === 1){
    // setProgress(0)
    setTime(InitialFocusTime)
    setBarColor([styles.bgLightWhite])
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(0)
    console.log('timer',currentTimer)
  // }
  //  else if
  //  (currentTimer === 0)
  //  {
  //     setProgress(100)
  //     setBarColor('#ff6347')
  //     setTime(InitialFocusTime)
  //     setIsTimerActive(false)
  //   console.log('timer is not active now')
  //   setCurrentButton(0)
  //   console.log('timer',currentTimer)
  //   }
  }
  const handleContinue = ()=>{
    setIsTimerActive(true)
    console.log('timer is active now')
    setCurrentButton(1)
    setBarColor('#ff6347')
  }

  // const  handleTimerComplete = ()=>{
  //   setCurrentTimer(2)
  //   setProgress(100)
  // }

  //   // if(currentTimer === 0){
  //   //   setCurrentTimer(1)
  //   //   setSession('Short Break')
  //   //   setTime(breakTime)
  //   //   setProgress(100)
  //   // } else {
  //   //   setCurrentTimer(0)
  //   //   setTime(InitialTime)
  //   //   setSession('2 of 4')
  //   // }
  // }


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
    setSelectedTask('Select Task');
    setTime(InitialFocusTime)
    setSession('No');
    setIsTimerActive(false)
    console.log('timer is not  active now')
    setCurrentButton(0)
    setBarColor('#ff6347')
    setTime(InitialFocusTime)
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

  //   if(Sound){
  //     Sound.stop();
  //     Sound.release();
  //   }
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
        InitialFocusTime={InitialFocusTime}
        // InitialTime={InitialTime}
        barColor={barColor}
        // handleTimerComplete={handleTimerComplete}
        timerMode={timerMode}
        initialValue={initialValue}
        setCurrentButton={setCurrentButton}
        formatTime={formatTime}
        progress={progress}
        currentTimer={currentTimer}
        sessionBreak={sessionBreak}
        initialBreakTime={initialBreakTime}
        />
      </View>
    </View>
    <View style={[styles.centerHorizontal, styles.positionAbsolute, { bottom: -15 }]}>
      <ModeButtons currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </View>
    {currentModal === 1 && <TaskModal currentModal={currentModal} closeModal={closeModal} setSelectedTask={setSelectedTask} setSession={setSession}/>}
    {currentModal === 2 && <StrictModeModal closeModal={closeModal} currentModal={currentModal} updateStrictMode={updateStrictMode}/>}
    {currentModal === 3 && <TimerModeModal closeModal={closeModal} currentModal={currentModal}  handleSelectTimerFormat={handleSelectTimerFormat} selectedItemId={selectedItemId} updateTimerMode={updateTimerMode}/>}
    {currentModal === 4 && <WhiteNoiseModal closeModal={closeModal} currentModal={currentModal} selectedTune={selectedTune} handleNoise={handleNoise} updateNoise={updateNoise} playSound={playSound}/>}
  </SafeAreaView>
);
};





