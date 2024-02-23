import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthValue, radius,flex, styles,paddingPosition,heightValue, shadow, fontSize, marginPosition, borderWidth } from '../../styles/Styles';
import Icon, { Icons } from '../../components/Icons';
import { timer } from '../../constants/imageConstant';
import { useNavigation } from '@react-navigation/native';
import { NotificationCard } from './Components/NotificationCard';
import { useDispatch, useSelector } from 'react-redux';
import { setFocusTime } from '../../redux/userReducer/focustimeReducer';

export const Notification1 = () => {
  const darkMode = useSelector(state=>state.system.darkMode)

  const navigation= useNavigation();

  const focusTime = useSelector((state)=>state.focusTime);
  console.log('focusTimefvg',focusTime);
  const dispatch = useDispatch();

  const goback = ()=>{
    navigation.goBack()
    dispatch(setFocusTime(2*60));
  }
  return (
    <View
        style={[
          {width: widthValue(1)},
          paddingPosition(20, 25, 30, 25),
          darkMode?styles.bgdarkmodeBlack:styles.bgWhite,
          flex(1),
        ]}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
            {height:heightValue(20)}
          ]}>
            <TouchableOpacity onPress={goback}>
          <Icon name={"arrowleft"} type={Icons.AntDesign} style={[darkMode?styles.lightWhite:styles.black,fontSize(25)]} /></TouchableOpacity>
          
          <Text style={[darkMode?styles.lightWhite:styles.black,fontSize(23), {fontWeight: '600'}]}>
            Notifications
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
          <Icon name={"settings"} type={Icons.Feather} style={[darkMode?styles.lightWhite:styles.black,fontSize(25)]} />
          </TouchableOpacity>
        </View>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </View>
  )
}
