import React from 'react';
import { View, Button } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export const Timer = () => {
 
  return (
    <View style={{backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center'}}>
<AnimatedCircularProgress
  size={200}
  width={20}
  backgroundWidth={20}
  fill={100}
  tintColor={'#ff6347'}
  backgroundColor={"yellow"}
  padding={0}
  rotation={0}
  prefill={100}
  lineCap={'round'}
  duration={10000}
  childrenContainerStyle={[{ borderRadius: 20 }]} />

      {/* <Button title={'start'} onPress={start}></Button> */}
      {/* <Button title={'stop'} onPress={stop}></Button> */}
    </View>
  );
};
