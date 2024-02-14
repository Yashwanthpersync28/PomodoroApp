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
import {  PomodoroTimer } from './Components/PomodoroTimer';
import { useDispatch,useSelector } from 'react-redux';
import { Button } from 'react-native';
import { setCurrentModal } from '../../redux/userReducer/modalReducer';
import { useNavigation } from '@react-navigation/native';
import { TrophyScreen } from './TrophyScreen';
import { setTaskSession } from '../../redux/userReducer/taskSessionsReducer';
import { addUserTasks, replaceStatus } from '../../redux/userReducer/UserTaskDetails';
import { setLocalSession } from '../../redux/userReducer/localSessionReducer';
import { setSelectedWhiteNoise } from '../../redux/userReducer/WhiteNoiseReducer';
export const PomodoroScreen = () => {

  const dispatch = useDispatch();
  const sessionNumber = useSelector((state)=>state.user.taskSessions.session);
  const localSession = useSelector((state)=>state.user.localSession.localSession);
  
  console.log('sessionNumber',sessionNumber,'localSession',localSession)

  const FocusTime = useSelector((state)=>state.user.focusTime.focusTime)
  // const FocusTime = useSelector((state)=>state.user.TimerMode.timerDeatilsArray[0].focusTime)
  console.log('FocusTime',FocusTime)
  const BreakTime  = useSelector((state)=>state.user.breakTime.breakTime)
  const autoStartBreak = useSelector((state)=>state.user.autoBreak.autoBreak)
  console.log('autoBreak',autoStartBreak)
  const autoStartFocus = useSelector((state)=>state.user.autoFocus.focusStart)
  console.log('focusStart',autoStartFocus)
  const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
  console.log(currentModal,'currentModal')
  const disableBreak = useSelector((state)=>state.user.breakSwitch.disableBreak)
  console.log('disableBreak',disableBreak)
  const selectedTune = useSelector((state)=>state.user.whiteNoise.selectedWhiteNoise)
  console.log('whiteNOiose songs',selectedTune)
  const [currentTimer,setCurrentTimer] = useState(0)
  const [isTimerActive,setIsTimerActive] = useState(false);
  const [time, setTime] = useState(FocusTime);

  const currentdate = new Date();
  const completedDate = currentdate.toISOString().split('T')[0]
  console.log(completedDate)
  

  const [timerModeArray, setTimerModeArray] = useState([
    { id: '1', start: FocusTime, end: '00:00', desc: `Countdown from ${Math.floor(FocusTime / 60)}:${(FocusTime % 60).toString().padStart(2, '0')} Minutes until time turns out` },
    { id: '2', start: 0, end: '∞', desc: 'Start Counting from 0 until stopped manually' },
  ]);

  useEffect(()=>{
    updateTimerArray(FocusTime);
    console.log('LocalSession',localSession)
    if(selectedTask !== taskSelected){ 
    showSessions(localSession);}
  },[FocusTime,sessionNumber,localSession])

  const updateTimerArray = (newFocusTime)=>{
    const updatedTimerArray = timerModeArray.map((item)=>{
      if(item.id === '1'){
        return {...item,start:newFocusTime,desc:`Countdown from ${Math.floor(newFocusTime / 60)}:${(newFocusTime % 60).toString().padStart(2, '0')} Minutes until time turns out`};
      }
      return item;
    })
    setTimerModeArray(updatedTimerArray)

  }
  console.log('FocusTime',FocusTime)
  const [progress, setProgress] = useState(100);
  // const [localSession,setLocalSession] = useState(1)
  const [maxSession,setMaxSession] = useState(sessionNumber)
  const [displayTime,setDisplayTime] = useState(FocusTime)
  const [totalSessionTime,setTotalSessionTime] = useState(FocusTime)

  const [secondFocusProgress,setSecondFocusProgress] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [barColor,setBarColor] = useState('#ff6347')

  const [breakTime,setBreakTime] = useState(BreakTime)
  const [currentButton,setCurrentButton] = useState(0);
  const [timerMode,setTimerMode] = useState(0);

  const InitialTimerMode = timerModeArray[0].id;
  const [selectedMode,setSelectedMode] = useState(InitialTimerMode)

  // const initialtune = modalData.whiteNoiseMode[0].MusicName;
  // const [selectedTune,setSelectedTune] = useState(initialTune)

  const taskSelected = 'Select Task';
  const [selectedTask,setSelectedTask] = useState(taskSelected)

  const [sound,setSound] = useState(null)

  const [secondTime,setSecondTime] = useState(0*60);
  const [taskCompleted,setTaskCompleted] = useState(false)
  const [displaySession,setDisplaySession] = useState('No Sessions')
  const navigation = useNavigation()
const [totalfocusTime,setTotalFocusTime] = useState(0);
const [taskColor,setTaskColor] = useState('white') 
console.log(totalfocusTime,'totaltime completed')
console.log('taskColor',taskColor)
const TrophySong = useSelector((state)=>state.user.completionSound.selectedCompletionSound) 
console.log(';completedSound',TrophySong)
// const currentdate = new Date();
//   const completedDate = currentdate.toISOString().split('T')[0]

const userTask = useSelector((state)=>state.user.userTasks.userTask)
  console.log('userTask',userTask)
  const [data,setdata] = useState({});
  console.log('completetaskdata',data,data.id)

  const updateTaskAndValue = () => {
    if (data.id) {
      const updatedTask = {
        id: data.id,
        ...data,
        completed: true,
        focusTime:FocusTime * localSession,
        completedDate:completedDate,
        totalTimeCompleted:totalfocusTime,
      };

      dispatch(replaceStatus(updatedTask));
      setdata((prevData) => ({
        ...prevData,
        completed: true,
      }));
    }
  };
  
  // Usage
  
  
  // const stopSoundAfterDelay = ()=>{

  // }

const completedPomodoro = () => {
  if (currentTimer === 0) {
    console.log('completed True');
    updateTaskAndValue();
    setDisplaySession('No Session');
    setSelectedTask(taskSelected);
    console.log(totalfocusTime, 'totalfocusTime');
    dispatch(setCurrentModal(14));
    setCurrentTimer(1);
    setTaskColor('white');
    stopSound()
    const selectedMusic = modalData.CompletionSounds.find(item => item.MusicName === TrophySong);
    console.log(selectedMusic.tune, 'selectedMusic');
    if (selectedMusic) {
      completionSound(selectedMusic.tune);
      console.log('completion sound started');
    } else {
      console.log('song did not get selected');
    }
  } else {
    setDisplayTime(FocusTime);
    setTotalSessionTime(FocusTime);
  }
};

  //TIMER SETUP//

  // const playCompletionSound = ()=>{

  // }
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
  
        // looping 
        
        // Continue with playback logic
        
        newSound.play((success)=>{
          if(success){
            console.log('song is succes')
          } else {
            console.log('song is failed')
          }
        })
      
        newSound.setNumberOfLoops(-120)
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

  const completionSound = (completedSound) => {
    const completionSong = new Sound(completedSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error("Sound can't play:", error);
      } else {
        console.log('Sound initialized successfully');
        
          completionSong.play((success)=>{
            if(success){
              console.log('sucess')
            } else{
              console.log('failure')
            }
          })
        completionSong.setCurrentTime(5)
      }
    });
  };
  
  
  

  

 
 
 
 
  const handleStart = (timerType) => {
    if(selectedTask === taskSelected){
        // dispatch(setTimerMode(20))
    dispatch(setCurrentModal(1))
      setIsTimerActive(false)
      // dispatch(setTaskSession(sessionNumber));
      console.log('timer is not  active now')
    } else  if(selectedTask !== taskSelected){
      // dispacthsetLocalSession(localSession)
      // setSession(1)
  setIsTimerActive(true);
    setCurrentTimer(timerType); // Set the current timer type
    setCurrentButton(timerType === 0 ? 1 : 4)
    }
  };


  const handlepause = ()=>{
    {timerMode === 0 ? 
    (setIsTimerActive(false),
    console.log('timer is not active now'),
    setCurrentButton(2),
    setBarColor('#1c97f0')) : (setIsTimerActive(false),setCurrentButton(2),setBarColor('#1c97f0'))}
  }

  const handleStop = () => {
    {timerMode === 0 ? 
      (setIsTimerActive(false), setCurrentButton(0),  setDisplayTime(FocusTime), setBarColor('#ff6347'),updateTaskAndValue())
      
       :  ( setCurrentButton(0), setSecondTime(0*60),setSecondFocusProgress(0))
      }
  };
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
    setDisplayTime(FocusTime)
    // setSession('2 of 4')
    // setProgress(100)
    // setLocalSession(localSession+1)
    dispatch(setLocalSession(localSession + 1))
    setTotalSessionTime(FocusTime)
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
    // 

    if(timerMode === 0){    
      setSelectedTask(taskSelected);
      setDisplayTime(FocusTime)
    setIsTimerActive(false)
    console.log('timer is not  active now')
    setCurrentButton(0)
    setTotalSessionTime(FocusTime)
    setDisplaySession('No Sessions')
    dispatch(setTaskSession(sessionNumber))
    setTaskColor('white')
    }
    else if(timerMode === 1){
      // setBarColor('#ff6347')
      setSelectedTask(taskSelected);

    setSecondFocusProgress(0)
    setSecondTime(0*60)
    setIsTimerActive(false)
    setCurrentButton(0)
    setTaskColor('white')

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
    dispatch(setSelectedWhiteNoise(item.MusicName))
    console.log('selectedTune',selectedTune);
    const selectedMusic = modalData.whiteNoiseMode.find(item=>item.MusicName === selectedTune);
      if(selectedMusic){
        playSound(selectedMusic.song);
        console.log(selectedMusic.song,'selectedMusic in whitenoise isssss')
      }
    }

  const handleTimerMode = (item)=>{
    setSelectedMode(item.id)
  }

  const updateTimerMode = ()=>{
    console.log('selectedMode',selectedMode)
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
  const updateNoise = ()=>{
  dispatch(setCurrentModal(0))
  if(selectedTune !=='None'){
    const selectedMusic = modalData.whiteNoiseMode.find(item =>item.MusicName === selectedTune);

      if(selectedMusic){
        playSound(selectedMusic.song)
        // console.log(selectedMusic.song,'selectedMusic')
        if(localSession === maxSession){
          stopSound();
          console.log('song fyhgjgjgjghj')
        }
        setTimeout(()=>{
          stopSound();
          console.log('song stopped')
        },FocusTime*1000)
      } else {
        console.error('the selected music dont have song')
      }
    }else {
      console.log('No Music selected')
    }
  }

  //  end of WhiteNoise modal functions

  const showSessions = ()=>{
    setDisplaySession(`${localSession} of ${sessionNumber} Sessions`)
  }


const updateTask = ()=>{
  closeModal();
  showSessions();
  if(autoStartFocus ===true){
    handleStart(0)
  }
}


return (
  <SafeAreaView style={[styles.centerHorizontal, styles.bgWhite, flex(1), styles.positionRelative]}>
    <StatusBar backgroundColor = "#ff6347" barStyle = "dark-content"/>
    <View style={[styles.bgOrange, { height: heightValue(2), width: widthValue(1) }, styles.centerHorizontal]}>
      <View>
        <View style={[marginPosition(0,0,0,20)]}>
          <Header />
        </View>
        <TaskComponent handleTasks={handleTasks} selectedTask={selectedTask}  setCurrentModal={setCurrentModal} clearTask={clearTask} taskSelected={taskSelected} taskColor={taskColor}/>
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
<PomodoroTimer  
  time={time} 
  setTime={setTime}
  displayTime={displayTime}
  setDisplayTime={setDisplayTime}
  barColor={barColor} 
  FocusTime={FocusTime} 
  isTimerActive={isTimerActive} 
  currentTimer={currentTimer} 
  setCurrentTimer={setCurrentTimer}
  BreakTime={BreakTime} 
  currentButton={currentButton} 
  handleStart={handleStart} 
  handleContinue={handleContinue} 
  handlepause={handlepause} 
  handleStop={handleStop}
  setProgress={setProgress}
  setBarColor={setBarColor}
  setIsTimerActive={setIsTimerActive}
  setCurrentButton={setCurrentButton}
  handleSkipBreak={handleSkipBreak}
  maxSession={maxSession}
  playSound={playSound}
  setTotalSessionTime={setTotalSessionTime}
  totalSessionTime={totalSessionTime}
  displaySession={displaySession}
  completedPomodoro={completedPomodoro}
  // completionSound={()=>completionSound()}
  setTotalFocusTime={setTotalFocusTime}
  totalfocusTime={totalfocusTime}
  />
        }
      </View>
    </View>
    <View style={[styles.centerHorizontal, styles.positionAbsolute, { bottom: -15 }]}>
      <ModeButtons currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </View>
    {currentModal === 1 && <TaskModal currentModal={currentModal} closeModal={closeModal} setSelectedTask={setSelectedTask} taskSelected={taskSelected} updateTask={updateTask}  setdata={(val)=>setdata(val)}  setTaskColor={setTaskColor}/>}
    {currentModal === 2 && <StrictModeModal closeModal={closeModal} currentModal={currentModal} updateStrictMode={updateStrictMode}/>}
{currentModal === 3 && <TimerModeModal closeModal={closeModal} currentModal={currentModal} selectedMode={selectedMode} updateTimerMode={updateTimerMode} handleTimerMode={handleTimerMode} FocusTime={FocusTime} timerModeArray={timerModeArray}/>}
   
    {currentModal === 4 && <WhiteNoiseModal closeModal={closeModal} selectedTune={selectedTune} currentModal={currentModal} handleNoise={handleNoise} updateNoise={updateNoise} playSound={playSound} stopSound={stopSound}/>}
    {currentModal === 14 && <TrophyScreen currentModal={currentModal} setCurrentButton={setCurrentButton} setDisplayTime={setDisplayTime} FocusTime={FocusTime} setTotalSessionTime={setTotalSessionTime} selectedTask={selectedTask} stopSound={stopSound}/>}

  </SafeAreaView>



);
};




