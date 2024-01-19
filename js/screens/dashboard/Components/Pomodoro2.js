// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

// export const Pomodoro2 = () => {
//   const initialFocusTime = .5 * 60; // 5 minutes for focus
//   const initialBreakTime = 1 * 60; // 2 minutes for break

//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [time, setTime] = useState(initialFocusTime);
//   const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break
//   const [progress, setProgress] = useState(100);
//   const [barColor, setBarColor] = useState('#ff6347');
//   const [isCountingUp, setIsCountingUp] = useState(false);

//   useEffect(() => {
//     let intervalId;

//     const updateTimer = () => {
//       if (isTimerActive) {
//         const newTime = isCountingUp ? time + 1 : time - 1;

//         if (newTime <= 0) {
//           setIsTimerActive(false);
//           setProgress(0);
//           setCurrentTimer(1); // Switch to break timer
//           setTime(initialBreakTime);
//           setBarColor('#00e0ff');
//           setIsCountingUp(false);
//           return;
//         }

//         const newProgress = Math.floor((newTime / (currentTimer === 0 ? initialFocusTime : initialBreakTime)) * 100);
//         setProgress(newProgress);

//         setBarColor(currentTimer === 0 ? '#ff6347' : '#00e0ff');

//         setTime(newTime);
//       }
//     };

//     if (isTimerActive) {
//       intervalId = setInterval(updateTimer, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isTimerActive, time, currentTimer, isCountingUp]);

//   const handleStart = () => {
//     setIsTimerActive(true);
//     setIsCountingUp(false);
//   };

//   const handleStop = () => {
//     setIsTimerActive(false);
//   };

//   const handleReset = () => {
//     setIsTimerActive(false);
//     setCurrentTimer(0); // Reset to focus timer
//     setTime(initialFocusTime);
//     setProgress(100);
//     setBarColor('#ff6347');
//     setIsCountingUp(false);
//   };

//   return (
//     <View>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {currentTimer === 0 ? (
//         <Text>Focus Time</Text>
//       ) : (
//         <Text>Break Time</Text>
//       )}
//       <AnimatedCircularProgress
//         size={200}
//         width={15}
//         fill={(time / (currentTimer === 0 ? initialFocusTime : initialBreakTime)) * 100}
//         tintColor={barColor}
//         backgroundColor="#efefef"
//         style={{ marginTop: 20 }}
//         rotation={0}
//         lineCap='round'
//       >
//         {() => <Text style={{ fontSize: 20 }}>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</Text>}
//       </AnimatedCircularProgress>

//     </View>
//     <View style={{ marginTop: 20, flexDirection: 'row' }}>
//     <TouchableOpacity onPress={handleStart} style={{ marginRight: 20 }}>
//       <Text>Start</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={handleStop}>
//       <Text>Stop</Text>
//     </TouchableOpacity>
//   </View>
//   <TouchableOpacity onPress={handleReset} style={{ marginTop: 20 }}>
//     <Text>Reset</Text>
//   </TouchableOpacity>
//   </View>
//   );
// };


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const Pomodoro2 = () => {
  const initialFocusTime = 0.5 * 60; // 5 minutes for focus
  const initialBreakTime = .15 * 60; // 2 minutes for break

  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState(initialFocusTime);
  const [currentTimer, setCurrentTimer] = useState(0); // 0 for focus, 1 for break
  const [progress, setProgress] = useState(100);
  const [barColor, setBarColor] = useState('#ff6347');
  const [isCountingUp, setIsCountingUp] = useState(false);

  useEffect(() => {
    let intervalId;

    const updateTimer = () => {
      if (isTimerActive) {
        const newTime = isCountingUp ? time + 1 : time - 1;

        if (newTime <= 0) {
          setIsTimerActive(false);
          setProgress(0);
          setCurrentTimer(1); // Switch to break timer
          setTime(initialBreakTime);
          setBarColor('#00e0ff');
          setIsCountingUp(false);
          return;
        }

        const newProgress = Math.floor((newTime / (currentTimer === 0 ? initialFocusTime : initialBreakTime)) * 100);
        setProgress(newProgress);

        setBarColor(currentTimer === 0 ? '#ff6347' : '#00e0ff');

        setTime(newTime);
      }
    };

    if (isTimerActive) {
      intervalId = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive, time, currentTimer, isCountingUp]);

  const handleStart = (timerType) => {
    setIsTimerActive(true);
    setIsCountingUp(false);
    setCurrentTimer(timerType); // Set the current timer type
  };

  const handleStop = () => {
    setIsTimerActive(false);
  };

  const handleReset = () => {
    setIsTimerActive(false);
    setCurrentTimer(0); // Reset to focus timer
    setTime(initialFocusTime);
    setProgress(100);
    setBarColor('#ff6347');
    setIsCountingUp(false);
  };

  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {currentTimer === 0 ? (
          <Text>Focus Time</Text>
        ) : (
          <Text>Break Time</Text>
        )}
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={(time / (currentTimer === 0 ? initialFocusTime : initialBreakTime)) * 100}
          tintColor={barColor}
          backgroundColor="#efefef"
          style={{ marginTop: 20 }}
          rotation={0}
          lineCap='round'
        >
          {() => <Text style={{ fontSize: 20 }}>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={{ marginTop: 20, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => handleStart(0)} style={{ marginRight: 20 }}>
          <Text>Start Focus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStart(1)} style={{ marginRight: 20 }}>
          <Text>Start Break</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStop}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleReset} style={{ marginTop: 20 }}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
