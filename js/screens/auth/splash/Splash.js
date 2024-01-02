// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const Splash = () => {
  return (
    <SafeAreaView>
    <View style={{backgroundColor:'#ff6347',height:'100%',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../../assets/Images/Screen.png')} style={{height:200,width:200}}/>
      <Text style={{color:"#ffffff",fontSize:30,fontWeight:'600'}}>Focusify</Text>
      <LottieView source={require('../../../assets/Lottieview/loadingtwo.json')} autoPlay={true} style={{height:50,width:50}}/> 
      {/* <LottieView source={require('../../../assets/Lottieview/loadingtwo.json')} autoPlay={true} style={{height:50,width:50}}/> */}
    </View>
    </SafeAreaView>
  )
}

export default Splash
