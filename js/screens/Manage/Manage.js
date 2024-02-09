import React, { useState } from 'react';
import { View, Text, ScrollView,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue,  } from '../../styles/Styles';
import Icon, { Icons } from '../../components/Icons';
import { ManageButtons } from './components/ManageButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlusModal } from '../../components/modals/PlusModal';
import { AddTask } from './components/AddTask/AddTask';
import { TextInputCompnent } from '../../components';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { getCompletedTasks, getCompletedTasksToday, getCompletedTasksTomorrow, getTasksThisWeek, getTasksToday, getTasksTomorrow } from '../../constants/getCompletedTasksFunctions';


export const Manage = ({navigation,countvalue,modalVisibleval}) => {
  //states
    const [modalVisible,setmodalVisible]=useState(modalVisibleval)
    const [Seachvalue,setSearchvalue]=useState('')
    const [count,setcount]=useState(countvalue);
    const [index,setIndex]=useState(0)
    const [ShowPlus,setShowPlus]=useState(true)
    const [ShowManagebutton,setShowManagebutton]=useState(false)
    //selectors
    const Projectslist=useSelector((state)=>state.user.userProjectList.UserProjects)
    const Taskdatas=useSelector((state)=>state.user.userTasks.userTask)
    const Trashdata=useSelector((state)=>state.user.usersTrashLists.TrashLists)
    console.log('jbdfv',Taskdatas);
    //get user data based on days
    const CompletedTodayTasks=getCompletedTasksToday(Taskdatas);//to get completed tasks fo Today
    const TodayTasks=getTasksToday(Taskdatas)
    const TomorrowTasks=getTasksTomorrow(Taskdatas)
    const CompletedTasksTomorrow=getCompletedTasksTomorrow(Taskdatas)
    const getTasksThisWeekdata=getTasksThisWeek(Taskdatas,true);
    const getTasksThisMonthdata=getTasksThisWeek(Taskdatas,false);
    const getCompletedtasksThisWeek=getCompletedTasks(getTasksThisWeekdata)
    const getCompletedtasksthisMonth=getCompletedTasks(getTasksThisMonthdata)

    console.log('getTasksThisWeekdata',getTasksThisWeekdata);
    console.log('getTasksThisMonthdata',getTasksThisMonthdata);
    console.log('kncd',TodayTasks);
    console.log('fghvjk',Projectslist);
    //plus modal
    const handlePlusmodal=()=>{
      setShowPlus(false)
        setmodalVisible(true)
        setcount(0)
    }

const onClose=()=>{
  setmodalVisible(false)
  setShowPlus(true)
}

  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bgWhite]}>
    <StatusBar backgroundColor = "white" barStyle = "dark-content"/>
      <View style={[flex(0.2)]}>
           <Header headername={'Focusify'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'} onPress={()=>setShowManagebutton(!ShowManagebutton)} bgcolor={styles.white} color={styles.black} goBack={()=>console.log('kjhg')} showLeftIocn={false}/>
      </View>
      <View style={[flex(2)]}>
       {modalVisible ? count===0 ? <PlusModal visible={modalVisible} onClose={onClose} handleCount={(val)=>setcount(val)} handleIndex={(val)=>setIndex(val)}/> :null:null}
       {modalVisible ? count===1 ? <AddTask visible={modalVisible} onClose={onClose} count={index} navigation={navigation}/> :null:null}
      <ScrollView style={[flex(1),{zIndex: 0 },styles.bgWhite]} showsVerticalScrollIndicator={false}>
        <View style={[{height:heightValue(14)},marginPosition(5,0,20)]}>
           <TextInputCompnent bgColor={styles.bglgWhite   } placeholder={'Search'} value={Seachvalue} onChangeText={(val)=>setSearchvalue(val)} secureTextEntry={false} Iconname={'search'} IconFamily={Icons.Feather} showGray={true}/>
        </View>
        <View style={[{height:heightValue(3.2)},styles.rowWrap,{ justifyContent: 'flex-start'}]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Today'} IconFamily={Icons.Feather} iconname={'sun'} hours={'13h 20m (10s)'} showhours={true} handlebuttons={()=>navigation.navigate('tasklists',{name:'Today',data:TodayTasks,completedData:CompletedTodayTasks})}/>
           <ManageButtons color={'#3ca2f2'} heading={'Tomorrow'} IconFamily={Icons.Feather} iconname={'sunrise'} hours={'13h 20m (10s)'} showhours={true} handlebuttons={()=>navigation.navigate('tasklists',{name:'Tomorrow',data:TomorrowTasks,completedData:CompletedTasksTomorrow})}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.MaterialCommunityIcons} iconname={'calendar-week'} hours={'13h 20m (10s)'} showhours={true} handlebuttons={()=>navigation.navigate('tasklists',{name:'This Week',data:getTasksThisWeekdata,completedData:getCompletedtasksThisWeek})}/>
           <ManageButtons  color={'#af4fba'} heading={'Planned'} IconFamily={Icons.MaterialCommunityIcons} iconname={'calendar-check'} hours={'13h 20m (10s)'} showhours={true} handlebuttons={()=>navigation.navigate('tasklists',{name:'Planned',data:getTasksThisMonthdata,completedData: getCompletedtasksthisMonth})}/>
           <ManageButtons  color={'lightgreen'} heading={'Completed'} IconFamily={Icons.AntDesign} iconname={'checkcircleo'} showhours={false} handlebuttons={()=>navigation.navigate('completedtask',{name:'Completed',data:Taskdatas,completedData:[]})}/>
           <ManageButtons  color={'red'} heading={'Trash'} IconFamily={Icons.Octicons} iconname={'trash'} showhours={false} handlebuttons={()=>navigation.navigate('completedtask',{name:'Trash',data:Trashdata})}/>
        </View>
        <View style={[styles.column,marginPosition(10),styles.positionRelative]}>
         <View style={[styles.row,marginPosition(0,0,10)]}>
            <Text style={[styles.black,marginPosition(0,3,0,5)]}>Projects</Text>
            <View style={[styles.allCenter]}>
            <View style={[borderColor('#f2f0f0'),borderWidth(0,0,0,0.7,0),{width:widthValue(1.3)}]}></View>
            </View>
         </View>
        <View style={[styles.rowWrap, { justifyContent: 'flex-start'}]}>
  {Projectslist.map((data, index) => {
    return (
      <TouchableOpacity key={index}>
        <View style={[{ width: widthValue(2.5) }, borderColor(data.color), borderWidth(1), radius(10), styles.column,paddingPosition(10,5,20,14),marginPosition(0,4,10,12), { justifyContent: 'center' }]}>
          <View style={[styles.row]}>
            <Icon name={'briefcase'} type={Icons.Entypo} style={[{ color: data.color }, fontSize(20),styles.textAlignVertical]} />
            <View style={[{ width: widthValue(4.2) }]}>
              <Text style={[styles.black,styles.textAlignVertical, fontSize(17), marginPosition(0, 0, 0, 5)]} numberOfLines={2} ellipsizeMode="tail">{data.name}</Text>
            </View>
          </View>
          <View>
            <Text style={[{ fontWeight: '800' }, styles.black, fontSize(18),marginPosition(5,0,0,-3)]}>12h 20m(5s)</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })}
</View>


        </View>
      </ScrollView>
      {ShowPlus?
         <View style={[{bottom: 15,right: 10, zIndex: 1, height:50, width:50,},styles.positionAbsolute,styles.allCenter,styles.bgOrange,radius(30)]}>
          <TouchableOpacity onPress={handlePlusmodal}>
               <Icon name={'plus'} type={Icons.Entypo} style={[styles.white,fontSize(30)]}/>
          </TouchableOpacity>
        </View>:null}
        {ShowManagebutton ? 
        
        <View style={[{bottom: 0,right: 0,top:-20, zIndex: 1, height:heightValue(15), width:widthValue(2),},styles.positionAbsolute,styles.allCenter,styles.bgWhite,radius(10)]}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('manageProjectandTags');
              setShowManagebutton(false);
          }} style={[styles.row,styles.allCenter]}>
         <Icon name={'briefcase'} type={Icons.Feather} style={[styles.black,fontSize(25),marginPosition(0,10)]}/>
         <Text style={[styles.black,fontSize(16)]}>Manage Project & Tags</Text>
         </TouchableOpacity>
        </View>
       
        :null}

      </View>
    </SafeAreaView>
  );
};





