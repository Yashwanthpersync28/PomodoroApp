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

export const StrictModeModal = ({closeModal,currentModal,updateStrictMode }) => {
  
  const [switchSelected,setSwitchSelected] = useState(modalData.StrictMode.map(()=>false))



  const toggleSwitch = (index)=>{
    setSwitchSelected((prevState)=>{
      const newSwitch = [...prevState];
      newSwitch[index] = !newSwitch[index]
      return newSwitch;
    })
  }

  const renderItem = ({item,index})=>{
    return(
    <View>
              
            <TouchableOpacity onPress={()=>{toggleSwitch(index),console.log(item.id)}}>
              <View
                style={[
                  styles.row,
                  styles.spaceBetweenVertical,
                  paddingPosition(15, 0, 20, 0),
                ]}>
                  
                <Text style={[styles.black, fontSize(18), { fontWeight: '500' }]}>
                  {item.name}
                </Text>
                <Switch
                  trackColor={{ false:'#e0e1e1' , true: '#ff6347' }}
                  thumbColor={switchSelected[index] ? 'white' : 'white'}
                  ios_backgroundColor="black"
                  onValueChange={()=>toggleSwitch(index)}
                  value={switchSelected[index]}
                />
              </View>
              </TouchableOpacity>
            </View>
    )
  }

  return (
    <View style={[{ width: widthValue(1) }, styles.centerHorizontal]}>
      <Modal 
      isVisible={currentModal ===2}
      hasBackdrop={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={closeModal}
      backdropColor='black'
      backdropOpacity={0.5}
      style={[{ margin: 0, width: widthValue(1), height: heightValue(2),}]}>

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
            <View style={[styles.centerHorizontal,marginPosition(-5,0,10,0)]}>
        <View style={[{ width: 40,height:6  },styles.bgLightWhite,styles.centerHorizontal, radius(5)]}></View>
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

          <View style={[borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,]}>
          <FlatList data={modalData.StrictMode} renderItem={renderItem} keyExtractor={item=>item.id}/>
          </View>

          
          <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,15,20)]}  ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}onPress={updateStrictMode} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} paddingval={[padding(0,15,20)]}  BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        </Modal>
    </View>
  );
};
