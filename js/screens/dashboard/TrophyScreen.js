import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { heightValue, widthValue ,styles, fontSize,marginPosition,flex,padding} from '../../styles/Styles'
import { HeadingComponent } from '../../components/view/HeadingComponent'
import { TimerButton } from './Components/TimerButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModal } from '../../redux/userReducer/modalReducer'
import Modal from 'react-native-modal'
import { useEffect } from 'react'

 export const TrophyScreen = ({currentModal,setCurrentButton,setDisplayTime,FocusTime,setTotalSessionTime,selectedTask,setSelectedTask,taskSelected,stopSound}) => {
  console.log('selectedTask',selectedTask)
  const navigation = useNavigation();
  const darkMode = useSelector(state=>state.system.darkMode)

  useEffect(()=>{
    stopSound();
  })

  const dispatch = useDispatch();
  const goback = ()=>{
    dispatch(setCurrentModal(0))
    setCurrentButton(0)
    setDisplayTime(FocusTime)
    setTotalSessionTime(FocusTime)
    setSelectedTask(taskSelected)
    stopSound();
  }
  const gotoReport = ()=>{
    dispatch(setCurrentModal(0))
    navigation.navigate('Report')
    setCurrentButton(0)
    setDisplayTime(FocusTime)
    setTotalSessionTime(FocusTime)
    setTotalSessionTime(FocusTime)
    setSelectedTask(taskSelected)
    stopSound();
  }
  return (
    <Modal 
    isVisible={currentModal === 14}
    hasBackdrop={true}
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    style={[darkMode?styles.bgdarkmodeBlack:styles.bgWhite,{heighgt:heightValue(1),margin:0},styles.spaceBetweenVertical]}>
      <View style={[styles.centerHorizontal]}>
        <LottieView  source={require('../../assets/Lottieview/Trophy1.json')} autoPlay={true} loop={false} style={[{width:widthValue(.8),height:heightValue(1.7)}]}/>
        <View style={[{height:heightValue(8)},styles.centerVertical,]}>
      <Text style={[fontSize(40),darkMode?styles.lightWhite:styles.black,{fontWeight:'bold'},styles.textCenter]}>Congratulations!</Text>
      <Text style={[fontSize(24),{color:'#a5a5a6' },marginPosition(10),styles.textCenter]}>You've completed the Task</Text>
      <Text style={[fontSize(24),{color:'#a5a5a6' },,styles.textCenter]}>"{selectedTask}"</Text>
      </View>
      </View>
      <View style={[styles.row,styles.spaceAroundVertical,marginPosition(0,0,10,0)]}>
      <TimerButton onPress={goback} buttonText={'Back to Home'}  widthVal={{ width: widthValue(2.3) }} paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[darkMode?styles.bgbuttondarkcolor:styles.bglightPink]}  textColor={[darkMode?styles.lightWhite:styles.Orange]}  />
      <TimerButton onPress={gotoReport} buttonText={'View Report'}  widthVal={{ width: widthValue(2.3) }} paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]}  textColor={[styles.white]}  />
      </View>
    </Modal>
  )
}
