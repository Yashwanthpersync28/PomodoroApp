import React, { useRef, useState , useEffect} from 'react'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity,StatusBar} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../../styles/Colors';
import Icon, { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';
import { addUserTasks } from '../../../../redux/userReducer/UserTaskDetails';
import Sessions from './components/Sessions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PriorityModal } from '../../../../components/modals/PriorityModal';
import Tags from '../tags/Tags';
import { DueDateModal } from '../../../../components/modals/DueDateModal';
import { Addtags } from '../AddTags/Addtags';
import { Project } from '../project/Project';
import { AddProject } from '../AddProject/AddProject';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ManageProjectandTags } from '../ManageProjectandTags/ManageProjectandTags';

export const AddTask = ({ visible, onClose ,count }) => {
  // const navigation=useNavigation();
  const route = useRoute();
  const receivedData = route.params?.prioritydata;
  const receivedProjectname=route.params?.projectname;
  const receivedTaskname=route.params?.tagname;
  console.log('receivedTaskname',receivedTaskname);
  console.log('receivedProjectname',receivedProjectname);
  const [counter,setCounter]=useState(count);
 const TextInputFocus=useRef();
 const { darkMode } = useSelector(state => state.system)
 const [Disablebutton,setDisablebutton]=useState(true)
 const today = new Date();
 const currentDate = today.toISOString().split('T')[0];
 const [receivedPriorityData,setPriorityData]=useState([])///priority data
 const [session,setsession]=useState(null)//to  get session
 const [taskname,setTaskname]=useState('')//to get task name
 const [selectedDate, setSelectedDate] = useState('')//to get selected data
 const [receiveTagsData,setreceiveTagsData]=useState([]);
 const [receiveProjectData,setReceivedProjectData]=useState([])

//  const [session,setsession]=useState(1)

 ///selectors
 const userDatasSelector=useSelector((state)=>state.user.userTasks.userTask)
 const [id,setid]=useState(userDatasSelector.length+1)
 console.log('userDatasSelector',userDatasSelector);
 const [userDatas, setUserDatas] = useState(userDatasSelector)
 const dispatch=useDispatch()
 useEffect(() => {
  if (visible && TextInputFocus.current) {
    TextInputFocus.current.focus();
    // Keyboard.dismiss();
  }
  if(session!=null && taskname.length >=2 && Object.keys(receivedPriorityData).length >0 && Object.keys(receiveTagsData).length >0 && Object.keys(receiveProjectData).length >0 && selectedDate !='' ){
    setDisablebutton(false)
   
  }
  else{
    setDisablebutton(true)
  }
  
  
  // setDisablebutton(taskname.length <= 2);
}, [visible,taskname,receiveProjectData,receiveTagsData,receiveProjectData,selectedDate]);

const iconData=[{name:selectedDate.iconname || 'sun',color:selectedDate.Color || 'black'},{name:'flag',color:receivedPriorityData.color || 'black'},{name:'tag',color:receiveTagsData.length > 0 ? receiveTagsData[0].color : 'black' },{name:'briefcase',color:receiveProjectData.Color || 'black'}];



/////Customize Buttons
const handleAddTaskButtons=(icon)=>{
  
  if(icon===iconData[0].name){
    setCounter(1)
  }
  if(icon==='flag'){
    setCounter(2)
  }
  if(icon==='tag'){
    setCounter(3)


  }
 if(icon==='briefcase'){
  setCounter(5)
  }
  console.log('name',icon);
}


const addUserTaskHandler = (taskData) => {
  // dispatch(addTask({ email, taskData }));
  // dispatch(addUserTasks())
  dispatch(addUserTasks({ payload: [...userDatasSelector, taskData] }));
};


const SendData = () => {
  
  const taskData = {
    id:id,
    Taskname: taskname,
    Duedate:selectedDate.DateSelected,
    Sessions: session,
    Priority: {name:receivedPriorityData.name,color:receivedPriorityData.color},
    Tags: receiveTagsData,
    Project: receiveProjectData,
    completed:false,
    Archieve:false,
    trash:false,
    AddDate:currentDate,
    Day:selectedDate.Day,
    notes:''
    
  };
  onClose()

  // addUserTaskHandler(taskData);
  // dispatch(addUserTasks({ payload: [...userDatasSelector,taskData] }));
  dispatch(addUserTasks([...userDatasSelector,taskData]));

  console.log('taskname',taskname);
  console.log('sessions',session);
  console.log('priority',receivedPriorityData.length);
  console.log('tags',receiveTagsData);
  console.log('project',receiveProjectData);


};
const getTagDetails=(tagDetails)=>{
  setCounter(0)
  setreceiveTagsData(tagDetails)
  console.log('hjberk');
}

const getProjectDetails=(name,color)=>{
  setCounter(0)
  setReceivedProjectData({Projectname:name,Color:color})
  console.log('hjberk');
}
  return (
    <>
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
   {/* //Add task */}
   {counter===0 &&
    <View style={[flex(1),styles.column,{backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} >
      <View style={[flex(0.6)]}>
          <TouchableOpacity onPress={onClose} style={[flex(1)]}></TouchableOpacity>
      </View>
    <View style={[flex(0.4),{width:widthValue(1)},styles.bgWhite,radius(0,25,0,0,25),styles.allCenter]}>
      {/* //addText  */}
      <View style={[flex(1),paddingPosition(0,20,0,20),styles.selfStart]}>
           <TextInput value={taskname} onChangeText={(val)=>setTaskname(val)} placeholder={"Add Task"}  autoFocus={true} ref={TextInputFocus} style={[styles.black]} 
                  placeholderTextColor={Colors.iconGray}/>
      </View>
      {/*  */}
      {/* //sessons */}
      <View style={[flex(1.3),paddingPosition(0,20,0,20),borderColor('#f7f7f7'),borderWidth(0,1),paddingPosition(10),{width:widthValue(1.1)}]}>
        <Text style={[styles.black]}>Estimated Pomodoros</Text>
        <Sessions onPress={(val)=>setsession(val)} sessions={session}/>
      </View>
      {/*  */}
      {/* //footer */}
      <View style={[flex(1.3),{width:widthValue(1.1)},styles.row,borderColor('#f7f7f7'),borderWidth(0,1)]}>
           <View style={[styles.row,flex(1),styles.allCenter,marginPosition(0,0,0,10)]}>
                 {
                   iconData.map((icon,index)=>
                      <TouchableOpacity key={index} onPress={()=>handleAddTaskButtons(icon.name)}>
                          <Icon  name={icon.name} type={index==0 ? icon.name==='sun'||icon.name==='sunrise'? Icons.Feather:Icons.MaterialCommunityIcons:Icons.Feather} style={[styles.black,fontSize(25),marginPosition(0,20),{color:icon.color}]}/> 
                      </TouchableOpacity> 
                     )}
                    <View style={[radius(30),flex(1),{justifyContent:'center',alignItems:'flex-end'}]}>
                      <CustomizedButtons disable={Disablebutton} name={'Add'} bgcolor={Disablebutton ? styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(3),height:heightValue(18)}]} handlecontinue={Disablebutton ? null : SendData}/>
                    </View>
            </View>
      </View>
      {/*  */}
     {/* //Add task end  */}
     </View>
    </View>}
    {/* //Priority*/}
    {counter===1 &&
        <DueDateModal OnpressDate={(val,color,IconName,IconFamily,day)=>setSelectedDate({DateSelected:val,Color:color,iconname:IconName,iconFamily:IconFamily,Day:day})} handletoAddtask={(val)=>setCounter(0)} 
        onClose={onClose}
        />}

     {counter===2 &&
     <PriorityModal getPriorityDetails={(a)=> setPriorityData(a)} handletoAddtask={(val)=>{setCounter(val),console.log('jhdfgv')}} onClose={onClose}/>}
     {counter===3 && 
     <Tags getTagDetails={getTagDetails} handleCounter={(val)=>setCounter(val)} onClose={onClose}/>
     }
     {counter===4 && 
     <Addtags handletoTags={(val)=>setCounter(val)} HandleBack={true}/>
     }
     {counter===5 && 
     <Project getProjectDetails={getProjectDetails} handleCounter={(val)=>setCounter(val)} onClose={onClose}/>
     }
     {counter===6 && 
     <AddProject handletoAddtask={(val)=>setCounter(val)} HandleToProject={true} />
     }
  </Modal>
  
  
  </>
  )
}

























