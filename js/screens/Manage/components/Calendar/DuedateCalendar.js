// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import Icon, { Icons } from '../../../../components/Icons';
// import { Colors } from '../../../../styles/Colors';
// import { fontSize, styles } from '../../../../styles/Styles';

// export const DuedateCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const today = new Date();
//   const minDate = new Date(today);
//   minDate.setDate(today.getDate() - 1); // Set minimum date to yesterday

//   const handleDateChange = (date) => {
//     setSelectedDate(date.dateString);
//     console.log('Selected Date:', date.dateString);
//   };
//   const renderHeader = () => {
//     return (
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.headerIcon} onPress={() => console.log('Left icon pressed')}>
//           {/* <Icon name="arrow-back" size={25} color="black" /> */}
//          <Icon name={"chevron-left"} type={Icons.Feather} style={[{ color: Colors.greyLight },fontSize(30)]} />
        
//         </TouchableOpacity>
//         <View style={styles.headerDivider} />
//         <TouchableOpacity style={styles.headerIcon} onPress={() => console.log('Right icon pressed')}>
//           {/* <Icon name="arrow-forward" size={25} color="black" /> */}
//          <Icon name={"chevron-right"} type={Icons.Feather} style={[{ color: Colors.greyLight },fontSize(30)]} />

//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <View>
//       <Calendar
//       headerStyle={renderHeader}
        
      
//         onDayPress={handleDateChange}
//         markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
//         theme={{
//           selectedDayBackgroundColor: '#ff6347',
//           todayTextColor: 'green',
//           calendarBackground: '#fffff',
//         }}
//         minDate={minDate}
//       />
//     </View>
//   );
// };


import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon, { Icons } from '../../../../components/Icons';
import { Colors } from '../../../../styles/Colors';
import { flex, fontSize, heightValue, styles, widthValue } from '../../../../styles/Styles';

export const DuedateCalendar = ({OnpressDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleDateString('default', { month: 'long' }));
  const calendarRef = useRef(null);

  const today = new Date();
  const minDate = new Date(today-1);
  minDate.setDate(today.getDate()); // Set minimum date to yesterday

  const handleDateChange = (date) => {
    setSelectedDate(date.dateString);
    console.log('Selected Date:', date.dateString);
    OnpressDate(date.dateString)
  };

  const handleMonthChange = (month) => {
    setCurrentMonth(month.toString('MMMM yyyy'));
  };

  const handlePreviousMonth = (a) => {
    console.log('gcvhbjn',calendarRef.current);
    if (a) {
      // Convert currentMonth string to Date object
      const currentMonthDate = new Date(currentMonth);
      console.log('gvhbj',currentMonthDate);
      // Set the day to 1 to ensure it's a valid Date object for setMonth
      currentMonthDate.setDate(1);
  
      calendarRef.current.setMonth(currentMonthDate, -1);
    }
  };
  
  

  // const renderHeader = () => {
  //   return (
  //     <View style={[styles.row, { height: heightValue(15), width: widthValue(1.2) }, styles.bgGray, styles.row]}>
  //       <TouchableOpacity style={[{ width: widthValue(6) }, styles.bgOrange, styles.allCenter]} onPress={()=>handlePreviousMonth(true)}>
  //         <Icon name={'chevron-left'} type={Icons.Feather} style={[styles.black, fontSize(30)]} />
  //       </TouchableOpacity>
  //       <View style={[{ width: widthValue(1.9) }, styles.bgBlue, styles.allCenter]}>
  //         <Text style={styles.white}>{currentMonth}</Text>
  //       </View>
  //       <View style={[{ width: widthValue(6) }, styles.bgsmokeOrange, styles.allCenter]}>
  //         <Icon name={'chevron-right'} type={Icons.Feather} style={[styles.black, fontSize(30)]} />
  //       </View>
  //     </View>
  //   );
  // };


  const dayComponent = ({ date, state }) => {
    const isToday = date.dateString === today.toISOString().split('T')[0];
    const isSelected = selectedDate === date.dateString;
    const isRemainingDate = !isToday && !isSelected;
    return (
      <TouchableOpacity
        onPress={() => handleDateChange(date)}
        style={[
          styles.dayContainer,
          { backgroundColor: isToday ? '#4bb058' : 'transparent', borderRadius: 20 ,justifyContent:'center',alignItems:'center'},styles.allCenter
          // isSelected && { borderColor: '#ff6347', borderWidth: 2 },
        ]}
      >
        <View style={[styles.allCenter]}>
        <Text style={[styles.dayText, isToday && { color: 'white',borderRadius:20,width:20 }, isSelected && { backgroundColor: '#ff6347' , borderRadius:20,width:20,color:'black'},isRemainingDate && { color: 'black' }]}>{date.day}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const minDateString = minDate.toISOString().split('T')[0];
  return (
    <View style={[flex(1),styles.allCenter]}>
      <Calendar
        ref={calendarRef}
        onDayPress={handleDateChange}
        onMonthChange={handleMonthChange}
        markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
        theme={{
          selectedDayBackgroundColor: 'blue',
          todayTextColor: 'black',
          todayBackgroundColor:'#4bb058',
          calendarBackground: '#ffffff',
          dayTextColor: 'black',
          textDayFontWeight:'bold',
          textDayHeaderFontWeight:'bold',
          agendaDayTextColor: 'red',
          textDayStyle:{color:'black'},
          dayTextColor: 'blue',
        }}
        minDate={minDate}
        dayComponent={dayComponent}
        disableDateBefore={minDateString} 
        // calendarHeight={heightValue(300)}
        // customHeader={renderHeader}
       
      />
    </View>
  );
};





