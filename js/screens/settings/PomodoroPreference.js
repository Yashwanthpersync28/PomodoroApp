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



export const PomodoroPreference = () => {

    const focusTime = useSelector((state)=>state.user.focusTime.focusTime,)
    const breakTime = useSelector((state)=>state.user.breakTime.breakTime,)
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
    const [showToggle,setShowToggle] = useState(false)
    // const [currentModal,setCurrentModal] = useState(0)

    const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
  return (
    <View style={[styles.bgWhite,flex(1)]}>  
    <View style={[flex(.1),{width:widthValue(1.1)}]}>
      <Header IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Pomodoro Preferences'}/></View> 

      <ScrollView  showsVerticalScrollIndicator={false} style={[flex(2)]}>
        <PreferenceComponent showDetail={false}  PreferanceName={'Strict Mode'} onPress={()=>dispatch(setCurrentModal(2))}/>
        <PreferenceComponent showDetail={true} detail1={formatTime(focusTime)} detail2={'00:00'} name={'arrowright'} Icontype={Icons.AntDesign} PreferanceName={'Timer Mode'} currentModal={currentModal} onPress={()=>dispatch(setCurrentModal(3))}/>
        <PreferenceComponent showDetail={true} detail2={'None'} PreferanceName={'WhiteNoise'} />
        <PreferenceComponent showDetail={true} detail2={`${(Math.floor(focusTime / 60))} Minutes`} PreferanceName={'Pomodoro Length'} onPress={()=>dispatch(setCurrentModal(5))}/>
        <PreferenceComponent showDetail={true} detail2={`${(Math.floor(breakTime / 60))} Minutes`} PreferanceName={'Short Break Length'} onPress={()=>dispatch(setCurrentModal(6))}/>
        <PreferenceComponent showDetail={true} detail2={`${(Math.floor(breakTime / 60))} Minutes`}PreferanceName={'Long Break Length'} onPress={()=>dispatch(setCurrentModal(7))}/>
        <PreferenceComponent showDetail={true} detail2={' 4 Pomodoro'} PreferanceName={'LongBreak After'}/>
        <PreferenceComponent showDetail={false} showToggle={true} PreferanceName={'Disable Break'}/>
        <PreferenceComponent showDetail={false}  showToggle={true} PreferanceName={'AutoStart Break'}/>
        <PreferenceComponent showDetail={false}  showToggle={true} PreferanceName={'Auto Start Next Pomodoro'}/>
        <PreferenceComponent showDetail={true} PreferanceName={'Reminder Ringtone'} detail2={'Focusify Pop'}/>
        <PreferenceComponent showDetail={true} PreferanceName={'Reminder Vibrate'} detail2={'Enable'}/>
        <PreferenceComponent showDetail={true} PreferanceName={'Completion Sound'} detail2={'Jingle'}/>
        </ScrollView>  
{currentModal === 3 &&  <TimerModeModal currentModal={currentModal}/>}
{currentModal === 5 &&  <FocusModal currentModal={currentModal}/>}
{currentModal === 6 &&  <BreakModal currentModal={currentModal} />}
{currentModal === 7 &&  <LongBreakModal currentModal={currentModal}/>}




    </View>
  )
}
