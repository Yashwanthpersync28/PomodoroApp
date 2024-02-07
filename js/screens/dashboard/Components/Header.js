import {
    View,
    Text,
    Image,
    TouchableOpacity,
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
import { useNavigation } from '@react-navigation/native';

export const Header = () => {

  const navigation = useNavigation();
  return (
    <View
        style={[
          {width: widthValue(1.1)},
          paddingPosition(20, 40, 0, 0),
          styles.bgOrange,
        ]}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
            {height:heightValue(22),width:widthValue(1.18)}
          ]}>
          <Image
            source={timer}
            style={[{width: widthValue(14), height: widthValue(14)}]} />
         
          <Text style={[ styles.white,fontSize(23), {fontWeight: '600'}]}>Focusify</Text>

          <TouchableOpacity onPress={()=>navigation.navigate('Notification1')}><Icon name={"bell"} type={Icons.Feather} style={[styles.white,fontSize(24)]} /></TouchableOpacity>
        </View>
      </View>
  )
}