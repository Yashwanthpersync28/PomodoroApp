import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    paddingPosition,
    marginPosition,
    borderWidth,
    padding,
  } from '../../../styles/Styles';
  import Modal from 'react-native-modal';
import { TimerButton } from './TimerButton';
import { modalData } from '../../../constants/ModalsData';
import Icon, { Icons } from '../../../components/Icons';
  
  export const WhiteNoiseModal = ({closeModal,currentModal,selectedTune,handleNoise,updateNoise,playSound }) => {

     const renderTunes=({item})=>{
      const isSelected = selectedTune === item.id
      return(
        <TouchableOpacity onPress={()=>{handleNoise(item),playSound()}}>
        <View style={[borderWidth(0, 1, 0, 1, 0),styles.borderLightWhite,styles.row,styles.spaceBetweenVertical,styles.centerHorizontal]}>
              <View>
                <View
                  style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    paddingPosition(15, 0, 20, 0),
                  ]}>
                  <Text style={[styles.black, fontSize(20), { fontWeight: '500' }]}>
                    {item.MusicName}
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
      <View style={[{ width: widthValue(1) }, styles.centerHorizontal]}>
        <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        isVisible={currentModal ===4}
        hasBackdrop={true}
        backdropColor='black'
        backdropOpacity={0.5}
          style={[{ margin: 0, width: widthValue(1),height: heightValue(2), }]}>
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
              White Noise 
            </Text>

<FlatList data={modalData.whiteNoiseMode} renderItem={renderTunes} keyExtractor={item=>item.id}/>
        
            <View style={[styles.row,styles.spaceAroundVertical,marginPosition(10,0,0,0)]}>
        <TimerButton buttonText={'Cancel'} onPress={closeModal}  widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
        <TimerButton buttonText={'Ok'}onPress={updateNoise} widthVal={{width:widthValue(2.5)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
        </View>
          </View>
        </Modal>
      </View>
    );
  };
  

  // ... (other imports)

// import Sound from 'react-native-sound';
// import { modalData } from '../../../constants/ModalsData';

// // ... (other components and functions)

// export const WhiteNoiseModal = ({ closeModal, currentModal, selectedTune, handleNoise, updateNoise }) => {

//   // ... (other functions)

//   const playSound = (fileName) => {
//     var WhiteNoise = new Sound(require(`../../../assets/${fileName}`), Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.log('failed to load the sound', error);
//         return;
//       }
//       // loaded successfully
//       console.log('duration in seconds: ' + WhiteNoise.getDuration() + 'number of channels: ' + WhiteNoise.getNumberOfChannels());

//       // Play the sound with an onEnd callback
//       WhiteNoise.play((success) => {
//         if (success) {
//           console.log('successfully finished playing');
//         } else {
//           console.log('playback failed due to audio decoding errors');
//         }
//       });
//     });
//   }

//   const renderTunes = ({ item }) => {
//     const isSelected = selectedTune === item.id;
//     return (
//       <TouchableOpacity onPress={() => { handleNoise(item); playSound(item.fileName); }}>
//         <View style={[borderWidth(0, 1, 0, 1, 0), styles.borderLightWhite, styles.row, styles.spaceBetweenVertical]}>
//           <View>
//             <View
//               style={[
//                 styles.row,
//                 styles.spaceBetweenVertical,
//                 paddingPosition(15, 0, 20, 0),
//               ]}>
//               <Text style={[styles.black, fontSize(20), { fontWeight: '500' }]}>
//                 {item.MusicName}
//               </Text>
//             </View>
//           </View>
//           <View>
//             {isSelected &&
//               <Icon name={"check"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(40), marginPosition(0, 5)]} />
//             }
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     // ... (rest of the code)
//     <FlatList data={modalData.whiteNoiseMode} renderItem={renderTunes} keyExtractor={item => item.id} />
//     // ... (rest of the code)
//   );
// };
