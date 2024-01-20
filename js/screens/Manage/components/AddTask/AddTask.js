import React, { useRef, useState , useEffect} from 'react'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity,StatusBar} from 'react-native'
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

export const AddTask = ({ visible, onClose , handleCounter , receivedPriorityData , onChangeText , taskname , onPressSession , sessions , receiveTagsData , receiveProjectData,selectedDate}) => {
  console.log('receivedPriorityDataa',receivedPriorityData);
  console.log('receiveTagsData',receiveTagsData);
  console.log('receiveProjectDataaaa',receiveProjectData);
  console.log('selectedDateeee',selectedDate);
  const navigation=useNavigation();
  const route = useRoute();
  const receivedData = route.params?.prioritydata;
  const receivedProjectname=route.params?.projectname;
  const receivedTaskname=route.params?.tagname;
  console.log('receivedTaskname',receivedTaskname);
  console.log('receivedProjectname',receivedProjectname);
 const TextInputFocus=useRef();
 const { darkMode } = useSelector(state => state.system)
 const [Disablebutton,setDisablebutton]=useState(true)
 const [id,setid]=useState(0)
//  const [session,setsession]=useState(1)

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
  if(taskname.length >=2 && Object.keys(receivedPriorityData).length >0 && Object.keys(receiveTagsData).length >0 && Object.keys(receiveProjectData).length >0 && selectedDate !=null ){
    setDisablebutton(false)
    setid(id+1)
  }
  else{
    setDisablebutton(true)
  }
  
  // setDisablebutton(taskname.length <= 2);
}, [visible,taskname,receiveProjectData,receiveTagsData,receiveProjectData,selectedDate,]);
///estimated pomodoros data
const [data,setdata]=useState([1,2,3,4,5,6,7,8])
const iconData=[{name:'sun',color:'black'},{name:'flag',color:receivedPriorityData.color || 'black'},{name:'tag',color:receiveTagsData.Color || 'black'},{name:'briefcase',color:receiveProjectData.Color || 'black'}];

/////Customize Buttons
const handleAddTaskButtons=(icon)=>{
  if(icon==='sun'){
    handleCounter(7)
  }
  if(icon==='flag'){
    handleCounter(2)
    // navigation.navigate('priority') 
  }
  if(icon==='tag'){
    // navigation.navigate('tag')
    handleCounter(3)


  }
 if(icon==='briefcase'){
    // navigation.navigate('project')
    handleCounter(4)

    
  }
  console.log('name',icon);
}


const addUserTaskHandler = (taskData) => {
  // dispatch(addTask({ email, taskData }));
  dispatch(addUserTasks(taskData))
};





const SendData = () => {
  
  const taskData = {
    id:id,
    Taskname: taskname,
    Duedate:selectedDate,
    Sessions: sessions,
    Priority: {name:receivedPriorityData.name,color:receivedPriorityData.color},
    Tags: receiveTagsData,
    Project: receiveProjectData,
  };
  onClose()

  addUserTaskHandler(taskData);
  console.log('taskname',taskname);
  console.log('sessions',sessions);
  console.log('priority',receivedPriorityData.length);
  console.log('tags',receiveTagsData);
  console.log('project',receiveProjectData);


};
// useEffect=(()=>{
//    if(taskname.length>2){
//        setDisablebutton(false)
//    }
// },[])
  return (
    
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
    // onBackdropPress={onClose}
    >
   <StatusBar
  translucent={true}
  backgroundColor="rgba(0, 0, 0, 0.8)"
  barStyle="light-content"
/>

      {/* <TouchableOpacity onPress={onClose} style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'flex-end',alignItems:'center'}]}> */}
      {/* {justifyContent:'flex-end',alignItems:'center',backgroundColor: 'rgba(0, 0, 0, 0.6)'} */}
    <View style={[flex(1),styles.column,{backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} >
      <View style={[flex(0.6)]}>
      <TouchableOpacity onPress={onClose} style={[flex(1)]}>
      </TouchableOpacity>
      </View>
    <View style={[flex(0.4),{width:widthValue(1)},styles.bgWhite,radius(0,25,0,0,25),styles.allCenter]}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), flex(1)]}> */}
      <View style={[flex(1),paddingPosition(0,20,0,20),styles.selfStart]}>
    {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[{width: widthValue(1)},flex(0.4)]}
        > */}
      <TextInput value={taskname} onChangeText={onChangeText} placeholder={"Add Task"}  autoFocus={true} ref={TextInputFocus} style={[styles.black]} 
      placeholderTextColor={darkMode ? Colors.white : Colors.black}
                    />
      {/* </KeyboardAvoidingView> */}
      </View>
      <View style={[flex(1.3),paddingPosition(0,20,0,20),borderColor('#f7f7f7'),borderWidth(0,1),paddingPosition(10),{width:widthValue(1.1)}]}>
      {/* <View style={[flex(1.2),borderColor('#f7f7f7'),borderWidth(0,1)]}> */}
        <Text style={[styles.black]}>Estimated Pomodoros</Text>
        <Sessions onPress={onPressSession} sessions={sessions}/>
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
          <TouchableOpacity key={index} onPress={()=>handleAddTaskButtons(icon.name)}>
          <Icon  name={icon.name} type={Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,20),{color:icon.color}]}/> 
          </TouchableOpacity> 
          )
        }
        <View style={[radius(30),flex(1),{justifyContent:'center',alignItems:'flex-end'}]}>
         
       <CustomizedButtons disable={Disablebutton} name={'Add'} bgcolor={Disablebutton ? styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={Disablebutton ? null : SendData}/>
       
       </View>

      </View>
      </View>
      {/* </ScrollView> */}
     </View>
    
    </View>
    {/* </TouchableOpacity> */}
  </Modal>
  )
}


