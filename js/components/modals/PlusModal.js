import React, { useEffect, useState } from 'react';
import { View, Modal, Text, TextInput, Button, TouchableOpacity , StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { Triangle, TriangleCornerTopRight } from '../../screens/Manage/components/TriangleBottomRadius';
import Icon, { Icons } from '../Icons';
import { ModalButtons } from '../../screens/Manage/components/ModalButtons';


export const PlusModal = ({ visible, onClose , name,handleLogin}) => {
  const navigation = useNavigation();
  const handletags=()=>{
    console.log('hbjcn');
  }
  const handleproject=()=>{
    console.log('hbjhrgfewil3cn');
  }
  const handletasks=()=>{
    console.log('hbjcdfnbvfen');
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'center',alignItems:'flex-end'},styles.column,padding(30)]}>
        <View style={[radius(10),styles.bgWhite,marginPosition(180)]}>
        <ModalButtons name={'Task'} icon={'task'} iconfamily={Icons.MaterialIcons} onPress={handletasks}/>
        <ModalButtons name={'Project'} icon={'shopping-outline'} iconfamily={Icons.MaterialCommunityIcons} onPress={handleproject}/>
        <ModalButtons name={'Tags'} icon={'tagso'} iconfamily={Icons.AntDesign} onPress={handletags}/>

        {/* <Triangle/> */}
        
        </View>
      </View>
    </Modal>
  );
};

