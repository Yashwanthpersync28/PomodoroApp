import { View, Text ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import {styles,
    widthValue,
    radius,
    fontSize,
    paddingPosition,
    marginPosition,
    padding,
    heightValue,
    borderWidth
} from '../../../styles/Styles'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import Icon, { Icons } from '../../../components/Icons'
import { modalData } from '../../../constants/ModalsData'
import { useSelector } from 'react-redux'

const ReminderVibrate = ({closeModal,currentModal,VibrationChange,handleVibration,selectedVibrationMode}) => {
  const darkMode = useSelector(state=>state.system.darkMode)


    const renderOptions = ({item})=>{
        const isSelected = selectedVibrationMode === item.name
      return(
        <TouchableOpacity onPress={()=>handleVibration(item)}>
        <View style={[borderWidth(0, 1, 0, 1, 0),darkMode?styles.borderDarkmode:styles.borderLightWhite,styles.row,styles.spaceBetweenVertical,styles.centerHorizontal]}>
              <View>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(20), { fontWeight: '500' }]}>
                    {item.name}
                  </Text>
                </View>
              </View>
              <View>
        {isSelected &&
         <Icon name={"check"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 5)]} />
        }
        </View>
            </View> 
            </TouchableOpacity>
      )

    }

  return (
    <View style={[{width:widthValue(1)},styles.centerHorizontal]}>
      <Modal 
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropColor='Black'
        backdropOpacity={0.5}
        hasBackdrop={true}
        isVisible={currentModal === 9}
        onBackdropPress={closeModal}
        style={[{ margin: 0, width: widthValue(1),height: heightValue(2), }]}
      >
        <View
            style={[
              darkMode?styles.bgdarkmodeBlack:styles.bgWhite,
              {
                position: 'absolute',
                bottom: 0,
                
                width: widthValue(1),
              },
              padding(20),
              radius(0, 20, 0, 0, 20),
              styles.spaceBetweenVertical,
            ]}>
              <View style={[styles.centerHorizontal,marginPosition(-5,0,20,0)]}>
        <View style={[{ width: 30,height:4  },styles.bgLightWhite,styles.centerHorizontal, radius(6)]}></View>
        </View>
            <Text
              style={[
                darkMode?styles.lightWhite:styles.black,
                styles.textCenter,
                { fontWeight: '500' },
                fontSize(24),
                paddingPosition(0, 0, 20, 0),
              ]}>
              Reminder Vibrate
            </Text>

<FlatList data={modalData.vibrationOptions} renderItem={renderOptions} keyExtractor={item=>item.name}/>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
        <TimerButton buttonText={'Cancel'} onPress={()=>closeModal()}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,10,20)]} ButtonIcon={''} BgColor={[darkMode?styles.bgDarkmodebutton:styles.bglightPink]} textColor={[darkMode?styles.lightWhite:styles.Orange]}/>
        <TimerButton buttonText={'Ok'} onPress={VibrationChange}  widthVal={{width:widthValue(2.5)}} paddingval={[padding(0,10,20)]} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
        </View>
          </View>
      </Modal>
    </View>
  )
}

export default ReminderVibrate