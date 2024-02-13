import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, paddingPosition, radius, styles, widthValue } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { Colors } from '../../../styles/Colors'
import { DropDown } from './DropDown'

export const ReportHeader = ({headername,options}) => {
  return (
    <View style={[styles.row,styles.spaceBetweenVertical,borderColor(Colors.borderGray),borderWidth(0,0,0,1),{height:heightValue(14)}]}>
            
            <Text style={[styles.black,styles.textAlignVertical,fontWeight('bold'),fontSize(21)]}>{headername}</Text>
            <View style={[styles.positionAbsolute,{right:0,zindex:99}]}>
            <DropDown/>
            </View>
   

          </View>
  )
}


