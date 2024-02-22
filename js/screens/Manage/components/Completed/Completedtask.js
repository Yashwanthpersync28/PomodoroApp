import React, { useEffect, useState } from 'react'
import {View , StatusBar , ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex, heightValue, padding, styles,} from '../../../../styles/Styles'
import { HeaderSearch } from '../HeaderSearch'
import { Header } from '../Header'
import { Icons } from '../../../../components/Icons'
import { Colors } from '../../../../styles/Colors'
import {Dayheadings} from './components/Dayheadings'
import TaskCardDetails from '../TaskCardDetails'
import { useSelector } from 'react-redux'
import { GetRecomendedTasks, calculateFocusTime, formatTime, getCompletedTasks, getCompletedTasksToday, getCompletedTasksYesterday } from '../../../../constants/getCompletedTasksFunctions'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const Completedtask = ({navigation,route}) => {
    const [showSearchHeader,setSearchHeader]=useState(false)
    const {name,data}=route.params
    const Trashdatas=useSelector((state=>state.user.usersTrashLists.TrashLists))
   const [tempTrashdatas,setTempTrash]=useState(Trashdatas)
   const [InputText,setInputText]=useState('')
   const [showOptionsIndex, setShowOptionsIndex] = useState(null);
   const [SearchedTask,setSearchedTask]=useState(true)
   const [updatedSearchTasks,SetupdatedSearchCompletedtasks]=useState('')
    console.log('Trashdatas',Trashdatas);
//selectors
const Darkmode=useSelector((state)=>state.system.darkMode);

    ///to filter data based on completed and which is completed today
    const completedTasksToday = getCompletedTasksToday(data);
    const completedTasksYesterday=getCompletedTasksYesterday(data)
    //to calculate the focus time 
    const totalFocusTimeToday = calculateFocusTime(completedTasksToday);
   const totalFocusTimeYesterday = calculateFocusTime(completedTasksYesterday);
   ////to calculate focus time in seconds,minutes,hours
    const focustimeToday=formatTime(totalFocusTimeToday)
    const focustimeYesterday=formatTime(totalFocusTimeYesterday)
    
///search functionality
useEffect(()=>{
  if(InputText.trim()===''){
    setTempTrash(data) 
    setSearchedTask(true)                       
  }
  else{
    if(name==='Trash'){
      const filteredTrashTasks=GetRecomendedTasks(data,InputText)
      setTempTrash(filteredTrashTasks)
    }
    else{
      setSearchedTask(false)
      const filteredCompletedTask=getCompletedTasks(data)
      const filtredCompletedtasks=GetRecomendedTasks(filteredCompletedTask,InputText)
       SetupdatedSearchCompletedtasks(filtredCompletedtasks)
    }
   
  }
},[data,InputText])

  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),Darkmode?styles.bgdarkmodeBlack:styles.bglgWhite]}>
    <StatusBar backgroundColor = {Darkmode?Colors.darkmodeBlack:Colors.white} barStyle={Darkmode ? "light-content" : "dark-content"}/>
     <View style={[{height:heightValue(15)}]}>
        {showSearchHeader?<HeaderSearch darkMode={Darkmode} handleBacktoHeader={()=>{setSearchHeader(false),setInputText('')}} onChangeText={(val)=>{setInputText(val)}} handleX={()=>setInputText('')} value={InputText}/>:
        <Header
         headername={name}
         IconfamilyRight={Icons.Entypo}
         IconNameRight={'dots-three-vertical'}
         onPress={() => console.log('hbn')}
         bgcolor={styles.white}
         color={Darkmode?styles.white:styles.black}
         goBack={() => navigation.goBack()}
         showLeftIocn={true}
         IconNameLeft={'arrowleft'}
         IconfamilyLeft={Icons.AntDesign}
        showSearch={true}
        handleSearch={()=>setSearchHeader(true)}
        />}
        
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={[flex(1),styles.column]}>
      {SearchedTask ? 
     <>
        {name==='Trash'? <TaskCardDetails data={tempTrashdatas} handleTask={(index)=>console.log(index)}/>:
       
        <View>
         <Dayheadings darkMode={Darkmode} navigation={navigation} headingname={'Today'} focusTime={focustimeToday} completed={completedTasksToday.length} taskdata={'vhbjn'} name={name} data={completedTasksToday}/>
         <Dayheadings darkMode={Darkmode}  headingname={'Yesterday'} focusTime={focustimeYesterday} completed={completedTasksYesterday.length} name={name} data={completedTasksYesterday}/>
         </View>
        }
        </>
        :<TaskCardDetails data={updatedSearchTasks} handleTask={(index)=>console.log(index)} showLinethrough={true} name={'Completed'}/>
        }
     </View>
     </ScrollView>

    </SafeAreaView>
  )
}

export default Completedtask
