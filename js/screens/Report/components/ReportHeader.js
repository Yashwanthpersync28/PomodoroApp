import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, fontSize, fontWeight, heightValue, paddingPosition, radius, styles } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { Colors } from '../../../styles/Colors'

export const ReportHeader = ({headername,options}) => {
  return (
    <View style={[styles.row,styles.spaceBetweenVertical,borderColor(Colors.borderGray),borderWidth(0,0,0,1),{height:heightValue(18)}]}>
            <Text style={[styles.black,styles.textAlignVertical,fontWeight('bold'),fontSize(21)]}>{headername}</Text>
            <View style={[styles.centerVertical,{height:heightValue(24)},styles.allCenter,borderColor('gray'),borderWidth(1),radius(20),paddingPosition(5,15,5,15),styles.row]}>
            <Text style={[styles.black,fontSize(15),fontWeight('bold')]}>{options}</Text>
            <Icon name={'chevron-small-down'} type={Icons.Entypo} style={[styles.black,fontSize(20)]}/>
            </View>
            

          </View>
  )
}


