import React from 'react'
import {View,Text} from 'react-native';
import { fontSize, fontWeight, heightValue , lineHeight, marginPosition, styles } from '../../styles/Styles';

export const HeadingComponent = ({name,details,icon}) => {
  return (
    <View style={[{height:heightValue(8)},styles.centerVertical]}>
      <View style={[styles.row]}>
      <Text style={[fontSize(26),styles.black,fontWeight('800')]}>{name}</Text>
      <Text style={[fontSize(22),styles.textAlignVertical,fontWeight('bold'),styles.black]}>{icon}</Text>
      </View>
      <Text style={[fontSize(16),{color:'#a5a5a6' },marginPosition(10)]} numberOfLines={3}>{details}</Text>
      </View>
  )
}


