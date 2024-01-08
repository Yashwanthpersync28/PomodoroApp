import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { marginPosition, styles } from '../../../../styles/Styles';

export const OtpTimer = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrement count every second
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    // Clear the interval when the component is unmounted or count becomes 0
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <View style={[styles.allCenter, marginPosition(30),styles.row]}>
        <Text style={[styles.gray]}>
          You can resend the code in{' '}
          <Text style={[{ color: count > 0 ? '#ff6347' : '#5f5f5f' , marginRight:20}]}>
            {count} 
          </Text>
        </Text>
        <Text style={[marginPosition(0,0,0,5),styles.gray]}>{count === 1 ? 'second' : 'seconds'}</Text>
      </View>
      {count === 0 && (
        <TouchableOpacity onPress={() => setCount(60)}>
          <View style={[styles.allCenter, marginPosition(10)]}>
            <Text style={[styles.gray]}>Resend code</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
