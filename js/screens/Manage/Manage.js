import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions , StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue, zIndex } from '../../styles/Styles';
// import HomepageHeader from '../dashboard/Components/HomepageHeader';
import Icon, { Icons } from '../../components/Icons';
import { ManageButtons } from './components/ManageButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlusModal } from '../../components/modals/PlusModal';
import { PriorityModal } from '../../components/modals/PriorityModal';
import { HomepageHeader } from '../dashboard/Components/HomepageHeader';
import { Add } from './components/Add';
import { AddProject } from './components/AddProject/AddProject';
import { AddTask } from './components/AddTask/AddTask';
import Tags from './components/tags/Tags';
import { Project } from './components/project/Project';
import { TextInputCompnent } from '../../components';
import { Addtags } from './components/AddTags/Addtags';
import { DueDateModal } from '../../components/modals/DueDateModal';

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

    const handlePlusmodal=()=>{
        setmodalVisible(true)
        setcount(1)
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
const getTagDetails=(tagname,color)=>{
  setcount(1)
  setreceiveTagsData({Tagname:tagname,Color:color})
  console.log('hjberk');
}
///get the user selected project
const getProjectDetails=(name,color)=>{
  setcount(1)
  setReceivedProjectData({Projectname:name,Color:color})
  console.log('hjberk');
}

    // useEffect(()=>{
      
    // },[count])
  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bgWhite]}>
    <StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
      <View style={[flex(0.2)]}>
      {/* <Header headername={'Focusify'} IconfamilyRight={IconFamily} IconNameRight={name} onPress={onPress} IconNameLeft={'x'} IconfamilyLeft={Icons.Feather} bgcolor={bgcolor} color={color} goBack={goBack}/> */}
        <HomepageHeader IconFamily={Icons.Entypo} name={'dots-three-vertical'} bgcolor={styles.white} color={styles.black} headerName={'Focusify'}/>
      </View>
      
    <View style={[flex(2)]}>
        {modalVisible ? count===1 ? <AddTask visible={modalVisible} onClose={() => setmodalVisible(false)} sessions={session} onPressSession={(val)=>setsession(val)} taskname={taskname} onChangeText={(val)=>setTaskname(val)} handleCounter={handleCounter} receivedPriorityData={receivedPriorityData} receiveTagsData={receiveTagsData} receiveProjectData={receiveProjectData}/> :null:null}
        {modalVisible ? count===2 ? <PriorityModal getPriorityDetails={getPriorityDetails} handletoAddtask={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===3 ? <Tags getTagDetails={getTagDetails} handleCounter={(val)=>setcount(val)}/>:null:null}
        {modalVisible ? count===4 ? <Project getProjectDetails={getProjectDetails} handleCounter={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===5 ? <AddProject handletoAddtask={(val)=>setcount(val)}/> :null:null}
        {modalVisible ? count===6 ? <Addtags handletoTags={(val)=>setcount(val)}/> :null:null}


        
        {/* //  <PlusModal visible={modalVisible}/>
        // <PriorityModal/>
        <AddTask/>
        // <Addtags/>
        // <AddProject/>
        // <Tags/>
        // <Project/> */}
         
        <View style={[{ height: 45, width: 45, position: 'absolute', top: 0, right: 20, zIndex: 1, ...styles.allCenter, ...styles.bgOrange ,top:450,right:0},radius(50)]}>
          <TouchableOpacity onPress={handlePlusmodal}>
            <Icon name={modalVisible ? 'x' : 'plus'} type={Icons.Feather} style={[styles.white, { fontSize: 25 }, padding(0, 0, 10, 0, 10)]} />
          </TouchableOpacity>
        </View>
      <ScrollView style={[flex(1),{zIndex: 0 },styles.bgWhite]} showsVerticalScrollIndicator={false}>
        <View style={[{height:heightValue(14)},marginPosition(5,0,20)]}>
           <TextInputCompnent placeholder={'Search'} value={Seachvalue} onChangeText={(val)=>setSearchvalue(val)} secureTextEntry={false} Iconname={'search'} IconFamily={Icons.Feather}/>
        
        </View>
        <View style={[{height:heightValue(2.8)},styles.rowWrap,styles.spaceEvenly]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Today'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons color={'#3ca2f2'} heading={'Tomorrow'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Planed'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'lightgreen'} heading={'Completed'} IconFamily={Icons.AntDesign} iconname={'checkcircleo'} showhours={false}/>
           <ManageButtons  color={'red'} heading={'Trash'} IconFamily={Icons.Octicons} iconname={'trash'} showhours={false}/>
        </View>
        <View style={[styles.column,marginPosition(10),styles.positionRelative]}>
         <View style={[styles.row,marginPosition(0,0,10)]}>
            <Text style={[styles.black,padding(0,0,10,0,0)]}>Projects</Text>
            <View style={[styles.allCenter]}>
            <View style={[borderColor('gray'),borderWidth(0,0,0,0.7,0),{width:widthValue(1.5)}]}></View>
            </View>
         </View>
         <View style={[styles.rowWrap,styles.spaceEvenly]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Pomodoro App'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons color={'#3ca2f2'} heading={'Fashion App'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'AI chatting App'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Dating App'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'Quiz App'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'PLan app'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Planed'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
        </View>
        </View>
        
        {/* Additional views can be added as needed */}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};
