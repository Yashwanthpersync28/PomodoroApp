import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import React, { useState,useRef,useEffect } from 'react';
import {
  flex,
  styles,
  widthValue,
  radius,
  heightValue,
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
import { modalData } from '../../constants/ModalsData';
import Sound from 'react-native-sound';
import { Header } from './Components/Header';




export const PomodoroScreen = () => {

  const [progress,setProgress] = useState(100)
  const InitialTime = .5*60;
  // const InitialTimeecondMode = 100*60;
  const [time,setTime] = useState(InitialTime)
  const [focusTime,setFocusTime] = useState(0)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [currentButton,setCurrentButton] = useState(0);
  const [session,setSession] = useState('No')
  const [barColor,setBarColor] = useState('#ff6347')
  const [timerMode,setTimerMode] = useState(0);
  const [initialValue,setInitialvalue] = useState(0)
  const [currentModal, setCurrentModal] = useState(0)
  const InitialSelectedState = modalData.TimerMode[0].id
  const [selectedItemId,setSelectedItemId] = useState(InitialSelectedState)

  // const taskSelected = 'Select Task';
  const [selectedTask,setSelectedTask] = useState('Select Task')
  const initialtune = modalData.whiteNoiseMode[0].id
  const [selectedTune,setSelectedTune] = useState(initialtune)
  const [breakTime,setBreakTime] = useState(1*60);
  const [currentTimer,setCurrentTimer] = useState(0)
  const [breakTimer,setBreakTimer] = useState(false)
  const [isCountingUp, setIsCountingUp] = useState(false);

  useEffect(() => {
    let intervalId;
    let startTime;
  
    const updateTimer = () => {
      if (isTimerActive) {
        const currentTime = new Date().getTime();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  
        setTime((prevTime) => {
          if (currentTimer === 0 && prevTime > 0) {
           const  newTime = isCountingUp ? prevTime + elapsedTime : prevTime - elapsedTime;
  
            if (newTime <= 0) {
              setIsTimerActive(false);
              setProgress(0)
              // setFocusTime(0);
              setCurrentButton(3);
              setSession('Break');
              console.log('timer completed');
              setTime(.15*60);
              setProgress(100);
              // setCurrentTimer(2)
              return 0;
            }
            const newProgress = Math.floor((newTime / InitialTime) * 100);
            setProgress(newProgress);
  
            setFocusTime((prevFocusTime) => {
              const updatedFocusTime = Math.floor(InitialTime - newTime);
              console.log('mode1 FOCUSTIME', updatedFocusTime);
              return updatedFocusTime;
            });
            return newTime;
          } else if (currentTimer === 1 && isCountingUp) {
            const newTime = prevTime + elapsedTime;
            setFocusTime(newTime);
            console.log('mode2 FOCUSTIME', newTime);
  
            const newProgress = Math.floor((newTime / (InitialTime - 1)) * 100);
            setProgress(newProgress);
  
            return newTime;
          }
          return prevTime;
        });
      }
    };
  
    if (isTimerActive) {
      startTime = new Date().getTime();
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

  // const playSound = ()=>{

  //   var WhiteNoise = new Sound('adventure.mp3', Sound.MAIN_BUNDLE, (error) => {
  //     if (error) {
  //       console.log('failed to load the sound', error);
  //       return;
  //     }
  //     // loaded successfully
  //     console.log('duration in seconds: ' + WhiteNoise.getDuration() + 'number of channels: ' + WhiteNoise.getNumberOfChannels());
  //     setTimeout(() => {
  //       WhiteNoise.stop(()=>{
  //         WhiteNoise.release();
  //         console.log('song stopped')
  //       });
  //     }, 10000);
  //     // Play the sound with an onEnd callback
  //     WhiteNoise.play((success) => {
  //       if (success) {
  //         console.log('successfully finished playing');
  //       } else {
  //         console.log('playback failed due to audio decoding errors');
  //       }
  //     });
  //   });
  // }

  //audio section playSound //

  


  const updateTimerMode = ()=>{
    if(selectedItemId === modalData.TimerMode[0].id){
      console.log('first mode, timer 0');
      setCurrentModal(0)
      setTime(InitialTime)
      setTimerMode(0)
      setCurrentTimer(0)
      setProgress(100)
      setBarColor('#ff6347')
    } else if (selectedItemId === modalData.TimerMode[1].id) {
      console.log('second mode, timer 1');
      setCurrentModal(0);
      setTimerMode(1)
      setTime(0*60)
      setProgress(0)
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
    setIsTimerActive(true);
    setCurrentButton(4)
    setTime(.15*60)
    const remainingTime = time - 1 ;
    setProgress(Math.floor(remainingTime/time)*100);
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
    if(currentTimer === 1){
    setProgress(0)
    setTime(0)
    setBarColor([styles.bgLightWhite])
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(0)
    console.log('timer',currentTimer)
  }
   else if
   (currentTimer === 0)
   {
      setProgress(100)
      setBarColor('#ff6347')
      setTime(InitialTime)
      setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(0)
    console.log('timer',currentTimer)
    }
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
    setTime(InitialTime)
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
    setTime(InitialTime)
    setSession('No');
    setIsTimerActive(false)
    console.log('timer is not  active now')
    setCurrentButton(0)
    setBarColor('#ff6347')
    if(currentTimer===0){
      setProgress(100)
    } 
     else if (currentTimer === 1 ){
    setProgress(0)
    setTime(0*60)
    }
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


  const playSound = (songPath) => {
    if (songPath) {
      const sound = new Sound(songPath, Sound.MAIN_BUNDLE, (error) => {
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
    }
  };
  
  const handleNoise = (item) => {
    setSelectedTune(item.id);
    playSound(item.song);
    console.log(selectedTune);
  };
  
  // Example: Play the first white noise song from the array
  // const selectedWhiteNoise = whiteNoiseSongs[0];
  // handleNoise(selectedWhiteNoise);
  
  
  

  // const handleNoise = (item)=>{
  //   setSelectedTune(item.id)
  //   if(item.song!== null){
  //     playSound(item.song),
  //     console.log(item.song);
  //   } else {
  //     console.log('no sound found')
  //   }   
  // }

  const updateNoise = ()=>{
    setCurrentModal(0);
    console.log(selectedTune)
  }

  //  end of WhiteNoise modal functions

 



return (
  <SafeAreaView style={[styles.centerHorizontal, styles.bgWhite, flex(1), styles.positionRelative]}>
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
        InitialTime={InitialTime}
        barColor={barColor}
        // handleTimerComplete={handleTimerComplete}
        timerMode={timerMode}
        initialValue={initialValue}
        setCurrentButton={setCurrentButton}
        formatTime={formatTime}
        progress={progress}
        currentTimer={currentTimer}
        breakTimer={breakTimer}
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


