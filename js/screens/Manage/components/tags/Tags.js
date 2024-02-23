import React, { useState } from 'react'
import { flex, radius, widthValue , styles, paddingPosition, borderColor, borderWidth, marginPosition} from '../../../../styles/Styles'
import {View,Modal,ScrollView,TouchableOpacity} from 'react-native'
import Icon, { Icons } from '../../../../components/Icons'
import CustomizedButtons from '../../../auth/onboarding/component/CustomizedButtons'
import { Header } from '../Header'
import { Items } from '../Items'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Colors } from '../../../../styles/Colors'

const Tags = ({ visible, onClose ,getTagDetails,handleCounter}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);

    const updatedTags=useSelector((state => state.user.userTaglist.UserTags))
    const [Tagsdata,setTagsData]=useState(updatedTags);
    const [color,setcolor]=useState('')
    const [selectedItems, setSelectedItems] = useState([]);

     console.log('Tagsdataaaaa',updatedTags);
    const navigation=useNavigation();
    // const [Tagsdata,setTagsData]=useState([]);
    const handleCancel=()=>{
      handleCounter(0)
    }

    const handleAdd=()=>{
      console.log('fcgvhjbkn');
      console.log('checkedItem',checkedItem);
      console.log('color',color);
  getTagDetails(checkedItem)
  }
    ///to handle Add Tags
    const handleTags=()=>{
      //  navigation.navigate('addtags')
      handleCounter(4)
    }
    const [checkedItem, setCheckedItem] = useState([]);
    console.log('checkedItembb ',checkedItem);
    console.log('checkedItem',checkedItem);
    console.log('color',color);

    //handleCheckitems
    const handleItemPress = (itemName,color) => {
      const isAlreadySelected = checkedItem.some((item) => item.name === itemName);
      if (isAlreadySelected) {
        // Item is already selected, remove it
        const updatedSelection = checkedItem.filter((item) => item.name !== itemName);
        setCheckedItem(updatedSelection);
      } else {
        // Item is not selected, add it
        const updatedSelection = [...checkedItem, { name: itemName, color: color }];
        setCheckedItem(updatedSelection);
      }
     
 
  setcolor(color)
    };
  return (
<View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
<View style={[flex(0.2)]}>
  <TouchableOpacity onPress={onClose} style={[flex(1)]}>
  </TouchableOpacity>
  </View>
      <View style={[flex(0.8),{width:widthValue(1)},Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,radius(0,20,0,0,20),paddingPosition(10,10,0,10)]}>
        <View style={[flex(0.6),styles.allCenter]}>
    <View style={[{width:widthValue(10)},borderColor(Darkmode?Colors.darkmodeBorderColor:'#e3e1e1'), borderWidth(0,0,0,1),marginPosition(5)]}></View>
        
         <Header headername={'Tags'} IconfamilyRight={Icons.Feather} IconNameRight={'plus'} color={Darkmode?styles.white:styles.black} onPress={handleTags}  showLeftIocn={true}/>
        </View>
         <View style={[flex(4)]}>
         <ScrollView >
            <View style={[styles.column]}>
                <Items SingleCheckitems={false} selectedItems={checkedItem} DataItems={Tagsdata || []} checkedItem={checkedItem} handleItemPress={handleItemPress} iconName={'tag'} Iconfamily={Icons.FontAwesome}/>
            </View>
            </ScrollView>
         </View>
         <View style={[flex(0.7),styles.row,styles.allCenter,styles.spaceBetweenVertical,borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,1),paddingPosition(0,10,0,10)]}>
         <CustomizedButtons handlecontinue={handleCancel} name={'Cancel'} bgcolor={Darkmode?styles.bgDarkmodebutton:styles.bgsmokeOrange} color={Darkmode?styles.white:styles.Orange} style={[{ width: widthValue(2.5) }]} />
               <CustomizedButtons disable={checkedItem.length<1} handlecontinue={handleAdd} name={'OK'} bgcolor={checkedItem.length<1 ? styles.bgdarkOrange :styles.bgOrange} color={styles.white} style={[{ width: widthValue(2.5) }]} />
         </View>
      </View>
</View>

  )
}

export default Tags
