import React from 'react'
import {View,Text,Image} from 'react-native'
import { fontSize, fontWeight, heightValue, marginPosition, styles, widthValue } from '../../styles/Styles'
import { useSelector } from 'react-redux';


export const NotaskFound = ({name,details,bgcolor}) => {
const Darkmode=useSelector((state)=>state.system.darkMode);

  return (
    <View style={[{height:heightValue(2)},styles.allCenter,styles.column]}>
    <Image
     source={Darkmode?require('../../assets/Images/notaskdb.png'):require('../../assets/Images/notepad3.png')}
      style={[{width: widthValue(2), height: widthValue(2)}]}
     />
     <Text style={[Darkmode?styles.white:styles.black,fontWeight('bold'),fontSize(19),marginPosition(0,0,0,20)]}>{name}</Text>
     <Text style={[Darkmode?styles.smokegray:styles.gray,fontWeight('bold'),fontSize(19),styles.textCenter,marginPosition(10,0,0,15)]}>{details}</Text>

 </View>
  )
}


