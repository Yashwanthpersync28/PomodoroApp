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

const ReminderVibrate = ({closeModal,currentModal,vibrationOptions,handleVibration,vibration}) => {


    const renderOptions = ({item})=>{
        const isSelected = vibration === item.name
      return(
        <TouchableOpacity onPress={()=>handleVibration(item)}>
        <View style={[borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,styles.row,styles.spaceBetweenVertical,styles.centerHorizontal]}>
              <View>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[styles.black, fontSize(20), { fontWeight: '500' }]}>
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
              styles.bgWhite,
              {
                position: 'absolute',
                bottom: 0,
                
                width: widthValue(1),
              },
              padding(20),
              radius(0, 20, 0, 0, 20),
              styles.spaceBetweenVertical,
            ]}>
            <Text
              style={[
                styles.black,
                styles.textCenter,
                { fontWeight: '500' },
                fontSize(24),
                paddingPosition(0, 0, 20, 0),
              ]}>
              Reminder Vibrate
            </Text>

<FlatList data={vibrationOptions} renderItem={renderOptions} keyExtractor={item=>item.name}/>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
        <TimerButton buttonText={'Cancel'} onPress={()=>closeModal()}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
        <TimerButton buttonText={'Ok'} onPress={()=>closeModal()}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
        </View>
          </View>
      </Modal>
    </View>
  )
}

export default ReminderVibrate