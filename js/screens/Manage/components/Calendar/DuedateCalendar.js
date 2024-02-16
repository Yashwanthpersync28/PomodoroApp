
import React, { useState, useRef , useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon, { Icons } from '../../../../components/Icons';
import { Colors } from '../../../../styles/Colors';
import { flex, fontSize, heightValue, styles, widthValue } from '../../../../styles/Styles';

export const DuedateCalendar = ({OnpressDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleDateString('default', { month: 'long' }));
  const [selectedColor,setSelectedcolor]=useState('')
  const calendarRef = useRef(null);

  const today = new Date();
  const minDate = new Date(today-1);
  minDate.setDate(today.getDate()); // Set minimum date to yesterday

  const handleDateChange = (date) => {
    // Check if selected date is today
    setSelectedDate(date.dateString)
    const isToday = date.dateString === today.toISOString().split('T')[0];
    if (isToday) {
      setSelectedcolor(Colors.LeafGreen, () => {
        console.log('Selected date is today!', selectedColor);
      });
     
      return;
    }
  
    // Check if selected date is tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow = date.dateString === tomorrow.toISOString().split('T')[0];
    if (isTomorrow) {
      setSelectedcolor(Colors.blue, () => {
        console.log('Selected date is tomorrow!', selectedColor);
      });
     

      // Update the selected date after handling color changes
      setSelectedDate(date.dateString);
      
      return; // Exit the function to prevent setting it to purple
    }
  
    // Check if selected date is in this week
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 2);
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7 - today.getDay());
    const isInThisWeek = new Date(date.dateString) >= startOfWeek && new Date(date.dateString) <= endOfWeek;
  
    if (isInThisWeek) {
      setSelectedcolor(Colors.SmokePurple, () => {
        console.log('Selected date is in this week!', selectedColor);
      });
     
    } else {
      setSelectedcolor(Colors.Orange, () => {
        console.log('Selected date is beyond this week!', selectedColor);
      });
      
    }
  
    // Update the selected date after handling color changes
    setSelectedDate(date.dateString);
   
  };
  
  const handleMonthChange = (month) => {
    setCurrentMonth(month.toString('MMMM yyyy'));
    // setCurrentMonth(month.toLocaleDateString('default', { month: 'long', year: 'numeric' }));
  };

  useEffect(() => {
    // This effect runs when selectedColor changes
    if (selectedDate) {
      if(selectedColor===Colors.LeafGreen)
      OnpressDate(selectedDate, selectedColor,'sun',Icons.Feather,'Today')
      if(selectedColor===Colors.blue)
      OnpressDate(selectedDate, selectedColor,'sunrise',Icons.Feather,'Tomorrow')
      if(selectedColor===Colors.SmokePurple)
      OnpressDate(selectedDate, selectedColor,'calendar-week',Icons.MaterialCommunityIcons,'This Week')
      if(selectedColor===Colors.Orange)
      OnpressDate(selectedDate, selectedColor,'calendar-check',Icons.MaterialCommunityIcons,'Planned')
    }
  }, [selectedColor,selectedDate]);
  


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
          // ,{ height: 35, justifyContent: 'center', alignItems: 'center' }
        ]}
      >
        <View style={[styles.allCenter]}>
        <Text style={[styles.dayText, isToday && { color: 'white',width:20 ,textAlign:'center'}, isSelected && { backgroundColor: selectedColor , borderRadius:20,width:20,color:'white',textAlign:'center'},isRemainingDate && { color: 'black' ,textAlign:'center'}]}>{date.day}</Text>
        </View>
      </TouchableOpacity>
    );
  };

 
  // const dayComponent = ({ date, state }) => {
  //   // const isToday = date.dateString === today.toISOString().split('T')[0];
  //   const isToday = date.year === today.getFullYear() && date.month === today.getMonth() + 1 && date.day === today.getDate();

  //   const isSelected = selectedDate === date.dateString;
  //   const isRemainingDate = !isToday && !isSelected;
  //   const isBeforeToday = new Date(date.dateString) < today;
  //   const isTodayOrAfter = !isBeforeToday; // Check if the date is today or after
  
  //   let textColor = 'black'; // Default text color
  
  //   // Set text color to gray for dates before today
  //   if (isBeforeToday) {
  //     textColor = 'gray';
  //   }
  
  //   // Render TouchableOpacity for today and future dates
  //   if ( isTodayOrAfter) {
  //     return (
  //       <TouchableOpacity
  //         onPress={() => handleDateChange(date)}
  //         style={[
  //           styles.dayContainer,
  //           { backgroundColor: isToday ? '#4bb058' : 'transparent', borderRadius: 20 ,justifyContent:'center',alignItems:'center'},styles.allCenter
  //         ]}
  //       >
  //         <View style={[styles.allCenter]}>
  //           <Text style={[
  //             styles.dayText,
  //             isToday && { color: 'white', width: 20, textAlign: 'center' },
  //             isSelected && { backgroundColor: selectedColor, borderRadius: 20, width: 20, color: 'white', textAlign: 'center' },
  //             isRemainingDate && { color: 'black', textAlign: 'center' },
  //             { color: textColor, textAlign: 'center' } // Apply the text color
  //           ]}>{date.day}</Text>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   } else {
  //     // Render a disabled date without TouchableOpacity for past dates
  //     return (
  //       <View
  //         style={[
  //           styles.dayContainer,
  //           { backgroundColor: isToday ? '#4bb058' : 'transparent', borderRadius: 20 ,justifyContent:'center',alignItems:'center'},styles.allCenter
  //         ]}
  //       >
  //         <View style={[styles.allCenter]}>
  //           <Text style={[
  //             styles.dayText,
  //             isToday && { color: 'white', width: 20, textAlign: 'center' },
  //             isSelected && { backgroundColor: selectedColor, borderRadius: 20, width: 20, color: 'white', textAlign: 'center' },
  //             isRemainingDate && { color: 'black', textAlign: 'center' },
  //             { color: textColor, textAlign: 'center' } // Apply the text color
  //           ]}>{date.day}</Text>
  //         </View>
  //       </View>
  //     );
  //   }
  // };
  
  
  
  
  const minDateString = minDate.toISOString().split('T')[0];
  return (
    
    <Calendar
    style={[{ minHeight: heightValue(3)}]}
        ref={calendarRef}
        onDayPress={handleDateChange}
        onMonthChange={handleMonthChange}
        markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'blue' } }}
        theme={{
          selectedDayBackgroundColor: 'blue',
          todayTextColor: 'black',
          todayBackgroundColor:'#4bb058',
          calendarBackground: '#ffffff',
          dayTextColor: 'black',
          textDayFontWeight: 'bold', // Bold weight for day names
          textMonthFontWeight: 'bold', // Bold weight for month names
          textYearFontWeight: 'bold', // Bold weight for year
          textDayHeaderFontWeight: 'bold', // Bold weight for day header (Sun, Mon, Tue, ...)
          agendaDayTextColor: 'red',
          textDayStyle: {color:'black'},
          dayTextColor: 'blue',
          
        }}
        // minDate={minDate}
        minDate={new Date()}
        dayComponent={dayComponent}
        disableDateBefore={minDateString} 
      
       
      /> 
  );
};






