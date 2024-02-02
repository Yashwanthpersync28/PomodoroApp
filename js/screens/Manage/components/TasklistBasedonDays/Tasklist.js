import React,{useState} from 'react'
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

export const Tasklist = ({navigation,route}) => {
    const [showSearchHeader,setSearchHeader]=useState(false)
    const {name}=route.params
    const Taskdatas=useSelector((state)=>state.user.userTasks.userTask)

  return (
   <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bglgWhite]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
    <View style={[{height:heightValue(12)}]}>
        {showSearchHeader?<HeaderSearch handleBacktoHeader={()=>setSearchHeader(false)}/>:
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
     <ScrollView>
     <View style={[{height:heightValue(4.3)},marginPosition(0,0,10)]}>
          <View style={[styles.rowWrap,styles.spaceEvenly,styles.centerHorizontal]}>
            <MiniCards number={'06:25'} name={'Total Pomodoro Hours'}/>
            <MiniCards number={'02:05'} name={'Elapsed time'}/>
            <MiniCards number={'2'} name={'Task Waiting'}/>
            <MiniCards number={2} name={'Task completed'}/>
          </View>
     </View>
     {/* addtask */}
     <View style={[{height:heightValue(14)}]}>
     <TextInputCompnent
       Iconname={'plus'}
       IconFamily={Icons.Feather}
       bgColor={styles.bgWhite}
       placeholder={'Add a Task...'}
       />
     </View>
     {/* //tasks */}
     <View>
      <TaskCardDetails data={Taskdatas} handleTask={(id)=>navigation.navigate('task',{id:id})} showPlayIcon={true}/>
     </View>
     <HeaderBorder name={'Completed'}/>
     </ScrollView>
   </SafeAreaView>
  )
}


