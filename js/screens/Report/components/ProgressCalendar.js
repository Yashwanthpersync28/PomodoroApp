import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import moment from 'moment'
import { widthValue,styles, heightValue,flex, marginPosition, padding, radius, margin, fontSize, paddingPosition, borderWidth, borderColor } from '../../../styles/Styles';
import { Circle } from 'react-native-progress';
import { Colors } from '../../../styles/Colors';

export const ProgressCalendar = () => {
  const userTasks = useSelector((state) => state.user.userTasks.userTask);
  console.log(userTasks, 'userTasks');

  
  const renderDay = (date) => {
    const selectedDate = moment(date.dateString).format('YYYY-MM-DD');
    const tasksForDate = userTasks.filter((task) => moment(task.Duedate).format('YYYY-MM-DD') === selectedDate);
    const completedTasks = tasksForDate.filter((task) => task.completed);
  
    const progressPercentage = (completedTasks.length / tasksForDate.length) * 100 || 0;
  
    return (
      <View style={{ alignItems: 'center' }}>
        <Circle
          progress={progressPercentage / 100}
          size={40}
          thickness={5}
          borderWidth={0}
          color={Colors.Orange}
          unfilledColor={Colors.borderGray}
          textStyle={{ fontSize: 18 , color:'black'}}
          showsText
          formatText={() => date.day.toString()} // Display the date in the middle
        />
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
            todayBackgroundColor: 'blue',
            monthTextColor: 'black',
            textMonthFontSize: 18,
            textMonthFontWeight: '700',
            indicatorColor: 'blue',
            arrowColor: 'black',
            arrowHeight: 10,
            textDayHeaderFontWeight:'bold',
            textDayHeaderFontSize:15,

          }}
          dayComponent={({ date, state, marking }) => {
            return renderDay(date, marking);
          }}
        />
      </View>
    </ScrollView>
  );
};
