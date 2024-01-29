import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../../styles/Styles';

import Icon, { Icons } from '../../../../../components/Icons';
// import { Inneritem } from './InnerItem'; // Uncomment if needed

export const ManageItemslist = ({ data, showProjects }) => {
  console.log('data', data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };
  return (
    <View style={[flex(1)]}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
          <View style={[{zIndex:1 },styles.positionRelative]}>
            <View style={[styles.row, { height: heightValue(14) }, borderColor('#f2f0f0'), borderWidth(0, 1)]}>
              <View style={[flex(0.2), styles.allCenter]}>
                <Icon name={showProjects ? 'briefcase' : 'tag'} type={Icons.Feather} style={[fontSize(20), styles.black]} />
              </View>
              <View style={[flex(1), styles.centerVertical]}>
                <Text style={[fontSize(18), styles.black]}>{item.name}</Text>
              </View>
              <View style={[flex(0.2), styles.allCenter]}>
                <Icon name={'dots-three-vertical'} type={Icons.Entypo} style={[fontSize(20), styles.black]} />
              </View>
            </View>
            {/* options */}
            {selectedItem && selectedItem.id === item.id && (
                <View style={[styles.positionAbsolute,{top: 40, right: 20, zIndex: 3,  },  radius(10), styles.bgOrange,padding(10),styles.selfStart]}>
                  <View style={[styles.row,padding(10),styles.selfStart]}>
                    <Icon name={'edit-3'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
                    <Text style={[styles.black,fontSize(17)]}>Edit</Text>
                  </View>
                  <View style={[styles.row]}>
                    <Icon name={'edit-3'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
                    <Text style={[styles.black,fontSize(17)]}>Archieve</Text>
                  </View>
                </View>
              )}
            {/* <Inneritem visible={selectedItem && selectedItem.name === item.name} itemName={item.name} /> */}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
