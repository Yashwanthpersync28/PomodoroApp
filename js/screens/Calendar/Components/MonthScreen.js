import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import moment from 'moment'
import { widthValue,styles, heightValue,flex, marginPosition, padding, radius, margin, fontSize, paddingPosition, borderWidth } from '../../../styles/Styles';


export const MonthScreen = () => {
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
      <View style={[styles.bgWhite, marginPosition(0, 5, 0), { overflow: 'hidden' }, styles.centerHorizontal]}>
        <Text style={[{ fontWeight: '500' }, styles.gray]}>{date.day}</Text>

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
          style={[{ width: widthValue(1.1), minHeight: heightValue(1.5), marginBottom: 10 }]}
          theme={{
            calendarBackground: 'white',
            todayTextColor: 'white',
            todayBackgroundColor: 'red',
            monthTextColor: 'black',
            textMonthFontSize: 18,
            textMonthFontWeight: '700',
            indicatorColor: 'black',
            arrowColor: 'black',
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