// this is old add task modal
// import React, { useRef, useState , useEffect} from 'react'
// import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity,StatusBar} from 'react-native'
// import { borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'
// import { useDispatch, useSelector } from 'react-redux';
// import { Colors } from '../../../../styles/Colors';
// import Icon, { Icons } from '../../../../components/Icons';
// import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';
// import { addUserTasks } from '../../../../redux/userReducer/UserTaskDetails';
// import Sessions from './components/Sessions';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export const AddTask = ({ visible, onClose , handleCounter , receivedPriorityData , onChangeText , taskname , onPressSession , sessions , receiveTagsData , receiveProjectData,selectedDate}) => {
//   console.log('receivedPriorityDataa',receivedPriorityData);
//   console.log('receiveTagsData',receiveTagsData);
//   console.log('receiveProjectDataaaa',receiveProjectData);
//   console.log('selectedDateeee',selectedDate);
//   const navigation=useNavigation();
//   const route = useRoute();
//   const receivedData = route.params?.prioritydata;
//   const receivedProjectname=route.params?.projectname;
//   const receivedTaskname=route.params?.tagname;
//   console.log('receivedTaskname',receivedTaskname);
//   console.log('receivedProjectname',receivedProjectname);
//   const [counter,setCounter]=useState(0);
//  const TextInputFocus=useRef();
//  const { darkMode } = useSelector(state => state.system)
//  const [Disablebutton,setDisablebutton]=useState(true)
//  const today = new Date();
//  const currentDate = today.toISOString().split('T')[0];
 

