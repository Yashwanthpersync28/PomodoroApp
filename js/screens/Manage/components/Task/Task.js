import React, { useState,useEffect } from 'react'
import {View,Text,ScrollView,TextInput,StatusBar} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Header } from '../Header'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, padding, paddingPosition, radius, styles, textColor, widthValue } from '../../../../styles/Styles'
import Icon, { Icons } from '../../../../components/Icons'
import { TextInputCompnent } from '../../../../components'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { DeleteTaskModal } from '../../../../components/modals/DeleteTaskModal'
import { TaskDeletedModal } from '../../../../components/modals/TaskDeletedModal'
import { Colors } from '../../../../styles/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addUserTasks } from '../../../../redux/userReducer/UserTaskDetails'
import DocumentPicker from 'react-native-document-picker';
import { GetUpdatedAttachement } from '../../../../constants/documentpicker'



export const Task = ({navigation,route}) => {
  const {id}=route.params
  console.log('id',id);
  //states
  const [showOptions,setShowoptions]=useState(false)
  const [subtask,setSubtask]=useState('')
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isTaskdeletedModalVisible,setTaskdeletedModalVisible]=useState(false)
  const [CurrentTask,setCurrentTask]=useState(null);
  const [attachedFileUri, setAttachedFileUri] = useState('');//for upload file

  // console.log('CurrentTask',CurrentTask.notes);
  //selectors
  const Taskdetails=useSelector((state)=>state.user.userTasks.userTask)
  const [notes,setAddNote]=useState('');
  // console.log('AddNote',AddNote);


