import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles ,radius, paddingPosition, borderWidth,padding,fontSize} from '../../styles/Styles'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useState } from 'react'


      export const SwitchComponent = ({isEnabled,switchFunction}) => {


    const animation = useSharedValue(isEnabled?14:0);
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{translateX:animation.value}]
        }
    })

    const toggleSwitch =()=>{
        switchFunction();
        if(isEnabled){
            animation.value = withTiming(0,{duration:500})
            // setIsEnabled(false)
        } else{
            animation.value = withTiming(14,{duration:500})
            
    }
}
return (
      <View>
    <TouchableOpacity style={[{width:35,height:20},isEnabled?styles.bgOrange:styles.bgLightWhite,radius(30),styles.centerHorizontal,padding(0,0,4),styles.row,borderWidth(.2),styles.borderWhite]} onPress={toggleSwitch}>
<Animated.View style={[{width:15,height:15},styles.bgWhite,radius(7.5),animatedStyle]}>
</Animated.View>
    </TouchableOpacity>
  </View>
)
}
