import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'



 export const Logout = ({currentModal,logOut}) => {


    const dispatch = useDispatch();

    const closeModal=()=>{
        dispatch(setCurrentModal(0))
    }


  return (
    <Modal 
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    isVisible={currentModal === 13}
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
            Logout
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>
<Text style={[styles.black,fontSize(20),styles.textCenter,padding(0,20,0),{fontWeight:'500'}]}> Are you Sure You Want to Log out ?</Text>
</View>

        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Yes. Logout'}  onPress={logOut} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        
    </Modal>
  )
}
