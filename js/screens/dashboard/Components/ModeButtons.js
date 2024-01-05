import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Modal,
  } from 'react-native';
  import React from 'react';
  import {
    flex,
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    paddingPosition,
    marginPosition,
    zIndex,
    shadow,
    screenWidth,
    screenHeight,
    lineHeight,
  } from '../../../styles/Styles';
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ModeButtons = ({OpenModal}) => {
  return (
    <View style={[{width:widthValue(1)},styles.row,styles.bgWhite,styles.spaceEvenly,styles.centerHorizontal,paddingPosition(0,0,30,0)]}>
          <TouchableWithoutFeedback onPress={OpenModal} style={[{height:heightValue(18)},styles.bgdarkOrange]}>
            <View style={[styles.centerHorizontal]}>
              <Feather name='alert-circle' style={[fontSize(30)]}/>
              <Text style={[fontSize(18),marginPosition(10)]}>Strict Mode</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={OpenModal}>
            <View style={[styles.centerHorizontal]}>
              <FontAwesome6 name='hourglass' style={[fontSize(30)]}/>
              <Text style={[fontSize(18),,marginPosition(10)]}>Timer Mode</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={OpenModal}>
            <View style={[styles.centerHorizontal]}>
              <FontAwesome5 name='itunes-note' style={[fontSize(30)]}/>
              <Text style={[fontSize(18),marginPosition(10)]}>White Noise</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
  )
}

export default ModeButtons