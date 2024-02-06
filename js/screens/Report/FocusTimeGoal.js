import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { CircularProgress } from 'react-native-circular-progress';

const { width } = Dimensions.get('window');
const circleSize = 40;

export const FocusTimeGoal = () => {
  const [focusTimeData, setFocusTimeData] = useState({
    '2024-02-01': 10,
    '2024-02-02': 15,
    // Add more dates and focus times as needed
  });

  LocaleConfig.locales['en'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };

  LocaleConfig.defaultLocale = 'en';

  const renderFocusTimeCircle = (date) => {
    const focusTime = focusTimeData[date] || 0;
    return (
      <CircularProgress
        size={circleSize}
        width={4}
        fill={60} // Assuming focusTime is in percentage (0-100)
        tintColor="#66BB6A"
        backgroundColor="white"
        style={styles.circularProgress}
      />
    );
  };

  const markedDates = Object.keys(focusTimeData).reduce((acc, date) => {
    const focusTime = focusTimeData[date];
    const backgroundColor = focusTime > 0 ? 'white' : undefined;
    const textColor = focusTime > 0 ? 'white' : 'black';

    acc[date] = { marked: true, dotColor: 'green', selectedDotColor: 'red', selected: true, selectedColor: 'blue', backgroundColor, textColor };

    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          // Handle day press if needed
          console.log('selected day', day);
        }}
        markedDates={markedDates}
        renderDay={(day, item) => (
          <View style={styles.dayContainer}>
            {renderFocusTimeCircle(day.dateString)}
            <Text style={styles.dayText}>{day.day}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    marginTop: 5,
    textAlign: 'center',
  },
  circularProgress: {
    position: 'absolute',
    top: circleSize / 2,
    left: (width - circleSize) / 2,
  },
});




