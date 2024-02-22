import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex, heightValue, paddingPosition, styles } from '../../../../../styles/Styles'
import {View,Text,ScrollView,StatusBar} from 'react-native'
import { Icons } from '../../../../../components/Icons'
import { Header } from '../../Header'
import { ManageItemslist } from './ManageItemslist'
import { useDispatch, useSelector } from 'react-redux'
import { addBackUserProject } from '../../../../../redux/userReducer/UserProjectListReducer'
import { addBackUserTag } from '../../../../../redux/userReducer/userTaglistReducer'
import { deleteArchieveProjectForever, deleteArchieveTagsForever } from '../../../../../redux/userReducer/ArchieveReducer'
import { Colors } from '../../../../../styles/Colors'

export const Archived = ({navigation,route}) => {
    const { name ,ArchieveProject} = route.params;
//  console.log('newdataaaa',data);
 //selectors
 const ArchievedDataTags=useSelector((state)=>state.user.ProjectAndTagsArchieveReducer.ArchieveTags)
 const ArchievedDataProject=useSelector((state)=>state.user.ProjectAndTagsArchieveReducer.ArchieveProjects)
 const Darkmode=useSelector((state)=>state.system.darkMode);

 const dispatch=useDispatch()

 //to restore projects from archieve to Main Projects 
 const handleRestoreProjects=(name)=>{
  const restoredTask = ArchievedDataProject.find((task) => task.name === name);
  dispatch(addBackUserProject(restoredTask)) 
  dispatch(deleteArchieveProjectForever(name))    
  console.log('project acheived',name);
 }
 //to restore tags from acrchievetags to Main Tags
 const handleRestoreTags=(name)=>{
  const restoredTask = ArchievedDataTags.find((task) => task.name === name);
  dispatch(addBackUserTag(restoredTask))
  dispatch(deleteArchieveTagsForever(name))
  console.log('tags acheived',name); 
 }
 //to delete project forever
 const DeleteProjectForever=(name)=>{
  dispatch(deleteArchieveProjectForever(name))    

 }
 //to Delete Tags forever
 const DeleteTagsForever=(name)=>{
  dispatch(deleteArchieveTagsForever(name))

 }

  return (
    <SafeAreaView style={[flex(1), paddingPosition(0, 20, 0, 20), Darkmode?styles.bgdarkmodeBlack:styles.bgWhite]}>
      <StatusBar backgroundColor = {Darkmode?Colors.darkmodeBlack:Colors.white} barStyle={Darkmode ? "light-content" : "dark-content"}/>
        
        <View style={[{height:heightValue(14)}]}>
        <Header
          headername={name}
          onPress={() => navigation.goBack()}
          bgcolor={styles.white}
          color={Darkmode?styles.white:styles.black}
          goBack={() => navigation.goBack()}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
        </View>
        <View style={[flex(1)]}>
            <ScrollView>
                 <ManageItemslist data={ArchieveProject?ArchievedDataProject:ArchievedDataTags}
                  showProjects={ArchieveProject}
                   optionOne={'Restore'}
                    optionTwo={'Delete Forever'} 
                    handleoptionOneProject={(name)=>handleRestoreProjects(name)}
                     handleoptionOneTags={(name)=>handleRestoreTags(name)}
                     handleArchieveProjects={(name)=>DeleteProjectForever(name)}
                     handleArchieveTags={(name)=>DeleteTagsForever(name)}
                     showArchievedlists={true}
                     Darkmode={Darkmode}
                     />
                      <View style={[{height:heightValue(12)}]}></View>     
            </ScrollView>
        </View>
   </SafeAreaView>
  )
}


