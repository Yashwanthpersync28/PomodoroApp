import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Calendar, CalendarList } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import moment from 'moment'
import { widthValue,styles, heightValue,flex, marginPosition, padding, radius, margin, fontSize, paddingPosition, borderWidth } from '../../../styles/Styles';


export const MonthScreen = () => {
  const darkMode = useSelector(state=>state.system.darkMode)
  useEffect(()=>{
    console.log(darkMode)
  },[darkMode])

  const userTasks = useSelector((state) => state.user.userTasks.userTask);
  console.log(userTasks, 'userTasks');

  const truncateText = (text)=>{
    if(text.length > 8){
      return text.substring(0, 8)+ '...'
    } else {
      return text.substring()
    }
  }
  const renderDay = (date) => {
    const selectedDate = moment(date.dateString).format('YYYY-MM-DD');
    const tasksForDate = userTasks.filter((task) => moment(task.Duedate).format('YYYY-MM-DD') === selectedDate);

    console.log('tasksForDate',tasksForDate)
    return (
      <View style={[darkMode?styles.bgtaskCardDblack:styles.bgWhite, marginPosition(0, 5, 0), { overflow: 'hidden' }, styles.centerHorizontal]}>
        <Text style={[{ fontWeight: '500' },darkMode?styles.lightishGray: styles.gray]}>{date.day}</Text>

        <View style={marginPosition(10)}>
          {tasksForDate.map((task, index) => (
            <View key={index} style={[{backgroundColor:task.Project.Color}, paddingPosition(2, 4, 2, 4), radius(0, 0, 0, 5, 5), borderWidth(0.1), margin(0, 5)]}>
              <Text style={[styles.white, fontSize(12)]}>{truncateText(task.Taskname)}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.centerHorizontal, flex(0.2)]}>
        <Calendar
          style={[{ width: widthValue(1.1), minHeight: heightValue(2.8), marginBottom: 10 }]}
          theme={{
            calendarBackground:darkMode?'#20222a':'white',
            todayTextColor: 'white',
            todayBackgroundColor: 'red',
            monthTextColor:darkMode?'white': 'black',
            textMonthFontSize: 18,
            textMonthFontWeight: '700',
            indicatorColor:darkMode?'white' :'black',
            arrowColor:darkMode?'white': 'black',
            arrowHeight: 10,
          }}
          dayComponent={({ date, state, marking }) => {
            return renderDay(date, marking);
          }}
        />
      </View>
    </ScrollView>
  );
};
