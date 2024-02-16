import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'



 export const Logout = ({currentModal,OnPress1,OnPress2,HeaderName,question,option1,option2,VisibleAt}) => {


    const dispatch = useDispatch();

    const closeModal=()=>{
        dispatch(setCurrentModal(0))
    }

  return (
    <Modal 
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    isVisible={VisibleAt}
    hasBackdrop={true}
    backdropColor='black'
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
    style={[{width:widthValue(1),height:heightValue(3),margin:0},styles.centerHorizontal,radius(10)]}>
        
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},styles.bgWhite,padding(20),styles.positionAbsolute,{bottom:0},radius(0,15,0,0,15)]}>
        <Text
            style={[
              styles.Orange,
              styles.textCenter,
              { fontWeight: '600' },
              fontSize(24),
              paddingPosition(0, 0, 20, 0),
            ]}>
            {HeaderName}
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>
<Text style={[styles.black,fontSize(20),styles.textCenter,padding(0,20,0),{fontWeight:'400'}]}>{question}</Text>
</View>

        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={option1} onPress={OnPress1}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]}ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={option2}  onPress={OnPress2} widthVal={{width:widthValue(2.5)}}  paddingval={[padding(0,12,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        
    </Modal>
  )
}
