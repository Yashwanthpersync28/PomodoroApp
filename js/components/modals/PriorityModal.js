import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../styles/Styles';
import CustomizedButtons from '../../screens/auth/onboarding/component/CustomizedButtons';
import Icon, { Icons } from '../Icons';
import { Header } from '../../screens/Manage/components/Header';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const PriorityModal = ({ visible, onClose , getPriorityDetails,handletoAddtask}) => {
  const navigation=useNavigation()
  const [prioritylist, setPriorityList] = useState([
    { name: 'High Priority', color: '#df5941', showCheck: false },
    { name: 'Medium Priority', color: '#ff8e26', showCheck: false },
    { name: 'Low Priority', color: '#4bb058', showCheck: false },
    { name: 'No Priority', color: '#607d8a', showCheck: false },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  // Handling Check
  const handleCheck = (name) => {
    setPriorityList((prevList) =>
      prevList.map((priority) => ({
        ...priority,
        showCheck: priority.name === name,
      }))
    );

    // Store the selected item
    const selected = prioritylist.find((priority) => priority.name === name);
    setSelectedItem(selected);
  };

  // Go back to Add Task and pass the selected item
  const GoToAddtask = () => {
    // navigation.navigate('addtask', { selectedPriority: selectedItem });
    console.log('jhvmn',selectedItem.name);
    getPriorityDetails(selectedItem)
    handletoAddtask(0)
    // navigation.navigate('addtask',{prioritydata:selectedItem.name})

  };

  return (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={visible}
    //   onRequestClose={onClose}>
    //   <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
    //   <View style={[flex(0.6)]}>
    //   <TouchableOpacity onPress={onClose} style={[flex(1)]}>
    //   </TouchableOpacity>
    //   </View>
    //     <View style={[flex(0.6), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
    //       <View style={[styles.allCenter, flex(0.7), borderColor('#e3e1e1'), borderWidth(0, 0, 0, 1)]}>
    //         <Header headername={'Priority'} bgcolor={styles.white} color={styles.black} showLeftIocn={true}/>
    //         {/* <Text style={[styles.black]}>{selectedItem}</Text> */}
    //       </View>
    //       <View style={[styles.allCenter, flex(3), styles.column]}>
    //         {prioritylist.map((list, index) => (
    //           <TouchableOpacity key={index} onPress={() => handleCheck(list.name)} style={[flex(1), styles.row, borderColor('#e3e1e1'), borderWidth(0, 0, 0, 0.6), { width: widthValue(1.2), alignItems: 'center' }]}>
    //             <View style={[{ height: 35, width: 35 }, radius(30), { backgroundColor: list.color }, styles.allCenter]}>
    //               <Icon name={'flag'} type={Icons.Ionicons} style={[styles.white, { fontSize: 20 }]} />
    //             </View>
    //             <View style={[styles.allCenter]}>
    //               <Text style={[styles.black, marginPosition(0, 0, 0, 10)]}>{list.name}</Text>
    //             </View>
    //             <View style={[flex(1), { justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
    //               {list.showCheck && <Icon name={'check'} type={Icons.Feather} style={[styles.Orange, { fontSize: 25 }]} />}
    //             </View>
    //           </TouchableOpacity>
    //         ))}
    //       </View>

    //       <View style={[flex(1), styles.row, padding(0, 0, 20, 0, 20), styles.allCenter]}>
    //         <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
    //           <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} handlecontinue={()=>handletoAddtask(1)}/>
    //           <CustomizedButtons disable={selectedItem===null} name={'OK'} bgcolor={selectedItem===null?styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={GoToAddtask} />
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </Modal>
    <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
      <View style={[flex(0.6)]}>
      <TouchableOpacity onPress={onClose} style={[flex(1)]}>
      </TouchableOpacity>
      </View>
        <View style={[flex(0.6), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
          <View style={[styles.allCenter, flex(0.7), borderColor('#e3e1e1'), borderWidth(0, 0, 0, 1)]}>
            <Header headername={'Priority'} bgcolor={styles.white} color={styles.black} showLeftIocn={true}/>
            {/* <Text style={[styles.black]}>{selectedItem}</Text> */}
          </View>
          <View style={[styles.allCenter, flex(3), styles.column]}>
            {prioritylist.map((list, index) => (
              <TouchableOpacity key={index} onPress={() => handleCheck(list.name)} style={[flex(1), styles.row, borderColor('#e3e1e1'), borderWidth(0, 0, 0, 0.6), { width: widthValue(1.2), alignItems: 'center' }]}>
                <View style={[{ height: 35, width: 35 }, radius(30), { backgroundColor: list.color }, styles.allCenter]}>
                  <Icon name={'flag'} type={Icons.Ionicons} style={[styles.white, { fontSize: 20 }]} />
                </View>
                <View style={[styles.allCenter]}>
                  <Text style={[styles.black, marginPosition(0, 0, 0, 10)]}>{list.name}</Text>
                </View>
                <View style={[flex(1), { justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
                  {list.showCheck && <Icon name={'check'} type={Icons.Feather} style={[styles.Orange, { fontSize: 25 }]} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={[flex(1), styles.row, padding(0, 0, 20, 0, 20), styles.allCenter]}>
            <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
              <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} handlecontinue={()=>handletoAddtask(0)}/>
              <CustomizedButtons disable={selectedItem===null} name={'OK'} bgcolor={selectedItem===null?styles.bgdarkOrange:styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={GoToAddtask} />
            </View>
          </View>
        </View>
      </View>

  );
};
