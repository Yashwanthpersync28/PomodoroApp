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
  
  export const WhiteNoiseModal = ({closeModal,currentModal,selectedTune,handleNoise,updateNoise,stopSound }) => {

     const renderTunes=({item})=>{
      const isSelected = selectedTune === item.MusicName
      console.log('isSelected',isSelected)
      return(
        <TouchableOpacity onPress={()=>handleNoise(item)}>
        <View style={[borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,styles.row,styles.spaceBetweenVertical,styles.centerHorizontal]}>
              <View>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[styles.black, fontSize(20), { fontWeight: '500' }]}>
                    {item.MusicName}
                  </Text>
                </View>
              </View>
              <View>
        {isSelected &&
         <Icon name={"check"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 5)]} />
        }
        </View>
            </View> 
            </TouchableOpacity>
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
              White Noise 
            </Text>

<FlatList data={modalData.whiteNoiseMode} renderItem={renderTunes} keyExtractor={item=>item.id}/>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
        <TimerButton buttonText={'Cancel'} onPress={()=>{closeModal(),stopSound()}}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
        <TimerButton buttonText={'Ok'}onPress={()=>{updateNoise(),stopSound()}} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
        </View>
          </View>
        </Modal>
      </View>
    );
  };
  
