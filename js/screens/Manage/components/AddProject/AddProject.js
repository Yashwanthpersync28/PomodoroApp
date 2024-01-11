import React, { useEffect, useState } from 'react'
import {View} from 'react-native'
import { Add } from '../Add';
import { borderColor, borderWidth, flex, heightValue, styles, widthValue } from '../../../../styles/Styles';
import { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';

export const AddProject = ({navigation}) => {
  //states
  const [project,setproject]=useState('');
  const [selectedColor,setSelectedColor]=useState('')
  const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
//handle cancel
const handleCancel=()=>{
   //move to back project's
   console.log('move to back project');
}
const handleAdd=()=>{
  //move to Add task
  console.log('move to Add task');
}
useEffect(()=>{
   if(project.length>1 && selectedColor.length>3){
    setbuttonColor(styles.bgOrange)
   }
   else{
    setbuttonColor(styles.bgdarkOrange)
   }
},[project,selectedColor])
const handleGoback=()=>{
   navigation.navigate('project')
}
const handleMenu=()=>{

  console.log('fghjk');
}
  return (
    <View style={[flex(1),styles.bgsmokewhite]}>
        <Add 
        ColorSelected={(val)=>setSelectedColor(val)} 
        onChangeText={(val)=>setproject(val)} 
        Textinputname={'Project Name'} 
        value={project} headerName={'Add New Project'} 
        IconFamily={Icons.Entypo} 
        name={'dots-three-vertical'} 
        bgcolor={styles.bgsmokewhite} 
        color={styles.black} 
        onPress={handleMenu}
        goBack={handleGoback}
        />
        <View style={[styles.allCenter]}>
              <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
                   <CustomizedButtons handlecontinue={handleCancel} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
                   <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
              </View>
         </View>
    </View>
  )
}

