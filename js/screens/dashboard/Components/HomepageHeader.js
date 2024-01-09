import {
    View,
    Text,
    Image,
  } from 'react-native';
  import React from 'react';
  import {
    styles,
    widthValue,
    heightValue,
    fontSize,
    paddingPosition,
  } from '../../../styles/Styles';
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon,{ Icons } from '../../../components/Icons';
import { timer } from '../../../constants/imageConstant';
export const HomepageHeader = ({IconFamily,name,bgcolor,color}) => {

  return (
    <View
        style={[
          {width: widthValue(1)},
          paddingPosition(20, 40, 0, 0),
          bgcolor
        ]}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
            {height:heightValue(20)}
          ]}>
          <Image
            source={timer}
            style={[{width: widthValue(12), height: widthValue(12)}]}
          />
          <Text style={[ color,fontSize(25), {fontWeight: '600'}]}>
            Focusify
          </Text>
          {/* <Icon name={name} type={IconFamily} style={[color, fontSize(25)]} /> */}
          
          {/* <Feather name="bell" style={[styles.white, fontSize(30)]} /> */}
          <Icon name={"bell"} type={Icons.Feather} style={[styles.white,fontSize(30)]} />
        </View>
      </View>
  )
}