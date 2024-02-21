import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { widthValue , radius , padding , borderColor , borderWidth , styles , fontSize, marginPosition, paddingPosition} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { Colors } from '../../../styles/Colors'
import { useSelector } from 'react-redux'

export const ModalButtons = ({name,icon,iconfamily,onPress}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

  return (
    <View style={[{ backgroundColor: Darkmode?Colors.modalColor:Colors.white, width: widthValue(3) },styles.selfStart, radius(0),paddingPosition(10,10,10,10),radius(10),borderColor(Darkmode?'gray':Colors.borderGray),borderWidth(0,1)]}>

    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row]}>
      <Icon name={icon} type={iconfamily} style={[Darkmode?styles.white:styles.black, { fontSize: 14 },marginPosition(0,5)]} />
      <Text style={[Darkmode?styles.white:styles.black,styles.textAlignVertical, fontSize(16),{fontWeight:'bold'}]}>{name}</Text> 
      </View>
     
    </TouchableOpacity>
  </View>
  )
}


