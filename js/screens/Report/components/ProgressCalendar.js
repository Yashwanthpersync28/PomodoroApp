import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-svg-charts';

export const ProgressCalendar = () => {
  const data = [
    {
      month: 'Jan',
      values: [10, 15, 20], // Values for Jan
      colors: ['#ff5733', '#33ff57', '#3333ff'], // Colors for each stack
    },
    {
      month: 'Feb',
      values: [12, 18, 22], // Values for Feb
      colors: ['#ff5733', '#33ff57', '#3333ff'],
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BarChart
        style={{ height: 200, width: 300 }}
        data={data.map(item => item.values)}
        svg={{ fill: data.map(item => item.colors) }}
        contentInset={{ top: 20, bottom: 20 }}
        spacingInner={0.2}
        spacingOuter={0.5}
      />
    </View>
  );
};


