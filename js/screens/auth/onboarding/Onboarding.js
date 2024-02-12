
import { flex, fontSize, heightValue, marginPosition, paddingPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React from 'react';
import { View, StatusBar,Image,Text,Flatlist,Dimensions} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { Swipercomponent } from './component/Swipercomponent';
import { TvScreen } from './component/TvScreen';
import { Colors } from '../../../styles/Colors';
// import { ScrollView } from 'react-native-gesture-handler';
import { Path, Svg } from 'react-native-svg';
export const Onboarding = ({navigation}) => {
  console.log('bhbh');

  const { width, height } = Dimensions.get('window');
const controlX=width/2



  return (
  <SafeAreaView style={[{height:heightValue(1),width:widthValue(1)}]}>
   <StatusBar backgroundColor={Colors.Orange} barStyle="dark-content"/>
   {/* <View style={[flex(1.4),styles.bgsmokewhite,]}>
      <TvScreen/>
     
   </View>
  
   <View style={[flex(1)]}>
   <Swipercomponent />
      
      </View> */}
      <View style={[flex(1)]}>
        <View style={[flex(1.5),styles.bgOrange]}></View>
        {/* //screenshotlist */}
        <View style={[flex(1.9),styles.bgOrange]}>
          <View style={[styles.centerHorizontal,paddingPosition(0,10,0,10)]}>
               <Image source={require('../../../assets/Images/Lottiemobileone.png')} style={[marginPosition(-170),{ width: 300 ,alignSelf: 'center'}]} resizeMode="contain"/>
          </View>
          <Svg style={{position:'absolute',top:150}} width={widthValue(1)} height={100}>
         <Path 
         d={`M 0 20 Q ${controlX} 130 ${width}
         20 L ${width} 100 L 0 100 Z
         `}
         fill={Colors.smokewhite}
         />

          </Svg>
        </View>
        {/* //title and description */}
        <View style={[flex(2.4),styles.bgsmokewhite]}>

   <Swipercomponent />

        </View>


      </View>
     
    </SafeAreaView>
  );
};



