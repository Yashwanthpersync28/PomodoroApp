import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { flex, fontSize, fontWeight, margin, marginPosition, padding, styles, widthValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import Icon, { Icons } from '../../../components/Icons'
import { useSelector } from 'react-redux'
 export const PreferenceComponent = ({PreferanceName,showDetail,name,Icontype,detail1,detail2,showToggle,onPress}) => {

  
  return (
    <TouchableOpacity style={[flex(0.3),styles.spaceBetweenVertical,styles.centerHorizontal,styles.row,padding(0,14,10)]} onPress={onPress} >
        <Text style={[fontSize(20),styles.black,{fontWeight:"500"}]}>{PreferanceName}</Text>
        <View style={[styles.row,styles.centerHorizontal]}>

        <View style={[styles.row,marginPosition(0,10,0),]}>
          {showDetail &&
          <View style={[styles.row,styles.centerVertical]}>
          <Text style={[margin(0,0,10),styles.black,{fontWeight:'500'}]}>{detail1}</Text>
          <Icon name={name} type={Icontype}  style={[styles.black,fontSize(25),]} />
          <Text style={[margin(0,0,10),styles.black,{fontWeight:'500'}]}>{detail2}</Text>
          </View> }
        </View>
     <Icon name={"chevron-small-right"} type={Icons.Entypo}  style={[styles.black,fontSize(30)]} />
     </View>
     </TouchableOpacity>
     
  )
}