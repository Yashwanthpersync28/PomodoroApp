    import React from 'react';
    import { TouchableOpacity } from 'react-native';
    import { borderColor, borderWidth, flex, fontSize, heightValue, styles } from '../../../styles/Styles';
    import Icon, { Icons } from '../../../components/Icons';
    import { View, Text } from 'react-native';
    
    export const Items = ({ selectedItems, DataItems , handleItemPress , checkedItem , iconName , Iconfamily,SingleCheckitems}) => {
      console.log('selectedItems-items',selectedItems);
      const isItemSelected = (itemName) => selectedItems.some((item) => item.name === itemName);
      return (
        <View style={[styles.column]}>
          {DataItems.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[{ height: heightValue(12) }, styles.row, borderColor('#f7f7f7'), borderWidth(0, 0, 0, 1)]}
              onPress={() => handleItemPress(data.name,data.color)}
            >
              <View style={[flex(0.2),styles.allCenter]}>
                <Icon name={iconName} type={Iconfamily} style={[{color:data.color},fontSize(30)]} />
              </View>
              <View style={[flex(1), styles.centerVertical]}>
                <Text style={[fontSize(22), styles.black]}>{data.name}</Text>
              </View>
              <View style={[flex(0.2), styles.allCenter]}>
                <Icon
                  name={SingleCheckitems?checkedItem === data.name ? 'check' : '':isItemSelected(data.name) ? 'check' : ''}
                  type={Icons.Feather}
                  style={[styles.Orange, fontSize(30)]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
    

