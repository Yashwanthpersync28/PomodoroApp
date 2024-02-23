import React, { useEffect, useState } from 'react'
import { flex, radius, widthValue , styles, paddingPosition, padding, borderColor, borderWidth, heightValue, fontSize, margin, marginPosition} from '../../../../styles/Styles'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native'
import Icon, { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { Header } from '../Header'
import { Items } from '../Items'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Colors } from '../../../../styles/Colors'


export const Project = ({ visible, onClose , getProjectDetails,handleCounter}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

    const navigation=useNavigation();
    const userProjectDetails=useSelector((state)=>state.user.userProjectList.UserProjects)
    console.log('userProjectDetails',userProjectDetails.length);
    const [projectdata,setprojectData]=useState(userProjectDetails);
    const [color,setcolor]=useState('')

    const handleCancel=()=>{
      handleCounter(0)
        console.log('fgchvjbkl');
    }
    const handleAdd=()=>{
        console.log('fcgvhjbkn');
        getProjectDetails(checkedItem,color)
    }
    ///to handle Add Tags
    const handletoAddProject=()=>{
      //  navigation.navigate('addproject')
      handleCounter(6)
    }

    const [checkedItem, setCheckedItem] = useState('');
    
    const handleItemPress = (itemName,color) => {
      setCheckedItem((prevCheckedItem) =>
        prevCheckedItem === itemName ? null : itemName
      );
      setcolor(color)

    };
  return (
<View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
<View style={[flex(0.2)]}>
  <TouchableOpacity onPress={onClose} style={[flex(1)]}>
  </TouchableOpacity>
  </View>
      <View style={[flex(0.8),{width:widthValue(1)},Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,radius(0,20,0,0,20),paddingPosition(10,10,0,10)]}>
        <View style={[flex(0.6),borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,0,0,1),styles.allCenter]}>
    <View style={[{width:widthValue(10)},borderColor(Darkmode?Colors.darkmodeBorderColor:'#e3e1e1'), borderWidth(0,0,0,1),marginPosition(5)]}></View>
        
         <Header headername={'Project'} IconfamilyRight={Icons.Feather} IconNameRight={'plus'} onPress={handletoAddProject} showLeftIocn={true} color={Darkmode?styles.white:styles.black}/>
        </View>
         <View style={[flex(4)]}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.column]}>
                <Items DataItems={projectdata || []} SingleCheckitems={true} checkedItem={checkedItem} handleItemPress={handleItemPress} iconName={'briefcase'} Iconfamily={Icons.Entypo}/>
            </View>
            </ScrollView>
         </View>
         <View style={[flex(0.6),styles.row,styles.allCenter,styles.spaceBetweenVertical,borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,1),paddingPosition(0,10,0,10)]}>
         <CustomizedButtons handlecontinue={handleCancel} name={'Cancel'} bgcolor={Darkmode?styles.bgDarkmodebutton:styles.bgsmokeOrange} color={Darkmode?styles.white:styles.Orange} style={[{ width: widthValue(2.5) }]} />
               <CustomizedButtons disable={checkedItem.length<1}  handlecontinue={handleAdd} name={'OK'} bgcolor={checkedItem.length<1?styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(2.5) }]} />
         </View>
      </View>
</View>
  )
}


