import React, { useState , useEffect} from 'react'
import {View , Modal} from 'react-native'
import { borderColor, borderWidth, flex,heightValue,styles, widthValue } from '../../../../styles/Styles'
import { Add } from '../Add'
import { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../../redux/userReducer/userTaglistReducer'
import { addUserTasks } from '../../../../redux/userReducer/UserTaskDetails'
// import { addTags } from '../../../../redux/userTagsReducer/userTaglistReducer'

export const Addtags = ({visible,onClose,navigation,handletoTags,HandleBack,route}) => {
  //states
    const [tag,settag]=useState('')
    const [selectedColor,setSelectedColor]=useState('')
    const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
    const [TempTagName,setTempTagname]=useState('')
    const [TempColor,settempcolor]=useState('')
    const [NavigationName,setNavigationName]=useState('')
    const [Tagid,setTagid]=useState('')
///selectors
    const dispatch=useDispatch()
    const Tags=useSelector((state => state.user.userTaglist.UserTags))
    const [id,setid]=useState(Tags.length+1)
  const Taskdetails=useSelector((state)=>state.user.userTasks.userTask)


//used useeffect for edit and displaying tag name and color
useEffect(() => {
  if (!HandleBack ) {
    const {TagName , NavigationFrom , idValue} =route.params
    setNavigationName(NavigationFrom)
    settag(TagName);
    if(NavigationFrom === 'editTags'){
    setTempTagname(TagName)
    const OriginalColor=Tags.filter(list=>{
      if(list.name===TagName){
        return list
      }
    })
    console.log('OriginalColor',OriginalColor[0].color)
    settempcolor(OriginalColor[0].color)
  }
  if(NavigationFrom==='manageTags'){
    setNavigationName(NavigationFrom)
    settag('')
  }
  if(NavigationFrom==='task'){
    setNavigationName(NavigationFrom)
    setTagid(idValue)
    settag('')
  }
  }
  else{
    settag('')
  }
}, [HandleBack]);

//send data to taglist
const addUserTagsHandler = (tagsData) => {
  
  if(!HandleBack){
    if(NavigationName==='editTags'){
    const EditedTag=Tags.map(Taglist=>{
      if(Taglist.name === TempTagName){
       return {
         ...Taglist,
         color:selectedColor,
         name:tag
       }
      }
      return Taglist
})
console.log('EditedTag',EditedTag);
dispatch(addTag(EditedTag));
    navigation.navigate('manageProjectandTags')
}
if(NavigationName==='manageTags'){
  dispatch(addTag([...Tags,tagsData]))
  navigation.navigate('manageProjectandTags')
}
if(NavigationName==='task'){
  const updatedTags = Taskdetails.map(Tasklist => {
    if (Tasklist.id === Tagid) {
      // Update the Tags array for the task with the specified idValue
      return {
        ...Tasklist,
        Tags: [...Tasklist.Tags, tagsData] // Add the new tag to the existing Tags array
      };
    }
    return Tasklist;
  });
  // navigation.navigate('task')
  dispatch(addUserTasks(updatedTags))
  navigation.navigate('task',{id:Tagid})

}
  }
  else{
    dispatch(addTag([...Tags,tagsData]))
  handletoTags(3)
}
};

const handleAdd=()=>{
 //move to Add task
 console.log('move to Add task');
 console.log('tagname',tag);
 console.log(('color',selectedColor));
 const tagsData = {
  id:id,
  name: tag,
  color:selectedColor, 
};

addUserTagsHandler(tagsData);

}
///for button disable
useEffect(()=>{
  if(tag.length>1 && selectedColor.length>3){
   setbuttonColor(styles.bgOrange)
  }
  else{
   setbuttonColor(styles.bgdarkOrange)
  }
},[tag,selectedColor])

//user to go back to tags
const handleGoback=()=>{
  navigation.navigate('tag')
}

const handleMenu=()=>{

 console.log('fghjk');
}
  return (
    <View style={[flex(1),styles.bgsmokewhite]}>
    <Add
    marginTop={HandleBack ? true : false}
     IconnameForInputIcon={'tag'}
     IconFamilyforInputIcon={Icons.Feather}
    ColorSelected={(val)=>setSelectedColor(val)} onChangeText={(val)=>settag(val)} Textinputname={'Tag Name'} value={tag} headerName={'Add New Tag'} IconFamily={Icons.Entypo} name={'dots-three-vertical'} bgcolor={styles.bgsmokewhite} color={styles.black}  onPress={handleMenu}
    goBack={()=>{HandleBack ? handletoTags(3):NavigationName==='task' ? navigation.navigate('task',{id:Tagid}):navigation.navigate('manageProjectandTags')}}
    EditableColor={TempColor}
    />
    <View style={[styles.allCenter]}>
          <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
               <CustomizedButtons handlecontinue={()=>{HandleBack?handletoTags(3): NavigationName==='task' ? navigation.navigate('task',{id:Tagid}):navigation.navigate('manageProjectandTags')}} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
               <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
          </View>
     </View>
</View>
  )
}


