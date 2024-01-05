
import { flex, heightValue, marginPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React from 'react';
import { View, Image,ScrollView} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { Swipercomponent } from './component/Swipercomponent';
// import { ScrollView } from 'react-native-gesture-handler';

export const Onboarding = ({navigation}) => {
  return (
  <SafeAreaView style={[{height:heightValue(1)}]}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[{ height:heightValue(1) },styles.bgsmokewhite]}>
      <View style={[styles.bgsmokewhite, styles.allCenter,flex(2.5),position(-50)]}>
        <View style={[,styles.allCenter,{width:widthValue(0.5),height:widthValue(0.5),zIndex:99},radius(widthValue(0.25)),styles.bgOrange]}>
       {/* <Image source={require('../../../assets/Images/Mobile.png')} style={[{height:300,width:300},marginPosition(400)]}/> */}
        </View>
      </View>
      <View style={[{zIndex:0,flex:6},marginPosition(300)]}>
        <Swipercomponent />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};



