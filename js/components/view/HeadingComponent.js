import React from 'react'
import {View,Text} from 'react-native';
import { fontSize, heightValue , lineHeight, marginPosition, styles } from '../../styles/Styles';

export const HeadingComponent = ({name,details}) => {
  return (
    <View style={[{height:heightValue(8)},styles.centerVertical]}>
      <Text style={[fontSize(30),styles.black,{fontWeight:'bold'}]}>{name}</Text>
      <Text style={[fontSize(20),{color:'#a5a5a6' },marginPosition(10)]} numberOfLines={3}>{details}</Text>
      </View>
  )
}


