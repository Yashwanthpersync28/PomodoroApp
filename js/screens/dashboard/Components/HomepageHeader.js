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
import Icon,{Icons} from '../../../components/Icons';
import { timer } from '../../../constants/imageConstant';

 export const HomepageHeader = () => {
  return (
    <View
        style={[
          {width: widthValue(1)},
          paddingPosition(20, 20, 0, 20),
          styles.bgOrange
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
          <Text style={[styles.white, fontSize(30), {fontWeight: '600'}]}>
            Focusify
          </Text>
          <Icon name={"bell"} type={Icons.Feather} style={[styles.white,fontSize(30)]} />
        </View>
      </View>
  )
}