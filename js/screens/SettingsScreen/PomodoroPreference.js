import { View, Text, ScrollView,Vibration,Platform, } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../Manage/components/Header'
import { styles, widthValue,flex, padding, heightValue } from '../../styles/Styles'
import Icon, { Icons } from '../../components/Icons'
import { PreferenceComponent } from './Components/PreferenceComponent'
import { TimerModeModal } from '../dashboard/Components/TimerModeModal'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModal } from '../../redux/userReducer/modalReducer'
import { FocusModal } from './Components/FocusModal'
import { BreakModal } from './Components/BreakModal'
import { LongBreakModal } from './Components/LongBreakModal'
import { WhiteNoiseModal } from '../dashboard/Components/WhiteNoiseModal'
import { setDisableBreak } from '../../redux/userReducer/breakReducer'
import { setAutoBreak } from '../../redux/userReducer/autoBreakReducer'
import { setFocusStart } from '../../redux/userReducer/autoFocusStartReducer'
import { CompletionSound, SoundModal } from './Components/SoundModal'
import Sound from 'react-native-sound'
import { modalData } from '../../constants/ModalsData'
import ReminderVibrate from './Components/ReminderVibrate'
import { setSelectedRingtone } from '../../redux/userReducer/reminderRingtoneReducer'
import { setSelectedCompletionSound } from '../../redux/userReducer/CompletionSoundReducer'
import { setSelectedWhiteNoise } from '../../redux/userReducer/WhiteNoiseReducer'
import { useNavigation } from '@react-navigation/native'
import { LongBreakSession } from './Components/LongBreakSession'
import { setSelectedVibrationMode } from '../../redux/userReducer/ReminderVibrateReducer'

