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
import { TimerButton } from '../../dashboard/Components/TimerButton';
import Icon,{ Icons } from '../../../components/Icons';
import { Title } from 'react-native-paper';
  
  export const SoundModal = ({closeModal,currentModal,handleCompletionSound,updateNoise,selectedSong,stopSound,CompletionSounds,title,data,isVisible,onPress,onPress2,onPress3}) => {

     const renderTunes=({item})=>{
      const isSelected = selectedSong === item.MusicName
      return(
        <TouchableOpacity onPress={()=>onPress(item)}>
        <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,]}>
              <View>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[styles.black, fontSize(18), { fontWeight: '500' }]}>
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
        isVisible={isVisible}
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
              borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,
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
                paddingPosition(0, 0, 20, 0),
              ]}>
              {title}
            </Text>

<FlatList data={data} renderItem={({item})=>renderTunes({item})} keyExtractor={item=>item.id} onPress={(item) => onPress(item)}/>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,15,20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}  onPress={closeModal} widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>

        </View>
          </View>
        </Modal>
      </View>
    );
  };
  
