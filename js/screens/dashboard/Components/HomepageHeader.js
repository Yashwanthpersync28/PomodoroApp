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
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon,{ Icons } from '../../../components/Icons';

const HomepageHeader = ({IconFamily,name,bgcolor,color}) => {
  return (
    <View
        style={[
          {width: widthValue(1)},
          paddingPosition(20, 40, 0, 0),
          bgcolor
        ]}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
            {height:heightValue(20)}
          ]}>
          <Image
            source={require('../../../assets/Images/Screen.png')}
            style={[{width: widthValue(12), height: widthValue(12)}]}
          />
          <Text style={[ color,fontSize(25), {fontWeight: '600'}]}>
            Focusify
          </Text>
          <Icon name={name} type={IconFamily} style={[color, fontSize(25)]} />
          
          {/* <Feather name="bell" style={[styles.white, fontSize(30)]} /> */}
        </View>
        {/* <View style={[styles.bgWhite, radius(5), marginPosition(30),]}>
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
        </View> */}
      </View>
  )
}

export default HomepageHeader

// import * as React from "react";
// import { View, StyleSheet } from "react-native";
// import { heightValue} from "../../styles/Styles";

// export default function Curve() {
//   return (
//     <View>
//       <View style={styles.squreStyle} />
//       <View style={styles.arcStyle} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   squreStyle: {
//     width: "100%",
//     height:heightValue(2),
//     backgroundColor:'orange'
//   },
//   arcStyle: {
//     width: "20%",
//     height: 70,
//     position: "absolute",
//     bottom:-35,
//     left: "40%",
//     borderRadius: 60,
//     backgroundColor: "white",
//     transform: [{ scaleX: 5 }, { scaleY: 1.5 }],
//   },
// });