// OtpTextInput.js

import React from 'react';
import { TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { styles, heightValue, widthValue, radius, fontSize, borderColor, borderWidth, brdColor } from '../../../../styles/Styles';
import { log } from 'react-native-reanimated';
import { useSelector } from 'react-redux';

export const OtpTextInput = ({ onChangeText, maxLength, keyboardType, value, onSubmitEditing, refval , focusBg,}) => {
  console.log(focusBg)
const Darkmode=useSelector((state)=>state.system.darkMode);

  return (
    <TouchableOpacity onPress={onSubmitEditing}>
      <View style={[{ height: heightValue(12), width: widthValue(6) ,borderColor: focusBg ? '#ff6347' : Darkmode?'#20222a':'#f7f5f5', backgroundColor: focusBg ? Darkmode?'#292024':'#fff2f0' : Darkmode?'#20222a':'#f7f5f5'}, radius(10), styles.allCenter, borderWidth(1)]}>
        <TextInput
          placeholderTextColor={Darkmode?styles.white:styles.black}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          style={[Darkmode?styles.white:styles.black, fontSize(25), { flex: 1 }, styles.textCenter]}
          onSubmitEditing={() => Keyboard.dismiss()}
          ref={refval}
        />
      </View>
    </TouchableOpacity>
  );
};

// 