import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    marginPosition,
    paddingPosition,   
  } from '../../../styles/Styles';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TimerButton = ({icon,text}) => {
  return (
    <View
        style={[
          {width: widthValue(1)},
          styles.centerHorizontal,
        ]}>
          <View style={[marginPosition(10)]}>
        <TouchableOpacity
          style={[
            styles.bgOrange,
            styles.centerVertical,
            { height: heightValue(14),width:widthValue(2.3)},
            radius(30),
            // paddingPosition(20,40,20,40),
            marginPosition(0,0,20)
          ]}>
          <View
            style={[styles.row, styles.centerHorizontal,styles.spaceEvenly]}>
            <FontAwesome5 name={icon} style={[styles.white, fontSize(20)]} />
            <Text style={[styles.white, fontSize(20), {fontWeight: '500'}]}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default TimerButton