import { View, Text, } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { marginPosition, widthValue,styles, heightValue, padding,radius,fontSize ,paddingPosition, borderWidth} from '../../../styles/Styles';
import Icon,{Icons} from '../../../components/Icons';
import { TimerButton } from './TimerButton';

 export const TimerModal = ({currentModal,closeModal}) => {
  return (
    <View>
      <Modal 
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={currentModal===3}
      hasBackdrop={true}
      backdropColor='black'
      backdropOpacity={0.5}
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
          <View style={[padding(0,20,5)]}>
          <View style={[styles.row,styles.centerHorizontal]}>
            <Text style={[styles.black,fontSize(25),{fontWeight:'500'},marginPosition(0,5)]}>25:00</Text>
            <Icon name={"arrow-right"} type={Icons.FontAwesome} style={[styles.black,fontSize(25),marginPosition(0,5)]} />
            <Text style={[styles.black,fontSize(25),{fontWeight:'500'},marginPosition(0,5)]}>00:00</Text>
          </View>
          <Text style={[styles.black,fontSize(17),{fontWeight:'300'},marginPosition(5)]}>Countdown from 25 Minutes until time turns out</Text>
          </View>
          <View style={[paddingPosition(10,5,20,5)]}>
          <View style={[styles.row,styles.centerHorizontal]}>
            <Text style={[styles.black,fontSize(25),{fontWeight:'500'},marginPosition(0,5)]}>00:00</Text>
            <Icon name={"arrow-right"} type={Icons.FontAwesome} style={[styles.black,fontSize(25),marginPosition(0,5)]} />
            <Icon name={"infinity"} type={Icons.FontAwesome6} style={[styles.black,fontSize(25),marginPosition(0,5)]} />
          </View>
          <Text style={[styles.black,fontSize(17),{fontWeight:'300'},marginPosition(5)]}>Start Counting from 0 until stopped manually</Text>
          </View>
        </View>
        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        
      </Modal>
    </View>
  )
}

