import React from 'react';
import { View, StyleSheet, Dimensions , Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { fontSize, margin, styles } from '../../../../styles/Styles';
margin
const { width, height } = Dimensions.get('window');

export const TvScreen = () => {
  return (
    <View style={styless.tvscreen}>
    <View style={styless.tvscreenMain} />
    <View style={styless.tvscreenTop} />
    <View style={styless.tvscreenBottom} />
    <View style={styless.tvscreenLeft} />
    <View style={styless.tvscreenRight} />
    {/* <View style={[styles.positionAbsolute]}>
      <Image source={require('../../../../assets/Images/Lottiemobileone.png')}/>
    </View> */}
   </View>

  );
};

const styless = StyleSheet.create({
  tvscreen: {
    // Add any additional styles for the container if needed
  },
  tvscreenMain: {
    width: width * 1, 
    height: height * 0.5, 
    backgroundColor: "#ff6347",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tvscreenTop: {
    width: width * 0.6,
    height: height * 0.35, 
    backgroundColor: "#ff6347",
    position: "absolute",
    top: -height * 0.15, 
    left: width * 0.2,
    borderRadius: height * 0.175, 
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
  },
  tvscreenBottom: {
    width: width * 0.6, 
    height: height * 0.35, 
    backgroundColor: "#ff6347",
    position: "absolute",
    bottom: -height * 0.15, 
    left: width * 0.2,
    borderRadius: height * 0.175, 
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
  },
  tvscreenLeft: {
    width: width * 0.5, 
    height: height * 0.2, 
    backgroundColor: "#ff6347",
    position: "absolute",
    left: -width * 0.05, 
    top: height * 0.1, 
    borderRadius: height * 0.1, 
    transform: [{ scaleX: 0.5 }, { scaleY: 2 }],
  },
  tvscreenRight: {
    width: width * 0.5, 
    height: height * 0.2, 
    backgroundColor: "#ff6347",
    position: "absolute",
    right: -width * 0.05, 
    top: height * 0.1, 
    borderRadius: height * 0.1, 
    transform: [{ scaleX: 0.5 }, { scaleY: 2 }],
  },
});