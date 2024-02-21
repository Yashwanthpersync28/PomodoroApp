import React, { useState , useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  borderColor,
  borderWidth,
  flex,
  fontSize,
  heightValue,
  marginPosition,
  padding,
  paddingPosition,
  radius,
  styles,
  widthValue,
} from '../../../styles/Styles';
import { HomepageHeader } from '../../dashboard/Components/HomepageHeader';
import { ButtonComponent, TextInputCompnent } from '../../../components';
import CustomizedButtons from '../../auth/onboarding/component/CustomizedButtons';
import Icon, { Icons } from '../../../components/Icons';
import { Header } from './Header';

export const Add = ({error,Darkmode,EditableColor , IconFamilyforInputIcon , IconnameForInputIcon, onChangeText, Textinputname, value, headerName, IconFamily, name, bgcolor, color , ColorSelected,onPress,goBack , marginTop}) => {
  useEffect(() => {
    if (EditableColor) {
      setSelectedColor(EditableColor);
    }
  }, [EditableColor]);
  //colors data
  const colorData = [
    {id:0,colors:styles.bgLightGold},
    {id:1,colors:styles.bgpurple},
    {id:2,colors:styles.bgbrown},
    {id:3,colors:styles.bgOrange},
    {id:4,colors:styles.bgyellow},
    {id:5,colors:styles.bgSmokeRed},
    {id:6,colors:styles.bgSmokePink},
    {id:7,colors:styles.bgSmokePurple},
    {id:8,colors:styles.bgSmokeDarkBlue},
    {id:9,colors:styles.bgSmokeNavy},
    {id:10,colors:styles.bgSkyblue},
    {id:11,colors:styles.bgSmokeBlue},
    {id:12,colors:styles.bggold},
    {id:13,colors:styles.bglightGreen},
    {id:14,colors:styles.bgLeafGreen},
    {id:15,colors:styles.bggreenish},
    {id:16,colors:styles.bgdarkblue},
    {id:17,colors:styles.bgdarkGreen},
    {id:18,colors:styles.bgOrange},
    {id:19,colors:styles.bgpurple},
  ];
///states
  const [selectedColor, setSelectedColor] = useState('');
///handle color and send to parent
  const handleColorPress = (indexvalue) => {
   
    const userselectedcolor = colorData[indexvalue]?.colors.backgroundColor;
    setSelectedColor(userselectedcolor);
    ColorSelected(userselectedcolor)
  console.log('userSelectedcolor', userselectedcolor)
  };
//to list 5 items should be in a row
  const itemsPerRow = 5;
//render items
  const renderColorRow = (data) => (
    <View style={[styles.rowWrap, styles.allCenter]}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleColorPress(item.id)}>
          <View
            style={[
              { height: 50, width: 50 },
              radius(50),
              item.colors,
              marginPosition(10, 15),
              styles.allCenter,
            ]}
          >
            {selectedColor === item.colors.backgroundColor && <Icon name={'check'} type={Icons.Feather} style={[styles.white, fontSize(28)]} />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={[flex(1), Darkmode?styles.bgdarkmodeBlack:styles.bgsmokewhite]}>
      <View style={[flex(0.1),marginPosition(marginTop ? -30 : -10),paddingPosition(0,20,0,20)]}>
        <Header showLeftIocn={true} headername={headerName} IconfamilyRight={IconFamily} IconNameRight={name} onPress={onPress} IconNameLeft={'x'} IconfamilyLeft={Icons.Feather} bgcolor={bgcolor} color={color} goBack={goBack}/>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" style={[padding(0), Darkmode?styles.bgdarkmodeBlack:styles.bgWhite, flex(1)]}>
        <View style={[flex(0.3),paddingPosition(0,20,0,20)]}>
          <Text style={[Darkmode?styles.white:styles.black, marginPosition(0, 0, 10), { fontWeight: '500' }]}>{Textinputname}</Text>
          <TextInputCompnent Iconname={IconnameForInputIcon} IconFamily={IconFamilyforInputIcon} showGray={true} 
            bgColor={Darkmode?styles.bgtaskCardDblack:styles.bglgWhite}
          placeholder={Textinputname} value={value} onChangeText={onChangeText} secureTextEntry={false} ShowPasswordIcon={false} name={'lock-open'} />
          <Text style={[styles.Orange,fontSize(18)]}>{error}</Text>
        </View>
        <View style={[flex(3), marginPosition(0,0,0,0),{width:widthValue(1)}]}>
          <Text style={[Darkmode?styles.white:styles.black, fontSize(20), { fontWeight: '500' },marginPosition(0,0,5,20)]}>{`Project Color Mark`}</Text>
          {colorData.reduce((rows, item, index) => {
            if (index % itemsPerRow === 0) {
              rows.push(colorData.slice(index, index + itemsPerRow));
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <View key={rowIndex} style={[marginPosition(0,0,0,15)]}>
              {renderColorRow(row)}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
