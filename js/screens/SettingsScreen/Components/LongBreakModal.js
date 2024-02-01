import { View, Text,FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { modalData } from '../../../constants/ModalsData'
import { TimerButton } from '../../dashboard/Components/TimerButton';
import { marginPosition, widthValue,styles, heightValue, padding,radius,fontSize ,paddingPosition, borderWidth} from '../../../styles/Styles';
import { useState } from 'react';
import Icon, { Icons } from '../../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentModal } from '../../../redux/userReducer/modalReducer';
import { setBreakTime } from '../../../redux/userReducer/breaktimeReducer';
import { setLongBreak } from '../../../redux/userReducer/longBreakReducer';



 export const LongBreakModal = ({currentModal}) => {

    const dispatch = useDispatch();
     const InitialLongBreak = modalData.longBreakTime[1].id
    const [selectedLongBreak,setSelectedLongBreak] = useState(InitialLongBreak)


    const handleLongBreak=(item)=>{
        setSelectedLongBreak(item.id)
        console.log('setSelectedLongBreak',item.longBreak)
        dispatch(setLongBreak(item.longBreak))
      }

      const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds/60);
        const secondsLeft = seconds%60;
    
        const formattedTime = `${String(minutes).padStart(2,'0')}:${String(secondsLeft).padStart(2,'0')}`
        return formattedTime;
      }
      const closeModal = ()=>{
        dispatch(setCurrentModal(0))
      }
    const renderItems =({item})=>{
        const isSelected = selectedLongBreak === item.id
        const formattedlongBreak = formatTime(item.longBreak)
          return (
            <View>
              <TouchableOpacity onPress={()=>{handleLongBreak(item)}}> 
          <View style={[padding(0, 15, 5),styles.spaceBetweenVertical,styles.row]}>
            <View>
            <Text style={[styles.black, fontSize(20), { fontWeight: '400' }, marginPosition(5)]}>{formattedlongBreak}</Text>
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
    <View>
     <Modal 
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={currentModal===7}
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
            Long Break Length
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>

            <FlatList
  data={modalData.longBreakTime}
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
    </View>
  )
}

