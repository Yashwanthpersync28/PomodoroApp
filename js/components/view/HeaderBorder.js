import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, marginPosition, styles, widthValue } from '../../styles/Styles'

export const HeaderBorder = ({name}) => {
  return (
    <View style={[styles.row,marginPosition(5)]}>
    <Text style={[styles.gray]}>{name}</Text>
           <View style={[styles.allCenter]}>
               <View style={[borderColor('#f2f0f0'),borderWidth(0,2),{height:10,width:widthValue(1.3)},marginPosition(10,0,0,5)]}></View>
           </View>

    </View>
  )
}


