import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { flex, fontSize, paddingPosition, radius, styles, widthValue ,heightValue, marginPosition} from '../../../../styles/Styles'

const Homepage = () => {
  return (
    <SafeAreaView 
    style={[{height:heightValue(1),width:widthValue(1)}]}
    >
      <View style={[styles.allCenter,flex(5),{gap:25}]}>
        <Image source={require('../../../../assets/Images/HomepageImg.png')} style={[{width:widthValue(4),height:widthValue(4)}]}/>
        <Text style={[fontSize(25),styles.black,{fontWeight:'700',fontFamily:'NotoSans',}]}>You're All Set!</Text>
        <View style={[{gap:5}]}>
        <Text style={[styles.textCenter,styles.black,fontSize(16),{fontWeight:'300'}]}>Congratulations! Your password has been</Text>
        <Text style={[styles.textCenter,styles.black,fontSize(16),{fontWeight:'300'}]}>changed succesfully</Text>
      </View>
      </View>
      <View style={[styles.allCenter,flex(1),]}>
        <TouchableOpacity style={[styles.bgOrange,radius(30),{width:widthValue(1.1)},paddingPosition(15,30,15,30),styles.allCenter]}>
          <Text style={[styles.white,{fontFamily:'NotoSans'}]}>Go To Homepage</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Homepage