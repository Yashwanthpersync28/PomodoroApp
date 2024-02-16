import { View, Text,TouchableOpacity,Switch } from 'react-native'
import React from 'react'
import { flex, fontSize, fontWeight, heightValue, margin, marginPosition, padding, styles, widthValue } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { SwitchComponent } from '../../../components/touchables/SwitchComponent'

 export const PreferenceComponent = ({PreferanceName,showDetail,showIcon,name,Icontype,detail1,detail2,onPress,onValueChange,value,thumbColor,isEnabled,switchFunction}) => {

  return (
    <TouchableOpacity style={[{height:heightValue(14)},styles.spaceBetweenVertical,styles.centerHorizontal,styles.row,padding(0,14,10),marginPosition(0,0,8,0)]} onPress={onPress} >
        <Text style={[fontSize(18),styles.black,{fontWeight:"500"}]}>{PreferanceName}</Text>
        <View style={[styles.row,styles.centerHorizontal]}>

        <View style={[styles.row,marginPosition(0,10,0),]}>
          {showDetail &&
          <View style={[styles.row,styles.centerVertical]}>
          <Text style={[margin(0,0,10),styles.black,{fontWeight:'500'},fontSize(18)]}>{detail1}</Text>
          <Icon name={name} type={Icontype}  style={[styles.black,fontSize(20),]} />
          <Text style={[margin(0,0,10),styles.black,{fontWeight:'500'},fontSize(18)]}>{detail2}</Text>
          </View> }
        </View>
        {showIcon === true ?
     <Icon name={"chevron-small-right"} type={Icons.Entypo}  style={[styles.black,fontSize(30)]} /> : 
     (
      <SwitchComponent isEnabled={isEnabled} switchFunction={switchFunction}/>
     )
     }
     </View>
     </TouchableOpacity>
     
  )
}