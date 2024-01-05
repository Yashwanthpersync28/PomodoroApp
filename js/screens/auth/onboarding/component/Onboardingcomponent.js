import React from 'react'
import {View,Text} from 'react-native'
import { flex, fontSize , lineHeight, marginPosition, padding, styles } from '../../../../styles/Styles'


export const Onboardingcomponent = ({header,details}) => {
  return (
    <View style={[padding(20),flex(1),marginPosition(0)]}>
        <Text style={[fontSize(27),styles.dark,{fontWeight: 'bold'},lineHeight(40),styles.textCenter]}>{header}</Text>
        <Text style={[fontSize(20),lineHeight(20),styles.textCenter,{color:"#a0a0a0"}]}>{details}</Text>
    </View>
  )
}


