import { View, Text } from 'react-native'
import React from 'react'
import { flex ,fontSize,marginPosition,padding,paddingPosition,styles,widthValue} from '../../styles/Styles'
import ChangeFocusTIme from './ChangeFocusTime/ChangeFocusTIme'
import {PomodoroPreference} from './PomodoroPreference'

export const Settings = () => {
  return (
    <View style={[flex(1),styles.bgWhite,paddingPosition(10,20,0,20),{width:widthValue(1)}]}>
      <PomodoroPreference />
    </View>
  )
}
