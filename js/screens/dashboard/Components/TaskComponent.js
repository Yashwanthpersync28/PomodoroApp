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
  } from '../../../styles/Styles';
import Icon,{Icons} from '../../../components/Icons';
import { TaskModal } from './TaskModal';
 export const TaskComponent = ({handleTasks,selectedTask,setCurrentModal,clearTask}) =>{
  return (
    <View style={[styles.bgWhite, radius(5), marginPosition(30,20,0,20)]}>
          <TouchableWithoutFeedback
            onPress={handleTasks}
            style={[screenWidth(1.1),screenHeight(5),styles.bgWhite]}>
            <View
              style={[
                styles.row,
                styles.spaceBetweenVertical,
                styles.centerHorizontal,
                paddingPosition(15, 15, 15, 15),
              ]}>
              <Text style={[selectedTask ==='Select Task' ? styles.lightGray:styles.black,fontSize(18)]}>{selectedTask}</Text>
          <TouchableOpacity onPress={selectedTask === 'Select Task' ? ()=>setCurrentModal(1):()=>clearTask()}><Icon name={selectedTask ==='Select Task'? "chevron-down":'x'} type={Icons.Feather} style={[styles.black,fontSize(25)]} /></TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
  )
}
