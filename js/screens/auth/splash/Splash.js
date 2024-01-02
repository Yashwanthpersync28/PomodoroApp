// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { flex, styles } from '../../../styles/Styles'

const Splash = () => {
  return (
    <SafeAreaView>
    <View style={[{height:'100%',justifyContent:'center',alignItems:'center'},styles.bgOrange]}>
      <View style={[flex(1.2),{justifyContent:'flex-end',alignItems:'flex-end'}]}>
      <Image source={require('../../../assets/Images/Screen.png')} style={{height:150,width:150}}/>
      </View>
      <Text style={{color:"#ffffff",fontSize:30,fontWeight:'600'}}>Focusify</Text>
      <View style={[flex(1),styles,styles.allCenter]}>
      <LottieView source={require('../../../assets/Lottieview/loadingtwo.json')} autoPlay={true} style={{height:80,width:120}}/> 
      </View>
      {/* <LottieView source={require('../../../assets/Lottieview/loadingtwo.json')} autoPlay={true} style={{height:50,width:50}}/> */}
    </View>
    </SafeAreaView>
  )
}

export default Splash
