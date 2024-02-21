import React, { useEffect, useState } from 'react'
import {View,StatusBar} from 'react-native'
import { Add } from '../Add';
import { borderColor, borderWidth, flex, heightValue, marginPosition, styles, widthValue } from '../../../../styles/Styles';
import { Icons } from '../../../../components/Icons';
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons';
import { useDispatch, useSelector } from 'react-redux';
import { addproject } from '../../../../redux/userReducer/UserProjectListReducer';
import { Colors } from '../../../../styles/Colors';
// import { useNavigation } from '@react-navigation/native';



export const AddProject = ({navigation,visible,onClose,handletoAddtask,HandleToProject,route}) => {

  const [NavigationFrom,setNavigationName]=useState('')
  

  // const [editName,setEditname]=useState('')
  useEffect(() => {
    if (!HandleToProject ) {
      
      const {ProjectName,NavigationFrom} =route.params
      setNavigationName(NavigationFrom)
      setproject(ProjectName);
      if(NavigationFrom==='edit'){
        
      setTempProjectName(ProjectName)
      const OriginalColor=userProjectDetails.filter(list=>{
        if(list.name===ProjectName){
          return list
        }
      })
      // console.log('OriginalColor',OriginalColor[0].color)

      setTempColor(OriginalColor[0].color)
    }
    if(NavigationFrom==='manage'){
      setNavigationName(NavigationFrom)
      setproject('')
    }
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
  const [error,setError]=useState('')
  ///selectors
  const dispatch=useDispatch();
  const userProjectDetails=useSelector((state)=>state.user.userProjectList.UserProjects)
  const Darkmode=useSelector((state)=>state.system.darkMode);
  console.log('userProjectDetails',userProjectDetails);
  console.log('length',userProjectDetails.length);
  const [id,setid]=useState(userProjectDetails.length+1)
  //send data to Project
 const addUserProjectHandler = (projectData) => {
  // navigation.navigate('project')
  if(!HandleToProject){
    //function for edit , to take already exist project and edit the name
    if(NavigationFrom==='edit'){
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
  if(NavigationFrom==='manage'){
    dispatch(addproject([...userProjectDetails,projectData]))
    navigation.navigate('manageProjectandTags')
  }

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
  if (project.length > 2 && selectedColor.length > 3 && !error) {
    setbuttonColor(styles.bgOrange);
  } else {
    setbuttonColor(styles.bgdarkOrange);
  }
  


}, [project, selectedColor ]);


const handleChangeText = (val) => {
  setproject(val);
  setError('');
  const projectExists = userProjectDetails.some((projectItem) => projectItem.name.trim().toLowerCase() === val.trim().toLowerCase());
  if (projectExists) {
    setError('Project already exists');
  }
};

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
    <View style={[flex(1),Darkmode?styles.bgdarkmodeBlack:styles.bgsmokewhite]}>
    <StatusBar backgroundColor = {Darkmode?Colors.darkmodeBlack:Colors.white} barStyle = "dark-content"/>

        <Add 
        Darkmode={Darkmode}
        ColorSelected={(val)=>setSelectedColor(val)} 
        onChangeText={(val)=>handleChangeText(val)} 
        Textinputname={'Project Name'} 
        value={project} headerName={'Add New Project'} 
        IconFamily={Icons.Entypo} 
        name={'dots-three-vertical'} 
        bgcolor={Darkmode?styles.bgdarkmodeBlack:styles.bgsmokewhite} 
        color={Darkmode?styles.white:styles.black}
        onPress={()=>console.log('ghbn')}
        goBack={()=>{HandleToProject ? handletoAddtask(5): navigation.navigate('manageProjectandTags')}}
        handletoAddtask={handletoAddtask}
        IconnameForInputIcon={'briefcase'}
        IconFamilyforInputIcon={Icons.Ionicons}
        marginTop={HandleToProject ? true : false}
        EditableColor={TempColor}
        error={error}
        />
        <View style={[styles.allCenter]}>
              <View style={[{ height: heightValue(10) ,width:widthValue(1.1)},  styles.allCenter, styles.row, styles.spaceBetweenVertical, Darkmode?styles.bgdarkmodeBlack:styles.bgsmokewhite, borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray), borderWidth(0, 1)]}>
                   <CustomizedButtons handlecontinue={()=>{HandleToProject?handletoAddtask(5):navigation.navigate('manageProjectandTags')}} name={'Cancel'} bgcolor={Darkmode?styles.bgDarkmodebutton:styles.bgsmokeOrange} color={Darkmode?styles.white:styles.Orange} style={[{ width: widthValue(3) }]} />
                   <CustomizedButtons disable={buttoncolor === styles.bgdarkOrange} handlecontinue={handleAdd} name={'ADD'} bgcolor={buttoncolor} color={styles.white} style={[{ width: widthValue(3) }]} />
              </View>
         </View>
    </View>
  )
}

// handletoAddtask(5)