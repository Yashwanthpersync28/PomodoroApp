// import React from 'react';
// import { Calendar } from 'react-native-calendars';
// import { View, Text } from 'react-native'; // Import Text component
// import { styles } from '../../../styles/Styles';

// export const ProgressCalendar = () => {
//   // Dummy data for circular progress (you would replace this with your own data)
//   const progressData = {
//     '2024-02-01': 0.2, // Example: 20% progress for Feb 1st, 2024
//     '2024-02-15': 0.5, // Example: 50% progress for Feb 15th, 2024
//     // Add more dates and progress percentages as needed
//   };

//   // Custom render function for each day on the calendar
//   const renderDay = (date) => {
//     const progress = progressData[date.dateString] || 0; // Get progress for the date, default to 0 if not found
//     const circleSize = 20; // Adjust as needed
//     const radius = circleSize / 2;
//     const circumference = Math.PI * radius * 2;
//     const progressStrokeWidth = 2; // Adjust as needed
//     const progressOffset = circumference * (1 - progress);

//     return (
//       <View style={[styles.dayContainer]}> {/* Apply necessary styles */}
//         <Text>{date.day}</Text> {/* Display the day */}
//         <View style={[styles.progressContainer]}>
//           <View style={[styles.progressBackground]} /> {/* Background circle */}
//           <View
//             style={[
//               styles.progressIndicator,
//               {
//                 transform: [{ rotate: '-90deg' }],
//                 width: circleSize,
//                 height: circleSize,
//                 borderRadius: circleSize / 2,
//                 borderWidth: progressStrokeWidth,
//                 borderColor: '#FF5733', // Color of the progress indicator
//                 borderLeftColor: 'transparent',
//                 borderBottomColor: 'transparent',
//               },
//               { borderBottomLeftRadius: radius, borderBottomRightRadius: radius },
//               { borderBottomWidth: 0, borderLeftWidth: 0 }
//             ]}
//           /> {/* Progress indicator */}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <Calendar
//       // Calendar props
//       // Customize the calendar as needed
//       renderDay={renderDay} // Custom render function for each day
//     />
//   );
// };




import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const getTimeSlots = () => {
  const today = new Date();
  const timeSlots = [];
  
  // Loop through the next 7 days
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    
    // Create time slots for every 2 hours
    for (let hour = 0; hour < 24; hour += 2) {
      const startTime = new Date(currentDate);
      startTime.setHours(hour, 0, 0, 0);
      const endTime = new Date(startTime);
      endTime.setHours(hour + 2, 0, 0, 0);
      
      timeSlots.push({
        startTime,
        endTime,
        data: `Data for ${startTime.toLocaleString()} to ${endTime.toLocaleString()}`,
        // You can add more properties here like background image or other data
      });
    }
  }
  
  return timeSlots;
};

export const ProgressCalendar = () => {
  const timeSlots = getTimeSlots();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.data}</Text>
      {/* You can add your background image here */}
    </View>
  );

  return (
    <FlatList
      data={timeSlots}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});


