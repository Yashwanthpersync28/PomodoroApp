import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { heightValue, widthValue , borderColor , borderWidth , radius , marginPosition, styles, padding,fontSize, paddingPosition} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export const ManageButtons = ({height,IconFamily,heading,iconname,hours,color,showhours,handlebuttons}) => {
  return (
    <TouchableOpacity onPress={handlebuttons}>
    <View style={[{width:widthValue(2.5)},borderColor(color),borderWidth(1),radius(10),marginPosition(5,0,10),styles.column,paddingPosition(15,5,15,10),{justifyContent:'center'}]}>
       <View style={[styles.row,styles.centerHorizontal]}>
       <Icon name={iconname} type={IconFamily} style={[{color:color}, fontSize(20),styles.textAlignVertical]} />
        {/* <View style={[styles.column]}> */}
        <View style={[{width:widthValue(4.2)},marginPosition(0,0,0,5)]}>
        <Text style={[styles.black,fontSize(17)]} numberOfLines={2} ellipsizeMode="tail">{heading}</Text>
        </View>
        {/* </View> */}
       </View>
       {showhours ? 
       <View style={[marginPosition(5,0,5)]}>
        <Text style={[{fontWeight:'800'},styles.black,fontSize(17)]}>{hours}</Text>
       </View>:null}
    </View>
    </TouchableOpacity>
  )
}


