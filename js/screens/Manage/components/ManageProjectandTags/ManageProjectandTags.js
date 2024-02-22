import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity ,FlatList, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles';
import Icon, { Icons } from '../../../../components/Icons';
import { Header } from '../Header';
import { ToggleButtons } from '../../../../components/view/ToggleButtons';
import { Inneritem } from './components/InnerItem';
import { ManageItemslist } from './components/ManageItemslist';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserProject } from '../../../../redux/userReducer/UserProjectListReducer';
import { addArchieveProjects, addArchieveTags } from '../../../../redux/userReducer/ArchieveReducer';
import { deleteUserTag } from '../../../../redux/userReducer/userTaglistReducer';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AddTask } from '../AddTask/AddTask';
import { AddProject } from '../AddProject/AddProject';
import { Colors } from '../../../../styles/Colors';


export const ManageProjectandTags = ({ navigation }) => {
  const [modalVisible,setmodalVisible]=useState(true)
  const [showProjects, setshowProjects] = useState(true);
  const [showAddTask,setshowAddTask]=useState(false)
  //selectors
  const dispatch=useDispatch();
  const Projects=useSelector((state)=>state.user.userProjectList.UserProjects);
  const Tags=useSelector((state)=>state.user.userTaglist.UserTags);
  const ArchievedDataTags=useSelector((state)=>state.user.ProjectAndTagsArchieveReducer.ArchieveTags)
  const ArchievedDataProject=useSelector((state)=>state.user.ProjectAndTagsArchieveReducer.ArchieveProjects)
  const Darkmode=useSelector((state)=>state.system.darkMode);

  console.log('Projects',Projects);
  console.log('Tags',Tags);
   
  ///to get the user selected projectt name
  const handleArchieveProjects=(name)=>{
    const restoredTask = Projects.find((task) => task.name === name);
     console.log('restoredTask',restoredTask);
     console.log('name',name);
    dispatch(deleteUserProject(name))
    dispatch(addArchieveProjects(restoredTask))
  }
  //to get the user selected tag name
  const handleArchieveTags=(name)=>{
    const restoredTaskTags = Tags.find((task) => task.name === name);
    dispatch(deleteUserTag(name))
    dispatch(addArchieveTags(restoredTaskTags))
  }

  return (
    
    
    
    <SafeAreaView style={[flex(1), paddingPosition(0, 20, 0, 20), Darkmode?styles.bgdarkmodeBlack:styles.bgWhite]}>
      <StatusBar backgroundColor = {Darkmode?Colors.darkmodeBlack:Colors.white} barStyle={Darkmode ? "light-content" : "dark-content"}/>
      {/* header */}
      <View style={[flex(0.2)]}>
        <Header
          headername={'Manage Project & Tags'}
          IconfamilyRight={Icons.Entypo}
          IconNameRight={'dots-three-vertical'}
          onPress={() => navigation.navigate('task')}
          bgcolor={styles.white}
          color={Darkmode?styles.white:styles.black}
          goBack={() => navigation.goBack()}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
      </View>
      {/* header end */}
      {/* toggle buttons */}
      <View style={[flex(0.2)]}>
        <ToggleButtons title1={'Projects'} title2={'Tags'} onPressProject={() => setshowProjects(true)} showProjects={showProjects} onPressTags={() => setshowProjects(false)} />
      </View>
      <View style={[flex(0.2),styles.centerVertical]}>
        <TouchableOpacity onPress={()=>{showProjects?navigation.navigate('addproject',{ProjectName:'',NavigationFrom:'manage'}):navigation.navigate('addtags',{TagName:'',NavigationFrom:'manageTags'})}} style={[styles.row, styles.centerHorizontal]}>
        <Icon name={'plus'} type={Icons.Feather} style={[Darkmode?styles.Orange:styles.black, fontSize(25), marginPosition(0, 10)]} />
        <Text style={[styles.Orange, fontSize(20)]}>{showProjects?'Add Project':'Add Tags'}</Text>
        </TouchableOpacity>
      </View>
      {/* toggle buttons end */}
      {/* items */}
      
      <View style={[flex(2)]}>
       <ScrollView>
       <ManageItemslist Darkmode={Darkmode} data={showProjects?Projects:Tags} showProjects={showProjects} optionOne={'Edit'} optionTwo={'Archieve'} handleArchieveProjects={(name)=>handleArchieveProjects(name)} handleArchieveTags={(name)=>handleArchieveTags(name)} showArchievedlists={false} handleoptionOneProject={(name)=>{navigation.navigate('addproject',{ProjectName:name})}} handleoptionOneTags={(name)=>{navigation.navigate('addtags',{TagName:name,NavigationFrom:'editTags'})}}/>
      
      </ScrollView>
      
    </View>
   
      {/* footer */}
      <View style={[flex(0.2),borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,1)]}>
        <TouchableOpacity onPress={()=>navigation.navigate('archived',{name:showProjects?'Archived Projects':'Archived Tags',ArchieveProject:showProjects})} style={[flex(1)]}>
        <View style={[styles.row, flex(1)]}>
          <View style={[flex(0.2), styles.centerVertical]}>
              <Icon name={'archive-outline'} type={Icons.Ionicons} style={[Darkmode?styles.inputColor:styles.black, fontSize(25)]} />
          </View>
          <View style={[flex(1), styles.allCenter]}>
            <Text style={[fontSize(20), Darkmode?styles.inputColor:styles.black]}>{showProjects?'Archived Projects':'Archived Tags'}</Text>
          </View>
          <View style={[flex(0.2), { justifyContent: 'center', alignItems: 'flex-end' }]}>
              <Icon name={'right'} type={Icons.AntDesign} style={[Darkmode?styles.inputColor:styles.black, fontSize(25)]} />
          </View>
        </View>
        </TouchableOpacity>
      </View>
      {/* footer end */}
    </SafeAreaView>
   
  );
};



