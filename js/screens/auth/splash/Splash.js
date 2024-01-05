// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { flex, fontSize, heightValue, styles, widthValue } from '../../../styles/Styles'
import { timer } from '../../../constants/imageConstant'
import { loading } from '../../../constants/LottieConstants'

export const Splash = () => {
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





