import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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
} from '../../styles/Styles';
import Modal from 'react-native-modal';
import TimerButton from '../../screens/dashboard/Components/TimerButton';

export const ActionModalComponent = ({modalVisible, openModal}) => {
  return (
    <View style={[{width: widthValue(1)}, styles.centerHorizontal]}>
      <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        visible={modalVisible}
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity={0.5}
        style={[{margin: 0, width: widthValue(1)}]}>
        <View
          style={[
            styles.bgWhite,
            {
              position: 'absolute',
              bottom: 0,
              padding:heightValue(20),
              height: heightValue(1.8),
              width: widthValue(1),
            },
            radius(0, 20, 0, 0, 20),
          ]}>
          <Text
            style={[
              styles.black,
              styles.textCenter,
              {fontWeight: '500'},
              fontSize(24),
              borderWidth(0, 0, 0, 1, 0),
              styles.borderLightWhite,
              paddingPosition(0, 0, 20, 0),
            ]}>
            Strict Mode
          </Text>
          <View>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                paddingPosition(15, 0, 15, 0),
              ]}>
              <Text style={[styles.black, fontSize(20), {fontWeight: '500'}]}>
                Block All Notifications
              </Text>
              <TouchableOpacity>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                paddingPosition(15, 0, 15, 0),
              ]}>
              <Text style={[styles.black, fontSize(20), {fontWeight: '500'}]}>
                Block Phone calls
              </Text>
              <TouchableOpacity>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                paddingPosition(15, 0, 15, 0),
              ]}>
              <Text style={[styles.black, fontSize(20), {fontWeight: '500'}]}>
              Block Other Apps
              </Text>
              <TouchableOpacity>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                paddingPosition(15, 0, 15, 0),
              ]}>
              <Text style={[styles.black, fontSize(20), {fontWeight: '500'}]}>
                 Lock Phone
              </Text>
              <TouchableOpacity>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                paddingPosition(10, 0, 10, 0),
              ]}>
              <Text style={[styles.black, fontSize(20), {fontWeight: '500'}]}>
                Prohibit to Exit
              </Text>
              <TouchableOpacity>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.row,{width:widthValue(1)},styles.spaceBetweenVertical]}>
            <TimerButton text={'cancel'}/>
            <TimerButton text={'Ok'}/>
          </View>
        </View>
      </Modal>
    </View>
  );
};
