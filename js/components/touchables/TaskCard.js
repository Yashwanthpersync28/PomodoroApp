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

export const TaskCard = ({setSelectedTask,title,updateTask,priorityname,tagname,projectname,Sessions,tagColor,projectColor,id,prioritycolor,completed,setdata,fulldata,setTaskColor}) => {
    console.log('priorityname',priorityname)
    const taskSessions = useSelector((state)=>state.user.taskSessions.session)
console.log('taskSessions',taskSessions)
    const dispatch = useDispatch();
    return (
<View>
            <TouchableWithoutFeedback  key={id} onPress={()=>{setSelectedTask(title),updateTask(),dispatch(setLocalSession(1)),dispatch(setTaskSession(Sessions)),console.log('selectedId',id,completed),setdata(fulldata),setTaskColor(projectColor)}} style={[styles.bgWhite]}>
        <View style={[styles.row,marginPosition(10,0,10,0),{width:widthValue(1.2)},completed?{backgroundColor:'#ffffff60'}:styles.bgWhite
]}>
            <View style={[{ width: 4,height:132 ,backgroundColor: projectColor }, radius(0, 0, 0, 5, 5),]}></View>
            {/* <View style={[{ width: 3,backgroundColor: projectColor }, radius(0, 0, 0, 5, 5),]}></View> */}
            <View
                style={[
                    styles.row,
                    paddingPosition(15, 15, 5, 15),
                    borderWidth(1),
                    styles.borderLightWhite,
                    radius(0, 5, 5, 0,0),
                    completed?{backgroundColor:'#ffffff50'}:styles.bgWhite
                ]}>
                <View style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    { width: widthValue(1.3) },
                    paddingPosition(0, 0, 20,),
                    completed?{backgroundColor:'#ffffff50'}:styles.bgWhite
                ]}>
                    <View style={[styles.row, styles.selfStart,{width:widthValue(1.2)}]}>
                        {completed === false ? 
                        <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 20)]} /> :
                         <Icon name={"checkcircle"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 20)]} />}
                        <View>
                            <Text style={[completed?styles.gray:styles.black, completed && {textDecorationLine:'line-through'}, fontSize(23),{ fontWeight: '500' ,width:widthValue(2)}]}>
                                {title}
                            </Text>
                            <View style={[styles.row, marginPosition(8)]}>
                                <Text style={[styles.brown, marginPosition(0, 10),{fontWeight:'400'}]}>{priorityname}</Text>
                                <Text style={[styles.timerBlue, marginPosition(0, 10),{fontWeight:'400'}]}>{tagname}</Text>
                            </View>
                            <View style={[styles.row, marginPosition(15), styles.centerHorizontal]}>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"timer-outline"} type={Icons.MaterialCommunityIcons} style={[styles.tomotoRed, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(18),{fontWeight:'400'}]}>{Sessions}</Text>
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"sun"} type={Icons.Feather} style={[fontSize(22),marginPosition(0, 15, 0, 15) ,styles.green]} />
                                    <Icon name={"flag"} type={Icons.Feather} style={[fontSize(22), marginPosition(0, 15, 0, 10),{color:tagColor}]} />
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"bag-personal"} type={Icons.MaterialCommunityIcons} style={[{color:projectColor}, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(16),{width:170}]}>{projectname}</Text>
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
        </View>
    )
}
