import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { heightValue, widthValue ,styles, fontSize,marginPosition,flex} from '../../styles/Styles'
import { HeadingComponent } from '../../components/view/HeadingComponent'
import { TimerButton } from './Components/TimerButton'

 export const TrophyScreen = () => {
  return (
    <SafeAreaView style={[styles.bgWhite,flex(1),styles.spaceBetweenVertical]}>
      <View style={[styles.centerHorizontal]}>
        <LottieView  source={require('../../assets/Lottieview/Trophy1.json')} autoPlay={true} loop={false} style={[{width:widthValue(.8),height:heightValue(1.7)}]}/>
        <View style={[{height:heightValue(8)},styles.centerVertical,]}>
      <Text style={[fontSize(40),styles.black,{fontWeight:'bold'},styles.textCenter]}>Congratulations!</Text>
      <Text style={[fontSize(24),{color:'#a5a5a6' },marginPosition(10),styles.textCenter]}>You've completed the Task</Text>
      <Text style={[fontSize(24),{color:'#a5a5a6' },,styles.textCenter]}>"Create a Wireframe Design"</Text>
      </View>
      </View>
        
      <View style={[styles.row,styles.spaceAroundVertical,marginPosition(0,0,10,0)]}>
      <TimerButton buttonText={'Back to Home'} widthVal={{width:widthValue(2.3)}} ButtonIcon={''} BgColor={[styles.bglightPink]} textColor={[styles.Orange]}/>
      <TimerButton buttonText={'View Report'} widthVal={{width:widthValue(2.3)}} ButtonIcon={''} BgColor={[styles.bgOrange]} textColor={[styles.white]}/>
      </View>
    </SafeAreaView>
  )
}
