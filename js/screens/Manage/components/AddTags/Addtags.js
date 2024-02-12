import React, { useState , useEffect} from 'react'
import {View , Modal} from 'react-native'
import { borderColor, borderWidth, flex,heightValue,styles, widthValue } from '../../../../styles/Styles'
import { Add } from '../Add'
import { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../../redux/userReducer/userTaglistReducer'
// import { addTags } from '../../../../redux/userTagsReducer/userTaglistReducer'

export const Addtags = ({visible,onClose,navigation,handletoTags,HandleBack,route}) => {
  //states
    const [tag,settag]=useState('')
    const [selectedColor,setSelectedColor]=useState('')
    const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
    const [TempTagName,setTempTagname]=useState('')
    const [TempColor,settempcolor]=useState('')
///selectors
    const dispatch=useDispatch()
    const Tags=useSelector((state => state.user.userTaglist.UserTags))
    const [id,setid]=useState(Tags.length+1)

//used useeffect for edit and displaying tag name and color
useEffect(() => {
  if (!HandleBack ) {
    const {TagName} =route.params
    settag(TagName);
    setTempTagname(TagName)
    const OriginalColor=Tags.filter(list=>{
      if(list.name===TagName){
        return list
      }
    })
    console.log('OriginalColor',OriginalColor[0].color)
    settempcolor(OriginalColor[0].color)
  }
  else{
    settag('')
  }
}, [HandleBack]);

//send data to taglist
const addUserTagsHandler = (tagsData) => {
  
  if(!HandleBack){
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
    goBack={()=>{HandleBack ? handletoTags(3): navigation.navigate('manageProjectandTags')}}
    EditableColor={TempColor}
    />
    <View style={[styles.allCenter]}>
          <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
               <CustomizedButtons handlecontinue={()=>{HandleBack?handletoTags(3):navigation.navigate('manageProjectandTags')}} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
               <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
          </View>
     </View>
</View>
  )
}


