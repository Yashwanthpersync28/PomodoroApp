import React from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, styles, widthValue } from '../../../../../styles/Styles'
import {View,Text} from 'react-native'

export const MiniCards = () => {
  return (
    <View style={[styles.column,styles.allCenter,{height:heightValue(10),width:widthValue(2.4)},styles.bgWhite,radius(5),marginPosition(0,0,10)]}>
         <Text style={[fontSize(17),styles.Orange]}>ghvbjnk</Text> 
         <Text style={[fontSize(17),styles.black]}>2hrs</Text>    
    </View>
  )
}


