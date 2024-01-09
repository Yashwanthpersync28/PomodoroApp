import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Switch,
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
} from '../../styles/Styles';
import Modal from 'react-native-modal';
import { TimerButton } from '../../screens/dashboard/Components/TimerButton';
import { modalData } from '../../constants/ModalsData';

export const StrictModeModal = ({closeModal,currentModal }) => {
  
  const [selectedSwitch,setSelectedSwitch] = useState({})

  const toggleSwitch = (index)=>{
    setSelectedSwitch((prevStates)=>{
      const newSelectedSwitch = {...prevStates};
      newSelectedSwitch[index] = !newSelectedSwitch[index];
      return newSelectedSwitch
    })
  }

  return (
    <View style={[{ width: widthValue(1) }, styles.centerHorizontal]}>
      <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        visible={currentModal===2}
        hasBackdrop={true}
        backdropColor='black'
        backdropOpacity={0.5}
        style={[{ margin: 0, width: widthValue(1),height: heightValue(2), }]}>
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
          <Text
            style={[
              styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(24),
              paddingPosition(0, 0, 20, 0),
            ]}>
            Strict Mode
          </Text>
          <View>
            <View style={[borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,]}>
            {modalData.StrictMode.map((options,index) => (
              <View
                style={[
                  styles.row,
                  styles.spaceBetweenVertical,
                  paddingPosition(15, 0, 20, 0),
                ]}>
                <Text style={[styles.black, fontSize(20), { fontWeight: '500' }]}>
                  {options.name}
                </Text>
                <Switch
                  trackColor={{ false:'#e0e1e1' , true: '#ff6347' }}
                  thumbColor={selectedSwitch[index] ? 'white' : 'white'}
                  ios_backgroundColor="black"
                  onValueChange={(index)=>toggleSwitch(index)}
                  value={selectedSwitch[index]}
                />
              </View>
            ))}
            </View>
          </View>
          <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
      </Modal>
    </View>
  );
};