// //  const [session,setsession]=useState(1)

//  ///selectors
//  const userDatasSelector=useSelector((state)=>state.user.userTasks.userTask)
//  const [id,setid]=useState(userDatasSelector.length+1)
//  console.log('userDatasSelector',userDatasSelector);
//  const [userDatas, setUserDatas] = useState(userDatasSelector)
//  const dispatch=useDispatch()
//  useEffect(() => {
//   if (visible && TextInputFocus.current) {
//     TextInputFocus.current.focus();
//     // Keyboard.dismiss();
//   }
//   if(taskname.length >=2 && Object.keys(receivedPriorityData).length >0 && Object.keys(receiveTagsData).length >0 && Object.keys(receiveProjectData).length >0 && selectedDate !='' ){
//     setDisablebutton(false)
   
//   }
//   else{
//     setDisablebutton(true)
//   }
  
//   // setDisablebutton(taskname.length <= 2);
// }, [visible,taskname,receiveProjectData,receiveTagsData,receiveProjectData,selectedDate,]);

// const iconData=[{name:selectedDate.iconname || 'sun',color:selectedDate.Color || Colors.LeafGreen},{name:'flag',color:receivedPriorityData.color || 'black'},{name:'tag',color:receiveTagsData.length > 0 ? receiveTagsData[0].color : 'black' },{name:'briefcase',color:receiveProjectData.Color || 'black'}];



// /////Customize Buttons
// const handleAddTaskButtons=(icon)=>{
  
//   if(icon===iconData[0].name){
//     handleCounter(7)
//   }
//   if(icon==='flag'){
//     handleCounter(2)
//   }
//   if(icon==='tag'){
//     handleCounter(3)