// console.log('Taskdetailsnotes',Taskdetails.notes);
console.log('Taskdetails',Taskdetails);
const dispatch=useDispatch()
const taskdata = [
  { startIcon: 'timer', name: 'Pomodoro', details: CurrentTask?.Sessions || 0, endIcon: 'timer', endIconcolor: Colors.Orange },
  { startIcon: 'calendar', name: 'Due Date', details: CurrentTask?.Day || 'today', endIcon: 'calendar', endIconcolor: 'green' },
  { startIcon: 'flag', name: 'Priority', details: CurrentTask?.Priority?.name || 'low', endIcon: 'flag', endIconcolor: CurrentTask?.Priority?.color || 'grey' },
  { startIcon: 'briefcase', name: 'Project', details: CurrentTask?.Project?.Projectname || 'pomo', endIcon: 'briefcase', endIconcolor: CurrentTask?.Project?.Color || 'grey' },
  { startIcon: 'bell', name: 'Remainder', details: 'Today', endIcon: 'bell', endIconcolor: 'green' },
  { startIcon: 'repeat', name: 'Repeat', details: 'None', endIcon: 'repeat', endIconcolor: 'green' ,endIcon: 'chevron-right', endIconcolor:  'black'}
];


    const optionsdata=[{'name':'pin','iconfamily':Icons.SimpleLineIcons,'iconname':'pin'},{'name':'Share','iconfamily':Icons.AntDesign,'iconname':'sharealt'},
    {'name':'Dublicate','iconfamily':Icons.AntDesign,'iconname':'copy1'},{'name':'Comment','iconfamily':Icons.Fontisto,'iconname':'commenting'},
    {'name':'Location','iconfamily':Icons.Feather,'iconname':'map-pin'},{'name':'Delete','iconfamily':Icons.Octicons,'iconname':'trash'}]

    //handle options
    const handleOptions=(val)=>{
      console.log('val',val);
        if(val==='Delete'){
          setShowoptions(!showOptions)
          setDeleteModalVisible(true);
        }
    }
    //to get initial data
    useEffect(() => {
      const foundTask = Taskdetails.find((task) => task.id === id);
      setCurrentTask(foundTask);
      if (foundTask) {
        setAddNote(foundTask.notes || ''); // Ensure notes is not undefined
        setAttachedFileUri(foundTask.attachement || '')
      }
      console.log('foundTask',foundTask);
    }, [id, Taskdetails]);


    const handleAddnotes=()=>{
//notes
const updatedEvents = Taskdetails.map(event => {
            if (event.id === id) {
                return {
                    ...event,
                    notes: notes,
                    
                };
            }
            return event;
        });
        console.log("updatedEventsupdatedEvents",updatedEvents)
        dispatch(addUserTasks(updatedEvents));
    }
    /////document picker
    const handlePickFile = async () => {
      try {
        const doc = await DocumentPicker.pick();
        console.log('doccc',doc[0].name);
        setAttachedFileUri(doc[0].name); // Update the attachedFileUri state with the URI of the selected file
        const updatedTask = Taskdetails.map(event => {
          if (event.id === id) {
              return {
                  ...event,
                  attachement: doc[0].name,
                  
              };
          }
          return event;
      });
     
      console.log("updatedTaskattchement",updatedTask)
      dispatch(addUserTasks(updatedTask));
       
      } catch (err) {
        if (DocumentPicker.isCancel(err))
          console.log('User cancelled the upload', err);
        else {
          console.log(err);
        }
      }
    };
    ////delete folder
    const handleDelete=()=>{
      const DeletedFile = Taskdetails.map(event => {
        if (event.id === id) {
            return {
                ...event,
                attachement: '',
                
            };
        }
        return event;
    });
    
    console.log("deletedattachement",DeletedFile)
    dispatch(addUserTasks(DeletedFile));
    }

    //Remove tags
    const handleRemoveTag=(name)=>{
        console.log('id',name)
        const Removetag=Taskdetails.map(tasks=>{
          if (tasks.id === id) {
            // Filter out the tag with the specified name
            const updatedTags = tasks.Tags.filter(tag => tag.name !== name);
            return {
              ...tasks,
              Tags: updatedTags
            };
          }
          return tasks;
        })
        dispatch(addUserTasks(Removetag))
    }
  return (
   <SafeAreaView style={[styles.bglgWhite,flex(1), paddingPosition(0, 20, 0, 20)]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
     
    <View style={[{height:heightValue(14)}]}>
    <Header
          headername={'Task'}
          IconfamilyRight={Icons.Entypo}
          IconNameRight={'dots-three-vertical'}
          onPress={() => setShowoptions(!showOptions)}
          bgcolor={styles.white}
          color={styles.black}
          goBack={() => {navigation.goBack(),handleAddnotes()}}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
    </View>
    {/* render deletemodal */}
    {isDeleteModalVisible && <DeleteTaskModal onClose={() => setDeleteModalVisible(false)} handletoTaskDeleted={()=>setTaskdeletedModalVisible(true)} DeleteTaskData={CurrentTask} id={id} Taskname={CurrentTask.Taskname}/>}
    {isTaskdeletedModalVisible && <TaskDeletedModal onClose={() =>{navigation.navigate('manage'); setTaskdeletedModalVisible(false)}}/>}
    {/* option's */}
    {showOptions ? 
    <View style={[{ position: 'absolute', top: 40, right: 20, zIndex: 1,width:widthValue(3)},paddingPosition(5,15,5,15),radius(10),styles.column,styles.bgWhite]}>
     {/* <View style={[{width:widthValue(3)},padding(10),radius(10),styles.column,styles.bgWhite]}> */}
       {optionsdata.map((options,index)=>{
        return(
          <TouchableOpacity onPress={()=>handleOptions(options.name)}>
            <View key={index} style={[styles.row,options.name==='Delete'?null:borderColor('#f2f0f0'),options.name==='Delete'?null:borderWidth(0,0,0,1),paddingPosition(10,0,10)]}>
            <View style={[{width:widthValue(16)},styles.allCenter]}>
            <Icon name={options.iconname} type={options.iconfamily} style={[options.name==='Delete'?styles.Orange:styles.black,fontSize(20),styles.textAlignVertical]}/>
            </View>
            <Text style={[options.name==='Delete'?styles.Orange:styles.black,fontSize(18),fontWeight('bold'),marginPosition(0,0,0,5)]}>{options.name}</Text>
           </View>
           </TouchableOpacity>
           )
       })}
         
     {/* </View> */}
    </View>:null}
    {/*  */}
    <ScrollView showsVerticalScrollIndicator={false} >
    <TouchableWithoutFeedback onPress={()=>setShowoptions(false)}>
    <View style={[styles.bgWhite,{height:heightValue(14)},marginPosition(0,0,15),radius(5),styles.row,borderColor(CurrentTask?.Project.Color||'orange'),borderWidth(0,0,2),styles.centerHorizontal]}>
      <View style={[flex(0.2),marginPosition(0,0,0,10)]}>
          <Icon name={'circle'} type={Icons.Entypo} style={[styles.Orange,fontSize(20),fontWeight('bold')]}/>
      </View>
      <View style={[flex(2)]}>
          <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>{CurrentTask?.Taskname||'wait'}</Text>
     </View>
     <View style={[flex(0.2)]}>
          <Icon name={'play'} type={Icons.AntDesign} style={[styles.Orange,fontSize(20)]}/>
     </View>
   </View>
{/* task detail cards */}
    <View style={[{height:heightValue(2.4),backgroundColor:'#fbfbfb'},styles.column,padding(10),radius(10),styles.allCenter]}>
        {taskdata.map((item,index)=>{
            return(
        <View style={[styles.row,{height:heightValue(16)},styles.centerHorizontal,borderColor('#f2f0f0'),borderWidth(0,0,0,1)]}>
        <Icon name={item.startIcon} type={item.startIcon==='timer'?Icons.MaterialCommunityIcons:Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
        <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>{item.name}</Text>
        <View style={[flex(1),styles.flexEnd,marginPosition(0,10)]}>
        <Text style={[styles.black,fontWeight('bold')]}>{item.details}</Text>
        </View>
        <Icon name={item.endIcon} type={item.endIcon==='timer'?Icons.MaterialCommunityIcons:Icons.Feather} style={[{color:item.endIconcolor},fontSize(20)]}/>

        </View> 
            )
        })}
   </View>
   {/* add sub task */}
   <View style={[marginPosition(10),radius(10)]}>
   <TextInputCompnent
      placeholder={'Add subtask'}
      value={subtask}
      onChangeText={(val)=>setSubtask(val)}
      IconFamily ={Icons.Feather}
      Iconname={'plus'}
      bgColor={styles.bgWhite}
    />
    </View>
    {/* //Tags */}
    {/* //Tags */}
{/* //Tags */}
<View style={[marginPosition(10)]}>
    <Text style={[styles.black,fontWeight('800')]}>Tags</Text>
    <View style={[flex(1),styles.rowWrap,marginPosition(10)]}>
        {CurrentTask?.Tags.map((task,index)=>{
            return(
              <TouchableOpacity onPress={()=>handleRemoveTag(task.name)}>
                <View style={[padding(6),styles.row,styles.allCenter,borderColor(task.color),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                    <Text style={[{color:task.color},styles.textAlignVertical]}>{`#${task.name}`}</Text>
                    <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10,0,5),styles.textAlignVertical]}/>
                </View> 
                </TouchableOpacity>
            )
        }) || null}
        <TouchableOpacity onPress={()=>navigation.navigate('addtags',{TagName:'',NavigationFrom:'task',idValue:id})}>
        <View style={[styles.allCenter,borderColor(Colors.borderGray),borderWidth(1),{height:35,width:45},radius(15)]}>
            <Icon name={'plus'} type={Icons.Feather} style={[styles.gray,fontSize(18)]}/>
        </View>
        </TouchableOpacity>
    </View>
</View>


    {/* add note */}
    <View style={[marginPosition(15)]}>
         <Text style={[styles.black,fontWeight('800')]}>Add a Note</Text>
         <View style={[styles.bgWhite,{height:heightValue(10)},paddingPosition(0,10,0,10),radius(6),marginPosition(10)]}>
             <TextInput value={notes} placeholder={'Add a note..'} style={[styles.black,fontSize(20),{ textAlignVertical: 'top' }]} placeholderTextColor={'black'} multiline={true} numberOfLines={3} onChangeText={(val)=>setAddNote(val)}/>
         </View>
    </View>
    {/* for uploading Attachment */}
    <View style={[marginPosition(15,0,15)]}>
         <Text style={[styles.black,fontWeight('800')]}>Add attachement</Text>
         {attachedFileUri!='' ? (
          <View style={[styles.row,marginPosition(10),styles.bgWhite,radius(5),padding(15),styles.allCenter]}>
            <View>
              <Icon name={'file-text'} type={Icons.FontAwesome} style={[styles.Orange,fontSize(25)]}/>
            </View>
            <TouchableOpacity onPress={()=>console.log('pppp')}>
            <View style={[{width:widthValue(1.5)},paddingPosition(0,10,0,10)]}>
             <Text style={[styles.black,fontSize(18)]}>Desig-{attachedFileUri}</Text>
             </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{handleDelete(),setAttachedFileUri('')}} style={[{width:widthValue(10)}]}>
             <View style={[styles.flexEnd]}>
              <Icon name={'trash'} type={Icons.Octicons} style={[styles.Orange,fontSize(25)]}/>
            </View>
            </TouchableOpacity>
          </View>  
          // <Text style={styles.black}>Attached File: {attachedFileUri}</Text>   
         ):
         <TouchableOpacity onPress={handlePickFile}>
         <View style={[styles.bgWhite,{height:heightValue(10)},padding(10),radius(6),styles.allCenter,styles.column,marginPosition(10)]}>
            <Icon name={'addfile'} type={Icons.AntDesign} style={[styles.gray,fontSize(20)]}/>
            <Text style={[styles.gray,fontSize(18)]}>Upload</Text>
         </View>
         </TouchableOpacity>}
    </View>
   <View style={[styles.bglgWhite]}>

   </View>
   </TouchableWithoutFeedback>
   </ScrollView>
   </SafeAreaView>
  )
}


