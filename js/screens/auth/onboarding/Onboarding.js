
import { flex, heightValue, marginPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React from 'react';
import { View, StatusBar} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { Swipercomponent } from './component/Swipercomponent';
import { TvScreen } from './component/TvScreen';
import { Colors } from '../../../styles/Colors';
// import { ScrollView } from 'react-native-gesture-handler';

export const Onboarding = ({navigation}) => {
  console.log('bhbh');
  return (
  <SafeAreaView style={[{height:heightValue(1),width:widthValue(1)}]}>
   <StatusBar backgroundColor={Colors.Orange} barStyle="dark-content"/>
   <View style={[flex(1.4),styles.bgsmokewhite]}>
      <TvScreen/>
   </View>
   <View style={[flex(1)]}>
   <Swipercomponent />
      
      </View>
     
    </SafeAreaView>
  );
};



