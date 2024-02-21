import React, { useEffect, useState } from 'react';
import { View , Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Pie from 'react-native-pie';
import { flex, fontSize, fontWeight, heightValue, marginPosition, position, styles, widthValue } from '../../styles/Styles';
import { Colors } from '../../styles/Colors';
import Icon, { Icons } from '../../components/Icons';
import { calculateFocusTime, getCompletedTasks, getTodayCompletedfocusTime } from '../../constants/getCompletedTasksFunctions';
import { useSelector } from 'react-redux';
import { NotaskFound } from '../../components/view/NotaskFound';

export const ProjectTimeDistribution = () => {
 
  const ListofProjects=useSelector((state)=>state.user.userProjectList.UserProjects);
  const UserTasks=useSelector((state)=>state.user.userTasks.userTask);
  const [totalFocustime,setFocustime]=useState('0h')
  const [Projectdata,setProjectdata]=useState([])
useEffect(()=>{
  const getCompletedtasks=getCompletedTasks(UserTasks)
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
    return { projectName: project.name, focusTime: ress , color: color,percentage:'50%'};
  });
  setProjectdata(datatwo)
},[])

const data=[{projectName:'Pomodoroo',color:Colors.Orange,focusTime:'15h 20m',percentage:'50%'},
{projectName:'twf',color:Colors.green,focusTime:'12h 20m',percentage:'40%'},
{projectName:'zam-zam',color:Colors.purple,focusTime:'3h 20m',percentage:'10%'},
{projectName:'samrtBijule',color:Colors.WaterBlue,focusTime:'2h 20m',percentage:'5%'},
{projectName:'ShareApi',color:Colors.blue,focusTime:'10h 20m',percentage:'35%'}
]
  return (
    <>
    {Projectdata.length>0 ?
    <View style={[flex(1),styles.allCenter]}>
      <View style={[marginPosition(20),styles.positionRelative,{height:heightValue(4)},styles.allCenter]}>
      <Pie
              radius={50}
              innerRadius={42}
              sections={[
                {
                  percentage: 10,
                  color: Colors.purple,
                },
                {
                  percentage: 20,
                  color: Colors.green,
                },
                {
                  percentage: 10,
                  color: Colors.LightGold,
                },
                {
                  percentage: 10,
                  color: Colors.WaterBlue,
                },
                {
                  percentage: 10,
                  color: Colors.Orange,
                },
                {
                  percentage: 20,
                  color: Colors.SmokePink,
                },
                {
                  percentage: 20,
                  color: Colors.blue,
                }
              ]}
              strokeCap={'butt'}
            />
            <View style={[styles.positionAbsolute,styles.allCenter]}>
                     <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>{totalFocustime}</Text>
               </View>
            </View>
            <View style={[{width:widthValue(1.2)},marginPosition(10,0,10),styles.spaceBetween,styles.rowWrap]}>
               {Projectdata.map((project,index)=>{
                return(
                 
                  <View style={[styles.row,styles.centerHorizontal,{width:widthValue(3)},marginPosition(10)]}>
                       <View style={[styles.centerHorizontal,{width:widthValue(16)}]}>
                            <Icon name={'briefcase'} type={Icons.Entypo} style={[fontSize(24),styles.textAlignVertical,{color:project.color}]}/>
                       </View>
                       <View style={[styles.column,marginPosition(0,0,0,10)]}>
                           <Text style={[styles.black,fontSize(18),fontWeight('bold')]}>{project.projectName}</Text>
                           <Text style={[styles.gray,fontSize(13)]}>{`${project.focusTime} - ${project.percentage}`}</Text>
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


