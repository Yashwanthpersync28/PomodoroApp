import React, { useState } from 'react'
import {View,Text,Image} from 'react-native'
import { borderColor, borderWidth, fontSize, fontWeight, heightValue, marginPosition, styles, widthValue } from '../../../../../styles/Styles'
import TaskCardDetails from '../../TaskCardDetails'
import { HeaderBorder } from '../../../../../components/view/HeaderBorder'

export const Dayheadings = ({headingname,focusTime,completed,taskdata,name,data,navigation, darkMode,details}) => {
  console.log('datacompleted',data);
    const [taskDetails,settaskDetails]=useState([])
  return (
    <>
    <HeaderBorder name={headingname} darkMode={darkMode}/>
       <View style={[styles.row,marginPosition(5)]}>
           <Text style={[darkMode?styles.smokeGray:styles.gray]}>{`Focus : ${focusTime}`}</Text>
           <Text style={[darkMode?styles.smokeGray:styles.gray,marginPosition(0,0,0,10)]}>{`Completed: ${completed} tasks`}</Text>
       </View>
       {/* notaskfound */}
       <View style={[marginPosition(10)]}>
       <TaskCardDetails details={details} name={name} data={data} showLinethrough={true} handleTask={(id)=>navigation.navigate('task',{id:id,completedTask:true})}/>
       </View>
       </>
  )
}


