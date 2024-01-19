import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress';

 export const TimerComponent = () => {
  const focusTimeInSeconds = 5 * 60; // 5 minutes for focus
  const breakTimeInSeconds = 2 * 60; // 2 minutes for break

  const [isFocusActive, setIsFocusActive] = useState(true);
  const [seconds, setSeconds] = useState(focusTimeInSeconds);

  useEffect(() => {
    let intervalId;
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      // Switch between focus and break
      setIsFocusActive((prev) => !prev);

      // Reset the timer based on the current mode
      setSeconds(isFocusActive ? breakTimeInSeconds : focusTimeInSeconds);
    }

    return () => clearInterval(intervalId);
  }, [seconds, isFocusActive]);

  const resetTimer = () => {
    setSeconds(isFocusActive ? focusTimeInSeconds : breakTimeInSeconds);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isFocusActive ? (
        <Text>Focus Time</Text>
      ) : (
        <Text>Break Time</Text>
      )}
      <CircularProgress
        size={200}
        width={15}
        fill={(seconds / (isFocusActive ? focusTimeInSeconds : breakTimeInSeconds)) * 100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        style={{ marginTop: 20 }}
      >
        {() => <Text style={{ fontSize: 20 }}>{formatTime(seconds)}</Text>}
      </CircularProgress>
      <TouchableOpacity onPress={resetTimer}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};