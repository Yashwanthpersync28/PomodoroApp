import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    styles,
    radius,
    fontSize,
    paddingPosition,
    marginPosition,
    screenWidth,
    screenHeight,
    shadow,
    heightValue,
    widthValue,
    margin,
    padding,
  } from '../../../styles/Styles';
import Icon,{Icons} from '../../../components/Icons';
import { TaskModal } from './TaskModal';
 export const TaskComponent = ({handleTasks,selectedTask,setCurrentModal,clearTask,taskSelected,taskColor}) =>{
  return (
    <View style={[styles.bgWhite, radius(8),shadow(1), marginPosition(30,20,0,20),styles.row,styles.centerHorizontal]}>
    <View style={[{ width: 5,height:52.5,backgroundColor: taskColor },radius(0,0,0,8,8)]}></View>
          <TouchableWithoutFeedback
            onPress={handleTasks}>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                styles.centerHorizontal,
                paddingPosition(15, 15, 15, 25),
                styles.bgWhite,
                {width:widthValue(1.15)},
                radius(0,8,8,0,0)
              ]}>
                <View style={[styles.row,styles.centerHorizontal]}>
                {selectedTask !== taskSelected && 
     
      <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(25), marginPosition(0, 20)]} /> }
              <Text style={[selectedTask ===taskSelected ? styles.lightGray:styles.black,fontSize(18)]}>{selectedTask}</Text></View>
          <TouchableOpacity onPress={selectedTask === taskSelected ? ()=>setCurrentModal(1):()=>clearTask()}><Icon name={selectedTask ==='Select Task'? "chevron-down":'x'} type={Icons.Feather} style={[styles.black,fontSize(25)]} /></TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
  )
}
