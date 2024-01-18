import React, { useEffect, useState } from 'react'
import { flex, radius, widthValue , styles, paddingPosition, padding, borderColor, borderWidth, heightValue, fontSize, margin} from '../../../../styles/Styles'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import Icon, { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { Header } from '../Header'
import { Items } from '../Items'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


export const Project = ({ visible, onClose }) => {
    const navigation=useNavigation();
    const userProjectDetails=useSelector((state)=>state.UserDetails.userList)
    // console.log('datassdfghjk',userProjectDetails);
    const [projectdata,setprojectData]=useState([]);
    const handleCancel=()=>{
        console.log('fgchvjbkl');
    }
    const handleAdd=()=>{
        console.log('fcgvhjbkn');
        navigation.navigate('addtask',{projectname:checkedItem})
    }
    ///to handle Add Tags
    const handletoAddProject=()=>{
       navigation.navigate('addproject')
    }
    useEffect(()=>{
      const userWithproject = userProjectDetails.find(userdata => userdata.email === 'test3@gmail.com');
        // console.log('userWithTag',userWithproject);
        // setprojectData(userWithproject.Project)
        // console.log('sendDataToItems',projectdata);
        if (userWithproject) {
          console.log('sendDataToItems', userWithproject.Project);
          setprojectData(userWithproject.Project || []);
        }
        console.log('sfdg',checkedItem);
    },[userProjectDetails,checkedItem])

    const [checkedItem, setCheckedItem] = useState('');
    
    const handleItemPress = (itemName) => {
      setCheckedItem((prevCheckedItem) =>
        prevCheckedItem === itemName ? null : itemName
      );
    };
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
    >
    <View style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'flex-end',alignItems:'center'}]}>
          <View style={[flex(0.8),{width:widthValue(1)},styles.bgWhite,radius(0,20,0,0,20),paddingPosition(10,10,0,10)]}>
            <View style={[flex(0.6),borderColor('#f7f7f7'),borderWidth(0,0,0,1)]}>
             <Header headername={'Project'} IconfamilyRight={Icons.Feather} IconNameRight={'plus'} onPress={handletoAddProject}/>
            </View>
             <View style={[flex(4)]}>
             <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.column]}>
                    <Items DataItems={projectdata || []} checkedItem={checkedItem} handleItemPress={handleItemPress}/>
                </View>
                </ScrollView>
             </View>
             <View style={[flex(1),styles.row,styles.allCenter,styles.spaceBetweenVertical,borderColor('#f7f7f7'),borderWidth(0,1),paddingPosition(0,20,0,20)]}>
             <CustomizedButtons handlecontinue={handleCancel} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
                   <CustomizedButtons  handlecontinue={handleAdd} name={'OK'} bgcolor={styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} />
                   {/* disable={buttoncolor === styles.bgdarkOrange} */}
             </View>
          </View>
    </View>
</Modal>
  )
}


