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
 export const TaskComponent = ({handleTasks,selectedTask,setCurrentModal,clearTask,taskSelected,}) =>{
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
                <View style={[styles.row,styles.centerHorizontal]}>
                {selectedTask !== taskSelected &&   <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(35), marginPosition(0, 20)]} /> }
              <Text style={[selectedTask ===taskSelected ? styles.lightGray:styles.black,fontSize(18)]}>{selectedTask}</Text></View>
          <TouchableOpacity onPress={selectedTask === taskSelected ? ()=>setCurrentModal(1):()=>clearTask()}><Icon name={selectedTask ==='Select Task'? "chevron-down":'x'} type={Icons.Feather} style={[styles.black,fontSize(25)]} /></TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
  )
}
