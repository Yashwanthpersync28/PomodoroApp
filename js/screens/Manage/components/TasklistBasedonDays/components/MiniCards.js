import React from 'react'
import { flex, fontSize, fontWeight, heightValue, marginPosition, radius, styles, widthValue } from '../../../../../styles/Styles'
import {View,Text} from 'react-native'

export const MiniCards = ({number,name , darkMode}) => {
  return (
    <View style={[styles.column,styles.allCenter,{height:heightValue(10),width:widthValue(2.4)},darkMode?styles.bgtaskCardDblack:styles.bgWhite,radius(5),marginPosition(0,0,13)]}>
         <Text style={[Platform.OS==='ios'?fontSize(18):fontSize(22),styles.Orange,fontWeight('600')]}>{number}</Text> 
         <Text style={[Platform.OS==='ios'?fontSize(12):fontSize(14),darkMode?styles.inputColor:styles.gray,marginPosition(10),styles.textCenter]}>{name}</Text>    
    </View>
  )
}


