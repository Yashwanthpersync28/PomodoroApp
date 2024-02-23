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
    heightValue,
} from '../../../styles/Styles';
import Icon, { Icons } from '../../../components/Icons';

export const TaskCardList = ({title,priorityname,tagname,projectname,Sessions,tagColor,projectColor,id,completed}) => {
  const darkMode = useSelector(state=>state.system.darkMode)

    console.log('priorityname',priorityname)
    const taskSessions = useSelector((state)=>state.user.taskSessions.session)
console.log('taskSessions',taskSessions)
    const dispatch = useDispatch();
    return (
<View>
            <TouchableWithoutFeedback  key={id}  style={[darkMode?styles.bgtaskCardDblack:styles.bgWhite]}>
        <View style={[styles.row,marginPosition(10,0,10,0),{width:widthValue(1.2)},completed?{backgroundColor:'#ffffff60'}:(darkMode?styles.bgtaskCardDblack:styles.bgWhite),radius(0,5,5,0,0)
]}>
            <View style={[{ width: 4,height:147 ,backgroundColor: projectColor }, radius(0, 0, 0, 5, 5),]}></View>
            <View
                style={[
                    styles.row,
                    paddingPosition(15, 15, 5, 15),
                    borderWidth(1),
                    darkMode?styles.borderDarkmode:styles.borderLightWhite,
                    radius(0, 5, 5, 0,0),
                    completed?{backgroundColor:darkMode?'#20222a':'#ffffff50'}:(darkMode?styles.bgtaskCardDblack:styles.bgWhite)
                ]}>
                <View style={[
                    styles.row,
                    styles.spaceBetweenVertical,
                    { width: widthValue(1.35) },
                    paddingPosition(0, 0, 10,),
                    radius(0, 5, 5, 0,0),

                    completed?{backgroundColor:darkMode?'#20222a':'#ffffff50'}:(darkMode?styles.bgtaskCardDblack:styles.bgWhite)
                ]}>
                    <View style={[styles.row, styles.selfStart,{width:widthValue(1.2)}]}>
                        {completed === false ? 
                        <Icon name={"circle"} type={Icons.Entypo} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 20)]} /> :
                         <Icon name={"checkcircle"} type={Icons.AntDesign} style={[styles.tomotoRed, fontSize(30), marginPosition(0, 20)]} />}
                        <View>
                            <Text style={[completed?darkMode?styles.lightishGray:styles.gray:(darkMode?styles.lightWhite:styles.black), completed && {textDecorationLine:'line-through'}, fontSize(23),{ fontWeight: '500' ,width:widthValue(2)}]}>
                                {title}
                            </Text>
                            <View style={[styles.row, marginPosition(8)]}>
                                <Text style={[styles.brown, marginPosition(0, 10),{fontWeight:'400'}]}>{priorityname}</Text>
                                <Text style={[styles.timerBlue, marginPosition(0, 10),{fontWeight:'400'}]}>{tagname}</Text>
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
                                <View style={[styles.row, styles.centerHorizontal,]}>
                                    <Icon name={"bag-personal"} type={Icons.MaterialCommunityIcons} style={[{color:projectColor}, fontSize(22), marginPosition(0, 8)]} />
                                    <Text style={[fontSize(16),{width:widthValue(3.5)},darkMode?styles.lightishGray:styles.black]}>{projectname}</Text>
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
