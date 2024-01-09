// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { flex, fontSize, heightValue, styles, widthValue } from '../../../styles/Styles'
import { timer } from '../../../constants/imageConstant'
import { loading } from '../../../constants/LottieConstants'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboarding } from '../../../redux/ShowComponentReducer/ShowOnboardingReducer'

export const Splash = ({navigation}) => {
  const showonboarding = useSelector((state)=>state.showcomponent.ShowOnboarding)
  const dispatch=useDispatch()
  // console.log('schvbduekjskbvc ',showonboarding);
  useEffect(()=>{
    setTimeout(() => {
      // setSplash(false);
      dispatch(setOnboarding(!showonboarding));
      if(showonboarding){
        navigation.navigate('login') ;
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
      {/* <LottieView source={require('../../../assets/Lottieview/loadingtwo.json')} autoPlay={true} style={{height:50,width:50}}/> */}
    </View>
    </SafeAreaView>
  )
}

// export default Splash





