import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  flex,
  styles,
  widthValue,
  radius,
  heightValue,
  fontSize,
  paddingPosition,
  marginPosition,
  zIndex,
  shadow,
  screenWidth,
  screenHeight,
  lineHeight,
  borderWidth,
} from '../../styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomepageHeader from './Components/HomepageHeader';
import TimerButton from './Components/TimerButton';
import ModeButtons from './Components/ModeButtons';
import TimerComponent from './Components/TimerComponent';
import { ActionModalComponent } from '../../components';
import TaskComponent from './Components/TaskComponent';

const PomodoroScreen = () => {

  const [modalVisible,setModalVisible] = useState(false)
  const handleTasks = () => {
    console.warn('hi');
  };

  const OpenModal = ()=>{
    setModalVisible(true)
  }
  const OpenStrictModel = ()=>{
    setModalVisible(true)
  }

  const closeModal = ()=>{
    setModalVisible(true)
  }
  const closeStrictModel = ()=>{
    setModalVisible(false)
  }
  const OpenTimerModel = ()=>{
    console.log('open Taimer model')
  }
  const OpenWhiteModel = ()=>{
    console.log('open white model')
  }
  return (
    <SafeAreaView style={[styles.centerHorizontal,styles.bgWhite,flex(1),styles.positionRelative]}>
      <View style={[styles.bgOrange,{height:heightValue(2),width:widthValue(1)},styles.centerHorizontal]}>
      <View >
        <HomepageHeader />
        <TaskComponent handleTasks={handleTasks}/>
      </View>
      <View style={[{backgroundColor:'white',height:100,width:100,bottom:-60,transform: [{ scaleX:4.5  }, { scaleY: 2 }]},styles.positionAbsolute,radius(40)]}>
      </View>
      <View style={[styles.positionAbsolute,{bottom:-100}]}>
      <TimerComponent />
      </View>
      </View>
      <View style={[styles.centerHorizontal,styles.positionAbsolute,{bottom:-15}]}>
        <TimerButton  icon={'play'} text={'Start to Focus'}/>
        <ModeButtons  OpenModal={OpenModal}/>
      </View>
      {modalVisible ?<ActionModalComponent /> : '' }
    </SafeAreaView>
  );
};

export default PomodoroScreen;



