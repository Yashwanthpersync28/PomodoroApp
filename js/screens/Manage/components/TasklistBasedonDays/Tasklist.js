import React,{useEffect, useState} from 'react'
import {View,StatusBar,ScrollView,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderSearch } from '../HeaderSearch'
import { Header } from '../Header'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../styles/Styles'
import { Colors } from '../../../../styles/Colors'
import Icon, { Icons } from '../../../../components/Icons'
import { MiniCards } from './components/MiniCards'
import { TextInputCompnent } from '../../../../components'
import TaskCardDetails from '../TaskCardDetails'
import { useSelector } from 'react-redux'
import { Dayheadings } from '../Completed/components/Dayheadings'
import { HeaderBorder } from '../../../../components/view/HeaderBorder'
import { GetRecomendedTasks, calculateFocusTime, formatTime } from '../../../../constants/getCompletedTasksFunctions'
import { AddTask } from '../AddTask/AddTask'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
// import { Icon } from 'react-native-paper'

export const Tasklist = ({navigation,route}) => {
    const [showSearchHeader,setSearchHeader]=useState(false)
    const {name,completedData,data}=route.params
    const [tempData,setTempData]=useState(data);
    const calculatefocus=calculateFocusTime(completedData);
    const getFocusTime=formatTime(calculatefocus)
    const [userInput,setUserInput]=useState('')
    const [modalVisible,setModalVisible]=useState(false)
     console.log('data',data);

     useEffect(()=>{
      if(userInput.trim()===''){
        setTempData(data)
      }
      else{
        const filteredTasks=GetRecomendedTasks(data,userInput)
        setTempData(filteredTasks)
      }
    },[data,userInput])

  return (
   <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bglgWhite]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
    <View style={[{height:heightValue(16)}]}>
        {showSearchHeader?<HeaderSearch handleX={()=>setUserInput('')} handleBacktoHeader={()=>{setSearchHeader(false),setUserInput('')}} onChangeText={(val)=>setUserInput(val)} value={userInput}/>:
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
     {/* //minicards */}
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={[{height:heightValue(4.3)},marginPosition(0,0,10)]}>
          <View style={[styles.rowWrap,styles.spaceBetween,styles.centerHorizontal]}>
            <MiniCards number={getFocusTime} name={'Total Pomodoro Hours'}/>
            <MiniCards number={'02:05'} name={'Elapsed time'}/>
            <MiniCards number={data.length} name={'Task Waiting'}/>
            <MiniCards number={completedData.length} name={'Task completed'}/>
          </View>
     </View>
     {/* addtask */}
     <View style={[{height:heightValue(14)}]}>
       <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
      <View style={[styles.row, padding(10), styles.centerHorizontal, radius(6),borderColor(Colors.borderGray),borderWidth(1),styles.bgWhite,{height:heightValue(14)}]}>
            <Icon name={'plus'} type={Icons.Feather} style={[fontSize(20),styles.black]}/>
            <View style={[styles.row, flex(1.5), styles.centerHorizontal ]}>
              <Text style={[styles.black,marginPosition(0,0,0,8)]}>Add Task</Text>
            </View>     
     </View>
     </TouchableWithoutFeedback>
       {modalVisible && <AddTask visible={modalVisible} onClose={()=>setModalVisible(false)} count={0}/>}
     </View>
     {/* //tasks */}
     <View>
      <TaskCardDetails data={tempData} handleTask={(id)=>navigation.navigate('task',{id:id,completedTask:false})} showPlayIcon={true}/>
     </View>
     <HeaderBorder name={'Completed'}/>
     <TaskCardDetails data={completedData} handleTask={(id)=>navigation.navigate('task',{id:id,completedTask:true})} showLinethrough={true} name={'Completed'}/>

     </ScrollView>
   </SafeAreaView>
  )
}


