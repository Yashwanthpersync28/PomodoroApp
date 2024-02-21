import React from 'react'
import {View,Text} from 'react-native';
import { fontSize, fontWeight, heightValue , lineHeight, marginPosition, styles } from '../../styles/Styles';
import { useSelector } from 'react-redux';
import { Colors } from '../../styles/Colors';

export const HeadingComponent = ({name,details,icon}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

  return (
    <View style={[{height:heightValue(8)},styles.centerVertical]}>
      <View style={[styles.row]}>
      <Text style={[fontSize(26),Darkmode?styles.white:styles.black,fontWeight('800')]}>{name}</Text>
      <Text style={[fontSize(22),styles.textAlignVertical,fontWeight('bold'),styles.black]}>{icon}</Text>
      </View>
      <Text style={[fontSize(16),{color:Darkmode?Colors.inputColor:'#a5a5a6' },marginPosition(10)]} numberOfLines={3}>{details}</Text>
      </View>
  )
}


