import React from 'react'
import { flex, heightValue, marginPosition, radius, styles } from '../../styles/Styles'
import {View,Text,TouchableOpacity} from 'react-native'

export const ToggleButtons = ({onPressProject,showProjects,onPressTags,titleone,titletwo}) => {
  return (
   <View style={[styles.bgsmokeOrange,{height:heightValue(20)},marginPosition(10)]}>
    <View style={[styles.row,radius(10),flex(1),{backgroundColor:'#f5f5f5'}]}>
        <TouchableOpacity style={[flex(1)]} onPress={onPressProject}>
        <View style={[flex(1),styles.allCenter,radius(5),showProjects?styles.bgOrange:null]}>
            <Text style={[{fontWeight:'bold'},showProjects?styles.white:styles.black]}>{titleone}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={[flex(1)]} onPress={onPressTags}>
        <View style={[flex(1),styles.allCenter,radius(5),showProjects?null:styles.bgOrange]}>
        <Text style={[{fontWeight:'bold'},showProjects?styles.black:styles.white]}>{titletwo}</Text>
        </View>
        </TouchableOpacity>
    </View>
   </View>
  )
}


