import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { flex, fontSize, marginPosition, styles } from '../components/../../../styles/Styles';
import { useSelector } from 'react-redux';
import { calculateFocusTime, getCompletedTasks, getTodayCompletedfocusTime } from '../../../constants/getCompletedTasksFunctions';
import { NotaskFound } from '../../../components/view/NotaskFound';

export const FocusTime = () => {
  const ListofProjects=useSelector((state)=>state.user.userProjectList.UserProjects);
  const UserTasks=useSelector((state)=>state.user.userTasks.userTask);
  const [projectlength,setProjectLength]=useState(false)
const Darkmode=useSelector((state)=>state.system.darkMode);
const [completedproject,setCompletedProject]=useState([])

const [maxFocusTime,setmaxFocusTime]=useState(0);
const [tempdata,settemp]=useState([])
  // Example data
 useEffect(()=>{
  const datatwo = ListofProjects.map((project) => {
   
    // Filter UserTasks for this project
    const projectTasks = UserTasks.filter((task) => task.Project.Projectname === project.name && task.completed===true);
    console.log('projectTasks',projectTasks);
    const getcompletedtasks=getCompletedTasks(projectTasks)
    console.log('getcompletedtasks',getcompletedtasks);
  
  if(projectTasks.length>0){
    const  bgcolor=projectTasks[0].Project.Color 
  // const bgcolor='orange'
  setCompletedProject(projectTasks)
    console.log('projectTasks',projectTasks);
    // Calculate total focus time for this project
    const ress=calculateFocusTime(getcompletedtasks)
    const time=getTodayCompletedfocusTime(getcompletedtasks)
    console.log('ress',ress);
    return { name: project.name, value: ress , color: bgcolor , time:time};
  }
  else{
   return { name:'no', value: 0 , color: 'red' , time:'0'}
  }
  });
  console.log('datatwo',datatwo);
  const update=datatwo.filter((fil)=>{
    return fil.name !='no'
  })
  settemp(update)

  const max = Math.max(...tempdata.map((item) => item.value));
setmaxFocusTime(max)

 },[UserTasks])
  
console.log('dxfcgvhbjn',tempdata);
  // const maxFocusTime = Math.max(...tempdata.map((item) => item.value));
  
  tempdata.sort((a, b) => b.value - a.value);//sorting for highest to lowest
  return (
    <>
    {completedproject.length>0 ?
    <View style={[{ flexDirection: 'column', justifyContent: 'space-around' }]}>
      
      {tempdata.map((progress, index) => (
        <View key={index} style={[marginPosition(10, 10, 10, 10)]}>
          <Text style={[Darkmode?styles.inputColor:styles.black, fontSize(14)]}>{tempdata[index].name}</Text>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <ProgressBar
              progress={maxFocusTime ? (progress.value / maxFocusTime) : 0}
              width={maxFocusTime ? 250 : 0}
              color={progress.color} // Set color based on index
              borderColor={'blue'}
              borderWidth={0}
            />
            <Text style={[Darkmode?styles.inputColor:styles.black, fontSize(14), marginPosition(0,0,0,10)]}>{progress.time}</Text>
          </View>
        </View>
      ))}

      
    </View>:<View>
      <NotaskFound name={'No projects completed'}/>
      </View>}
    </>

  );
};
