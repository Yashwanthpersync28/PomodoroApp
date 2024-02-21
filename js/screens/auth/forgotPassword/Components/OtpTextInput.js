// OtpTextInput.js

import React from 'react';
import { TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { styles, heightValue, widthValue, radius, fontSize, borderColor, borderWidth, brdColor } from '../../../../styles/Styles';
import { log } from 'react-native-reanimated';

export const OtpTextInput = ({ onChangeText, maxLength, keyboardType, value, onSubmitEditing, refval , focusBg,}) => {
  console.log(focusBg)
  return (
    <TouchableOpacity onPress={onSubmitEditing}>
      <View style={[{height: heightValue(12), width: widthValue(6),borderColor: focusBg ? '#ff6347' : '#f7f5f5', backgroundColor: focusBg ? '#fff2f0' : '#f7f5f5'}, radius(10), styles.allCenter, borderWidth(1)]}>
        <TextInput
          placeholderTextColor={styles.black}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          style={[styles.black, fontSize(25), { flex: 1 }, styles.textCenter]}
          onSubmitEditing={() => Keyboard.dismiss()}
          ref={refval}
        />
      </View>
    </TouchableOpacity>
  );
};

// 