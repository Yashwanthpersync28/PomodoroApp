
import React, { useEffect, useState } from 'react'
import { borderColor, borderWidth, flex ,fontSize,fontWeight,heightValue,marginPosition,padding,paddingPosition,position,radius,styles, widthValue, zIndex} from '../../styles/Styles'
import {View,Text,StatusBar,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../Manage/components/Header'
import Icon, { Icons } from '../../components/Icons'
import { ToggleButtons } from '../../components/view/ToggleButtons'
import { MiniCards } from '../Manage/components/TasklistBasedonDays/components/MiniCards'
import { Colors } from '../../styles/Colors'
import { ReportHeader } from './components/ReportHeader'
import { FocusTime } from './components/FocusTime'
import {  ProjectTimeDistribution } from './ProjectTimeDistribution'
import { ProgressCalendar } from './components/ProgressCalendar'
import { PomodoroRecords } from './components/PomodoroRecords'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { DropDown } from './components/DropDown'
import { getCompletedTasks, getCompletedTasksThisMonth, getCompletedTasksThisWeek, getCompletedTasksThisWeekOrTwoWeeks, getCompletedTasksToday, getTasksThisWeek, getTasksToday, getTodayCompletedfocusTime } from '../../constants/getCompletedTasksFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setTempToggleNames, setToggleNames } from '../../redux/userReducer/ShowPomdoroReducer'


export const Report = ({navigation}) => {
  const tasks=useSelector((state)=>state.user.userTasks.userTask)
  const [showpomodoro,setShowPomodoro]=useState(true)
  const [clickedDropdown,setClickedDropdown]=useState(true)
  const pomodoroOptions=['Weekly','Mon','Biweekly']
  const TasksOptions=['Task','Weekly','Biweekly']
  const [count,setcount]=useState(0)
  ///selectors
const Name=useSelector((state)=>state.user.ReportToggle.name)
const Togglenames=useSelector((state)=>state.user.ReportToggle.togglenames)
const TempTogglenames=useSelector((state)=>state.user.ReportToggle.temptogglenames)

console.log('Togglenames',Togglenames);
  const [name,setname]=useState(Name)
  const [headerName,setHeaderName]=useState('')
  const dispatch=useDispatch()
  // focus time
  const getTasksTodayData = getCompletedTasksToday(tasks)//get completed tasks today
  const focusTimeToday=getTodayCompletedfocusTime(getTasksTodayData)//to get focus time
  const completedTasksThisWeek=getCompletedTasksThisWeekOrTwoWeeks(tasks,1);
  const focustimethisweek=getTodayCompletedfocusTime(completedTasksThisWeek)
  const CompletedtasksTwoWeeks=getCompletedTasksThisWeekOrTwoWeeks(tasks,2)
  const focustimethisTwoWeek=getTodayCompletedfocusTime(CompletedtasksTwoWeeks)
  const CompletedtasksThisMonth=getCompletedTasksThisMonth(tasks)
  const focustimethisMonth=getTodayCompletedfocusTime(CompletedtasksThisMonth)
   
  console.log('CompletedtasksThismonth',completedTasksThisWeek);
  
useEffect(()=>{
  if(showpomodoro){
    if(Name==='Weekly'){
         setHeaderName('Pomodoro Records')
    }
    if(Name==='Monthly'){
      setHeaderName('Focus Time Goal')
    }
    if(Name==='Biweekly'){
       setHeaderName('Focus Time Chart')
     }
  }
  else{
    if(Name==='Weekly'){
      setHeaderName('Project Time Distribution')
 }
 if(Name==='Task'){
   setHeaderName('Focus Time')
 }
 if(Name==='Biweekly'){
    setHeaderName('Task Chart')
  }
  }
},[showpomodoro,Name])
console.log('Namee',Name);
  console.log('name',name);
  const [headerData, setHeaderData] = useState(Togglenames);
 
   

useEffect(() => {
  if (!showpomodoro) {
    console.log('Nameeeee',Name);
    dispatch(setName('Task'));
    const arrone=[
      { name:'Task', selected: true },
      { name:'Weekly', selected: false },
     { name:'Biweekly', selected: false }
    ]
   dispatch(setToggleNames(arrone))
    console.log('headerDatat',headerData);
  }
  else{
    dispatch(setName('Weekly'));
    console.log('Nameeeee',Name);

    const arr =[
      { name:'Weekly', selected: true },
      { name:'Monthly', selected: false },
     { name:'Biweekly', selected: false }
    ]
   dispatch(setToggleNames(arr))
    console.log('headerDatat',headerData);
  }
  
}, [showpomodoro]);


 



  return (
    <SafeAreaView style={[flex(1), paddingPosition(0, 20, 0, 20), styles.bglgWhite]}>
    <StatusBar backgroundColor={Colors.lgWhite} barStyle="dark-content" />
    {/* header */}
    <View style={[{height:heightValue(14)}]}>
      <Header
        headername={'Report'}
        IconfamilyRight={Icons.Entypo}
        IconNameRight={'dots-three-vertical'}
        onPress={() => console.log('dfg')}
        bgcolor={styles.white}
        color={styles.TextBlack}
        goBack={() => navigation.goBack()}
        showLeftIocn={false}
        IconNameLeft={'arrowleft'}
        IconfamilyLeft={Icons.AntDesign}
      />
    </View>
    
    <View style={[{height:heightValue(12)}]}>
        <ToggleButtons title1={'Pomodoro'} title2={'Tasks'} onPressProject={() => setShowPomodoro(true)} showProjects={showpomodoro} onPressTags={() => setShowPomodoro(false)} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[{height:heightValue(4.2)}]}>
          <View style={[styles.rowWrap,styles.spaceBetween,styles.centerHorizontal]}>
            <MiniCards number={showpomodoro?focusTimeToday:getTasksTodayData.length} name={showpomodoro?'Focus Time Today':'Task Completed today'}/>
            <MiniCards number={showpomodoro?focustimethisweek:completedTasksThisWeek.length} name={showpomodoro?'Focus Time This Week':'Task Completed this week'}/>
            <MiniCards number={showpomodoro?focustimethisTwoWeek:CompletedtasksTwoWeeks.length} name={showpomodoro?'Focus Time This Two Week':'Task completed this two weeks'}/>
            <MiniCards number={showpomodoro?focustimethisMonth:CompletedtasksThisMonth.length} name={showpomodoro?'Focus Time This Month':'Task completed this month'}/>
          </View>
          
     </View>
      <View>   
          <View style={[styles.bgWhite,radius(5),marginPosition(10,0,10),padding(10)]}>
             <View style={[zIndex(0)]}>
               {/* <DropDown showPomodoro={showpomodoro}  ChangeDropdownName={(name)=>setname(name)} handleDropdown={(val)=>setClickedDropdown(val)} name={name} clickedDropdown={clickedDropdown}/> */}
              
               <View style={[{ position: 'absolute', top: 10, right: 0, zIndex: 99},paddingPosition(2,12,2,12),radius(25),styles.column,borderColor(Colors.borderGray),borderWidth(1),styles.bgWhite]}>
    {clickedDropdown ? 
        <TouchableOpacity onPress={()=>setClickedDropdown(!clickedDropdown)}>
            <View style={[styles.row,paddingPosition(5,0,5,0)]}>
                <Text style={[styles.black,fontSize(18),fontWeight('bold'),marginPosition(0,0,0,5)]}>{Name}</Text>
                <View style={[{width:widthValue(16)},styles.allCenter]}>
                    <Icon name={'chevron-down'} type={Icons.Feather} style={[styles.black,fontSize(20),styles.textAlignVertical]}/>
                </View>
            </View>
        </TouchableOpacity> :
        <>
        <TouchableOpacity onPress={()=>setClickedDropdown(!clickedDropdown)}>
        <View style={[styles.row,paddingPosition(5,0,5,0)]}>
            <Text style={[styles.Orange,fontSize(18),fontWeight('bold'),marginPosition(0,0,0,5)]}>{Name}</Text>
        </View>
    </TouchableOpacity>
    {Togglenames
  .filter((headerItem) => headerItem.name !== Name)
  .map((headerItem, index) => (
    <TouchableOpacity
      onPress={() => {
        setClickedDropdown(!clickedDropdown);
        dispatch(setName(headerItem.name));
      }}
      key={index}
    >
      <View style={[styles.row, index===2 ? borderColor('white'):borderColor('#f2f0f0'), index===2 ? borderWidth(0,1): borderWidth(0, 1), paddingPosition(5, 0, 5, 0), styles.selfStart]}>
        <View style={[styles.bgWhite]}>
          <Text style={[styles.black, fontSize(18), fontWeight('bold'), marginPosition(0, 0, 0, 5)]}>{headerItem.name}</Text>
        </View>
        <View>
          <Icon name={'chevron-down'} type={Icons.Feather} style={[styles.black, fontSize(20), styles.textAlignVertical]} />
        </View>
      </View>
    </TouchableOpacity>
  ))}

      </>}
</View>

      {/* header */}
               <View style={[{height:heightValue(12)},styles.centerVertical,borderColor(Colors.borderGray),borderWidth(0,0,0,1)]}>
                   <Text style={[styles.black,fontSize(22),fontWeight('bold')]}>{headerName}</Text>
               </View>
    {/* //pomodoro records */}
              <View style={[zIndex(0)]}>
                     <TouchableWithoutFeedback onPress={()=>setClickedDropdown(true)}>
                     {showpomodoro ? 
                         (Name === 'Weekly' && <PomodoroRecords />) ||
                         (Name === 'Monthly' && <ProgressCalendar />) ||
                         (Name === 'Biweekly' && <PomodoroRecords />)
                           : 
                         (Name === 'Task' && <FocusTime />) ||
                         (Name === 'Weekly' && <ProjectTimeDistribution />) ||
                         (Name === 'Biweekly' && <FocusTime />)
                      }

                     </TouchableWithoutFeedback>
               </View>
         </View>
           
          </View>
        </View>


     
     </ScrollView>
    
    </SafeAreaView>
  )
}
