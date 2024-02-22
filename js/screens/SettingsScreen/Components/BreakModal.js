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



 export const BreakModal = ({currentModal}) => {
  const darkMode = useSelector(state=>state.system.darkMode)


    const dispatch = useDispatch();
     const InitialBreakTime = modalData.breakTime[1].id
    const [selectedBreakId,setelectedBreakId] = useState(InitialBreakTime)

    
    const handleBreakTime=(item)=>{
        setelectedBreakId(item.id)
        console.log('selectedBreakTime',item.breakTime)
        dispatch(setBreakTime(item.breakTime))
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
        const isSelected = selectedBreakId === item.id
        const formattedBreakTime = formatTime(item.breakTime)
      
          return (
            <View>
              <TouchableOpacity onPress={()=>{handleBreakTime(item)}}> 
          <View style={[padding(0, 15, 5),styles.spaceBetweenVertical,styles.row]}>
            <View>
            <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), { fontWeight: '400' }, marginPosition(5)]}>{formattedBreakTime}</Text>
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
      isVisible={currentModal===6}
      hasBackdrop={true}
      backdropColor='black'
      backdropOpacity={0.5}
      onBackdropPress={closeModal}
      style={[{width:widthValue(1),margin:0,height:heightValue(3)}]}
      >
       
        <View style={[{width:widthValue(1),position:'absolute',bottom:0},darkMode?styles.bgdarkmodeBlack:styles.bgWhite,padding(20),radius(0,15,0,0,15)]}>
        <View style={[styles.centerHorizontal,marginPosition(-5,0,15,0)]}>
        <View style={[{ width: 35,height:4  },styles.bgLightWhite,styles.centerHorizontal, radius(6)]}></View>
        </View>
        <Text
            style={[
              darkMode?styles.lightWhite:styles.black,
              styles.textCenter,
              { fontWeight: '500' },
              fontSize(22),
              paddingPosition(0, 0, 20, 0),
            ]}>
            Short Break length
          </Text>
          <View style={[borderWidth(0,1,0,1,0),styles.borderLightWhite]}>

            <FlatList
  data={modalData.breakTime}
  renderItem={renderItems}
  keyExtractor={item=>item.id}
/>
</View>
        <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
      <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'Ok'}  onPress={closeModal} widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,12,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
        </View>
      </Modal>
    </View>
  )
}

