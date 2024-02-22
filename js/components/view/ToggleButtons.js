import React from 'react'
import { flex, heightValue, marginPosition, radius, styles } from '../../styles/Styles'
import {View,Text,TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'

export const ToggleButtons = ({onPressProject,showProjects,onPressTags,title1,title2,}) => {

  const darkMode = useSelector(state=>state.system.darkMode)
       

  return (
   <View style={[styles.bgsmokeOrange,{height:heightValue(20)},marginPosition(10),radius(10)]}>
    <View style={[styles.row,radius(10),flex(1),{backgroundColor:darkMode?'#20222a':'#f5f5f5'}]}>
        <TouchableOpacity style={[flex(1),radius(10)]} onPress={onPressProject}>
        <View style={[flex(1),styles.allCenter,radius(5),showProjects?styles.bgOrange:darkMode?styles.bgtaskCardDblack:styles.bgtoggleWhite]}>
            <Text style={[{fontWeight:'bold'},showProjects?styles.white:darkMode?styles.lightWhite:styles.black]}>{title1}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={[flex(1),radius(10)]} onPress={onPressTags}>
        <View style={[flex(1),styles.allCenter,radius(5),showProjects?darkMode?styles.bgtaskCardDblack:styles.bgtoggleWhite:styles.bgOrange]}>
        <Text style={[{fontWeight:'bold'},showProjects?darkMode?styles.lightWhite:styles.black:styles.white]}>{title2}</Text>
        </View>
        </TouchableOpacity>
    </View>
   </View>
  )
}


