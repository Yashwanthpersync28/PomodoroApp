import { View, Text, SafeAreaView,StatusBar ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { flex, margin, styles, widthValue,padding, marginPosition,radius ,fontSize} from '../../styles/Styles'
import { Header } from '../Manage/components/Header'
import Icon, { Icons } from '../../components/Icons'
import { ToggleButtons } from '../../components/view/ToggleButtons'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import {DateSwiper} from './Components/DateSwiper'
import { TaskCard } from '../../components/touchables/TaskCard'
import { useSelector } from 'react-redux'

export const Calendar = () => {

  const userTask = useSelector((state)=>state.user.userTasks.userTask)
  const [showLists,setShowList] = useState(true)
  return (
    <SafeAreaView style={[styles.bgWhite,flex(1), { justifyContent: 'flex-start' }, styles.center]}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={[flex(.1), padding(0, 0, 20, 0, 20),]}>
      <Header headername={'Calendar'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'}/>
      </View>
      <View style={[flex(.15), padding(0, 0, 20, 0, 20),]}>
      <ToggleButtons title1={'List'} title2={'Month'} showProjects={showLists} onPressTags={()=>setShowList(false)} onPressProject={()=>setShowList(true)}/>
      </View>
      <View style={[flex(.2),{width:widthValue(1)}]}>
        <DateSwiper />
      </View>
      <View style={[ padding(0, 0, 20, 0, 20)]}>
        {userTask.map((details)=>(
      <TaskCard  title={details.Taskname} priorityname={details.Priority.name} tagname={details.Tags.map(tag=>tag.name).join('')} tagColor={details.Tags.map(tag=>tag.color).join('')}
                       projectname={details.Project.Projectname}
                      
                        Sessions={details.Sessions}  projectColor={details.Project.Color}  id={details.id}/> 
                        ))}
      </View>
      <View style={[{bottom: 15,right: 10, zIndex: 1, height:50, width:50,},styles.positionAbsolute,styles.allCenter,styles.bgOrange,radius(30)]}>
          <TouchableOpacity>
               <Icon name={'plus'} type={Icons.Entypo} style={[styles.white,fontSize(30)]}/>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};


