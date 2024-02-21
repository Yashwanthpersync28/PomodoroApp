import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    paddingPosition,
    marginPosition,
    borderWidth,
    padding,
    flex
  } from '../../../styles/Styles';
  import Modal from 'react-native-modal';
import { TimerButton } from './TimerButton';
import { modalData } from '../../../constants/ModalsData';
import Icon, { Icons } from '../../../components/Icons';
import { useSelector } from 'react-redux';
  
  export const WhiteNoiseModal = ({closeModal,currentModal,selectedTune,handleNoise,updateNoise,WhiteNoiseCancelFunc}) => {

  const darkMode = useSelector(state=>state.system.darkMode)

     const renderTunes=({item})=>{
      const isSelected = selectedTune === item.MusicName
      console.log('isSelected',isSelected)
      return(
        <View>
        <TouchableOpacity onPress={()=>handleNoise(item)}>
        <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal]}>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), { fontWeight: '500' }]}>
                    {item.MusicName}
                  </Text>
                </View>
              <View>
        {isSelected &&
         <Icon name={"check"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 5)]} />
        }
        </View>
            </View> 
            </TouchableOpacity>
            </View>
      )
     } 
    return (
      <View style={[{ width: widthValue(1) }, styles.centerHorizontal]}>
        <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        isVisible={currentModal ===4}
        hasBackdrop={true}
        backdropColor='black'
        backdropOpacity={0.5}
        onBackdropPress={closeModal}
          style={[{ margin: 0, width: widthValue(1),height: heightValue(2), }]}>
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
              <View style={[styles.centerHorizontal,marginPosition(-5,0,15,0)]}>
        <View style={[{ width: 35,height:4  },darkMode?styles.borderLightblack:styles.bgLightWhite,styles.centerHorizontal, radius(6)]}></View>
        </View>
            <Text
              style={[
                darkMode?styles.lightWhite:styles.black,
                styles.textCenter,
                { fontWeight: '500' },
                fontSize(22),
                paddingPosition(0, 0, 20, 0),
              ]}>
              White Noise 
            </Text>
            <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>
<FlatList data={modalData.whiteNoiseMode} renderItem={renderTunes} keyExtractor={item=>item.id}/></View>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
        <TimerButton buttonText={'Cancel'} onPress={WhiteNoiseCancelFunc} paddingval={[padding(0,15,20)]} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
        <TimerButton buttonText={'Ok'}onPress={updateNoise} paddingval={[padding(0,15,20)]} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
        </View>
          </View>
        </Modal>
      </View>
    );
  };
  
