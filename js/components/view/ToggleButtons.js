import React from 'react'
import { flex, heightValue, marginPosition, radius, styles } from '../../styles/Styles'
import {View,Text} from 'react-native'

export const ToggleButtons = () => {
  return (
   <View style={[styles.bgsmokeOrange,{height:heightValue(20)},marginPosition(10)]}>
    <View style={[styles.row,radius(10),flex(1),{backgroundColor:'#f5f5f5'}]}>
        <View style={[flex(1),styles.allCenter,radius(5),styles.bgOrange]}>
            <Text style={[styles.black,{fontWeight:'bold'}]}>Projects</Text>
        </View>
        <View style={[flex(1),styles.allCenter,radius(5)]}>
        <Text style={[styles.black,{fontWeight:'bold'}]}>Tags</Text>

        </View>
    </View>
   </View>
  )
}


