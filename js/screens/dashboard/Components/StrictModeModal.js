import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Switch,
  FlatList,
  Button,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import {
  flex,
  styles,
  widthValue,
  radius,
  heightValue,
  fontSize,
  paddingPosition,
  marginPosition,
  zIndex,
  shadow,
  screenWidth,
  screenHeight,
  lineHeight,
  borderWidth,
  padding,
} from '../../../styles/Styles';
import Modal from 'react-native-modal';
import { TimerButton } from './TimerButton';
import { modalData } from '../../../constants/ModalsData';
import { SwitchComponent } from '../../../components/touchables/SwitchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setStrictModePreference } from '../../../redux/userReducer/StrictModeReducers';
import { ModeComponent } from './ModeComponent';
import PushNotification from 'react-native-push-notification';
import {
  isDoNotDisturbModeOn,
  openDoNotDisturbSettings,
} from 'react-native-do-not-disturb';
import { useCallback } from 'react';
export const StrictModeModal = ({ closeModal, currentModal, updateStrictMode }) => {

  const darkMode = useSelector(state=>state.system.darkMode)

  const dispatch = useDispatch();
  const userPreference = useSelector(state=>state.user.strictMode)
  const BlockAllNotifications = userPreference.BlockAllNotifications;
  const BlockOtherApps = userPreference.BlockOtherApps;
  const BlockPhonecalls = userPreference.BlockPhonecalls;
  const ProhibitToExit = userPreference.ProhibitToExit;
  const bLockPhone = userPreference.bLockPhone;
console.log(BlockAllNotifications,'blocjNOdjbdjbhhjhvgh');
// const [BlockAllNotification, setBlockAllNotifications] = useState(userPreference.BlockAllNotifications);

  const _openAppSetting = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  });


  
  return (
    <View style={[{ width: widthValue(1) }, styles.centerHorizontal]}>
      <Modal
        isVisible={currentModal === 2}
        hasBackdrop={true}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        onBackdropPress={closeModal}
        backdropColor='black'
        backdropOpacity={0.5}
        style={[{ margin: 0, width: widthValue(1), height: heightValue(2), }]}>

        <View
          style={[
            darkMode?styles.bgdarkmodeBlack:styles.bgWhite,
            {
              position: 'absolute',
              bottom: 0,

              width: widthValue(1),
            },
            padding(20),
            radius(0, 20, 0, 0, 20),
            styles.spaceBetweenVertical,
          ]}>
          <View style={[styles.centerHorizontal, marginPosition(-5, 0, 12, 0)]}>
            <View style={[{ width: 35, height: 4 }, styles.bgLightWhite, styles.centerHorizontal, radius(6)]}></View>
          </View>
          <Text
            style={[
             darkMode?styles.lightWhite: styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(22),
              paddingPosition(10, 0, 20, 0),
            ]}>
            Strict Mode
          </Text>

<View>

</View>


          <View style={[styles.row, styles.spaceAroundVertical, marginPosition(10, 0, 0, 0)]}>
            <TimerButton buttonText={'Cancel'} onPress={closeModal} widthVal={{ width: widthValue(2.5) }} paddingval={[padding(0, 15, 20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} />
            <TimerButton buttonText={'Ok'} onPress={_openAppSetting} widthVal={{ width: widthValue(2.5) }} ButtonIcon={''} paddingval={[padding(0, 15, 20)]} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
