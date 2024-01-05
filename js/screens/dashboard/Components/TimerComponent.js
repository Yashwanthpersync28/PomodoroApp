import React from 'react';
import { View } from 'react-native';
import { widthValue, radius, styles, shadow } from '../../../styles/Styles';
// import CircularProgress from 'react-native-circular-progress-indicator';

const TimerComponent = () => {
  return (
    <View>
      <View style={[{ width: widthValue(1.4), height: widthValue(1.4), zIndex: 99 }, radius(widthValue(0.7)), styles.bgWhite, shadow(10)]}>
        {/* Example usage of CircularProgress, adjust props as needed */}
        {/* <CircularProgress value={58} /> */}

        {/* Additional examples (uncomment and customize as needed): */}
        {/* <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          progressValueColor={'#ecf0f1'}
          maxValue={200}
          title={'KM/H'}
          titleColor={'white'}
          titleStyle={{ fontWeight: 'bold' }}
        />
        <CircularProgress
          value={60}
          activeStrokeWidth={12}
          progressValueColor={'#ecf0f1'}
        /> */}
      </View>
    </View>
  );
};

export default TimerComponent;
