import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../Manage/components/Header'
import { styles, widthValue,flex } from '../../styles/Styles'
import Icon, { Icons } from '../../components/Icons'
import { PreferenceComponent } from './Components/PreferenceComponent'
import { TimerModeModal } from '../dashboard/Components/TimerModeModal'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModal } from '../../redux/userReducer/modalReducer'
import { FocusModal } from './Components/FocusModal'
import { BreakModal } from './Components/BreakModal'
import { LongBreakModal } from './Components/LongBreakModal'
import { WhiteNoiseModal } from '../dashboard/Components/WhiteNoiseModal'
import { setIsBreakEnabled } from '../../redux/userReducer/breakReducer'
import { setAutoBreak } from '../../redux/userReducer/autoBreakReducer'
import { setFocusStart } from '../../redux/userReducer/autoFocusStartReducer'
import { CompletionSound } from './Components/CompletionSound'
import Sound from 'react-native-sound'

export const PomodoroPreference = () => {


  const CompletionSounds = [
    {id:'1',MusicName:'Carol of Bells',tune:'carolofbells.mp3'},
    {id:'2',MusicName:'Despecito',tune:'despecito.mp3'},
    {id:'3',MusicName:'Shape of You',tune:'shapeofyou.mp3'},
]

    const focusTime = useSelector((state)=>state.user.focusTime.focusTime,)
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

    // const [showTime,setShowTime] = useState(false)
    const [showDetail,setShowDetail] = useState(false)
    const [showIcon,setShowIcon] = useState(false)

    const breakSwitch = useSelector((state)=>state.user.breakSwitch.isBreakEnabled)
    const autoBreak = useSelector((state)=>state.user.autoBreak.autoBreak)
    const autoFocusStart = useSelector((state)=>state.user.autoFocus.focusStart)
    console.log('breakSwitch',breakSwitch,'autoBreak',autoBreak,'autoFocusStart',autoFocusStart)

    const disableBreak = (value)=>{
      dispatch(setIsBreakEnabled(value))
    }

    const autoStartBreak = (value)=>{
      dispatch(setAutoBreak(value))
    }

    const autoStartFocus = (value)=>{
      dispatch(setFocusStart(value))
    }
    const currentModal = useSelector((state)=>state.user.currentModal.currentModal)

    const initialTune = CompletionSounds[0].MusicName
    const [selectedTune,setSelectedTune] = useState(initialTune)

    const [sound,setSound] = useState(null)

    const playSound = (tune)=>{
    if(sound){
      sound.stop();
      sound.release();
    }

    const newSound = new Sound(tune, Sound.MAIN_BUNDLE, (error)=>{
      if(error){
        console.error('error while playing sound',error)
      } else {
        console.log('song is playing')

        newSound.play((success)=>{
          if(success){
            console.log('Sound played successfully');
          } else {
            console.error('Playback failed due to audio decoding errors');
          }

          setSound(newSound)
        }
        )
      }

    }
      )

    }
    
const handleNoise = (item)=>{
  setSelectedTune(item.MusicName);
  console.log(selectedTune,'selectedTune')
  playSound(item.tune)
}

const stopSound = ()=>{
  sound.stop();
  sound.release();''
}

const closeModal = ()=>{
  dispatch(setCurrentModal(0))
}
const updateNoise = ()=>{
dispatch(setCurrentModal(0))
  console.log(selectedTune)
}










  return (
    <View style={[styles.bgWhite,flex(1)]}>  
    <View style={[flex(.1),{width:widthValue(1.1)}]}>
      <Header  color={'black'} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Pomodoro Preferences'}/></View> 

      <ScrollView  showsVerticalScrollIndicator={false} style={[flex(2)]}>
        <PreferenceComponent  showIcon={true}  showDetail={false}  PreferanceName={'Strict Mode'} onPress={()=>dispatch(setCurrentModal(2))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={formatTime(focusTime)} detail2={'00:00'} name={'arrowright'} Icontype={Icons.AntDesign} PreferanceName={'Timer Mode'} currentModal={currentModal} />
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={'None'} PreferanceName={'WhiteNoise'} onPress={()=>dispatch(setCurrentModal(4))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(focusTime / 60))} Minutes`} PreferanceName={'Pomodoro Length'} onPress={()=>dispatch(setCurrentModal(5))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(breakTime / 60))} Minutes`} PreferanceName={'Short Break Length'} onPress={()=>dispatch(setCurrentModal(6))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={`${(Math.floor(LongBreak / 60))} Minutes`}PreferanceName={'Long Break Length'} onPress={()=>dispatch(setCurrentModal(7))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail2={' 4 Pomodoro'} PreferanceName={'LongBreak After'}/>
        <PreferenceComponent  showIcon={false}  showDetail={false} thumbColor={breakSwitch ? 'white': 'white'}  value={breakSwitch} onValueChange={disableBreak}  PreferanceName={'Disable Break'}/>
        <PreferenceComponent  showIcon={false}  showDetail={false} thumbColor={autoBreak ? 'white': 'white'}  value={autoBreak} onValueChange={autoStartBreak}  PreferanceName={'AutoStart Break'}/>
        <PreferenceComponent  showIcon={false}  showDetail={false} thumbColor={autoFocusStart ? 'white': 'white'}  value={autoFocusStart} onValueChange={autoStartFocus}  PreferanceName={'Auto Start Next Pomodoro'}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Reminder Ringtone'} detail2={'Focusify Pop'}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Reminder Vibrate'} detail2={'Enable'}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} PreferanceName={'Completion Sound'} detail2={selectedTune} onPress={()=>dispatch(setCurrentModal(8))} />
        </ScrollView>  
{/* {currentModal === 3 &&  <TimerModeModal currentModal={currentModal}/>} */}
{currentModal === 5 &&  <FocusModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 6 &&  <BreakModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 7 &&  <LongBreakModal currentModal={currentModal} closeModal={closeModal}/>}
{currentModal === 8 &&  <CompletionSound currentModal={currentModal} CompletionSounds={CompletionSounds} closeModal={closeModal} stopSound={stopSound} handleNoise={handleNoise} selectedTune={selectedTune} updateNoise={updateNoise}/>}
{/* {currentModal === 4 &&  <WhiteNoiseModal currentModal={currentModal}/>} */}
    </View>
  )
}
