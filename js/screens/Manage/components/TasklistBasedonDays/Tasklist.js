import React,{useEffect, useState} from 'react'
import {View,StatusBar,ScrollView,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderSearch } from '../HeaderSearch'
import { Header } from '../Header'
import { borderColor, borderWidth, flex, heightValue, marginPosition, padding, styles, widthValue } from '../../../../styles/Styles'
import { Colors } from '../../../../styles/Colors'
import { Icons } from '../../../../components/Icons'
import { MiniCards } from './components/MiniCards'
import { TextInputCompnent } from '../../../../components'
import TaskCardDetails from '../TaskCardDetails'
import { useSelector } from 'react-redux'
import { Dayheadings } from '../Completed/components/Dayheadings'
import { HeaderBorder } from '../../../../components/view/HeaderBorder'
import { GetRecomendedTasks, calculateFocusTime, formatTime } from '../../../../constants/getCompletedTasksFunctions'
import { AddTask } from '../AddTask/AddTask'

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
        {showSearchHeader?<HeaderSearch handleBacktoHeader={()=>{setSearchHeader(false),setUserInput('')}} onChangeText={(val)=>setUserInput(val)}/>:
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
     <TextInputCompnent
       Iconname={'plus'}
       IconFamily={Icons.Feather}
       bgColor={styles.bgWhite}
       placeholder={'Add a Task...'}
       onKeyPress={()=>setModalVisible(true)}
       />
       {modalVisible && <AddTask visible={modalVisible} onClose={()=>setModalVisible(false)} count={0}/>}
     </View>
     {/* //tasks */}
     <View>
      <TaskCardDetails data={tempData} handleTask={(id)=>navigation.navigate('task',{id:id})} showPlayIcon={true}/>
     </View>
     <HeaderBorder name={'Completed'}/>
     <TaskCardDetails data={completedData} handleTask={(id)=>navigation.navigate('task',{id:id})} showLinethrough={true} name={'Completed'}/>

     </ScrollView>
   </SafeAreaView>
  )
}


