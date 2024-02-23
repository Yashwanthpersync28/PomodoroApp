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
const [tempdata,settemp]=useState([])
  // Example data
 useEffect(()=>{
  const datatwo = ListofProjects.map((project) => {
   
    // Filter UserTasks for this project
    const projectTasks = UserTasks.filter((task) => task.Project.Projectname === project.name);
    const getcompletedtasks=getCompletedTasks(projectTasks)
    
    // const color=projectTasks[0]
    // console.log('cvgbhnj',color.Project.Color);
    // console.log('color',color);
    console.log('projectTasks',projectTasks);
    // Calculate total focus time for this project
    const ress=calculateFocusTime(getcompletedtasks)
    const time=getTodayCompletedfocusTime(getcompletedtasks)
    console.log('ress',ress);
    return { name: project.name, value: ress , color: 'green' , time:time};
  });
  console.log('datatwo',datatwo);
  settemp(datatwo)



 },[ListofProjects])
  

  const maxFocusTime = Math.max(...tempdata.map((item) => item.value));
  
  tempdata.sort((a, b) => b.value - a.value);//sorting for highest to lowest
  return (
    <>
    {tempdata.length>0 ?
    <View style={[{ flexDirection: 'column', justifyContent: 'space-around' }]}>
      
      {tempdata.map((progress, index) => (
        <View key={index} style={[marginPosition(10, 10, 10, 10)]}>
          <Text style={[Darkmode?styles.inputColor:styles.black, fontSize(14)]}>{tempdata[index].name}</Text>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <ProgressBar
              progress={progress.value / maxFocusTime}
              width={maxFocusTime ? 250 : 0}
              color={tempdata[index].color} // Set color based on index
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
