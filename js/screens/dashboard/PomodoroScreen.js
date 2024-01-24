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
import { setCurrentModal } from '../../redux/userReducer/modalReducer';
export const PomodoroScreen = () => {

  const sessionNumber = useSelector((state)=>state.user.taskSessions.taskSession);
  console.log('sessionNumber',sessionNumber)

  const dispatch= useDispatch();

  const FocusTime = useSelector((state)=>state.user.focusTime.focusTime)
  const BreakTime  = useSelector((state)=>state.user.breakTime.breakTime)
  const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
  console.log(currentModal,'currentModal')
  const [currentTimer,setCurrentTimer] = useState(0)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [time, setTime] = useState(FocusTime);

  const [progress, setProgress] = useState(100);
  const [session,setSession] = useState(0)
  const [maxSession,setMaxSession] = useState(sessionNumber)

  const [secondFocusProgress,setSecondFocusProgress] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [barColor,setBarColor] = useState('#ff6347')

  const [breakTime,setBreakTime] = useState(BreakTime)

  const [currentButton,setCurrentButton] = useState(0);
  const [timerMode,setTimerMode] = useState(0);
  const InitialTimerMode = modalData.TimerMode[0].id 
  const [selectedMode,setSelectedMode] = useState(InitialTimerMode)

  const taskSelected = 'Select Task';
  const [selectedTask,setSelectedTask] = useState(taskSelected)
  const initialtune = modalData.whiteNoiseMode[0].id
  const [selectedTune,setSelectedTune] = useState(initialtune)
  const [sound,setSound] = useState(null)

  const [secondTime,setSecondTime] = useState(0*60);


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

  
  const handleTimerMode = (item)=>{
    setSelectedMode(item.id)
  }

  const updateTimerMode = ()=>{
    if(selectedMode === modalData.TimerMode[0].id){
      console.log('first mode, timer 0');
  dispatch(setCurrentModal(0))
      setTimerMode(0)
      setCurrentTimer(0)
      setProgress(100)
      setBarColor('#ff6347')
    }
    else if (selectedMode === modalData.TimerMode[1].id) {
      console.log('second mode, timer 1');
  dispatch(setCurrentModal(0))
      setTimerMode(1)
      setCurrentTimer(2)
      setSecondTime(0*60)
    }
  }


  const handleStart = (timerType) => {
    if(selectedTask === taskSelected){
      // setCurrentModal(1)
  dispatch(setCurrentModal(1))

      setIsTimerActive(false)
      console.log('timer is not  active now')
    } else {
      getDate()
    setIsTimerActive(true);
    setCurrentTimer(timerType); // Set the current timer type
    setCurrentButton(timerType === 0 ? 1 : 4)
    }
  };

  const handleStop = () => {
    {timerMode === 0 ? 
      (setIsTimerActive(false), setCurrentButton(0),  setTime(FocusTime), setBarColor('#ff6347') )
       :  ( setCurrentButton(0), setSecondTime(0*60),setSecondFocusProgress(0))
      }
  };

  const handlepause = ()=>{
    {timerMode === 0 ? 
    (setIsTimerActive(false),
    console.log('timer is not active now'),
    setCurrentButton(2),
    setBarColor('#1c97f0')) : (setIsTimerActive(false),setCurrentButton(2),setBarColor('#1c97f0'))}
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



  const handleSecondStart = ()=>{
    if(selectedTask === taskSelected){
      // setCurrentModal(1);
  dispatch(setCurrentModal(1))

      // setCurrentButton(0);
      setIsTimerActive(false)
      console.log('timer is not  active now')
      setIsCountingUp(false)
    } else {
      setIsTimerActive(true)
      setBarColor('#ff6347')
      console.log('timer is active now')
      setCurrentButton(1);
      getDate()
    }
  }

  const handleAnimation = ()=>{
    if(secondFocusProgress === 100){
    setSecondFocusProgress(0)
    }
  } 

  const handleTasks = () => {
    // setCurrentModal(1)
  dispatch(setCurrentModal(1))

  };

  const closeModal = () => {
  dispatch(setCurrentModal(0))
  }

  const clearTask = ()=>{

    if(timerMode === 0){    
      setSelectedTask(taskSelected);
      setTime(FocusTime)
    setIsTimerActive(false)
    console.log('timer is not  active now')
    setCurrentButton(0)
    setProgress(100)
    }
    else if(timerMode === 1){
      // setBarColor('#ff6347')
      setSelectedTask(taskSelected);

    setSecondFocusProgress(0)
    setSecondTime(0*60)
    setIsTimerActive(false)
    setCurrentButton(0)
    }
    // setSession('No');
    
    // setTime(InitialFocusTime)
  }

  //  start of StrictModemodal functions

  const updateStrictMode = ()=>{
    // setCurrentModal(0);
  dispatch(setCurrentModal(0))
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
    // setCurrentModal(0);
  dispatch(setCurrentModal(0))

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
        currentTimer={currentTimer}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        handleSecondStart={handleSecondStart}
        setSecondFocusProgress={setSecondFocusProgress}
        secondFocusProgress={secondFocusProgress}
        setSecondTime={setSecondTime}
        secondTime={secondTime}
        barColor={barColor}
        handleAnimation={handleAnimation}
        />  }
        {timerMode === 0 &&
<Pomodoro2  
  time={time} 
  setTime={setTime}
  barColor={barColor} 
  FocusTime={FocusTime} 
  isTimerActive={isTimerActive} 
  currentTimer={currentTimer} 
  setCurrentTimer={setCurrentTimer}
  BreakTime={BreakTime} 
  currentButton={currentButton} 
  session={session} 
  handleStart={handleStart} 
  handleContinue={handleContinue} 
  handlepause={handlepause} 
  handleStop={handleStop}
  setProgress={setProgress}
  setSession={setSession}
  setBarColor={setBarColor}
  setIsTimerActive={setIsTimerActive}
  setCurrentButton={setCurrentButton}
  handleSkipBreak={handleSkipBreak}
  maxSession={maxSession}
  playSound={playSound}
  />
        }
  
      </View>
    </View>
    <View style={[styles.centerHorizontal, styles.positionAbsolute, { bottom: -15 }]}>
      <ModeButtons currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </View>
    {currentModal === 1 && <TaskModal currentModal={currentModal} closeModal={closeModal} setSelectedTask={setSelectedTask} />}
    {currentModal === 2 && <StrictModeModal closeModal={closeModal} currentModal={currentModal} updateStrictMode={updateStrictMode}/>}
  {currentModal === 3 && <TimerModeModal closeModal={closeModal} currentModal={currentModal} selectedMode={selectedMode} updateTimerMode={updateTimerMode} handleTimerMode={handleTimerMode}/>}
    {currentModal === 4 && <WhiteNoiseModal closeModal={closeModal} currentModal={currentModal} selectedTune={selectedTune} handleNoise={handleNoise} updateNoise={updateNoise} playSound={playSound} stopSound={stopSound}/>}
  </SafeAreaView>
);
};