export const PomodoroPreference = () => {
  const darkMode = useSelector(state=>state.system.darkMode)


// console.log(modalData.vibrationOptions[0].name,'vibration')

    const focusTime = useSelector((state)=>state.user.focusTime.focusTime,)
    // console.log("Focus Time State:", state.user.focusTime); 
    const breakTime = useSelector((state)=>state.user.breakTime.breakTime,)
    const LongBreak = useSelector((state)=>state.user.longBreak.longBreak,)
  console.log('time',focusTime)

  const formatTime = (seconds)=>{
    const minutes = Math.floor(seconds/60);
    const secondsLeft = seconds%60;

    const formattedTime = `${String(minutes).padStart(2,'0')}:${String(secondsLeft).padStart(2,'0')}`
    return formattedTime;
  }

  const dispatch = useDispatch();

    const [showDetail,setShowDetail] = useState(false)
    const [showIcon,setShowIcon] = useState(false)
    const [enableVibrate,setEnableVibrate] = useState(false)

    const breakSwitch = useSelector((state)=>state.user.breakSwitch.disableBreak)
    const autoBreak = useSelector((state)=>state.user.autoBreak.autoBreak)
    const autoFocusStart = useSelector((state)=>state.user.autoFocus.focusStart)
    const selectedRingtone = useSelector((state)=>state.user.reminderRingtone.selectedRingtone)
    const selectedVibrationMode = useSelector(state=>state.user.reminderVibrate.selectedVibrationMode)
    console.log('selected Vibrate mode ',selectedVibrationMode)
    const selectedWhiteNoise = useSelector((state)=>state.user.whiteNoise.selectedWhiteNoise)
    const selectedCompletionSound = useSelector((state)=>state.user.completionSound.selectedCompletionSound)
    const longBreakSession = useSelector((state)=>state.user.longBreakSession.longBreakSession)
    console.log('breakSwitch',breakSwitch,'autoBreak',autoBreak,'autoFocusStart',autoFocusStart)

    const navigation = useNavigation();

    const handleRingtone = (item)=>{
      dispatch(setSelectedRingtone(item.MusicName))
    }

    const disableBreak = ()=>{
      dispatch(setDisableBreak(!breakSwitch))
    }

    const autoStartBreak = ()=>{
      dispatch(setAutoBreak(!autoBreak))
    }

    const autoStartFocus = ()=>{
      dispatch(setFocusStart(!autoFocusStart))
    }
    const currentModal = useSelector((state)=>state.user.currentModal.currentModal)


    const [sound,setSound] = useState(null)
    const [reminderTune,setReminderTune] = useState(null)

  
  
// ENd of play and stop Reminder tune//
const playReminderTune = (reminderSong)=>{
  if(reminderTune){
    reminderTune.stop();
    reminderTune.release();
  } 

  const newReminderSound = new Sound( reminderSong, Sound.MAIN_BUNDLE, (error)=>{
    if(error){
      console.error('an error occured :',error)
    } else {
      console.log('no error song will play')

      newReminderSound.play((success)=>{
        if(success){
        console.log('sound is playing ')
        } else {
        console.log('sound error occured ')
        }
      })
      setReminderTune(newReminderSound)
    }
  }) 
}

const handleReminderSound = (tune)=>{
  dispatch(setSelectedRingtone(tune.MusicName))
  console.log('newReminderSound',selectedRingtone)
  playReminderTune(tune.song)
} 

const stopReminderTune = ()=>{
if(reminderTune){
  reminderTune.stop();
  reminderTune.release();
}
}



    // STart of play and stop completion sound//
    const playCompletionSound = (tune)=>{
      if(sound){
        sound.stop();
        sound.release();
      }

      const newCompletionSound = new Sound(tune, Sound.MAIN_BUNDLE, (error)=>{
        if(error){
          console.error('failed to load sound',error);
        } else {
          console.log('sound started successfully');

            newCompletionSound.play((success)=>{
              if(success){
                console.log('sound is playing');
              } else {
          console.log('sound IS NOT PLAYING');
              }
            })
            setSound(newCompletionSound)
        }
      })
    }

const handleCompletionSound = item=>{
  dispatch(setSelectedCompletionSound(item.MusicName));
  console.log(selectedCompletionSound,'selectedCompletionSound');
  playCompletionSound(item.tune);
}

const stopSound = ()=>{
if(sound){
  sound.stop();
  sound.release();
}
}
// ENd of play and stop completion sound//

// Vibration starts
// const handleVibration = ()=>{
//   ReminderVibrate
// }




const handleVibration = (item)=>{
  dispatch(setSelectedVibrationMode(item.name))
}

const VibrationChange = ()=>{
  if(selectedVibrationMode === 'Enable'){
  if(Platform.OS === 'android'){
    Vibration.vibrate(1000)
    setTimeout(()=>{
      console.log('succesfully vibrated ')
    },1000)
  } else{
    const pattern = [0,1000] ;
  Vibration.vibrate(pattern)
  }
  closeModal();
} else {
  console.log('vibratioon is disabled')
  closeModal();
}
}

// Vibration Ends


const closeModal = ()=>{
  dispatch(setCurrentModal(0))
  
}
const goBack = ()=>{
  navigation.goBack();
}

  return (
    <View style={[darkMode?styles.bgdarkmodeBlack:styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[{height:heightValue(10)},{width:widthValue(1)}]}>
      <Header  color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Pomodoro Preferences'} goBack={goBack}/></View> 
      <ScrollView  showsVerticalScrollIndicator={false} style={[{height:heightValue(10)}]}>
        <PreferenceComponent  showIcon={true}  showDetail={false}  PreferanceName={'Strict Mode'} onPress={()=>dispatch(setCurrentModal(2))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={formatTime(focusTime)} detail2={ '00:00'} name={'arrowright'} Icontype={Icons.AntDesign} PreferanceName={'Timer Mode'} onPress={()=>dispatch(setCurrentModal(3))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={selectedWhiteNoise} PreferanceName={'WhiteNoise'} onPress={()=>dispatch(setCurrentModal(4))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(focusTime / 60))} Minutes`} PreferanceName={'Pomodoro Length'} onPress={()=>dispatch(setCurrentModal(5))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(breakTime / 60))} Minutes`} PreferanceName={'Short Break Length'} onPress={()=>dispatch(setCurrentModal(6))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(LongBreak / 60))} Minutes`}PreferanceName={'Long Break Length'} onPress={()=>dispatch(setCurrentModal(7))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${longBreakSession} Pomodoro`} PreferanceName={'LongBreak After'} onPress={()=>dispatch(setCurrentModal(15))}/>
        <PreferenceComponent  showIcon={false} showDetail={false} isEnabled={breakSwitch} switchFunction={disableBreak}  PreferanceName={'Disable Break'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} isEnabled={autoBreak} switchFunction={autoStartBreak}  PreferanceName={'AutoStart Break'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} isEnabled={autoFocusStart} switchFunction={autoStartFocus}  PreferanceName={'Auto Start Next Pomodoro'}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Reminder Ringtone'} detail2={selectedRingtone} onPress={()=>dispatch(setCurrentModal(10))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Reminder Vibrate'} detail2={selectedVibrationMode} onPress={()=>dispatch(setCurrentModal(9))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Completion Sound'} detail2={selectedCompletionSound} onPress={()=>dispatch(setCurrentModal(8))} />
        </ScrollView>  
{currentModal === 3 &&  <TimerModeModal  closeModal={closeModal}/>}
{/* {currentModal === 4 &&  <WhiteNoiseModal currentModal={currentModal} handleNoise={handleNoise} closeModal={closeModal} stopSound={stopSound} updateNoise={updateNoise} selectedTune={selectedTune}/>} */}
{currentModal === 5 &&  <FocusModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 6 &&  <BreakModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 15 &&  <LongBreakSession currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 7 &&  <LongBreakModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 8 &&  <SoundModal  isVisible={currentModal === 8} data={modalData.CompletionSounds} title={'Completion Sound'} closeModal={closeModal} stopSound={stopSound} onPress={(item)=>{handleCompletionSound(item),stopSound()}}  selectedSong={selectedCompletionSound} onPress2={()=>{closeModal(),stopSound()}} onPress3={()=>{closeModal(),stopSound()}}/>}
{currentModal === 10 &&  <SoundModal isVisible={currentModal === 10} data={modalData.reminderRintones}  title={'Reminder Ringtone'} closeModal={closeModal} stopSound={stopSound} onPress={(item)=>handleReminderSound(item)} selectedSong={selectedRingtone} onPress2={()=>{closeModal(),stopReminderTune()}} onPress3={()=>{closeModal(),stopReminderTune()}}/>}
{/* {currentModal === 4 &&  <SoundModal isVisible={currentModal === 4} data={modalData.whiteNoiseMode}  title={'White Noise'} closeModal={closeModal} stopSound={stopSound} onPress={(item)=>handleNoise(item)} selectedSong={selectedWhiteNoise} onPress2={closeModal} onPress3={closeModal}/>} */}
{currentModal === 4 && <WhiteNoiseModal />}
{currentModal === 9 &&  <ReminderVibrate  currentModal={currentModal} VibrationChange={VibrationChange} closeModal={closeModal}  handleVibration={handleVibration} selectedVibrationMode={selectedVibrationMode} />}
    </View>
  )
}
