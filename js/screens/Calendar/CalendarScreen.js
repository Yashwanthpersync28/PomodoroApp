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


export const CalendarScreen = () => {
  const userTask = useSelector((state) => state.user.userTasks.userTask);
  const [showLists, setShowList] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const [value,setValue] = useState()
  console.log('dhbvsk',value);
  // const [value, setValue] = useState(new Date().toDateString());

  const selecteddateformat = value ? value.toISOString().split('T')[0]:new Date().toISOString().split('T')[0];
  console.log(value,'value',selecteddateformat,'selecteddateformat')

  const tasks = [];
  const filteredTasks = userTask.filter((task) => task.Duedate === selecteddateformat);

filteredTasks.forEach((task)=>{
    tasks.push(task)
  }
)

console.log('Tasks filtered with selected date:', filteredTasks);
console.log('renderTaskArray',tasks)

  useEffect(() => {
    if (showLists && !isEmpty) {
      console.log('Dates with tasks:', filteredTasks.map((task) => task.Duedate));
    }
  }, [showLists, isEmpty, filteredTasks]);

  return (
    <SafeAreaView style={[styles.bgWhiteSmoke, flex(1), styles.center]}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={[flex(.1), padding(0, 0, 20, 0, 20),]}>
      <Header headername={'Calendar'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'}/>
      </View>
      <View style={[flex(.15), padding(0, 0, 20, 0, 20),]}>
      <ToggleButtons title1={'List'} title2={'Month'} showProjects={showLists} onPressTags={()=>setShowList(false)} onPressProject={()=>setShowList(true)}/>
      </View>
      {showLists ? (
        <View style={[flex(.15), { width: widthValue(1) }, paddingPosition(20)]}>
          <DateSwiper handleValue={(value)=>setValue(value)}/>
        </View>
      ) : null}

      {showLists ? (
        <View style={flex(.7)}>
          {isEmpty && filteredTasks.length === 0 ? (
            <View style={[flex(.8), styles.selfStart, styles.centerHorizontal, { width: widthValue(1) }, styles.allCenter]}>
              <Image source={notepad} style={{ width: widthValue(1.8), height: widthValue(1.8) }} />
              <Text style={[styles.black, fontSize(25), { fontWeight: '600' }]}>Empty</Text>
              <Text style={[styles.gray, fontSize(18), { fontWeight: '400' }, margin(0, 10)]}>You have not added any task on this date</Text>
            </View>
          ) : (
            <TaskComponent  tasks={tasks} />
          )}
        </View>
      ) : (
        <MonthScreen />
      )}

      <View style={[styles.positionAbsolute, { bottom: 15, right: 10, zIndex: 1, height: 50, width: 50 }, styles.allCenter, styles.bgOrange, radius(30)]}>
        <TouchableOpacity>
          <Icon name={'plus'} type={Icons.Entypo} style={[styles.white, fontSize(30)]} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

