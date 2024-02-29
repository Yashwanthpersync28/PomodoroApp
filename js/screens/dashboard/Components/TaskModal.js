import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    flex,
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    paddingPosition,
    marginPosition,
    zIndex,
    shadow,
    screenWidth,
    screenHeight,
    lineHeight,
    borderWidth,
    padding,
    margin,
} from '../../../styles/Styles';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../../../components/Icons';
import {TaskCard} from '../../../components/touchables/TaskCard';
import { searchFilter } from '../../../helpers/searchHelper';
import { Taskdata } from '../../../constants/Taskdata';
import { useNavigation } from '@react-navigation/native';
import { AddTask } from '../../Manage/components/AddTask/AddTask';
import { Manage } from '../../Manage/Manage';
import { setCurrentModal } from '../../../redux/userReducer/modalReducer';
import { platform } from 'os';


export const TaskModal = ({ closeModal,setSelectedTask,updateTask,setdata,setTaskColor,addTask,isTimerActive,setDisplaySession}) => {
    const darkMode = useSelector(state=>state.system.darkMode)

 const [modalVisible,setModalVisible]=useState(true)
    const dispatch = useDispatch();
  const taskDetails = useSelector((state) => state.user.userTasks.userTask);
  const filteredTaskDetails = taskDetails.filter(task =>task.completed === false);
  console.log(filteredTaskDetails,'filteredTaskDetails')
  console.log('taskDetails',taskDetails)
  const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
   const navigation = useNavigation();
    // const [currentPage ,setCurrentPage] = useState(0)
  

console.log('id', taskDetails.map(data=>data.id))

    const [searchText,setSearchText] = useState('')
    const [filteredTasks,setFilteredTasks] = useState(filteredTaskDetails)
    console.log('filteredTasks',filteredTasks)
    const handleSearch=(text)=>{
        setSearchText(text)
        console.log(searchText)
        const filteredArray = searchFilter(filteredTaskDetails,text,'Taskname');
        console.log('filteredArray',filteredArray)
        setFilteredTasks(filteredArray)
        console.log(filteredArray)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Modal
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                isVisible={currentModal===1}
                hasBackdrop={true}
                backdropColor="black"
                backdropOpacity={0.5}
                onBackdropPress={closeModal}
                style={[{ margin: 0, width: widthValue(1), height: heightValue(2),}]}>
                <View
                    style={[
                        darkMode?styles.bgdarkmodeBlack: styles.bgWhite,
                        {
                            position: 'absolute',
                            bottom: 0,
                            width: widthValue(1),
                        },
                        padding(20,20,20),
                        radius(0, 20, 0, 0, 20),
                        styles.spaceBetweenVertical,
                    ]}>
                         <View style={[styles.centerHorizontal,marginPosition(-5,0,12,0)]}>
        <View style={[{ width: 35,height:4  },darkMode?styles.bgdarkmodeBlack:styles.bgLightWhite,styles.centerHorizontal, radius(6)]}></View>
        </View>
                    <View style={[styles.row, styles.allCenter, styles.selfEnd]}>
                        <View>
                            <Text
                                style={[
                                    darkMode?styles.lightWhite: styles.black,
                                    styles.textCenter,
                                    { fontWeight: '500', marginRight: 115 },
                                    fontSize(24),
                                    paddingPosition(0, 0, 20, 0)

                                ]}>
                                Select Task
                            </Text>
                        </View>
                        <TouchableOpacity onPress={addTask}>
                            <Icon name={"plus"} type={Icons.Feather} style={[styles.tomotoRed]} />
                        </TouchableOpacity>
                    </View>
                    <View style={[borderWidth(0, 1, 0, 1, 0),darkMode?styles.borderDarkmode: styles.borderLightWhite,]}>

                        <View style={[styles.row, styles.centerHorizontal, padding(0, 2, 15), radius(8), { backgroundColor:darkMode?'#20222a': '#fafafa' }, marginPosition(20)]}>
                            <Icon name={"search"} type={Icons.EvilIcons} style={[styles.lightGray, fontSize(35), marginPosition(0, 10)]} />  
                            <TextInput
                             placeholder='Search task' 
                             placeholderTextColor={darkMode?'gray':'#dfdfdf'}
                             style={[fontSize(20),darkMode?styles.lightWhite:styles.black,Platform.OS ==='ios'?padding(0,15,0):padding(0)]} 
                             value={searchText}
                             onChangeText={handleSearch}
                             />
                        </View>
                        <View style={[styles.row, styles.centerHorizontal, marginPosition(20, 20,20,20)]}>
                            <Text style={[marginPosition(0, 10), styles.gray, { fontWeight: '500' }]}>Today Tasks</Text>
                            <View style={[borderWidth(0, 1),darkMode?styles.borderDarkmode: styles.borderLightWhite, { height: .5, width: widthValue(1.8) }]}></View>
                        </View>
                        
                        <View>
                {filteredTasks.length === 0 ?
                       <View style={[styles.centerHorizontal]}>
                            <Text style={[darkMode?styles.lightWhite:styles.black,{fontWeight:'500'},fontSize(18),padding(0,20),{fontWeight:'600'}]}>You don't have any tasks</Text>
                        </View>  :
                        <View> 

                  {filteredTasks.map((details)=>  (console.log("kvdblkdnvlddsva", details),
                     
                  
                    <View style={[{width: widthValue(1.8) }]}>
                       <TaskCard closeModal={closeModal} setSelectedTask={setSelectedTask}  updateTask={updateTask} title={details.Taskname} priorityname={details.Priority.name} 
                       
                    //    {dataitem.Tags.map((tags,index)=>{
                    //     return(
                    //            <Text key={index} style={[{color:tags.color},marginPosition(0,5)]}>{`#${tags.name}`}</Text> 
                    //     )
                    // })}
                       tagname={details.Tags.map(tag=>tag.name).join()} tagColor={details.Tags.map(tag=>tag.color)}
                       projectname={details.Project.Projectname} completed={details.completed} setdata={setdata} fulldata={details} setTaskColor={setTaskColor}
                        Sessions={details.Sessions}  projectColor={details.Project.Color} prioritycolor={details.Priority.color}  id={details.id} isTimerActive={isTimerActive} currentModal={currentModal} setDisplaySession={setDisplaySession}/> 
                        </View>
                        ))} 
                        </View> }
                        </View> 
    
                    </View>
                </View>
            </Modal> 
            </KeyboardAvoidingView>
    );
};
