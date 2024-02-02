// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../../styles/Styles';

// import Icon, { Icons } from '../../../../../components/Icons';
// // import { Inneritem } from './InnerItem'; // Uncomment if needed

// export const ManageItemslist = ({ data, showProjects }) => {
//   console.log('data', data);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemPress = (item) => {
 
//     setSelectedItem(selectedItem === item ? null : item);
//   };

//   return (
//     <View style={[flex(1)]}>
//       {data.map((item) => (
//         <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
//           <View>
//             <View style={[styles.row, { height: heightValue(14) }, borderColor('#f2f0f0'), borderWidth(0, 1),{zIndex:1 }]}>
//               <View style={[flex(0.2), styles.allCenter]}>
//                 <Icon name={showProjects ? 'briefcase' : 'tag'} type={Icons.Feather} style={[fontSize(20), styles.black]} />
//               </View>
//               <View style={[flex(1), styles.centerVertical]}>
//                 <Text style={[fontSize(18), styles.black]}>{item.name}</Text>
//               </View>
//               <View style={[flex(0.2), styles.allCenter]}>
//                 <Icon name={'dots-three-vertical'} type={Icons.Entypo} style={[fontSize(20), styles.black]} />
//               </View>
              
//             </View>
//             {/* options */}
//             {selectedItem && selectedItem.id === item.id && (
//                 <View style={[styles.positionAbsolute,{top: 40, right: 20, zIndex: 99,  },  radius(10), styles.bglgWhite,padding(10),styles.selfStart]}>
//                   <View style={[styles.row,padding(10),styles.selfStart]}>
//                     <Icon name={'edit-3'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
//                     <Text style={[styles.black,fontSize(17)]}>Edit</Text>
//                   </View>
//                   <View style={[styles.row]}>
//                     <Icon name={'edit-3'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
//                     <Text style={[styles.black,fontSize(17)]}>Archieve</Text>
//                   </View>
//                 </View>
//               )}
           
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };


import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../../styles/Styles';

import Icon, { Icons } from '../../../../../components/Icons';
import { deleteUserProject } from '../../../../../redux/userReducer/UserProjectListReducer';
import { useDispatch } from 'react-redux';
import { addArchieveProjects, addArchieveTags } from '../../../../../redux/userReducer/ArchieveReducer';
import { deleteUserTag } from '../../../../../redux/userReducer/userTaglistReducer';
import { NotaskFound } from '../../../../../components/view/NotaskFound';
// import { Inneritem } from './InnerItem'; 

export const ManageItemslist = ({ data, showProjects , optionOne , optionTwo , handleArchieveProjects , handleArchieveTags, handleoptionOneProject,handleoptionOneTags,showArchievedlists}) => {
  console.log('data', data);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch=useDispatch()

  const handleItemPress = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

 
  return (
    <View style={[flex(1)]}>
      {data.map((item,index) => (
        // <TouchableOpacity key={item.id} >
          <View key={index}> 
            <View style={[styles.row, { height: heightValue(14) }, borderColor('#f2f0f0'), borderWidth(0,0,0,1), { position: 'relative', zIndex: 1 }]}>
              <View style={[flex(0.2), styles.allCenter]}>
                <Icon name={showProjects ? 'briefcase' : 'tag'} type={Icons.Feather} style={[fontSize(20),{color:item.color}]} />
              </View>
              <View style={[flex(1), styles.centerVertical]}>
                <Text style={[fontSize(18), styles.black]}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => handleItemPress(item)} style={[flex(0.2), styles.allCenter]}>
              <View style={[flex(1), styles.allCenter]}>
                <Icon name={'dots-three-vertical'} type={Icons.Entypo} style={[fontSize(20),styles.black]} />
              </View>
              </TouchableOpacity>
            </View>
            {/* options */}
            {selectedItem && selectedItem.name === item.name && (
              <View style={[{ position: 'absolute', top: 38, right: 10, zIndex: 99 },styles.bglgWhite,radius(10)]}>
                <TouchableOpacity onPress={()=>showProjects?handleoptionOneProject(item.name):handleoptionOneTags(item.name)}>
                <View style={[styles.row, radius(10), styles.bglgWhite, padding(10), styles.selfStart, { position: 'relative', zIndex: 2 ,width:widthValue(3.5)},borderColor(styles.borderGray),borderWidth(0,0,0,1)]}>
                  <Icon name={showArchievedlists?'arrow-up-box':'edit-3'} type={showArchievedlists?Icons.MaterialCommunityIcons:Icons.Feather} style={[styles.black, fontSize(20), marginPosition(0, 10)]} />
                  <Text style={[styles.black, fontSize(17)]}>{optionOne}</Text>
                </View>
                </TouchableOpacity>
               
                <View style={[styles.row, radius(10), styles.bglgWhite, padding(10), styles.selfStart, { position: 'relative', zIndex: 2,}]}>
                <TouchableOpacity onPress={()=>showProjects?handleArchieveProjects(item.name):handleArchieveTags(item.name)} style={[styles.row]}>
                  <Icon name={showArchievedlists?'delete-outline':'arrow-down-box'} type={Icons.MaterialCommunityIcons} style={[showArchievedlists?styles.Orange:styles.black, fontSize(22), marginPosition(0, 10)]} />
                  <Text style={[showArchievedlists?styles.Orange:styles.black, fontSize(16)]}>{optionTwo}</Text>
                  </TouchableOpacity>
                </View>
                
              </View>
            )}
            {/* <Inneritem visible={selectedItem && selectedItem.name === item.name} itemName={item.name} /> */}
          </View>
        
      ))}
      {data.length<1?<NotaskFound name={showProjects?'No projects found':'No Tags found'}/>:null}
    </View>
  );
};
// arrow-up-box (materiicons) for restore
// arrow-down-box (mater) for archieve 
// edit-3 feather for edit
// delete-outline (ma) for delete