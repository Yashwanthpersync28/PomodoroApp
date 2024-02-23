import React from 'react'
import {View,Text,Image,Dimensions} from 'react-native'
import { flex, fontSize , fontWeight, heightValue, lineHeight, marginPosition, padding, paddingPosition, styles, widthValue } from '../../../../styles/Styles'
import { Svg , Path } from 'react-native-svg';
import { Colors } from '../../../../styles/Colors';
import { useSelector } from 'react-redux';


export const Onboardingcomponent = ({header,details,index}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);
  console.log(Darkmode,'Darkmode')
  const { width, height } = Dimensions.get('window');
  const controlX=width/2
  return (
    <View style={[padding(0),flex(1),marginPosition(0)]}>
        <View style={[styles.bgOrange,flex(0.8)]}>
            <View style={[{justifyContent: 'center', alignSelf: 'center' }]}>
                 {index ===0 && <Image source={Darkmode?require('../../../../assets/Images/LottiemobileoneDarkMode.png'):require('../../../../assets/Images/Lottiemobileone.png')} style={[marginPosition(10),{ width: 300,height:heightValue(1.4) ,alignSelf: 'center'}]} resizeMode="contain"/>}
                 {index === 1 &&  <Image source={Darkmode?require('../../../../assets/Images/LottiemobiletwoDarkMode.png'):require('../../../../assets/Images/Lottiemobiletwo.png')} style={[marginPosition(0),{ width: 300 , height:heightValue(1.3),alignSelf: 'center'}]} resizeMode="contain"/>}
                {index ===2 &&   <Image source={Darkmode?require('../../../../assets/Images/lottiemobilethreeDarkMode.png'):require('../../../../assets/Images/lottiemobilethree.png')} style={[marginPosition(0),{ width: 290 , height:heightValue(1.4),alignSelf: 'center'}]} resizeMode="contain"/>}
        </View>
        <Svg style={{position:'absolute',bottom:0}} width={widthValue(0.9)} height={100}>
           <Path 
              d={`M 0 20 Q ${controlX} 130 ${width}
               20 L ${width} 100 L 0 100 Z
                  `}
             fill={Darkmode?Colors.darkmodeBlack:Colors.white}/>
        </Svg>
    </View>
    <View style={[paddingPosition(0,20,0,20),Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,marginPosition(0),flex(0.4)]}> 
       <Text style={[fontSize(27),Darkmode?styles.white:styles.dark,{fontWeight: 'bold'},lineHeight(28),styles.textCenter]}>{header}</Text>
        <Text style={[fontSize(18),marginPosition(20),lineHeight(18),styles.textCenter,{color:Darkmode?'#8c8b8d':"#a0a0a0"},fontWeight('500')]}>{details}</Text> 
        </View>  
         
    </View>
  )
}


// {/* <View style={[flex(1.5),styles.bgOrange]}></View>
// {/* //screenshotlist */}
//   <View style={[flex(1.9),styles.bgOrange]}>
//        <View style={[styles.centerHorizontal,paddingPosition(0,10,0,10)]}>
//           {index ===0 && <Image source={require('../../../assets/Images/Lottiemobileone.png')} style={[marginPosition(-190),{ width: 300 ,alignSelf: 'center'}]} resizeMode="contain"/>}
//           {index === 1 &&  <Image source={require('../../../assets/Images/Lottiemobiletwo.png')} style={[marginPosition(-190),{ width: 300 ,alignSelf: 'center'}]} resizeMode="contain"/>}
//          {index ===2 &&   <Image source={require('../../../assets/Images/lottiemobilethree.png')} style={[marginPosition(-180),{ width: 290 ,alignSelf: 'center'}]} resizeMode="contain"/>}
//        </View>
//        <Svg style={{position:'absolute',top:150}} width={widthValue(1)} height={100}>
//            <Path 
//               d={`M 0 20 Q ${controlX} 130 ${width}
//                20 L ${width} 100 L 0 100 Z
//                   `}
//              fill={Colors.Brown}/>
//         </Svg>
//     </View> */}