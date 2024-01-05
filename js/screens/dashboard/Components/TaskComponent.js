import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
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
const TaskComponent = ({handleTasks}) => {
  return (
    <View style={[styles.bgWhite, radius(5), marginPosition(30,20,0,20)]}>
          <TouchableWithoutFeedback
            onPress={handleTasks}
            style={[screenWidth(1.1),screenHeight(5),styles.bgWhite]}>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                styles.centerHorizontal,
                paddingPosition(15, 15, 15, 15),
              ]}>
              <Text style={[styles.lightGray, fontSize(18)]}>Select task</Text>
              <Feather name="chevron-down" style={[fontSize(25)]} />
            </View>
          </TouchableWithoutFeedback>
        </View>
  )
}

export default TaskComponent