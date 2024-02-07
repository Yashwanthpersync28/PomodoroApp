// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { flex, fontSize, heightValue, styles, widthValue } from '../../../styles/Styles'
import { timer } from '../../../constants/imageConstant'
import { loading } from '../../../constants/LottieConstants'
import { useSelector } from 'react-redux'


export const Splash = ({navigation}) => {

  //selectors//
  const showonboarding = useSelector((state)=>state.showcomponent.ShowOnboarding)

  ///for handling onboarding and signup
  useEffect(()=>{
    setTimeout(() => {
      if(showonboarding){
        navigation.navigate('BottomTabNavigation') ;
        console.log('showcomp',showonboarding);
      }
      else{
        navigation.navigate('onboarding')
        console.log('showcompppp',showonboarding);

      }
       
    }, 1000);
    
  },[])
  return (
    <SafeAreaView>
    <View style={[{height:'100%',justifyContent:'center',alignItems:'center'},styles.bgOrange]}>
      <View style={[flex(1.2),{justifyContent:'flex-end',alignItems:'flex-end'}]}>
          <Image source={timer} style={{height:150,width:150}}/>
      </View>
      <Text style={[styles.smokewhite,fontSize(30),{fontWeight:'600'}]}>Focusify</Text>
      <View style={[flex(1),styles,styles.allCenter]}>
           <LottieView source={loading} autoPlay={true} style={[{height:heightValue(12),width:widthValue(4)}]}/> 
      </View>
    </View>
    </SafeAreaView>
  )
}





