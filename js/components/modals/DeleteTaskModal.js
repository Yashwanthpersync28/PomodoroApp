import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, fontWeight, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../styles/Styles';
import { Header } from '../../screens/Manage/components/Header';
import CustomizedButtons from '../../screens/auth/onboarding/component/CustomizedButtons';
import { addTrashtasks } from '../../redux/userReducer/TrashReducer';
import { useDispatch } from 'react-redux';
import { deleteUserTask } from '../../redux/userReducer/UserTaskDetails';


export const DeleteTaskModal = ({ visible, onClose , getPriorityDetails,handletoTaskDeleted,DeleteTaskData,id}) => {
const dispatch=useDispatch()

const handledelete=()=>{
    handletoTaskDeleted()
    onClose()
    dispatch(deleteUserTask(id))
    dispatch(addTrashtasks(DeleteTaskData))
}

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
      <View style={[flex(0.6)]}>
      <TouchableOpacity onPress={onClose} style={[flex(1)]}>
      </TouchableOpacity>
      </View>
        <View style={[flex(0.4), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
          {/* header */}
          <View style={[styles.allCenter, flex(0.4), borderColor('#e3e1e1'), borderWidth(0, 0, 0, 1)]}>
            <View style={[{width:widthValue(10)},borderColor('#e3e1e1'), borderWidth(0,0,0,1),marginPosition(5)]}></View>
            <Header headername={'Delete Task'} bgcolor={styles.white} color={styles.Orange} showLeftIocn={true} />
          </View>
          {/*  */}
          <View style={[flex(0.8),padding(20),styles.allCenter,]}>
            <Text style={[styles.textCenter,styles.black,fontWeight('bold'),fontSize(19)]}>Are you sure you want to delete the "create a web site design for pomodor" task?</Text>
          </View>
          {/* footer */}
          <View style={[flex(0.5), styles.row, padding(0, 0, 20, 0, 20), styles.allCenter,borderColor('#e3e1e1'), borderWidth(0,1)]}>
            <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
              <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} handlecontinue={()=>onClose()}/>
              <CustomizedButtons  name={'Yes, Delete'} bgcolor={styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={handledelete}/>
            </View>
          </View>
          {/*  */}
        </View>
      </View>
    </Modal>
  );
};
