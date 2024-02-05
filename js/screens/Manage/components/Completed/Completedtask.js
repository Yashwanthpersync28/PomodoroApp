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
import { GetRecomendedTasks, calculateFocusTime, formatTime, getCompletedTasksToday, getCompletedTasksYesterday } from '../../../../constants/getCompletedTasksFunctions'


const Completedtask = ({navigation,route}) => {
    const [showSearchHeader,setSearchHeader]=useState(false)
    const {name,data}=route.params
    const Trashdatas=useSelector((state=>state.user.usersTrashLists.TrashLists))
   const [tempTrashdatas,setTempTrash]=useState(Trashdatas)
   const [InputText,setInputText]=useState('')
    console.log('Trashdatas',Trashdatas);

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
  }
  else{
    const filteredTrashTasks=GetRecomendedTasks(data,InputText)
    setTempTrash(filteredTrashTasks)
  }
},[data,InputText])

  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bglgWhite]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
     <View style={[{height:heightValue(12)}]}>
        {showSearchHeader?<HeaderSearch handleBacktoHeader={()=>{setSearchHeader(false),setInputText('')}} onChangeText={(val)=>setInputText(val)}/>:
        <Header
         headername={name}
         IconfamilyRight={Icons.Entypo}
         IconNameRight={'dots-three-vertical'}
         onPress={() => console.log('hbn')}
         bgcolor={styles.white}
         color={styles.black}
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
        {name==='Trash'? <TaskCardDetails data={tempTrashdatas} handleTask={(index)=>console.log(index)}/>:
        <>       
         <Dayheadings headingname={'Today'} focusTime={focustimeToday} completed={completedTasksToday.length} taskdata={'vhbjn'} name={name} data={completedTasksToday}/>
         <Dayheadings headingname={'Yesterday'} focusTime={focustimeYesterday} completed={completedTasksYesterday.length} name={name} data={completedTasksYesterday}/>
        </>

  }
     </View>
     </ScrollView>

    </SafeAreaView>
  )
}

export default Completedtask
