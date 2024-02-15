import { View, Text, SafeAreaView,StatusBar ,TouchableOpacity, Image, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { flex, margin, styles, widthValue,padding, marginPosition,radius,paddingPosition ,fontSize, heightValue} from '../../styles/Styles'
import { Header } from '../Manage/components/Header'
import Icon, { Icons } from '../../components/Icons'
import { ToggleButtons } from '../../components/view/ToggleButtons'
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import {DateSwiper} from './Components/DateSwiper'
import { TaskCard } from '../../components/touchables/TaskCard'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { notePad } from '../../constants/LottieConstants'
import { notepad } from '../../constants/imageConstant'
import { TaskComponent } from './Components/TaskComponent'
import { MonthScreen } from './Components/MonthScreen'
import { shadow } from 'react-native-paper'
import { AddTask } from '../Manage/components/AddTask/AddTask'


export const CalendarScreen = () => {
  const userTask = useSelector((state) => state.user.userTasks.userTask);
  const [showLists, setShowList] = useState(true);
  const [taskVisible,setTaskVisible] = useState(false)
  // const [isEmpty, setIsEmpty] = useState(false);

  const date = new Date()
  const [value,setValue] = useState(date)
  console.log('valueselecteddate',value);


  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  
  useEffect(() => {
    // Filter tasks based on selected date
    const selectedDateTasks = userTask.filter((task) => {
      const taskDueDate = new Date(task.Duedate);
      taskDueDate.setDate(taskDueDate.getDate() - 1);
      const taskDueDateFormat = taskDueDate.toISOString().split('T')[0];
      const selectedDateFormat = value.toISOString().split('T')[0];
      return taskDueDateFormat === selectedDateFormat && !task.completed;
    });
    setTasks(selectedDateTasks);
  
    const selectedCompletedTasks = userTask.filter((task) => {
      if (task.completedDate) {
        const completedDate = new Date(task.completedDate);
        completedDate.setDate(completedDate.getDate() - 1);
        const completedDateFormat = completedDate.toISOString().split('T')[0];
        const selectedDateFormat = value.toISOString().split('T')[0];
        return completedDateFormat === selectedDateFormat;
      }
      return false; // Filter out tasks without completedDate
    });
    setCompletedTasks(selectedCompletedTasks);
  }, [value, userTask]); // Include userTask in the dependencies array
  
  useEffect(() => {
    // Filter tasks for today initially
    const todayTasks = userTask.filter((task) => {
      const taskDueDate = new Date(task.Duedate);
      const taskDueDateFormat = taskDueDate.toISOString().split('T')[0];
      const todayDateFormat = value.toISOString().split('T')[0];
      return taskDueDateFormat === todayDateFormat && !task.completed;
    });
    setTasks(todayTasks);
  
    const completedTodayTasks = userTask.filter((task) => {
      if (task.completedDate) {
        const completedDate = new Date(task.completedDate);
        const completedDateFormat = completedDate.toISOString().split('T')[0];
        const todayCompletedDayFormat = value.toISOString().split('T')[0];
        return completedDateFormat === todayCompletedDayFormat;
      }
      return false; // Filter out tasks without completedDate
    });
    setCompletedTasks(completedTodayTasks);
  }, [userTask]); // Include userTask in the dependencies array
  

// console.log('Tasks filtered with selected date:', filteredTasks);
console.log('renderTaskArray',tasks)


  return (
    <SafeAreaView style={[styles.bgWhiteSmoke, flex(1), styles.center]}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <View style={[{height:heightValue(12)}, padding(0, 0, 20, 0, 20),]}>
      <Header headername={'Calendar'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'} color={styles.black}/>
      </View>
      <View style={[{height:heightValue(10)}, padding(0, 0, 20, 0, 20),]}>
      <ToggleButtons title1={'List'} title2={'Month'} showProjects={showLists} onPressTags={()=>setShowList(false)} onPressProject={()=>setShowList(true)}/>
      </View>
      {showLists ? (
        <View style={[{height:heightValue(9)}, { width: widthValue(1) },]}>
          <DateSwiper  value={value} setValue={setValue}/>
        </View>
      ) : null}

      {showLists ? (
        <View style={[{minHeight:heightValue(1)}]}>
          {tasks.length === 0 && completedTasks.length === 0 ? (
            <View style={[{height:heightValue(1.2), width: widthValue(1) }, styles.selfStart, styles.centerHorizontal,paddingPosition(40,0,0,0)]}>
              <Image source={notepad} style={[{ width: widthValue(1.8), height: widthValue(1.8) },shadow(10)]} />
              <Text style={[styles.black, fontSize(25), { fontWeight: '600' }]}>Empty</Text>
              <Text style={[styles.gray, fontSize(18), { fontWeight: '400' }, margin(0, 10)]}>You have not added any task on this date</Text>
            </View>
          ) : (
            <TaskComponent  tasks={tasks} completedTasks={completedTasks}/>
          )}
        </View>
      ) : (
        <MonthScreen />
      )}

      <View style={[styles.positionAbsolute, { bottom: 15, right: 10, zIndex: 1, height: 50, width: 50 }, styles.allCenter, styles.bgOrange, radius(30)]}>
        <TouchableOpacity onPress={()=>setTaskVisible(true)}>
          <Icon name={'plus'} type={Icons.Entypo} style={[styles.white, fontSize(30)]} />
        </TouchableOpacity>
        {taskVisible && <AddTask visible={taskVisible} onClose={()=>setTaskVisible(false)} count={0}/>}


      </View>
    </SafeAreaView>
  );
};

