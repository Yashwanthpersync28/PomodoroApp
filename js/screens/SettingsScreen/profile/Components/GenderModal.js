
import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../../styles/Styles'
import Modal from 'react-native-modal'
import { TimerButton } from '../../../dashboard/Components/TimerButton'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from '../../../../redux/userReducer/modalReducer'
import Icon, { Icons } from '../../../../components/Icons'


 export const GenderModal = ({currentModal,showModal,setSelectedGender,selectedGender,gender}) => {


    const dispatch = useDispatch();
    
    const handleGenderModal = (item)=>{
        setSelectedGender(item.genderName)
        closeModal();
    }
    const closeModal=()=>{
        dispatch(setCurrentModal(0))
    }

    const renderItems =({item})=>{
        const isSelected = selectedGender === item.genderName
        console.log('isSelected',isSelected)
      
          return (
            <View>
              <TouchableOpacity onPress={()=>{handleGenderModal(item)}}> 
          <View style={[padding(0, 15, 5),styles.spaceBetweenVertical,styles.row]}>
            <View style={[styles.row,styles.centerHorizontal]}>
               <Icon name={isSelected ? "radio-btn-active" :"radio-btn-passive"} type={Icons.Fontisto} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 5)]} />
            <Text style={[styles.black, fontSize(20), { fontWeight: '400' },]}>{item.genderName}</Text>
            </View>
            <View>
              </View>
          </View>
          </TouchableOpacity>
            </View>
          )
        } 

  return (
    <Modal 
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    isVisible={currentModal === 11}
    hasBackdrop={true}
    backdropColor='black'
    backdropOpacity={0.5}
    onBackdropPress={showModal}
    style={[{width:widthValue(1),height:heightValue(3),margin:0},styles.centerHorizontal,radius(10)]}>
        
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},styles.bgWhite,padding(20),styles.positionAbsolute,{bottom:0},radius(0,15,0,0,15)]}>
        <Text
            style={[
              styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(24),
              paddingPosition(0, 0, 20, 0),
            ]}>
            Select Your Gender
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>

            <FlatList
  data={gender}
  renderItem={renderItems}
  keyExtractor={item=>item.id}
/>
</View>
        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}  onPress={closeModal} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        
    </Modal>
  )
}
