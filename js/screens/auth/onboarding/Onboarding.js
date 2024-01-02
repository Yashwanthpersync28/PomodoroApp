
import { flex, heightValue, marginPosition, radius, styles, widthValue } from '../../../styles/Styles'
import React from 'react';
import { View, Text } from 'react-native';
// import { styles } from '../../../styles/Styles'; // Import only the necessary styles

import Swipercomp from './component/Swipercomp';

export const Onboarding = () => {
  return (
    <View style={[styles.bgsmokewhite,{ height:heightValue(1) }]}>
      <View style={[styles.bgsmokewhite, { height:heightValue(2) }, styles.overflowHide, styles.allCenter]}>
        <View style={[marginPosition(0), styles.bgOrange, { height:heightValue(2), width: widthValue(1) },radius(0, 0, 300, 300)]}>
          <Text>allcenter</Text>
        </View>
      </View>
      <View style={{ height: heightValue(3) }}>
        <Swipercomp />
      </View>
    </View>
  );
};



