import React, { useState } from 'react'
import {View,Text,Image} from 'react-native'
import { borderColor, borderWidth, fontSize, fontWeight, heightValue, marginPosition, styles, widthValue } from '../../../../../styles/Styles'
import TaskCardDetails from '../../TaskCardDetails'
import { HeaderBorder } from '../../../../../components/view/HeaderBorder'

export const Dayheadings = ({headingname,focusTime,completed,taskdata,name,data}) => {
    const [taskDetails,settaskDetails]=useState([{id:1}])
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
       {taskDetails.length<=0 &&
       <View style={[{height:heightValue(2)},styles.allCenter,styles.column]}>
          <Image
           source={require('../../../../../assets/Images/Notaskfound.png')}
            style={[{width: widthValue(2), height: widthValue(1.8)}]}
           />
           <Text style={[styles.black,fontWeight('bold'),fontSize(19)]}>No Tasks Found!</Text>
       </View>}
       {/*  */}
       </>
  )
}


