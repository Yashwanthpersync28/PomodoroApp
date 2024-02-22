import React, { useEffect, useState } from 'react';
import { View , Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Pie from 'react-native-pie';
import { flex, fontSize, fontWeight, heightValue, marginPosition, paddingPosition, position, styles, widthValue } from '../../styles/Styles';
import { Colors } from '../../styles/Colors';
import Icon, { Icons } from '../../components/Icons';
import { calculateFocusTime, getCompletedTasks, getTodayCompletedfocusTime } from '../../constants/getCompletedTasksFunctions';
import { useSelector } from 'react-redux';
import { NotaskFound } from '../../components/view/NotaskFound';

export const ProjectTimeDistribution = ({Darkmode}) => {
 
  const ListofProjects=useSelector((state)=>state.user.userProjectList.UserProjects);
  const UserTasks=useSelector((state)=>state.user.userTasks.userTask);
  const [totalFocustime,setFocustime]=useState('0h')
  const [Projectdata,setProjectdata]=useState([])
useEffect(()=>{
  const getCompletedtasks=getCompletedTasks(UserTasks)
  const totalFocusTimeInMinutes = calculateFocusTime(getCompletedtasks);
  console.log('totalFocusTimeInMinutesghjvhbkjn',totalFocusTimeInMinutes);
  const totalfocusTime=getTodayCompletedfocusTime(getCompletedtasks)
  setFocustime(totalfocusTime)
  const datatwo = ListofProjects.map((project) => {
   
    // Filter UserTasks for this project
    const projectTasks = UserTasks.filter((task) => task.Project.Projectname === project.name);
    const getcompletedtasks=getCompletedTasks(projectTasks)
    
    const color=projectTasks[0].Project.Color
    console.log('color',color);
    console.log('projectTasks',projectTasks);
    // Calculate total focus time for this project
    const ress=getTodayCompletedfocusTime(getcompletedtasks)
    console.log('ress',ress);
   
    const projectFocusTimeInMinutes = calculateFocusTime(getcompletedtasks);

    const percentage = ((projectFocusTimeInMinutes / totalFocusTimeInMinutes) * 100).toFixed(2);
    return { projectName: project.name, focusTime: ress , color: color,percentage: percentage};
  });
  setProjectdata(datatwo)
},[UserTasks])


  return (
    <>
    {Projectdata.length>0 ?
    <View style={[flex(1),styles.allCenter]}>
      <View style={[marginPosition(20),styles.positionRelative,{height:heightValue(4)},styles.allCenter]}>
      <Pie
              radius={50}
              innerRadius={42}
              sections={
                Projectdata.map((data) => ({
                  percentage: parseFloat(data.percentage), // Parse percentage as a float
                  color: data.color
                }))
              }
              strokeCap={'butt'}
            />
            <View style={[styles.positionAbsolute,styles.allCenter]}>
                     <Text style={[Darkmode?styles.inputColor:styles.black,fontSize(20),fontWeight('bold')]}>{totalFocustime}</Text>
               </View>
            </View>
            <View style={[{width:widthValue(1.2)},marginPosition(10,0,10),styles.spaceBetween,styles.rowWrap,paddingPosition(0,10,0,10)]}>
               {Projectdata.map((project,index)=>{
                return(
                 
                  <View style={[styles.row,styles.centerHorizontal,{width:widthValue(3.2)},marginPosition(10)]}>
                       <View style={[styles.centerHorizontal,{width:widthValue(16)}]}>
                            <Icon name={'briefcase'} type={Icons.Entypo} style={[fontSize(24),styles.textAlignVertical,{color:project.color}]}/>
                       </View>
                       <View style={[styles.column,marginPosition(0,0,0,10)]}>
                           <Text style={[Darkmode?styles.inputColor:styles.black,fontSize(18),fontWeight('bold')]}>{project.projectName}</Text>
                           <Text style={[Darkmode?styles.smokeGray:styles.gray,fontSize(13),marginPosition(2)]}>{`${project.focusTime} - ${project.percentage}%`}</Text>
                      </View>
                  </View>        
           
                )
               })}
                </View>
               
              
    </View>:<View>
      <NotaskFound name={'No project completed'}/>
      </View>}
    </>
  );
};


