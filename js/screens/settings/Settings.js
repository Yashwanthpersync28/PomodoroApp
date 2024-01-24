import { View, Text } from 'react-native'
import React from 'react'
import { flex ,fontSize,marginPosition,padding,styles} from '../../styles/Styles'
import ChangeFocusTIme from './ChangeFocusTime/ChangeFocusTIme'
import {PomodoroPreference} from './PomodoroPreference'

export const Settings = () => {
  return (
    <View style={[flex(1),styles.bgWhite,padding(0,30,50)]}>
      
      <View style={[marginPosition(30),flex(1),styles.bgGray]}>
      {/* <ChangeFocusTIme /> */}
      <PomodoroPreference />
      </View>
    </View>
  )
}