//   }
//  if(icon==='briefcase'){
//     handleCounter(4)
//   }
//   console.log('name',icon);
// }


// const addUserTaskHandler = (taskData) => {
//   // dispatch(addTask({ email, taskData }));
//   dispatch(addUserTasks(taskData))
// };


// const SendData = () => {
  
//   const taskData = {
//     id:id,
//     Taskname: taskname,
//     Duedate:selectedDate.DateSelected,
//     Sessions: sessions,
//     Priority: {name:receivedPriorityData.name,color:receivedPriorityData.color},
//     Tags: receiveTagsData,
//     Project: receiveProjectData,
//     completed:false,
//     Archieve:false,
//     trash:false,
//     AddDate:currentDate,
//     Day:selectedDate.Day
    
//   };
//   onClose()

//   addUserTaskHandler(taskData);
//   console.log('taskname',taskname);
//   console.log('sessions',sessions);
//   console.log('priority',receivedPriorityData.length);
//   console.log('tags',receiveTagsData);
//   console.log('project',receiveProjectData);


// };

//   return (
    
//     <Modal
//     animationType="slide"
//     transparent={true}
//     visible={visible}
//     onRequestClose={onClose}
//     // onBackdropPress={onClose}
//     >
//    <StatusBar
//        translucent={true}
//        backgroundColor="rgba(0, 0, 0, 0.8)"
//        barStyle="light-content"
//    />
//    {/* //Add task */}
//    {counter===0 &&
//     <View style={[flex(1),styles.column,{backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} >
//       <View style={[flex(0.6)]}>
//           <TouchableOpacity onPress={onClose} style={[flex(1)]}></TouchableOpacity>
//       </View>
//     <View style={[flex(0.4),{width:widthValue(1)},styles.bgWhite,radius(0,25,0,0,25),styles.allCenter]}>
//       {/* //addText  */}
//       <View style={[flex(1),paddingPosition(0,20,0,20),styles.selfStart]}>
//            <TextInput value={taskname} onChangeText={onChangeText} placeholder={"Add Task"}  autoFocus={true} ref={TextInputFocus} style={[styles.black]} 
//                   placeholderTextColor={darkMode ? Colors.white : Colors.black}/>
//       </View>
//       {/*  */}
//       {/* //sessons */}
//       <View style={[flex(1.3),paddingPosition(0,20,0,20),borderColor('#f7f7f7'),borderWidth(0,1),paddingPosition(10),{width:widthValue(1.1)}]}>
//         <Text style={[styles.black]}>Estimated Pomodoros</Text>
//         <Sessions onPress={onPressSession} sessions={sessions}/>
//       </View>
//       {/*  */}
//       {/* //footer */}
//       <View style={[flex(1.3),{width:widthValue(1.1)},styles.row,borderColor('#f7f7f7'),borderWidth(0,1)]}>
//            <View style={[styles.row,flex(1),styles.allCenter,marginPosition(0,0,0,20)]}>
//                  {
//                    iconData.map((icon,index)=>
//                       <TouchableOpacity key={index} onPress={()=>handleAddTaskButtons(icon.name)}>
//                           <Icon  name={icon.name} type={index==0 ? icon.name==='sun'||icon.name==='sunrise'? Icons.Feather:Icons.MaterialCommunityIcons:Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,20),{color:icon.color}]}/> 
//                       </TouchableOpacity> 
//                      )}
//                     <View style={[radius(30),flex(1),{justifyContent:'center',alignItems:'flex-end'}]}>
//                       <CustomizedButtons disable={Disablebutton} name={'Add'} bgcolor={Disablebutton ? styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={Disablebutton ? null : SendData}/>
//                     </View>
//             </View>
//       </View>
//       {/*  */}
//      {/* //Add task end  */}
//      {/* //Priority*/}
     
//      </View>
//     </View>}
//   </Modal>
//   )
// }


