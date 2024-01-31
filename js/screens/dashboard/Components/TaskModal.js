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
    KeyboardAvoidingView
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


export const TaskModal = ({ closeModal,setSelectedTask,updateTask}) => {

    const dispatch = useDispatch();
  const taskDetails = useSelector((state) => state.user.userTasks.userTask);
  console.log('taskDetails',taskDetails)
  const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
   const navigation = useNavigation();
    // const [currentPage ,setCurrentPage] = useState(0)
    const addTask = ()=>{
        navigation.navigate('ManageScreen')
        dispatch(setCurrentModal(0))
    }



    const [searchText,setSearchText] = useState('')
    const [filteredTasks,setFilteredTasks] = useState(taskDetails)
    console.log('filteredTasks',filteredTasks)
    const handleSearch=(text)=>{
        setSearchText(text)
        console.log(searchText)
        const filteredArray = searchFilter(taskDetails,text,'Taskname');
        console.log('filteredArray',filteredArray)
        setFilteredTasks(filteredArray)
        console.log(filteredArray)
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {/* {currentPage === 0  && */}
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
                        styles.bgWhite,
                        {
                            position: 'absolute',
                            bottom: 0,
                            width: widthValue(1),
                        },
                        padding(20),
                        radius(0, 20, 0, 0, 20),
                        styles.spaceBetweenVertical,
                    ]}>
                    <View style={[styles.row, styles.allCenter, styles.selfEnd]}>
                        <View>
                            <Text
                                style={[
                                    styles.black,
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
                    <View style={[borderWidth(0, 1, 0, 1, 0), styles.borderLightWhite,]}>

                        <View style={[styles.row, styles.centerHorizontal, padding(0, 2, 15), radius(8), { backgroundColor: '#fafafa' }, marginPosition(20)]}>
                            <Icon name={"search"} type={Icons.EvilIcons} style={[styles.lightGray, fontSize(35), marginPosition(0, 10)]} />  
                            <TextInput
                             placeholder='Search task' 
                             placeholderTextColor={'#cecece'} 
                             style={[fontSize(20)]} 
                             value={searchText}
                             onChangeText={handleSearch}
                             
                             />
                        </View>
                        <View style={[styles.row, styles.centerHorizontal, margin(0, 20)]}>
                            <Text style={[marginPosition(0, 10), styles.gray, { fontWeight: '500' }]}>Today Tasks</Text>
                            <View style={[borderWidth(0, 1), styles.borderLightWhite, { height: .5, width: widthValue(1.45) }]}></View>
                        </View>
                        <View>
                        
                        {filteredTasks.map((details)=>  (console.log("kvdblkdnvlddsva", details),
                       
                       
                    //    <Text>{details.Project.Projectname}</Text> 
                       <TaskCard closeModal={closeModal} setSelectedTask={setSelectedTask}  updateTask={updateTask} title={details.Taskname} priorityname={details.Priority.name} tagname={details.Tags.map(tag=>tag.name).join('')} tagColor={details.Tags.map(tag=>tag.color).join('')}
                       projectname={details.Project.Projectname}
                      
                        Sessions={details.Sessions}  projectColor={details.Project.Color}  id={details.id}/> 
                        ))}
                        
                        </View>
                    </View>
                </View>
            </Modal> 
            {/* {currentPage ===1 && <Manage countvalue={1} modalVisibleval={true}/> } */}
            </KeyboardAvoidingView>
    );
};
