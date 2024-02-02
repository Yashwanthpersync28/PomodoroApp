import React, { useState } from 'react'
import {View,Text,Image} from 'react-native'
import { borderColor, borderWidth, fontSize, fontWeight, heightValue, marginPosition, styles, widthValue } from '../../../../../styles/Styles'
import TaskCardDetails from '../../TaskCardDetails'
import { HeaderBorder } from '../../../../../components/view/HeaderBorder'

export const Dayheadings = ({headingname,focusTime,completed,taskdata,name,data}) => {
    const [taskDetails,settaskDetails]=useState([])
  return (
    <>
    <HeaderBorder name={headingname}/>
       <View style={[styles.row,marginPosition(5)]}>
           <Text style={[styles.gray]}>{`Focus : ${focusTime}`}</Text>
           <Text style={[styles.gray,marginPosition(0,0,0,10)]}>{`Completed: ${completed} tasks`}</Text>
       </View>
       {/* notaskfound */}
       <View style={[marginPosition(10)]}>
       <TaskCardDetails name={name} data={data}/>
       </View>
       </>
  )
}


