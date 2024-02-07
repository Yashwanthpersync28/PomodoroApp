import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { widthValue , radius , padding , borderColor , borderWidth , styles , fontSize, marginPosition, paddingPosition} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'

export const ModalButtons = ({name,icon,iconfamily,onPress}) => {
  return (
    <View style={[{ backgroundColor: 'white', width: widthValue(3) },styles.selfStart, radius(0),paddingPosition(10,10,10,10),radius(10),borderColor('#f2f0f0'),borderWidth(0,0,0,1,0)]}>

    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row]}>
      <Icon name={icon} type={iconfamily} style={[styles.black, { fontSize: 14 },marginPosition(0,5)]} />
      <Text style={[styles.black,styles.textAlignVertical, fontSize(16),{fontWeight:'bold'}]}>{name}</Text> 
      </View>
     
    </TouchableOpacity>
  </View>
  )
}


