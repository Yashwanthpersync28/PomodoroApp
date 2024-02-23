import React from 'react';
import { View, Modal, TouchableOpacity , StatusBar } from 'react-native';
import { styles, radius, fontSize, flex, paddingPosition, widthValue } from '../../styles/Styles';
import {TriangleBottomRadius} from '../../screens/Manage/components/TriangleBottomRadius';
// import Icon,{Icons} from '../Icons';
import Icon, { Icons } from '../Icons';

import { ModalButtons } from '../../screens/Manage/components/ModalButtons';
import { useSelector } from 'react-redux';
import { Colors } from '../../styles/Colors';

export const PlusModal = ({ visible, onClose , handleCount , handleIndex}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

  const handletags = () => {
    console.log('hbjcn');
    handleCount(1)
    handleIndex(3)
  };

  const handleproject = () => {
    handleCount(1)
    handleIndex(5)

    console.log('hbjhrgfewil3cn');
  };

  const handletasks = () => {
    handleCount(1)
    handleIndex(0)

    console.log('hbjcdfnbvfen');
  };

  return (
    
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={[
          flex(1),
          {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            justifyContent: 'flex-end',alignItems:'flex-end'
          },
        ]}>
    <StatusBar backgroundColor = 'rgba(0, 0, 0, 0.6)'/>
        <View style={[styles.column, { justifyContent: 'flex-end' ,alignItems:'flex-end'},paddingPosition(0,30,90,20)]}>
          <View
            style={[
              
              styles.column,
              Darkmode?styles.bgmodalColor:styles.bgWhite,
              radius(5),
              { marginRight: 0, marginBottom: 0 , width:widthValue(3)}
            ]}>
            <ModalButtons name={'Task'} icon={'addfile'} iconfamily={Icons.AntDesign} onPress={handletasks}/>
            <ModalButtons name={'Project'} icon={'briefcase'} iconfamily={Icons.Feather} onPress={handleproject}/>
            <ModalButtons name={'Tags'} icon={'tag'} iconfamily={Icons.Feather} onPress={handletags}/>
          </View>
          <TriangleBottomRadius bgColor={Darkmode?Colors.modalColor:Colors.white}/>
          <TouchableOpacity
            style={[
              {
                height: 50,
                width: 50,
                backgroundColor: '#FF6347', // Adjust the color as needed
                ...radius(30),
                ...styles.allCenter,
                
              },
            ]}
            onPress={onClose}>
            <Icon name={'close'} type={Icons.Ionicons} style={[styles.white, fontSize(30)]} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


