import React from 'react'
import {View,Text} from 'react-native'
import { fontFamily, fontSize, fontWeight, lineHeight, padding, styles } from '../../../../styles/Styles'

const Onboardingcomp = () => {
  return (
    <View style={[styles.allCenter,padding(20)]}>
        <Text style={[fontSize(35),styles.black,{fontWeight: 'bold'},lineHeight(40)]}>Your Ultimate Pomodoro Productivity Assitant</Text>
       
       <Text style={[fontSize(25),styles.black,lineHeight(20)]}>Focusify helps you stay on track, manage tasks, and work efficiently. Let's get started with Focusify right now</Text>

      
    </View>
  )
}

export default Onboardingcomp
