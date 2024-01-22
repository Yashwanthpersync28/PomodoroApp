import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { widthValue , radius , padding , borderColor , borderWidth , styles , fontSize, marginPosition} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'

export const ModalButtons = ({name,icon,iconfamily,onPress}) => {
  return (
    <View style={[{ backgroundColor: 'white', width: widthValue(3) }, radius(0),padding(0,10,20,10,20),radius(10),borderColor('#f2f0f0'),borderWidth(0,0,0,1,0)]}>

    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row]}>
      <Icon name={icon} type={iconfamily} style={[styles.black, { fontSize: 17 },marginPosition(0,5)]} />
      <Text style={[styles.black, fontSize(20),{fontWeight:'bold'}]}>{name}</Text> 
      </View>
     
    </TouchableOpacity>
  </View>
  )
}


