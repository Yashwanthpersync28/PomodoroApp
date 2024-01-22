import React from 'react';
import { View, Modal, TouchableOpacity , StyleSheet} from 'react-native';


export const TriangleBottomRadius = () => {
  return <View style={[styles.triangleCorner]} />;
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
    borderTopColor: "#ffffff",
    transform: [{ rotate: "90deg" }],
  },
});