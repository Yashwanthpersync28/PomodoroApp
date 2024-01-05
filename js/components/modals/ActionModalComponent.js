// import React, { useEffect, useState } from 'react';
// import { View, Modal, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import LottieView from 'lottie-react-native';
// import { flex, fontSize, padding, radius, styles, widthValue } from '../../styles/Styles';
// import { useNavigation } from '@react-navigation/native';

// const ActionModalComponent = ({ visible, onClose }) => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Use setTimeout to delay the navigation after 3 seconds
//     const timeoutId = setTimeout(() => {
//         onClose()
//       handleLogin();
//     }, 5000);

//     // Clear the timeout to prevent it from firing if the modal is closed before 3 seconds
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   const handleLogin = () => {
//     navigation.navigate('login');
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}>
//       <View style={[flex(1), styles.allCenter, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
//         <View style={[{ backgroundColor: 'white', width: widthValue(1.3) }, radius(10), padding(40), styles.allCenter]}>
//           <LottieView
//             source={require('../../assets/Lottieview/loadingOrange.json')}
//             autoPlay
//             loop
//             style={[{ height: 70, width: 70 }, styles.black]}
//           />
//           <TouchableOpacity>
//             <Text style={[styles.black, fontSize(20)]}>Signup...</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default ActionModalComponent;
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
