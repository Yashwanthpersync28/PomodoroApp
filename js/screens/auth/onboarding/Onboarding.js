
import { flex, heightValue, marginPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React from 'react';
import { View, Image,ScrollView} from 'react-native';
import Swipercomp from './component/Swipercomp';
import SafeAreaView from 'react-native-safe-area-view';
// import { ScrollView } from 'react-native-gesture-handler';

export const Onboarding = ({navigation}) => {
  return (
  <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={[styles.bgsmokewhite,{ height:heightValue(1) }]}>
      <View style={[styles.bgsmokewhite, styles.allCenter,flex(2.5),position(-50)]}>
        <View style={[,styles.allCenter,{width:widthValue(0.5),height:widthValue(0.5),zIndex:99},radius(widthValue(0.25)),styles.bgOrange]}>
       {/* <Image source={require('../../../assets/Images/Mobile.png')} style={[{height:300,width:300},marginPosition(400)]}/> */}
        </View>
      </View>
      <View style={[{ height: heightValue(2.5) ,zIndex:0,flex:5},marginPosition(300)]}>
        <Swipercomp />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};



