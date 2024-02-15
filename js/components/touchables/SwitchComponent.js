import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles ,radius, paddingPosition, borderWidth,padding,fontSize} from '../../styles/Styles'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useState } from 'react'


      export const SwitchComponent = ({isEnabled,switchFunction}) => {


    const animation = useSharedValue(isEnabled?18:0);
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{translateX:animation.value}]
        }
    })

    const toggleSwitch =()=>{
        switchFunction();
        if(isEnabled){
            animation.value = withTiming(0,{duration:200})
            // setIsEnabled(false)
        } else{
            animation.value = withTiming(18,{duration:100})
            
    }
}
return (
      <View>
    <TouchableOpacity style={[{width:45,height:25},isEnabled?styles.bgOrange:styles.bgLightWhite,radius(30),styles.centerHorizontal,padding(0,0,4),styles.row,borderWidth(.2),styles.borderWhite]} onPress={toggleSwitch}>
<Animated.View style={[{width:20,height:20},styles.bgWhite,radius(12.5),animatedStyle]}>
</Animated.View>
    </TouchableOpacity>
  </View>
)
}
