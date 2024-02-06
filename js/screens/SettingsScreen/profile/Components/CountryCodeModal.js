import { View, Text,TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../../styles/Styles'
import { flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../../styles/Styles'
import { modalData } from '../../../../constants/ModalsData'
import Modal from 'react-native-modal'
import { TimerButton } from '../../../dashboard/Components/TimerButton'
import Icon, { Icons } from '../../../../components/Icons'


export const CountryCodeModal = ({currentModal,closeModal,selectedCountry,handleCountrySelected}) => {

    const renderCountryCode = ({item})=>{
        // const isSelected = selectedCountry = item;
        return(
        <TouchableOpacity onPress={()=>{handleCountrySelected(item)}} style={[styles.centerHorizontal,styles.row,padding(0,10,15)]}>
                <Text style={[styles.black,fontSize(18)]}>{item.emoji}</Text>
                <View style={[styles.row,styles.centerHorizontal,margin(0,0,60)]}>
                <Text style={[styles.black,fontSize(18)]}>{item.dial_code}</Text>
               <Icon name={'remove-outline'} type={Icons.Ionicons} style={[styles.black, fontSize(30)]} />
                <Text  style={[styles.black,fontSize(20)]}>{item.name}</Text>
                </View>
        </TouchableOpacity>
        )
    }
  return (
    <Modal 
    animationIn={'slideInUp'}
    animationOut={'slideOutDown'}
    isVisible={currentModal === 12}
    hasBackdrop={true}
    backdropColor='black'
    backdropOpacity={0.5}
    onBackdropPress={closeModal}
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
            Select Your Country Code 
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>

            <FlatList
  data={modalData.countryCode}
  renderItem={renderCountryCode}
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



