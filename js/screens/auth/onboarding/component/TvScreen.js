import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { margin , flex, heightValue, position, radius, styles, widthValue} from '../../../../styles/Styles';
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
   </View>

  );
};

const styless = StyleSheet.create({
  tvscreen: {
    // Add any additional styles for the container if needed
  },
  tvscreenMain: {
    width: width * 1, // 80% of the screen width
    height: height * 0.5, // 60% of the screen height
    backgroundColor: "#ff6347",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tvscreenTop: {
    width: width * 0.6, // 40% of the screen width
    height: height * 0.35, // 35% of the screen height
    backgroundColor: "#ff6347",
    position: "absolute",
    top: -height * 0.15, // 15% of the screen height
    left: width * 0.2, // 20% of the screen width
    borderRadius: height * 0.175, // 17.5% of the screen height
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
  },
  tvscreenBottom: {
    width: width * 0.6, // 40% of the screen width
    height: height * 0.35, // 35% of the screen height
    backgroundColor: "#ff6347",
    position: "absolute",
    bottom: -height * 0.15, // 15% of the screen height
    left: width * 0.2, // 20% of the screen width
    borderRadius: height * 0.175, // 17.5% of the screen height
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
  },
  tvscreenLeft: {
    width: width * 0.5, // 10% of the screen width
    height: height * 0.2, // 20% of the screen height
    backgroundColor: "#ff6347",
    position: "absolute",
    left: -width * 0.05, // 5% of the screen width
    top: height * 0.1, // 10% of the screen height
    borderRadius: height * 0.1, // 10% of the screen height
    transform: [{ scaleX: 0.5 }, { scaleY: 2 }],
  },
  tvscreenRight: {
    width: width * 0.5, // 10% of the screen width
    height: height * 0.2, // 20% of the screen height
    backgroundColor: "#ff6347",
    position: "absolute",
    right: -width * 0.05, // 5% of the screen width
    top: height * 0.1, // 10% of the screen height
    borderRadius: height * 0.1, // 10% of the screen height
    transform: [{ scaleX: 0.5 }, { scaleY: 2 }],
  },
});
