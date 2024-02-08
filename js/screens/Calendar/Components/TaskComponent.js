import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { flex, margin, styles, widthValue,padding, marginPosition,radius ,fontSize, heightValue} from '../../../styles/Styles'
import { useSelector } from 'react-redux'
import { TaskCard } from '../../../components/touchables/TaskCard'
 export const TaskComponent = ({tasks,completedTasks}) => {
    const userTask = useSelector((state)=>state.user.userTasks.userTask)
    const pendingTasks = userTask.filter(task=>task.completed === false);
    // const completedTasks = userTask.filter(task=>task.completedDate === );
    const setSelectedTask= console.log('hi')
  return (
      <ScrollView showsVerticalScrollIndicator={false} style={[ padding(0, 0, 20, 0, 0)]}>
        <View style={[{marginLeft:5}]}>
        {tasks.map((details)=>(  
          // <Text style={[{color:details.Priority.color}]}>{details.Priority.color}</Text>
      <TaskCard  title={details.Taskname} priorityname={details.Priority.name} tagname={details.Tags.map(tag=>tag.name).join('')} tagColor={details.Tags.map(tag=>tag.color).join('')}
                       projectname={details.Project.Projectname}
                        Sessions={details.Sessions}  projectColor={details.Project.Color} key={details.id} id={details.id} setSelectedTask={setSelectedTask} prioritycolor={details.Priority.color} completed={false}
                        />  
                        ))}
                         </View>
                         <View>
                            <Text style={[styles.gray,fontSize(16),margin(0,10,10)]}>Completed Tasks</Text> 
                            {completedTasks.map((details)=>(  
      <TaskCard  title={details.Taskname} priorityname={details.Priority.name} tagname={details.Tags.map(tag=>tag.name).join('')} tagColor={details.Tags.map(tag=>tag.color).join('')}
                       projectname={details.Project.Projectname}
                        Sessions={details.Sessions}  projectColor={details.Project.Color} key={details.id} id={details.id} setSelectedTask={setSelectedTask} prioritycolor={details.Priority.color} completed={true}/> 
                        
                        ))}
                         </View>
      </ScrollView>
  )
}
