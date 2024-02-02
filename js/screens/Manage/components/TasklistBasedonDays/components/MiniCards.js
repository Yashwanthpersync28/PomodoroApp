import React from 'react'
import { flex, fontSize, fontWeight, heightValue, marginPosition, radius, styles, widthValue } from '../../../../../styles/Styles'
import {View,Text} from 'react-native'

export const MiniCards = ({number,name}) => {
  return (
    <View style={[styles.column,styles.allCenter,{height:heightValue(10),width:widthValue(2.4)},styles.bgWhite,radius(5),marginPosition(0,0,10)]}>
         <Text style={[fontSize(22),styles.Orange,fontWeight('bold')]}>{number}</Text> 
         <Text style={[fontSize(14),styles.gray]}>{name}</Text>    
    </View>
  )
}


