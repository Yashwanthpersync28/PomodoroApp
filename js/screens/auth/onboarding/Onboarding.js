
import { flex, fontSize, heightValue, marginPosition, paddingPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React, { useState } from 'react';
import { View, StatusBar,Image,Text,Flatlist,Dimensions} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { Swipercomponent } from './component/Swipercomponent';
import { TvScreen } from './component/TvScreen';
import { Colors } from '../../../styles/Colors';
import { Path, Svg } from 'react-native-svg';

export const Onboarding = ({navigation}) => {
  
 //states
 const [index,setindex]=useState(0);
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
                        {index ===0 && <Image source={require('../../../assets/Images/Lottiemobileone.png')} style={[marginPosition(-190),{ width: 300 ,alignSelf: 'center'}]} resizeMode="contain"/>}
                        {index === 1 &&  <Image source={require('../../../assets/Images/Lottiemobiletwo.png')} style={[marginPosition(-190),{ width: 300 ,alignSelf: 'center'}]} resizeMode="contain"/>}
                       {index ===2 &&   <Image source={require('../../../assets/Images/lottiemobilethree.png')} style={[marginPosition(-180),{ width: 290 ,alignSelf: 'center'}]} resizeMode="contain"/>}
                     </View>
                     <Svg style={{position:'absolute',top:150}} width={widthValue(1)} height={100}>
                         <Path 
                            d={`M 0 20 Q ${controlX} 130 ${width}
                             20 L ${width} 100 L 0 100 Z
                                `}
                           fill={Colors.smokewhite}/>
                      </Svg>
                  </View>
        {/* //title and description */}
        <View style={[flex(2.4),styles.bgsmokewhite]}>
               <Swipercomponent handleIndex={(i)=>setindex(i)}/>

        </View>
       


    </View>
     
    </SafeAreaView>
  );
};



