import React from 'react';
import { View , Text} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { flex, fontSize, marginPosition, styles } from '../components/../../../styles/Styles';

export const FocusTime = () => {
  // Example data
  const data = [10, 9, 7, 5, 3];
  // Calculate progress value for each item
  const progressValues = data.map(item => item / 10);

  return (
    <View style={[{ flexDirection: 'column', justifyContent: 'space-around', }]}>
      {progressValues.map((progress, index) => (
        <View key={index} style={[ marginPosition(10,10,10,10) ]}>
            <Text style={[styles.black,fontSize(14)]}>tasks10</Text>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <ProgressBar progress={progress} width={progress*250} color={'#4CAF50'} borderColor={'white'} borderWidth={0} />
            <Text style={[styles.black, fontSize(14), { marginLeft: 0 }]}>7h20m</Text>
          </View>
        </View>
      ))}
    </View>
  );
}





