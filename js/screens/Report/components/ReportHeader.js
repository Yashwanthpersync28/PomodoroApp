import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, paddingPosition, radius, styles, widthValue, zIndex } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { Colors } from '../../../styles/Colors'
import { DropDown } from './DropDown'

export const ReportHeader = ({headername,options,ChangeDropdownName,name,clickedDropdown,handleDropdown,showPomodoro}) => {
  return (
    <View style={[styles.row,styles.spaceBetweenVertical,borderColor(Colors.borderGray),borderWidth(0,0,0,1),{height:heightValue(12)}]}>
            
            <Text style={[styles.black,styles.textAlignVertical,fontWeight('bold'),fontSize(21)]}>{headername}</Text>
            <View style={[styles.positionAbsolute,{right:0,zindex:99,}]}>
            <DropDown showPomodoro={showPomodoro}  ChangeDropdownName={ChangeDropdownName} handleDropdown={handleDropdown} name={name} clickedDropdown={clickedDropdown}/>
            </View>
   

          </View>
  )
}


