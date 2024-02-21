import React from 'react';
import { View, Modal, TouchableOpacity , StyleSheet} from 'react-native';
import { Colors } from '../../../styles/Colors';
import { useSelector } from 'react-redux';


export const TriangleBottomRadius = ({bgColor}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

  return <View style={[styles.triangleCorner,{ borderTopColor: bgColor }]} />;
};

const styles=StyleSheet.create({
 

  triangleCorner: {
    marginTop:-10,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderRightColor: "transparent",
    // borderTopColor: "#ffffff",
    transform: [{ rotate: "90deg" }],
  },
});