import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import {borderColor, borderWidth, flex, fontSize, fontWeight, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../styles/Styles';
import Icon, { Icons } from '../Icons';


export const TaskDeletedModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.2)'}]}>
      <View style={[flex(0.8)]}>
      <TouchableOpacity onPress={onClose} style={[flex(1)]}>
      </TouchableOpacity>
      </View>
        <View style={[flex(0.2), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20),styles.centerHorizontal]}>
        <View style={[{width:widthValue(10)},borderColor('#e3e1e1'), borderWidth(0,0,0,1),marginPosition(5),]}></View>
         <View style={[styles.allCenter,flex(1)]}>
           <Icon name={'checkcircle'} type={Icons.AntDesign} style={[styles.Orange,fontSize(50)]}/>
           <Text style={[styles.black,fontSize(19),marginPosition(10),fontWeight('bold')]}>Task has been deleted!</Text>
           </View>
        </View>
      </View>
    </Modal>
  );
};
