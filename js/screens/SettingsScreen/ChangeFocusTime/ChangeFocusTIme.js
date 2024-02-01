import { View, Text, TextInput, Button } from 'react-native'
import React,{useState} from 'react'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { useDispatch, useSelector } from 'react-redux'
import { fontSize, marginPosition, padding, radius, styles, widthValue } from '../../../styles/Styles'
import { Value } from 'react-native-reanimated'
import { setFocusTime } from '../../../redux/userReducer/focustimeReducer'
import { setBreakTime } from '../../../redux/userReducer/breaktimeReducer'

const ChangeFocusTIme = () => {

    const [breakVal,setBreakVal] = useState(0);
    const [value,setValue] = useState(0)
        console.log(value)

    const focusTime = useSelector((state)=>state.user.focusTime.focusTime);
    console.log('focusTimeabfndjdnk',focusTime)
    const dispatch = useDispatch();
    const updateFocusTime = ()=>{
        dispatch(setFocusTime(value*60))
    }

    const breakTime = useSelector((state)=>state.user.breakTime.breakTime)
    console.log('breakTime',breakTime)

    const updateBreakTime = ()=>{
        dispatch(setBreakTime(breakVal*60))
    }
  return (
    <View>
    <View style={[styles.bgWhite,styles.centerHorizontal]}>
      <Text style={[marginPosition(20,0,50),fontSize(30)]}>Update Focus Time</Text>
      <TextInput placeholder='Enter your Focus Time' placeholderTextColor={'black'} style={[styles.bgLightWhite,padding(20),radius(20),marginPosition(0,0,20),{width:widthValue(1.5)}]} value={value} onChangeText={(text)=>setValue(text)}/>
      <TimerButton buttonText={'Update'} onPress={updateFocusTime} BgColor={styles.bgOrange} widthVal={{width:widthValue(3)}} textColor={styles.white}/>
    </View>
    <View style={[styles.bgWhite,styles.centerHorizontal]}>
      <Text style={[marginPosition(20,0,50),fontSize(30)]}>Update Break Time</Text>
      <TextInput placeholder='Enter your Break Time' placeholderTextColor={'black'} style={[styles.bgLightWhite,padding(20),radius(20),marginPosition(0,0,20),{width:widthValue(1.5)}]} value={breakVal} onChangeText={(text)=>setBreakVal(text)}/>
      <TimerButton buttonText={'Update'} onPress={updateBreakTime} BgColor={styles.bgOrange} widthVal={{width:widthValue(3)}} textColor={styles.white}/>
    </View>
    </View>
  )
}

export default ChangeFocusTIme