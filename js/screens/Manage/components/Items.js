import React, { useState } from 'react'
import { borderColor, borderWidth, flex, fontSize, heightValue, styles } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import {View,Text} from 'react-native'

export const Items = () => {
    const [data,setData]=useState([{itemname:"Pomodoro",color:styles.Orange},{itemname:"Work",color:styles.purple}])
  return (
    <View style={[styles.column]}>
    {
        data.map((data,index)=>{
            return(
                <View key={index} style={[{height:heightValue(12)},styles.row,borderColor('#f7f7f7'),borderWidth(0,0,0,1)]}>
                   <View style={[flex(0.2),styles.allCenter]}>
                     <Icon name={'tag'} type={Icons.Feather} style={[data.color,fontSize(30)]} />
                   </View>
                   <View style={[flex(1),styles.centerVertical]}>
                       <Text style={[fontSize(22),styles.black]}>{data.itemname}</Text>
                   </View>
                   {/* <View style={[flex(0.2),styles.allCenter]}>
                   <Icon name={'tag'} type={Icons.Feather} style={[data.color,fontSize(30)]} />
                   </View> */}
                </View>
            )
        })
    }
    </View>
   
  )
}


