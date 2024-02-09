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
    }
    else{
      setproject('')
    }
  }, [HandleToProject]);


  //states
  const [project,setproject]=useState('');
  const [selectedColor,setSelectedColor]=useState('')
  const [buttoncolor,setbuttonColor]=useState(styles.bgdarkOrange)
  ///selectors
  const dispatch=useDispatch();
  const userProjectDetails=useSelector((state)=>state.user.userProjectList.UserProjects)
  console.log('userProjectDetails',userProjectDetails);
  console.log('length',userProjectDetails.length);
  const [id,setid]=useState(userProjectDetails.length+1)
  //send data to Project
 const addUserProjectHandler = (projectData) => {
  dispatch(addproject(projectData ));
  // navigation.navigate('project')
  if(!HandleToProject){
    
    navigation.navigate('manageProjectandTags')
  }
  else{
    console.log('not');
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