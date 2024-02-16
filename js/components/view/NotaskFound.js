import React from 'react'
import {View,Text,Image} from 'react-native'
import { fontSize, fontWeight, heightValue, styles, widthValue } from '../../styles/Styles'


export const NotaskFound = ({name}) => {
  return (
    <View style={[{height:heightValue(2)},styles.allCenter,styles.column]}>
    <Image
     source={require('../../assets/Images/notepad3.png')}
      style={[{width: widthValue(2), height: widthValue(2)}]}
     />
     <Text style={[styles.black,fontWeight('bold'),fontSize(19)]}>{name}</Text>
 </View>
  )
}


