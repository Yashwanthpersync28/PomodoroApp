import React, { useRef, useState , useEffect} from 'react'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'
import { useSelector } from 'react-redux';
import { Colors } from '../../../../styles/Colors';
import { Platform } from 'react-native';
import Icon, { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';

export const AddTask = ({ visible, onClose }) => {
    // const [visible,setvisible]=useState(true)
 const TextInputFocus=useRef();
 const { darkMode } = useSelector(state => state.system)

 useEffect(() => {
  if (visible && TextInputFocus.current) {
    TextInputFocus.current.focus();
    // Keyboard.dismiss();
  }
}, [visible]);
///estimated pomodoros data
const [data,setdata]=useState([1,2,3,4,5,6,7,8])
const iconData=['sun','flag','tag','briefcase'];
count=1
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
    >
    <View style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'flex-end',alignItems:'center'}]}>
    <View style={[flex(0.6),{width:widthValue(1)},styles.bgWhite,radius(0,20,0,0,20)]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), styles.bgWhite, flex(1)]}>
      <View style={[flex(1),paddingPosition(20,20,0,20)]}>
    {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[{width: widthValue(1)},flex(0.4)]}
        > */}
      <TextInput placeholder={"Add Task"}  autoFocus={true} ref={TextInputFocus} style={[styles.black]} 
      placeholderTextColor={darkMode ? Colors.white : Colors.black}
                    />
      {/* </KeyboardAvoidingView> */}
      </View>
      <View style={[flex(1.2),paddingPosition(0,20,0,20)]}>
      <View style={[flex(1.2),borderColor('#f7f7f7'),borderWidth(0,1)]}>
        <Text style={[styles.black]}>Estimated Pomodoros</Text>
        <View style={[styles.allCenter,flex(1)]}>
         
          <View style={[styles.row,styles.allCenter]}>
            {data.map((num,index)=>{
              return(
             <View key={index} style={[{height:28,width:28},radius(50),styles.bgOrange,styles.allCenter,marginPosition(0,10)]}>
                   <Text style={[styles.white]}>{num}</Text>
             </View>
              )
            })}
          </View>
          
        
</View>
      </View>
      </View>
      <View style={[flex(1),paddingPosition(0,20,0,20),styles.allCenter,styles.bgOrange]}>
      <View style={[styles.row,styles.allCenter,borderColor('#f7f7f7'),borderWidth(0,1)]}>
        {
          iconData.map((icon,index)=>
          <Icon key={index} name={icon} type={Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,20)]}/>  
          )
        }
        <View style={[radius(30)]}>
       <CustomizedButtons  name={'Add'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]}/>
       </View>

      </View>
      </View>
      </ScrollView>
     </View>
    
    </View>
  </Modal>
  )
}


