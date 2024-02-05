
import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../../styles/Styles'
import Modal from 'react-native-modal'
import { TimerButton } from '../../../dashboard/Components/TimerButton'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from '../../../../redux/userReducer/modalReducer'


 export const GenderModal = ({currentModal,showModal,setSelectedGender,selectedGender}) => {


    const dispatch = useDispatch();
    
    const gender = [
        {id:'1',gender:'Male'},
        {id:'2',gender:'Female'},
        {id:'3',gender:'others'}
]


    const handleGenderModal = (gender)=>{
        setSelectedGender(gender)
        closeModal();
    }
    const closeModal=()=>{
        dispatch(setCurrentModal(0))
    }

    const renderItems =({item})=>{
        const isSelected = selectedGender === item.id
      
          return (
            <View>
              <TouchableOpacity onPress={()=>{handleGenderModal(gender)}}> 
          <View style={[padding(0, 15, 5),styles.spaceBetweenVertical,styles.row]}>
            <View>
            <Text style={[styles.black, fontSize(20), { fontWeight: '400' }, marginPosition(5)]}>{item.gender}</Text>
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
    <Modal 
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    isVisible={currentModal === 11}
    hasBackdrop={true}
    backdropColor='black'
    backdropOpacity={0.5}
    onBackdropPress={showModal}
    style={[{width:widthValue(1.1),height:heightValue(3)},styles.centerHorizontal,styles.positionAbsolute,{bottom:0},radius(10)]}>
        
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},styles.bgWhite,padding(20),radius(0,15,0,0,15)]}>
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
