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
} from '../../styles/Styles';
import Icon, { Icons } from '../Icons';
import { Taskdata } from '../../constants/Taskdata';
import { setTaskSession } from '../../redux/userReducer/taskSessionsReducer';
import { setLocalSession } from '../../redux/userReducer/localSessionReducer';

export const TaskCard = ({setSelectedTask,title,updateTask,priorityname,tagname,projectname,Sessions,tagColor,projectColor,id}) => {

    console.log('priorityname',priorityname)
    const taskSessions = useSelector((state)=>state.user.taskSessions.session)
console.log('taskSessions',taskSessions)

    const dispatch = useDispatch();
    return (
<View>
            <TouchableWithoutFeedback  key={id} onPress={()=>{setSelectedTask(title),updateTask(),dispatch(setLocalSession(1)),dispatch(setTaskSession(Sessions))}}>
        <View style={[styles.row,marginPosition(10,0,0),{width:widthValue(1.2)}]}>
            <View style={[{ width: 2, }, styles.bgbrown, radius(0, 0, 0, 5, 5),]}></View>
            <View
                style={[
                    styles.row,
                    paddingPosition(15, 15, 5, 15),
                    borderWidth(1),
                    styles.borderLightWhite,
                    radius(0, 5, 5, 0,),
                ]}>
                <View style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    { width: widthValue(1.3) },
                    paddingPosition(0, 0, 20,),
                ]}>
                    <View style={[styles.row, styles.selfStart,]}>
                        <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(35), marginPosition(0, 20)]} />
                        <View>
                            <Text style={[styles.black, fontSize(23),{ fontWeight: '500' }]}>
                                {title}
                            </Text>
                            <View style={[styles.row, marginPosition(5)]}>
                                <Text style={[styles.brown, marginPosition(0, 5)]}>{priorityname}</Text>
                                <Text style={[styles.timerBlue, marginPosition(0, 5)]}>{tagname}</Text>
                                <Text style={[styles.purple, marginPosition(0, 5)]} >{projectname}</Text>
                            </View>
                            <View style={[styles.row, marginPosition(8), styles.centerHorizontal]}>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"timer-outline"} type={Icons.MaterialCommunityIcons} style={[styles.tomotoRed, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(16)]}>{Sessions}</Text>
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"sun"} type={Icons.Feather} style={[fontSize(22),marginPosition(0, 8, 0, 10) ,styles.green]} />
                                    <Icon name={"flag"} type={Icons.Feather} style={[fontSize(22), marginPosition(0, 12, 0, 10),{color:tagColor}]} />
                                </View>
                                <View style={[styles.row, styles.centerHorizontal]}>
                                    <Icon name={"bag-personal"} type={Icons.MaterialCommunityIcons} style={[{color:projectColor}, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(16)]}>{projectname}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[{ width: 25, height: 25, borderRadius: 13 }, styles.bgtomotoRed, styles.allCenter]}>
                    <Icon name={"play"} type={Icons.FontAwesome} style={[styles.white, fontSize(15)]} />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </View>
    )
}
