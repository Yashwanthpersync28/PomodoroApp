import React, { useState } from 'react';
import { View, Text, ScrollView,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue,  } from '../../styles/Styles';
import Icon, { Icons } from '../../components/Icons';
import { ManageButtons } from './components/ManageButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlusModal } from '../../components/modals/PlusModal';
import { PriorityModal } from '../../components/modals/PriorityModal';
import { AddProject } from './components/AddProject/AddProject';
import { AddTask } from './components/AddTask/AddTask';
import Tags from './components/tags/Tags';
import { Project } from './components/project/Project';
import { TextInputCompnent } from '../../components';
import { Addtags } from './components/AddTags/Addtags';
import { DueDateModal } from '../../components/modals/DueDateModal';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';


export const Manage = ({navigation,countvalue,modalVisibleval}) => {
  //states
    const [modalVisible,setmodalVisible]=useState(modalVisibleval)
    const [Seachvalue,setSearchvalue]=useState('')
    const [count,setcount]=useState(countvalue);
    const [receivedPriorityData,setPriorityData]=useState([])
    const [receiveTagsData,setreceiveTagsData]=useState([]);
    const [taskname,setTaskname]=useState('')
    const [session,setsession]=useState(1)
    const [receiveProjectData,setReceivedProjectData]=useState([])
    const [selectedDate, setSelectedDate] = useState(null);
    const [ShowPlus,setShowPlus]=useState(true)
    const [ShowManagebutton,setShowManagebutton]=useState(false)
    //selectors
    const Projectslist=useSelector((state)=>state.user.userProjectList.UserProjects)
    const Taskdatas=useSelector((state)=>state.user.userTasks.userTask)
    console.log('fghvjk',Projectslist);
    const handlePlusmodal=()=>{
      setShowPlus(false)
        setmodalVisible(true)
        setcount(0)
    }
    //Get data from priority
const getPriorityDetails=(a)=>{
  setcount(1)
  console.log('adc',a.name,a.color);

  setPriorityData(a)
}
//
const handleCounter=(num)=>{
  setcount(num)
}
const getTagDetails=(tagDetails)=>{
  setcount(1)
  setreceiveTagsData(tagDetails)
  console.log('hjberk');
}
///get the user selected project
const getProjectDetails=(name,color)=>{
  setcount(1)
  setReceivedProjectData({Projectname:name,Color:color})
  console.log('hjberk');
}
const onClose=()=>{
  setmodalVisible(false)
  setShowPlus(true)
}

  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bgWhite]}>
    <StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
      <View style={[flex(0.2)]}>
           <Header headername={'Focusify'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'} onPress={()=>setShowManagebutton(!ShowManagebutton)} bgcolor={styles.white} color={styles.black} goBack={()=>console.log('kjhg')} showLeftIocn={false}/>
      </View>
      <View style={[flex(2)]}>
        {modalVisible ? count===0 ? <PlusModal visible={modalVisible} onClose={onClose} handleCount={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===1 ? <AddTask visible={modalVisible} onClose={onClose} sessions={session} onPressSession={(val)=>setsession(val)} taskname={taskname} onChangeText={(val)=>setTaskname(val)} handleCounter={handleCounter} receivedPriorityData={receivedPriorityData} receiveTagsData={receiveTagsData} receiveProjectData={receiveProjectData} selectedDate={selectedDate}/> :null:null}
        {modalVisible ? count===2 ? <PriorityModal visible={modalVisible} onClose={onClose} getPriorityDetails={getPriorityDetails} handletoAddtask={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===3 ? <Tags visible={modalVisible} onClose={onClose} getTagDetails={getTagDetails} handleCounter={(val)=>setcount(val)}/>:null:null}
        {modalVisible ? count===4 ? <Project visible={modalVisible} onClose={onClose} getProjectDetails={getProjectDetails} handleCounter={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===5 ? <AddProject handletoAddtask={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===6 ? <Addtags handletoTags={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===7 ? <DueDateModal visible={modalVisible} onClose={onClose} OnpressDate={(val)=>setSelectedDate(val)} handletoAddtask={(val)=>setcount(val)}/>:null:null}
      <ScrollView style={[flex(1),{zIndex: 0 },styles.bgWhite]} showsVerticalScrollIndicator={false}>
        <View style={[{height:heightValue(14)},marginPosition(5,0,20)]}>
           <TextInputCompnent bgColor={styles.bglgWhite} placeholder={'Search'} value={Seachvalue} onChangeText={(val)=>setSearchvalue(val)} secureTextEntry={false} Iconname={'search'} IconFamily={Icons.Feather}/>
        </View>
        <View style={[{height:heightValue(2.8)},styles.rowWrap,styles.spaceEvenly]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Today'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons color={'#3ca2f2'} heading={'Tomorrow'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Planed'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'lightgreen'} heading={'Completed'} IconFamily={Icons.AntDesign} iconname={'checkcircleo'} showhours={false} handlebuttons={()=>navigation.navigate('completedtask',{name:'Completed',data:Taskdatas})}/>
           <ManageButtons  color={'red'} heading={'Trash'} IconFamily={Icons.Octicons} iconname={'trash'} showhours={false} handlebuttons={()=>navigation.navigate('completedtask',{name:'Trash',data:Taskdatas})}/>
        </View>
        <View style={[styles.column,marginPosition(10),styles.positionRelative]}>
         <View style={[styles.row,marginPosition(0,0,10)]}>
            <Text style={[styles.black,padding(0,0,10,0,0)]}>Projects</Text>
            <View style={[styles.allCenter]}>
            <View style={[borderColor('#f2f0f0'),borderWidth(0,0,0,0.7,0),{width:widthValue(1.5)}]}></View>
            </View>
         </View>
         <View style={[styles.rowWrap,styles.spaceEvenly]}>
          {Projectslist.map((data,index)=>{
            return( 
         <TouchableOpacity key={index}>
          <View style={[{width:widthValue(2.5)},borderColor(data.color),borderWidth(1),radius(10),marginPosition(5,0,10),styles.column,padding(20),{justifyContent:'center'}]}>
              <View style={[styles.row]}>
                <Icon name={'sun'} type={Icons.Feather} style={[{color:data.color}, fontSize(25)]} />
              <View style={[{width:widthValue(4.2)}]}>
              <Text style={[{color:data.color},fontSize(17),marginPosition(0,0,0,5)]} numberOfLines={2} ellipsizeMode="tail">{data.name}</Text>
          </View>
       </View>
       
       <View>
        <Text style={[{fontWeight:'800'},styles.black,fontSize(17)]}>12h 20m(5s)</Text>
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
        <TouchableOpacity onPress={()=>navigation.navigate('manageProjectandTags')} style={[styles.row,styles.allCenter]}>
         <Icon name={'briefcase'} type={Icons.Feather} style={[styles.black,fontSize(25),marginPosition(0,10)]}/>
         <Text style={[styles.black,fontSize(16)]}>Manage Project & Tags</Text>
         </TouchableOpacity>
        </View>
       
        :null}

      </View>
    </SafeAreaView>
  );
};
