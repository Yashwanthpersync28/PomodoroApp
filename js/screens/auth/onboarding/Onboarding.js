
import { flex, fontSize, heightValue, marginPosition, paddingPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import React, { useState } from 'react';
import { View, StatusBar,Image,Text,FlatList,Dimensions} from 'react-native';

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

const OnboardingImageData=[{id:1,image:require('../../../assets/Images/Lottiemobileone.png')},
{id:2,image:require('../../../assets/Images/Lottiemobiletwo.png')},{id:3,image:require('../../../assets/Images/lottiemobilethree.png')}]

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
       
                {/* <View style={[flex(2.2)]}>
                    
                     <FlatList 
                     horizontal
                     pagingEnabled
                     scrollEnabled
                     snapToAlignment='center'
                     snapToInterval={width}
                      data={OnboardingImageData}
                      renderItem={({ item, index }) => {
    return (
      <View style={[{ width }, styles.allCenter,styles.bgWhite]} key={item.id}>
        <Image
          source={item.image}
          resizeMode='contain'
          style={[marginPosition(50), { width: widthValue(1.2) }]}
        />
      </View>
    );
  }}
  
/>

                     <Svg style={{position:'absolute',bottom:0}} width={widthValue(1)} height={100}>
                         <Path 
                            d={`M 0 20 Q ${controlX} 130 ${width}
                             20 L ${width} 100 L 0 100 Z
                                `}
                           fill={Colors.white}/>
                      </Svg>
                  </View> */}
        {/* //title and description */}
        <View style={[flex(1)]}>
               <Swipercomponent handleIndex={(i)=>setindex(i)}/>

        </View>
       


    </View>
     
    </SafeAreaView>
  );
};



