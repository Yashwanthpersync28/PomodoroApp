import React, { useEffect, useState } from 'react'
import { flex, radius, widthValue , styles, paddingPosition, padding, borderColor, borderWidth, heightValue, fontSize} from '../../../../styles/Styles'
import {View,Text,Modal,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import { HomepageHeader } from '../../../dashboard/Components/HomepageHeader'
import Icon, { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { Header } from '../Header'
import { Items } from '../Items'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Tags = ({ visible, onClose }) => {
    const updatedTags=useSelector((state => state.UserDetails.userList))
    const [Tagsdata,setTagsData]=useState([]);
     console.log('Tagsdataaaaa',updatedTags[0].Tags);
    const navigation=useNavigation();
    // const [Tagsdata,setTagsData]=useState([]);
    const handleCancel=()=>{
        console.log('fgchvjbkl');
    }
    const handleAdd=()=>{
      console.log('fcgvhjbkn');
      navigation.navigate('addtask',{tagname:checkedItem})
  }
    ///to handle Add Tags
    const handleTags=()=>{
       navigation.navigate('addtags')
    }

    useEffect(()=>{
      const userWithTag = updatedTags.find(userdata => userdata.email === 'test3@gmail.com');
        if (userWithTag) {
          console.log('sendDataToItems', userWithTag.Tags);
          setTagsData(userWithTag.Tags || []);
        }
        console.log('sfdg',checkedItem);
    },[updatedTags,checkedItem])

    const [checkedItem, setCheckedItem] = useState([]);
    const handleItemPress = (itemName) => {
    //   if (checkedItem.includes(itemName)) {
    //   // Item is already checked, uncheck it
    //   setCheckedItem((prevCheckedItems) =>
    //     prevCheckedItems.filter((item) => item !== itemName)
    //   );
    // } else {
    //   // Item is not checked, check it
    //   setCheckedItem((prevCheckedItems) => {
    //     const newCheckedItems = [...prevCheckedItems, itemName];
    //     console.log('Checked Items:', newCheckedItems);
    //     return newCheckedItems;
    //   });

    // }
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
             <Header headername={'Tags'} IconfamilyRight={Icons.Feather} IconNameRight={'plus'} onPress={handleTags}/>
            </View>
             <View style={[flex(4)]}>
             <ScrollView >
                <View style={[styles.column]}>
                    <Items DataItems={Tagsdata || []} checkedItem={checkedItem} handleItemPress={handleItemPress}/>
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

export default Tags
