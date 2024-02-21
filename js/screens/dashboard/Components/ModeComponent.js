import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles ,radius, paddingPosition, borderWidth,padding,fontSize} from '../../../styles/Styles'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { duration } from 'moment'
import { useState } from 'react'
import { SwitchComponent } from '../../../components/touchables/SwitchComponent'
import { useSelector } from 'react-redux'

export const ModeComponent = ({title,isEnabled,switchFunction}) => {
  const darkMode = useSelector(state=>state.system.darkMode)

return (
    <View
      style={[
        styles.row,
        styles.spaceBetweenVertical,
        paddingPosition(15, 0, 20, 0),
      ]}>
      <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), { fontWeight: '500' }]}>
      {title}
      </Text>
      <View>
    <SwitchComponent isEnabled={isEnabled} switchFunction={switchFunction}/>
      </View>
  </View>
)
}
