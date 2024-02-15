import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Switch,
  FlatList,
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

export const StrictModeModal = ({ closeModal, currentModal, updateStrictMode }) => {

  const dispatch = useDispatch();
  const userPreference = useSelector(state=>state.user.strictMode)
  const BlockAllNotifications = userPreference.BlockAllNotifications;
  const BlockOtherApps = userPreference.BlockOtherApps;
  const BlockPhonecalls = userPreference.BlockPhonecalls;
  const ProhibitToExit = userPreference.ProhibitToExit;
  const bLockPhone = userPreference.bLockPhone;
console.log(BlockAllNotifications,'blocjNOdjbdjbhhjhvgh');


  const switchNotifications = () => {
    dispatch(setStrictModePreference({...userPreference,BlockAllNotifications:!BlockAllNotifications}))
  }
  const switchApps = () => {
    dispatch(setStrictModePreference({...userPreference,BlockOtherApps:!BlockOtherApps}))
  }
  const switchCalls = () => {
    dispatch(setStrictModePreference({...userPreference,BlockPhonecalls:!BlockPhonecalls}))
  }
  const switchExit = () => {
    dispatch(setStrictModePreference({...userPreference,ProhibitToExit:!ProhibitToExit}))
  }
  const switchPhone = () => {
    dispatch(setStrictModePreference({...userPreference,bLockPhone:!bLockPhone}))
  }

  
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
            styles.bgWhite,
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
              styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(22),
              paddingPosition(10, 0, 20, 0),
            ]}>
            Strict Mode
          </Text>

<View>
<ModeComponent title={'Block All Notifications'} isEnabled={BlockAllNotifications} switchFunction={switchNotifications}/>
<ModeComponent title={'Block Phone calls'} isEnabled={BlockPhonecalls} switchFunction={switchCalls} />
<ModeComponent title={'Block Other Apps'} isEnabled={BlockOtherApps} switchFunction={switchApps}/>
<ModeComponent title={'Lock Phone'}  isEnabled={bLockPhone} switchFunction={switchPhone}/>
<ModeComponent title={'Prohibit to Exit'}  isEnabled={ProhibitToExit} switchFunction={switchExit}/>
</View>


          <View style={[styles.row, styles.spaceAroundVertical, marginPosition(10, 0, 0, 0)]}>
            <TimerButton buttonText={'Cancel'} onPress={closeModal} widthVal={{ width: widthValue(2.5) }} paddingval={[padding(0, 15, 20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]} />
            <TimerButton buttonText={'Ok'} onPress={updateStrictMode} widthVal={{ width: widthValue(2.5) }} ButtonIcon={''} paddingval={[padding(0, 15, 20)]} BgColor={[styles.bgOrange]} textColor={[styles.white]} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
