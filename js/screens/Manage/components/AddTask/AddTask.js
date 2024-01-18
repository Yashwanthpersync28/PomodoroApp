import React, { useRef, useState , useEffect} from 'react'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../../styles/Colors';
import { Platform } from 'react-native';
import Icon, { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';
import { addUserTasks } from '../../../../redux/UserTaskReducer/UserTaskDetails';
import Sessions from './components/Sessions';
import { addTask, addUser } from '../../../../redux/userDataReducer/UserDetailsReducer';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export const AddTask = ({ visible, onClose }) => {
  const navigation=useNavigation();
  const route = useRoute();
  const receivedData = route.params?.prioritydata;
  const receivedProjectname=route.params?.projectname;
  const receivedTaskname=route.params?.tagname;
  console.log('receivedTaskname',receivedTaskname);
  console.log('receivedProjectname',receivedProjectname);
 const TextInputFocus=useRef();
 const { darkMode } = useSelector(state => state.system)
 const [taskname,setTaskname]=useState('')
 const [session,setsession]=useState(1)

 ///selectors
 const userDatasSelector=useSelector((state)=>state.UserDetails.userList)
 console.log('userDatasSelector',userDatasSelector);
 const [userDatas, setUserDatas] = useState(userDatasSelector)
 const dispatch=useDispatch()
 useEffect(() => {
  if (visible && TextInputFocus.current) {
    TextInputFocus.current.focus();
    // Keyboard.dismiss();
  }
}, [visible]);
///estimated pomodoros data
const [data,setdata]=useState([1,2,3,4,5,6,7,8])
const iconData=['sun','flag','tag','briefcase'];

/////Customize Buttons
const handleAddTaskButtons=(icon)=>{
  if(icon==='flag'){
    navigation.navigate('priority') 
  }
  if(icon==='tag'){
    navigation.navigate('tag')

  }
 if(icon==='briefcase'){
    navigation.navigate('project')
    
  }
  console.log('name',icon);
}


const addUserTaskHandler = (email, taskData) => {
  dispatch(addTask({ email, taskData }));
};





const SendData = () => {
  const taskData = {
    Taskname: taskname,
    Sessions: session,
    Priority: receivedData,
    Tags: receivedTaskname,
    Project: receivedProjectname,
  };

  addUserTaskHandler('test3@gmail.com', taskData);
};
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
    >
    <View style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'flex-end',alignItems:'center'}]}>
    <View style={[flex(0.4),{width:widthValue(1)},styles.bgWhite,radius(0,25,0,0,25),styles.allCenter]}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), flex(1)]}> */}
      <View style={[flex(1),paddingPosition(0,20,0,20),styles.selfStart]}>
    {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[{width: widthValue(1)},flex(0.4)]}
        > */}
      <TextInput onChangeText={(val)=>setTaskname(val)} placeholder={"Add Task"}  autoFocus={true} ref={TextInputFocus} style={[styles.black]} 
      placeholderTextColor={darkMode ? Colors.white : Colors.black}
                    />
      {/* </KeyboardAvoidingView> */}
      </View>
      <View style={[flex(1.3),paddingPosition(0,20,0,20),borderColor('#f7f7f7'),borderWidth(0,1),paddingPosition(10),{width:widthValue(1.1)}]}>
      {/* <View style={[flex(1.2),borderColor('#f7f7f7'),borderWidth(0,1)]}> */}
        <Text style={[styles.black]}>Estimated Pomodoros</Text>
        <Sessions onPress={(val)=>setsession(val)}/>
        {/* <View style={[styles.allCenter,flex(1)]}>
         
          <View style={[styles.row,styles.allCenter]}>
            {data.map((num,index)=>{
              return(
             <View key={index} style={[{height:28,width:28},radius(50),styles.bgOrange,styles.allCenter,marginPosition(0,10)]}>
                   <Text style={[styles.white]}>{num}</Text>
             </View>
              )
            })}
          </View>
          
        
        </View> */}
      {/* </View> */}
      </View>
      <View style={[flex(1.3),{width:widthValue(1.1)},styles.row,borderColor('#f7f7f7'),borderWidth(0,1)]}>
      <View style={[styles.row,flex(1),styles.allCenter,marginPosition(0,0,0,20)]}>
        {
          iconData.map((icon,index)=>
          <TouchableOpacity key={index} onPress={()=>handleAddTaskButtons(icon)}>
          <Icon  name={icon} type={Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,20)]}/> 
          </TouchableOpacity> 
          )
        }
        <View style={[radius(30),flex(1),{justifyContent:'center',alignItems:'flex-end'}]}>
       <CustomizedButtons  name={'Add'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} handlecontinue={SendData}/>
       </View>

      </View>
      </View>
      {/* </ScrollView> */}
     </View>
    
    </View>
  </Modal>
  )
}


