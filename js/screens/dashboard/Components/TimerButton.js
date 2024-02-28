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
import { useSelector } from 'react-redux';
 export const TimerButton = ({onPress,buttonText,ButtonIcon,widthVal,BgColor,textColor,borderWidth,heightval,paddingval}) => {
  const darkMode = useSelector(state=>state.system.darkMode)
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
          <Icon name={ButtonIcon} type={Icons.Entypo} style={[styles.white,fontSize(28)]} />
           <Text style={[textColor,fontSize(20), {fontWeight:'500'}]}>
            {buttonText}
            </Text> 
          </View>
        </TouchableOpacity>
        </View>
      </View>
  )
}
