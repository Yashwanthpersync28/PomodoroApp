import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, fontWeight, marginPosition, padding, paddingPosition, radius, styles } from '../../../styles/Styles';
import Icon, { Icons } from '../../../components/Icons';
import { Colors } from '../../../styles/Colors';

export const DropDown = ({ChangeDropdownName,name,clickedDropdown,handleDropdown,showPomodoro}) => {
  console.log('showPomodorondbfsnbkv',showPomodoro);
  // const [clickedDropdown,setClickedDropdown]=useState(true)
  // const [name,setname]=useState('weekly')
  

  const handleItem = (selectedItem) => {
    const updatedHeaderData = headerData.map(item => ({
      ...item,
      selected: item.name === selectedItem.name
    }));
    setHeaderData(updatedHeaderData);
    handleDropdown(true);
    ChangeDropdownName(selectedItem.name);
  }
  const [headerData, setHeaderData] = useState([{ name: showPomodoro ? 'Weekly':'Task', selected: true }, { name: showPomodoro ? 'Monthly':'Weekly', selected: false }, { name: showPomodoro ? 'Biweekly':'Biweekly', selected: false }]);
console.log('headerData',headerData);
  // const [headerData,setHeaderData]=[{name:'weekly',selected:true},{name:'Biweekly',selected:false},{name:'monthly',selected:false}]
  return(
    <View style={[styles.selfStart,borderColor(Colors.borderGray),borderWidth(1),paddingPosition(8,12,8,12),radius(15),styles.column,styles.bglgWhite]}>
    {clickedDropdown ? 
     <TouchableOpacity onPress={()=>handleDropdown(false)}>
      <View style={[styles.row]}>
          <Text style={[styles.black,fontWeight('600')]}>{name}</Text>
          <Icon name={'chevron-down'} type={Icons.Feather} style={[styles.borderGray,fontSize(25)]}/>
      </View>
    </TouchableOpacity>
    :
    <>
    {headerData.map((items,index)=>{
      return (
        <TouchableOpacity onPress={()=>handleItem(items)}>
        <View style={[styles.row]}>
          <View>
            <Text style={[items.selected ? styles.black : styles.borderGray,items.selected && fontWeight('600')]}>{items.name}</Text>
            </View>
            <View style={[styles.flexEnd,flex(1)]}>
               <Icon name={items.selected ? 'chevron-up':'chevron-down'} type={Icons.Feather} style={[items.selected ? styles.black : styles.borderGray,items.selected && fontWeight('600'),fontSize(25),marginPosition(0,0,0,5)]}/>
            </View>
        </View>
        </TouchableOpacity>
      )
    })}
      
      </>
}
    </View>
  )
}
