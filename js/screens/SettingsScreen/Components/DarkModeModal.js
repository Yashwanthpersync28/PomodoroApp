
import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
// import { setCurrentModal } from '../../../../redux/userReducer/modalReducer'
// import Icon, { Icons } from '../../../../components/Icons'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import  Icon,{ Icons } from '../../../components/Icons'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { modalData } from '../../../constants/ModalsData'



 export const DarkModeMOdal = ({currentModal,selectedThing,handleDarkMode,closeModal,visibleAt,handleFuntion,data,onPress}) => {

  const darkMode = useSelector(state=>state.system.darkMode)

    const renderItems =({item})=>{
        const isSelected = selectedThing === item.mode
        console.log('isSelected',isSelected)
          return (
            <View>
              <TouchableOpacity onPress={()=>{handleFuntion(item)}}> 
          <View style={[padding(0, 15, 5),styles.spaceBetweenVertical,styles.row]}>
            <View style={[styles.row,styles.centerHorizontal]}>
               <Icon name={isSelected ? "radio-btn-active" :"radio-btn-passive"} type={Icons.Fontisto} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 10)]} />
            <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(20), { fontWeight: '400' },]}>{item.mode}</Text>
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
    isVisible={visibleAt}
    hasBackdrop={true}
    backdropColor='black'
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
    style={[{width:widthValue(1),height:heightValue(3),margin:0},styles.centerHorizontal,radius(10)]}>
        
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},darkMode?styles.bgdarkmodeBlack:styles.bgWhite,padding(20),styles.positionAbsolute,{bottom:0},radius(0,15,0,0,15)]}>
        <View style={[styles.centerHorizontal,marginPosition(-5,0,15,0)]}>
        <View style={[{ width: 35,height:4  },styles.bgLightWhite,styles.centerHorizontal, radius(6)]}></View>
        </View>
        <Text
            style={[
              darkMode?styles.lightWhite:styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(24),
              paddingPosition(0, 0, 20, 0),
            ]}>
            Select Your Gender
          </Text>
          <View style={[borderWidth(0,1,0,1,0),darkMode?styles.borderDarkmode:styles.borderLightWhite]}>

            <FlatList
  data={data}
  renderItem={renderItems}
  keyExtractor={item=>item.id}
/>
</View>
        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}  onPress={onPress} widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]}  ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
        {currentModal === 16 && <DarkModeMOdal />}
    </Modal>
  )
}
