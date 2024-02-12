import React, { useEffect, useState } from 'react'
import {View,Modal} from 'react-native'
import { Add } from '../Add';
import { borderColor, borderWidth, flex, heightValue, marginPosition, styles, widthValue } from '../../../../styles/Styles';
import { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';
import { useDispatch, useSelector } from 'react-redux';
import { addproject } from '../../../../redux/userReducer/UserProjectListReducer';
// import { useNavigation } from '@react-navigation/native';



export const AddProject = ({navigation,visible,onClose,handletoAddtask,HandleToProject,route}) => {
  // const [editName,setEditname]=useState('')
  useEffect(() => {
    if (!HandleToProject ) {
      const {ProjectName} =route.params
      setproject(ProjectName);
      setTempProjectName(ProjectName)
      const OriginalColor=userProjectDetails.filter(list=>{
        if(list.name===ProjectName){
          return list
        }
      })
      console.log('OriginalColor',OriginalColor[0].color)
      setTempColor(OriginalColor[0].color)
    }
    else{
      setproject('')
    }
  }, [HandleToProject]);


  //states
  const [project,setproject]=useState('');
  const [selectedColor,setSelectedColor]=useState('')
  const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
  const [TempProjectName,setTempProjectName]=useState('')//used for edit name
  const [TempColor,setTempColor]=useState('')//used for change color if it is edited
  ///selectors
  const dispatch=useDispatch();
  const userProjectDetails=useSelector((state)=>state.user.userProjectList.UserProjects)
  console.log('userProjectDetails',userProjectDetails);
  console.log('length',userProjectDetails.length);
  const [id,setid]=useState(userProjectDetails.length+1)
  //send data to Project
 const addUserProjectHandler = (projectData) => {
  // navigation.navigate('project')
  if(!HandleToProject){
    //function for edit , to take already exist project and edit the name
    const EditedProject=userProjectDetails.map(Projectlist=>{
             if(Projectlist.name === TempProjectName){
              return {
                ...Projectlist,
                color:selectedColor,
                name:project
              }
             }
             return Projectlist
    })
    console.log('EditedProject',EditedProject);
    dispatch(addproject(EditedProject));
    navigation.navigate('manageProjectandTags')
  }
  else{
    console.log('not');
    dispatch(addproject([...userProjectDetails,projectData]));
  handletoAddtask(5)
  }
};

const handleAdd = () => {

  // setid((prevId => prevId + 1))
  console.log('move to Add task');
  console.log('projectname',project);
  console.log(('color',selectedColor));
  const projectData = {
    id:id,
    name: project,
   color:selectedColor,
 };
//  handletoAddtask(4)
addUserProjectHandler(projectData);

  };

useEffect(() => {
  if (project.length > 2 && selectedColor.length > 3) {
    setbuttonColor(styles.bgOrange);
  } else {
    setbuttonColor(styles.bgdarkOrange);
  }

}, [project, selectedColor ]);


const handleMenu=()=>{

  console.log('fghjk');
}
  return (
    // <Modal
    // animationType="slide"
    // transparent={true}
    // visible={visible}
    // onRequestClose={onClose}
    // >
    // <View style={[flex(1),styles.bgsmokewhite]}>
    //     <Add 
    //     ColorSelected={(val)=>setSelectedColor(val)} 
    //     onChangeText={(val)=>setproject(val)} 
    //     Textinputname={'Project Name'} 
    //     value={project} headerName={'Add New Project'} 
    //     IconFamily={Icons.Entypo} 
    //     name={'dots-three-vertical'} 
    //     bgcolor={styles.bgsmokewhite} 
    //     color={styles.black} 
    //     onPress={handleMenu}
    //     goBack={handleGoback}
    //     handletoAddtask={handletoAddtask}
    //     />
    //     <View style={[styles.allCenter]}>
    //           <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
    //                <CustomizedButtons handlecontinue={handleGoback} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
    //                <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
    //           </View>
    //      </View>
    // </View>
    // </Modal>
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
        onPress={()=>console.log('ghbn')}
        goBack={()=>{HandleToProject ? handletoAddtask(5): navigation.navigate('manageProjectandTags')}}
        handletoAddtask={handletoAddtask}
        IconnameForInputIcon={'briefcase'}
        IconFamilyforInputIcon={Icons.Ionicons}
        marginTop={HandleToProject ? true : false}
        EditableColor={TempColor}
        />
        <View style={[styles.allCenter]}>
              <View style={[{ height: heightValue(10) ,width:widthValue(1.1)}, styles.bgGray, styles.allCenter, styles.row, styles.spaceBetweenVertical, styles.bgsmokewhite, borderColor('#f7f7f7'), borderWidth(0, 1)]}>
                   <CustomizedButtons handlecontinue={()=>{HandleToProject?handletoAddtask(5):navigation.navigate('manageProjectandTags')}} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
                   <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
              </View>
         </View>
    </View>
  )
}

// handletoAddtask(5)