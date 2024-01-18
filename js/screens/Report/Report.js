import { View, Text } from 'react-native'
import React from 'react'
import { flex ,styles} from '../../styles/Styles'

export const Report = () => {
  return (
    <View style={[flex(1),styles.bgWhite,styles.allCenter]}>
      <Text style={[styles.black]}>Pomodoro Report Section</Text>
    </View>
  )
}
