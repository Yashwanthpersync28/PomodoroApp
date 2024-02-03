import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import moment from 'moment'
import { widthValue,styles, heightValue,flex, marginPosition, padding, radius, margin, fontSize, paddingPosition, borderWidth } from '../../../styles/Styles';

 export const MonthScreen = () => {

  const isCompleted = useSelector((state)=>state.user.userTasks.userTask.map(completed=>completed.completed))
  console.log(isCompleted,'isCompleted')


  const taskId =  useSelector((state)=>state.user.userTasks.userTask.map(task=>task.id))
  console.log(taskId);
  
  // const tasks = [
  //   {name:'task1'},
  //   {name:'task2'},
  //   {name:'task3'},
  //   {name:'task4'},
  //   {name:'task5'},
  //   {name:'task6'},
  //   {name:'task7'},
  //   {name:'task8'},
  //   {name:'task9'},
  //   {name:'task10'},
  //   {name:'task11'},
  //   {name:'task12'},
  //   {name:'task13'},
  // ]
  const renderDay = (date, item) => {
    const isPrevMonth = date.month < moment().month() + 1;

    const dayStyle = isPrevMonth
      ? { backgroundColor: 'red', padding: 10, borderRadius: 50, overflow: 'hidden' }
      : { backgroundColor: 'blue', padding: 10, borderRadius: 50, overflow: 'hidden' };
  
      const tasks = [];

      if(date.day % 2 ===0){

        tasks.push(
          <View >
          <View style={[styles.bgOrange,paddingPosition(5,0,5,8),radius(0,0,0,5,5),borderWidth(.1),styles.allCenter]}>
       <Text style={[styles.white,fontSize(15)]}>task1</Text>
       </View>
       <View style={[{backgroundColor:'yellow'},paddingPosition(5,0,5,8),radius(0,0,0,5,5),margin(0,5),styles.allCenter]}>
       <Text style={[styles.black]}>work1</Text>
       </View>
       </View>
        )
      } else {
        tasks.push(
          <View>
            <View style={[styles.bgSmokePink,paddingPosition(5,0,5,8),radius(0,0,0,5,5),marginPosition(0,0,5,0),borderWidth(.1),styles.allCenter]}>
       <Text style={[styles.white]}>task2</Text>
       </View>
       <View style={[{backgroundColor:'yellow'},paddingPosition(5,0,5,8),radius(0,0,0,5,5),margin(0,5),styles.allCenter]}>
       <Text style={[styles.black]}>work2</Text>
       </View>
       <View style={[styles.bgSmokePurple,paddingPosition(5,0,5,8),radius(0,0,0,8,8),margin(0,5),fontSize(5),borderWidth(.1),styles.allCenter]}>
       <Text style={[styles.white]}>work3</Text>
       </View>
          </View>
        )
      }
   return (

     <View style={[styles.bgWhite,marginPosition(0,5,0),{overflow: 'hidden'},styles.centerHorizontal]}>
       <Text style={[{fontWeight:'500'},styles.gray]}>{date.day}</Text>
       
    
       {/* <View style={[styles.bgSkyblue,padding(0,5,10),radius(0,0,0,5,5),margin(0,5),borderWidth(.1)]}>
       <Text style={[styles.white]}>task</Text>
       </View>
       <View style={[{backgroundColor:'yellow'},padding(0,5,10),radius(0,0,0,5,5),margin(0,5)]}>
       <Text style={[styles.black]}>work</Text>
       </View>
       <View style={[styles.bgSmokePurple,paddingPosition(10,0,10,5),radius(0,0,0,8,8),margin(0,5),fontSize(5),borderWidth(.1)]}>
       <Text style={[styles.white]}>project</Text>
       </View> */}
       <View style={[marginPosition(10)]}>
       {tasks}
       </View>
   </View> 
   )}



  return (
    <View>
    <View style={[styles.centerHorizontal,flex(.2)]}>
      {/* <ScrollView contentContainerStyle={[styles.centerHorizontal,flex(.2)]}> */}
      <Calendar
      style={[{width:widthValue(1.1),height:heightValue(1.2),marginBottom:10}]}
      theme={{
        calendarBackground:'white',
        todayTextColor:'white',
        todayBackgroundColor:'red',
        monthTextColor:'black',
        textMonthFontSize:18,
        textMonthFontWeight:'700',
        indicatorColor:'black',
        arrowColor:'black',
       arrowHeight:10
      }}
      dayComponent={({ date, state, marking }) => {
        return renderDay(date, marking);
      }}  
        />
        {/* </ScrollView> */}
    </View>
    </View>
  )
}
