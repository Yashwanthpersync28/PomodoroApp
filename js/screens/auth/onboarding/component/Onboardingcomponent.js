import React from 'react'
import {View,Text} from 'react-native'
import { flex, fontSize , fontWeight, lineHeight, marginPosition, padding, styles } from '../../../../styles/Styles'


export const Onboardingcomponent = ({header,details}) => {
  return (
    <View style={[padding(20),flex(1),marginPosition(0)]}>
        <Text style={[fontSize(27),styles.dark,{fontWeight: 'bold'},lineHeight(28),styles.textCenter]}>{header}</Text>
        <Text style={[fontSize(18),marginPosition(20),lineHeight(18),styles.textCenter,{color:"#a0a0a0"},fontWeight('500')]}>{details}</Text>
    </View>
  )
}


