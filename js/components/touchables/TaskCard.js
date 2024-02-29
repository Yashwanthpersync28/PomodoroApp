import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch,
    TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    styles,
    widthValue,
    radius,
    fontSize,
    paddingPosition,
    marginPosition,
    borderWidth,
    margin,
} from '../../styles/Styles';
import Icon, { Icons } from '../Icons';
import { Taskdata } from '../../constants/Taskdata';
import { setTaskSession } from '../../redux/userReducer/taskSessionsReducer';
import { setLocalSession } from '../../redux/userReducer/localSessionReducer';
import { set } from 'react-native-reanimated';
import { setCurrentModal } from '../../redux/userReducer/modalReducer';
import { current } from '@reduxjs/toolkit';
import { Logout } from '../../screens/SettingsScreen/Logout/Logout';

export const TaskCard = ({setSelectedTask,title,updateTask,priorityname,tagname,projectname,Sessions,tagColor,projectColor,id,prioritycolor,completed,setdata,fulldata,setTaskColor,isTimerActive,currentModal,setDisplaySession}) => {
    console.log('priorityname',priorityname)
    const taskSessions = useSelector((state)=>state.user.taskSessions.session)
  const sessionNumber = useSelector((state)=>state.user.taskSessions.session);
  const localSession = useSelector((state)=>state.user.localSession.localSession);


console.log('taskSessionsffffg',Sessions)
    const dispatch = useDispatch();
    const darkMode = useSelector(state=>state.system.darkMode)

    const checkPrevTask = ()=>{
        if(isTimerActive){
            dispatch(setCurrentModal(22))
        }
    }
    return (
<View>
            <TouchableWithoutFeedback  key={id} onPress={()=>{setSelectedTask(title),updateTask(sessionNumber),checkPrevTask(),dispatch(setLocalSession(1)),dispatch(setTaskSession(Sessions)),console.log('selectedId',id,completed),setdata(fulldata),setTaskColor(projectColor),setDisplaySession(`${localSession} of ${sessionNumber} Sessions`)}} style={[darkMode?styles.bgdarkmodeBlack:styles.bgWhite]}>
                    
        <View style={[styles.row,marginPosition(10,0,10,0),{width:widthValue(1.15)},completed?{backgroundColor:'#ffffff60'}:darkMode?styles.bgtaskCardDblack:styles.bgWhite,
]}>
            <View style={[{ width: 4,height:132 ,backgroundColor: projectColor }, radius(0, 0, 0, 5, 5),]}></View>
            <View
                style={[
                    styles.row,
                    paddingPosition(15, 15, 5, 10),
                    borderWidth(1),
                    darkMode?styles.borderDarkmode:styles.borderLightWhite,
                    radius(0, 5, 5, 0,0),
                    completed?{backgroundColor:'#ffffff50'}:darkMode?styles.bgtaskCardDblack:styles.bgWhite
                ]}>
                <View style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    { width: widthValue(1.4) },
                    paddingPosition(0, 0, 15,0),
                    completed?{backgroundColor:'#ffffff50'}:darkMode?styles.bgtaskCardDblack:styles.bgWhite
                ]}>
                    <View style={[styles.row, styles.selfStart,{width:widthValue(1)}]}>
                        {completed === false ? 
                        <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 10)]} /> :
                         <Icon name={"checkcircle"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 10)]} />}
                        <View>
                            <Text style={[completed?styles.gray:(darkMode?styles.lightWhite:styles.black), completed && {textDecorationLine:'line-through'}, fontSize(23),{ fontWeight: '500' ,width:widthValue(2)}]}>
                                {title}
                            </Text>
                            <View style={[styles.row, marginPosition(8)]}>
                                <Text style={[{color:prioritycolor}, marginPosition(0, 10),{fontWeight:'400'}]}>{priorityname}</Text>
                                <Text style={[{color:projectColor}, marginPosition(0, 10),{fontWeight:'400',width:170}]}>{tagname}</Text>
                            </View>
                            <View style={[styles.row, marginPosition(15), styles.centerHorizontal]}>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"timer-outline"} type={Icons.MaterialCommunityIcons} style={[styles.tomotoRed, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(18),{fontWeight:'400'},darkMode?styles.lightishGray:styles.black]}>{Sessions}</Text>
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"sun"} type={Icons.Feather} style={[fontSize(22),marginPosition(0, 15, 0, 15) ,styles.green]} />
                                    <Icon name={"flag"} type={Icons.Feather} style={[fontSize(22), marginPosition(0, 15, 0, 10),{color:tagColor}]} />
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"bag-personal"} type={Icons.MaterialCommunityIcons} style={[{color:projectColor}, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(16),{width:170},darkMode?styles.lightishGray:styles.black]}>{projectname}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[{ width: 25, height: 25, borderRadius: 13 ,marginTop:-3}, styles.bgtomotoRed, styles.allCenter]}>
                    <Icon name={"play"} type={Icons.FontAwesome} style={[styles.white, fontSize(14)]} />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>

    {/* {currentModal === 22 && <Logout HeaderName={'Switch Timer Mode'} VisibleAt={currentModal === 22} question={'Are you sure you want to cancel task and switch Timer'} option1={'No'} option2={'Yes'} OnPress1={closeModal} OnPress2={()=>{closeTask(),closeModal()}}/>} */}
        
        </View>
    )
}
