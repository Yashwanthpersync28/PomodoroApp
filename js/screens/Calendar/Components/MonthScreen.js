import { View, Text } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';

 export const MonthScreen = () => {



    const isCompleted = useSelector((state)=>state.user.userTasks.userTask.map(completed=>completed.completed))
    console.log(isCompleted,'isCompleted')


    const taskId =  useSelector((state)=>state.user.userTasks.userTask.map(task=>task.id))
    console.log(taskId);
    
  return (
    <View>
    <Text>Hi the date of today is </Text>
    {/* <Text>{today}</Text> */}
    <Calendar />
  </View>
  )
}
