import { View, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import Modal from 'react-native-modal';
import { marginPosition, widthValue,styles, heightValue, padding,radius,fontSize ,paddingPosition, borderWidth} from '../../../styles/Styles';
import Icon,{Icons} from '../../../components/Icons';
import { TimerButton } from './TimerButton';
import { modalData } from '../../../constants/ModalsData';
import { useSelector } from 'react-redux';
import { selectedTimerDetailsArray } from '../../../redux/userReducer/TimerModeReducer';

export const TimerModeModal = ({currentModal,closeModal,selectedItemId,updateTimerMode,selectedMode,handleTimerMode,timerModeArray}) => {




  const formatTime = (seconds)=>{
    const  minutes = Math.floor(seconds/60);
    const secondsLeft = seconds%60;
    const formattedTime = `${String(minutes).padStart(2,'0')}:${String(secondsLeft).padStart(2,'0')}`
    return formattedTime;
  }

  const renderItems =({item})=>{
  const isSelected = selectedMode === item.id

    return (
      <View>
        <TouchableOpacity onPress={()=>{handleTimerMode(item)}}> 
    <View style={[padding(0, 20, 5),styles.spaceBetweenVertical,styles.row]}>
      <View>
      <View style={[styles.row, styles.centerHorizontal]}>
        <Text style={[styles.black, fontSize(30), { fontWeight: '500' }, marginPosition(0, 5)]}>
        {formatTime(item.start)}
        </Text>
        <Icon name={"arrow-right"} type={Icons.FontAwesome} style={[styles.black, fontSize(25), marginPosition(0, 5)]} />
        <Text style={[styles.black, fontSize(30), { fontWeight: '500' }, marginPosition(0, 5)]}>
          {item.end}
        </Text>
      </View>
      <Text style={[styles.black, fontSize(17), { fontWeight: '300' }, marginPosition(5)]}>
        {item.desc}</Text>
      </View>
      <View>
        {isSelected && 
         <Icon name={"check"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(40), marginPosition(0, 5)]} />
        }
        </View>
    </View>
    </TouchableOpacity>
      </View>
    )
  } 

  return (
    <View>
      <Modal 
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={currentModal===3}
      hasBackdrop={true}
      backdropColor='black'
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={[{width:widthValue(1),margin:0,height:heightValue(3)}]}
      >
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},styles.bgWhite,padding(20),radius(0,15,0,0,15)]}>
        <Text
            style={[
              styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(24),
              paddingPosition(0, 0, 20, 0),
            ]}>
            Timer Mode
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>

            <FlatList
  data={timerModeArray}
  renderItem={renderItems}
  keyExtractor={item=>item.id}
/>
</View>
        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}  onPress={updateTimerMode} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
      </Modal>
    </View>
  )
}
