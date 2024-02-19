import { View, Text } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { flex, fontSize, padding, radius, styles, widthValue } from '../../../../styles/Styles';
import { useSelector } from 'react-redux';
import { sucess } from '../../../../constants/LottieConstants';

 export const ChangePassModal = ({message,lottieSource}) => {
const currentModal = useSelector(state=>state.user.currentModal);

    return (
        <Modal
          animationType="slide"
          visible={currentModal === 30 }
          onRequestClose={console.log('hello')}>
          <View style={[flex(1), styles.allCenter, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
            <View style={[{ backgroundColor: 'white', width: widthValue(1.3) }, radius(10), padding(40), styles.allCenter]}>
              <LottieView
                source={sucess}
                autoPlay
                loop
                style={[{ height: 70, width: 70 }, styles.black]}
              />
              <View>
                <Text style={[styles.black, fontSize(20)]}>hi</Text>
              </View>
            </View>
          </View>
        </Modal>
      );
    };

