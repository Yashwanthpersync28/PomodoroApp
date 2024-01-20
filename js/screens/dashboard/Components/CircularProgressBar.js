import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

 export const PomodoroTimer = () => {
  const [isFocusTime, setIsFocusTime] = useState(false);
  const [key, setKey] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => {
    setIsTimerActive(true);
    setKey((prevKey) => prevKey + 1);
  };

  const handleTimerComplete = () => {
    setIsFocusTime((prevIsFocusTime) => !prevIsFocusTime);
    setKey((prevKey) => prevKey + 1);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isTimerActive) {
      const timerDuration = isFocusTime ? 300 : 120; // 5 minutes for focus, 2 minutes for break
      const timerInterval = setInterval(() => {
        setKey((prevKey) => prevKey + 1);
      }, timerDuration * 1000);

      return () => {
        clearInterval(timerInterval);
        setIsTimerActive(false);
      };
    }
  }, [isTimerActive, isFocusTime]);

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        key={key}
        isPlaying={isTimerActive}
        duration={isFocusTime ? 300 : 120}
        colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000']]}
        onComplete={handleTimerComplete}
        trailColor="#D9D9D9" 
      >
        {({ remainingTime, animatedColor }) => (
          <View style={styles.timerContainer}>
            <Text style={[styles.timerText, { color: animatedColor }]}>{formatTime(remainingTime)}</Text>
          </View>
        )}
      </CountdownCircleTimer>

      <TouchableOpacity onPress={startTimer} style={styles.startButton}>
        <Text style={styles.buttonText}>{isTimerActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  startButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
