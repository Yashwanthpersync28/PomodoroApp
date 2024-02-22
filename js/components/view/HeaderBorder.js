import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, marginPosition, styles, widthValue } from '../../styles/Styles'
import { useSelector } from 'react-redux';
import { Colors } from '../../styles/Colors';

export const HeaderBorder = ({name}) => {
const Darkmode=useSelector((state)=>state.system.darkMode);

  return (
    <View style={[styles.row,marginPosition(5)]}>
    <Text style={[Darkmode?styles.smokeGray:styles.gray]}>{name}</Text>
           <View style={[styles.allCenter]}>
               <View style={[borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,2),{height:10,width:widthValue(1.3)},marginPosition(10,0,0,5)]}></View>
           </View>

    </View>
  )
}


