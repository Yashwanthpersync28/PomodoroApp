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
    <View style={[styles.bgWhite]}>
      <Header IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Pomodoro Preferences'}/>
    </View>
  )
}
