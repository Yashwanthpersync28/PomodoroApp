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



export const PomodoroScreen = () => {

  // displayModalState
  const [currentModal, setCurrentModal] = useState(0)

  // TaskModalState
  const [selectedTask,setSelectedTask] = useState('Select Task')


  // whiteNoiseModal
   const initialtune = modalData.whiteNoiseMode[0].id
  const [selectedTune,setSelectedTune] = useState(initialtune)
  // const [musicOn,setMusicOn] = useState(playSound())
  
  // StrictModalState
  // this is multiselection


  // TimerModalStates
  const InitialSelectedState = modalData.TimerMode[0].id
  const [selectedItemId,setSelectedItemId] = useState(InitialSelectedState)

  // TimercomponentStates
  
  const [InitialTime,setInitialTime] = useState(.5*60)
  const [time,setTime] = useState(InitialTime)
  const [maxValue,setmaxvalue] = useState(0*60)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [currentButton,setCurrentButton] = useState(0);
  const [session,setSession] = useState('No')
  const [barColor,setBarColor] = useState('#ff6347')


  const playSound = ()=>{
    var WhiteNoise = new Sound('adventure.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + WhiteNoise.getDuration() + 'number of channels: ' + WhiteNoise.getNumberOfChannels());
      setTimeout(() => {
        WhiteNoise.stop(()=>{
          WhiteNoise.release();
          console.log('song stopped')
        });
      }, 10000);
      // Play the sound with an onEnd callback
      WhiteNoise.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }
  const handleStart = ()=>{
    if(selectedTask === 'Select Task'){
      setCurrentModal(1);
      setCurrentButton(0);
      setIsTimerActive(false)
      console.log('timer is not  active now')
    } else {
      setIsTimerActive(true)
      console.log('timer is active now')
      setCurrentButton(1);
    }
  }

  const handlepause = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')

    setCurrentButton(2)
    setBarColor('#1c97f0')
  }
  const handleStop = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')

    setCurrentButton(0)
    setTime(InitialTime)
    setBarColor('#ff6347')
  }
  const handleContinue = ()=>{
    setIsTimerActive(true)
    console.log('timer is active now')
    setCurrentButton(1)
    setBarColor('#ff6347')
  }
  const handleBreak = ()=>{
    setIsTimerActive(true)
    console.log('timer is active now')
    setCurrentButton(4)
  }
  const handleSkipBreak = ()=>{
    setIsTimerActive(false)
    console.log('timer is not active now')
    setCurrentButton(0)
    setSession('2 of 4')
    setTime(InitialTime)
    setBarColor('#ff6347')
  }

  const  handleTimerComplete = ()=>{
    console.log('hi')
    // alert('done dona done')
    setTime(5*60);
    setSession('Short Break')
    setIsTimerActive(false)
    // setInitialTime(0*60)
    console.log('timer is not  active now')
    setCurrentButton(3)
    playSound()
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
  }

  // start of TimerModemodal functions
  const handleSelectTimerFormat=(item)=>{
    setSelectedItemId(item.id)
  }

  const updateTimerMode = ()=>{
    if(selectedItemId === modalData.TimerMode[0].id){
      console.log('first mode');
      setCurrentModal(0)
      setTime(InitialTime)
    } else if (selectedItemId === modalData.TimerMode[1].id) {
      console.log('second mode');
      setCurrentModal(0);
      setTime(0*60)
      // setInitialTime(0*60)
    }
  }
  //  end of TimerModemodal functions

  //  start of StrictModemodal functions

  const updateStrictMode = ()=>{
    setCurrentModal(0);
    console.log('strict mode is enabled')
  }

  //  end of StrictModemodal functions

  //  start of WhiteNoise modal functions

  const handleNoise = (item)=>(
    setSelectedTune(item.id)
  )
  const updateNoise = ()=>{
    setCurrentModal(0);
    console.log(selectedTune)
  }

  
  //  end of WhiteNoise modal functions

return (
  <SafeAreaView style={[styles.centerHorizontal, styles.bgWhite, flex(1), styles.positionRelative]}>
    <View style={[styles.bgOrange, { height: heightValue(2), width: widthValue(1) }, styles.centerHorizontal]}>
      <View >
        <View style={[marginPosition(0,0,0,20)]}>
        <HomepageHeader  IconFamily={Icons.Feather} name={'bell'} bgcolor={styles.bgOrange} color={styles.white}/>
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
        handleTimerComplete={handleTimerComplete}
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

