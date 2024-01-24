import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { fontSize, heightValue, radius, styles, widthValue } from '../../../../../styles/Styles';

// InnerItem component
export const Inneritem = ({ visible, itemName }) => (
    <View style={{ position: 'absolute', top: 40, right: 20, zIndex: 1, height: heightValue(15), width: widthValue(2), ...styles.allCenter, ...styles.bgGray, ...radius(10) }}>
      <Text style={[styles.black, fontSize(16)]}>{`Manage ${itemName}`}</Text>
    </View>
  );
  