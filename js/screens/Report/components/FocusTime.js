import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { flex, fontSize, marginPosition, styles } from '../components/../../../styles/Styles';

export const FocusTime = () => {
  // Example data
  const data = [
    { name: 'Pomodoro', value: 10 },
    { name: 'Twf', value: 9 },
    { name: 'Zam Zam', value: 7 },
    { name: 'Share Api', value: 5 },
    { name: 'Zoop 360', value: 3 },
  ];
  
  // Calculate progress value for each item
  const progressValues = data.map(item => item.value / 10);

  // Array of colors for progress bars
  const colors = ['#4CAF50', '#FFC107', '#FF5722', '#2196F3', '#9C27B0'];

  return (
    <View style={[{ flexDirection: 'column', justifyContent: 'space-around' }]}>
      {progressValues.map((progress, index) => (
        <View key={index} style={[marginPosition(10, 10, 10, 10)]}>
          <Text style={[styles.black, fontSize(14)]}>{data[index].name}</Text>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <ProgressBar
              progress={progress}
              width={progress * 250}
              color={colors[index]} // Set color based on index
              borderColor={'white'}
              borderWidth={0}
            />
            <Text style={[styles.black, fontSize(14), { marginLeft: 0 }]}>7h20m</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
