// import React, { useState } from 'react'
// import { borderColor, borderWidth, flex, fontSize, heightValue, styles } from '../../../styles/Styles'
// import Icon, { Icons } from '../../../components/Icons'
// import {View,Text} from 'react-native'


// export const Items = ({DataItems}) => {
//     console.log('fgchvjbk',DataItems);
//     // const [data,setData]=useState([{itemname:"Pomodoro",color:styles.Orange},{itemname:"Work",color:styles.purple}])
//     const [data,setData]=useState(DataItems)
//   return (
//     <View style={[styles.column]}>
//     {
//         data.map((data,index)=>{
//             return(
//                 <View key={index} style={[{height:heightValue(12)},styles.row,borderColor('#f7f7f7'),borderWidth(0,0,0,1)]}>
//                    <View style={[flex(0.2),styles.allCenter]}>
//                      <Icon name={'tag'} type={Icons.Feather} style={[{color:data.color},fontSize(30)]} />
//                    </View>
//                    <View style={[flex(1),styles.centerVertical]}>
//                        <Text style={[fontSize(22),styles.black]}>{data.ProjectName}</Text>
//                    </View>
//                    {/* <View style={[flex(0.2),styles.allCenter]}>
//                    <Icon name={'tag'} type={Icons.Feather} style={[data.color,fontSize(30)]} />
//                    </View> */}
//                 </View>
//             )
//         })
//     }
//     </View>
   
//   )
// }



 // if (checkedItems.includes(itemName)) {
    //   // Item is already checked, uncheck it
    //   setCheckedItems((prevCheckedItems) =>
    //     prevCheckedItems.filter((item) => item !== itemName)
    //   );
    // } else {
    //   // Item is not checked, check it
    //   setCheckedItems((prevCheckedItems) => {
    //     const newCheckedItems = [...prevCheckedItems, itemName];
    //     console.log('Checked Items:', newCheckedItems);
    //     return newCheckedItems;
    //   });

    // }

    import React, { useState, useEffect } from 'react';
    import { TouchableOpacity } from 'react-native';
    import { borderColor, borderWidth, flex, fontSize, heightValue, styles } from '../../../styles/Styles';
    import Icon, { Icons } from '../../../components/Icons';
    import { View, Text } from 'react-native';
    
    export const Items = ({ DataItems , handleItemPress , checkedItem}) => {
      // const [checkedItem, setCheckedItem] = useState('twf');
    
      // const handleItemPress = (itemName) => {
      //   setCheckedItem((prevCheckedItem) =>
      //     prevCheckedItem === itemName ? null : itemName
      //   );
      // };
    
      // useEffect(() => {
      //   console.log('Checked Item:', checkedItem);
      // }, [checkedItem]);
    
      return (
        <View style={[styles.column]}>
          {DataItems.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[{ height: heightValue(12) }, styles.row, borderColor('#f7f7f7'), borderWidth(0, 0, 0, 1)]}
              onPress={() => handleItemPress(data.name)}
            >
              <View style={[flex(0.2),styles.allCenter]}>
                <Icon name={'tag'} type={Icons.Feather} style={[{color:data.color},fontSize(30)]} />
              </View>
              <View style={[flex(1), styles.centerVertical]}>
                <Text style={[fontSize(22), styles.black]}>{data.name}</Text>
              </View>
              <View style={[flex(0.2), styles.allCenter]}>
                <Icon
                  name={checkedItem === data.name ? 'check' : ''}
                  type={Icons.Feather}
                  style={[styles.Orange, fontSize(30)]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
    

