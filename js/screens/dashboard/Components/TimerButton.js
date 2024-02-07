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
    borderWidth,
    borderColor,
    paddingPosition,
    bgColor,
    padding,  
  } from '../../../styles/Styles';
import Icon,{Icons} from '../../../components/Icons';
 export const TimerButton = ({onPress,buttonText,ButtonIcon,widthVal,BgColor,textColor,borderWidth,heightval,paddingval}) => {
  return (
    <View
        style={[
          styles.centerHorizontal,
        ]}>
          <View style={[marginPosition(10)]}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.centerVertical,
            radius(30),
            marginPosition(0,0,20),
            paddingval,
            borderWidth,
            styles.borderOrange,
            widthVal,
            BgColor,
          ]}>
          <View
            style={[styles.row, styles.centerHorizontal,styles.spaceEvenly]}>
          <Icon name={ButtonIcon} type={Icons.FontAwesome5} style={[styles.white,fontSize(18),padding(0,10,10)]} />
           <Text style={[textColor,fontSize(20), {fontWeight:'500'}]}>
            {buttonText}
            </Text> 
          </View>
        </TouchableOpacity>
        </View>
      </View>
  )
}
