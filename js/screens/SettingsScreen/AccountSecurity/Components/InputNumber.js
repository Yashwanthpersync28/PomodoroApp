import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { flex, padding, styles, marginPosition, heightValue, widthValue, margin,radius, fontSize, fontWeight, lineHeight,borderWidth } from '../../../../styles/Styles';


 export const InputNumber = ({ onChangeText, maxLength, keyboardType, value, onSubmitEditing, refval , focusBg,}) => {
    console.log(focusBg)
  return (
   
          <TouchableOpacity onPress={onSubmitEditing}>
            <View style={[{ height:heightValue(13),width:widthValue(7),borderColor: focusBg ? '#ff6347' : '#f7f5f5', backgroundColor: focusBg ? '#fff2f0' : '#ffffff'}, radius(10), styles.allCenter, borderWidth(1)]}>
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
  )
}
