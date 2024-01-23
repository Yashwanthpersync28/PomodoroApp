import React, { useState , useEffect} from 'react'
import {View , Modal} from 'react-native'
import { borderColor, borderWidth, flex,heightValue,styles, widthValue } from '../../../../styles/Styles'
import { Add } from '../Add'
import { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { useDispatch } from 'react-redux'
import { addTag } from '../../../../redux/userReducer/userTaglistReducer'
// import { addTags } from '../../../../redux/userTagsReducer/userTaglistReducer'

export const Addtags = ({visible,onClose,navigation,handletoTags}) => {
  //states
    const [tag,settag]=useState('')
    const [selectedColor,setSelectedColor]=useState('')
    const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
    const [id,setid]=useState(1)
///selectors
    const dispatch=useDispatch()
//send data to taglist
const addUserTagsHandler = (tagsData) => {
  // dispatch(addTags({ email, tagsData }));
  dispatch(addTag(tagsData))
  // navigation.navigate('tag')
  handletoTags(3)
};

const handleAdd=()=>{
  setid(prevId => prevId + 1);
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
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
    >
    <View style={[flex(1),styles.bgsmokewhite]}>
        <Add ColorSelected={(val)=>setSelectedColor(val)} onChangeText={(val)=>settag(val)} Textinputname={'Tag Name'} value={tag} headerName={'Add New Tag'} IconFamily={Icons.Entypo} name={'dots-three-vertical'} bgcolor={styles.bgsmokewhite} color={styles.black}  onPress={handleMenu}
        goBack={handleGoback}/>
        <View style={[styles.allCenter]}>
              <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
                   <CustomizedButtons handlecontinue={handleGoback} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
                   <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
              </View>
         </View>
    </View>
    </Modal>
  )
}


