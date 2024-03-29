import React,{useState} from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, padding, paddingPosition, position, radius, styles, widthValue ,zIndex} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { addBackUserTask} from '../../../redux/userReducer/UserTaskDetails'
import { useDispatch } from 'react-redux'
import { deleteForeverUserTaskFromTrash } from '../../../redux/userReducer/TrashReducer'
import { NotaskFound } from '../../../components/view/NotaskFound'


const TaskCardDetails = ({name,ShowplayIcon,data,handleTask,showPlayIcon,showLinethrough}) => {
    console.log('dataaa',data.length);
    const [showOptionsIndex, setShowOptionsIndex] = useState(null);
    const dispatch=useDispatch()

    const toggleOptions = (index) => {
      setShowOptionsIndex(showOptionsIndex === index ? null : index);
    };
     ///restore the tasks 
     const handletoRestore = (index) => {
        const restoredTask = data.find((task, i) => i === index);
        console.log('restoredTask',restoredTask);
        dispatch(deleteForeverUserTaskFromTrash(restoredTask.id)); // Removed from deleteUserTask
        dispatch(addBackUserTask(restoredTask)); // Added back to addBackUserTask
      };
    const handleDeleteForever=(index)=>{
        const restoredTask = data.find((task, i) => i === index);
          dispatch(deleteForeverUserTaskFromTrash(restoredTask.id))
    }

  return (
    <>
    {data.map((dataitem,index)=>{
        return(
            
     <View  key={index} style={[styles.bgWhite,radius(5),borderColor(dataitem.Project.Color),borderWidth(0,0,2),padding(10),styles.row,,marginPosition(10,0,10)]}>  
        <View style={[flex(0.2),styles.selfStart]}>
            <Icon name={name==='Completed'?'checkcircle':'circle'} type={name==='Completed'?Icons.AntDesign:Icons.Entypo} style={[styles.Orange,fontSize(22)]}/>
        </View>
        {/* //item list */}
        
        <TouchableOpacity key={index} onPress={()=>handleTask(dataitem.id)} style={[styles.column,flex(1)]}>
        <View style={[styles.column,flex(1)]}>
            <Text style={[name==='Completed'?styles.textGray:styles.black,fontWeight('bold'),{textDecorationLine:showLinethrough?'line-through':'none'}]}>{dataitem.Taskname}</Text>
            <View style={[styles.rowWrap,marginPosition(10)]}>
              
                {dataitem.Tags.map((tags,index)=>{
                    return(
                           <Text key={index} style={[{color:tags.color},marginPosition(0,5)]}>{`#${tags.name}`}</Text> 
                    )
                })}
            
            </View>
            <View style={[styles.rowWrap,marginPosition(10),styles.centerHorizontal]}>
            <Icon name={'timer'} type={Icons.MaterialCommunityIcons} style={[styles.Orange,fontSize(20),marginPosition(0,5)]}/>
            <Text style={[styles.black,marginPosition(0,10)]}>{dataitem.Sessions}</Text>   
            <Icon name={'flag'} type={Icons.Feather} style={[{color:dataitem.Priority.color},fontSize(20),marginPosition(0,10)]}/>
            <Icon name={'briefcase'} type={Icons.Octicons} style={[{color:dataitem.Project.Color},fontSize(20),marginPosition(0,10)]}/>
            <Text style={[styles.gray]}>{dataitem.Project.Projectname}</Text>   
                
            </View>
            {/* //options */}
            {showOptionsIndex === index && (
                <>
            {/* <View style={[radius(5),styles.column,styles.bglgWhite,{width:widthValue(3),height:heightValue(9)},padding(10),styles.positionAbsolute,position(20,0,0,140),zIndex(99),flex(1)]}>
            <TouchableOpacity onPress={()=>handletoRestore(index)}>
              <View style={[styles.row,borderColor(styles.borderGray),borderWidth(0,0,0,1),marginPosition(0,0,5)]}>
                 <Icon name={'archive-arrow-up'} type={Icons.MaterialCommunityIcons} style={[styles.black,fontSize(20),styles.textAlignVertical]}/>
                 <Text style={[styles.black,fontSize(17)]}>Restore</Text>    
               </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>handleDeleteForever(index)}>
            <View style={[styles.row]}>
             <Icon name={'delete'} type={Icons.MaterialCommunityIcons} style={[styles.Orange,fontSize(20),styles.textAlignVertical]}/>
             <Text style={[styles.Orange,fontSize(17)]}>Delete forever</Text>    
            </View>
            </TouchableOpacity>
           </View> */}
            <View style={[{ position: 'absolute', top: 10, right: -30, zIndex: 99 },styles.bglgWhite,radius(10)]}>
                <TouchableOpacity onPress={()=>handletoRestore(index)}>
                <View style={[styles.row, radius(10), styles.bglgWhite, padding(10), styles.selfStart, { position: 'relative', zIndex: 2 ,width:widthValue(3.5)},borderColor(styles.borderGray),borderWidth(0,0,0,1)]}>
                  <Icon name={'archive-arrow-up'} type={Icons.MaterialCommunityIcons} style={[styles.black, fontSize(20), marginPosition(0, 10)]} />
                  <Text style={[styles.black, fontSize(17)]}>Restore</Text>
                </View>
                </TouchableOpacity>
               
                <View style={[styles.row, radius(10), styles.bglgWhite, padding(10), styles.selfStart, { position: 'relative', zIndex: 2,}]}>
                <TouchableOpacity onPress={()=>handleDeleteForever(index)} style={[styles.row]}>
                  <Icon name={'delete'} type={Icons.MaterialCommunityIcons} style={[styles.black, fontSize(22), marginPosition(0, 10)]} />
                  <Text style={[styles.black, fontSize(16)]}>Delete forever</Text>
                  </TouchableOpacity>
                </View>
                
                
              </View>
           </>
              )}
             
           {/*  */}
        </View>
        </TouchableOpacity>
    
        {/* item list end */}
        <View style={[flex(0.2),styles.flexEnd,styles.positionRelative]}>
         {showPlayIcon?
             <TouchableOpacity>
              <Icon name={'play'} type={Icons.AntDesign} style={[fontSize(20),styles.Orange]}/>
             </TouchableOpacity>:
             <TouchableOpacity onPress={() => toggleOptions(index)}>
             <Icon name={name==='Completed'?null:ShowplayIcon?'play':'dots-three-vertical'} type={Icons.Entypo} style={[styles.black,fontSize(20)]}/>
             </TouchableOpacity>}
        </View>
        

    </View>
        )
    })}
    {data.length===0?
    <NotaskFound name={'No task found!'}/>:null} 
    </>
  )
}

export default TaskCardDetails
