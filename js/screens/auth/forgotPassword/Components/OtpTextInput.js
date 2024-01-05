import React from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import { flex, styles, heightValue , widthValue , radius , fontSize , padding, borderColor, borderWidth } from '../../../../styles/Styles'
import {View, TextInput , KeyboardAvoidingView ,Platform,Keyboard} from 'react-native';

export const OtpTextInput = ({onChangeText,maxLength,keyboardType,value}) => {
  return (
    
          <View style={[{height:heightValue(12),width:widthValue(6)},styles.bgsmokeOrange,radius(10),styles.allCenter,borderColor('#ff6347'),borderWidth(1)]}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={[flex(1)]} >
            <TextInput  
                  placeholderTextColor={styles.black}
                    // placeholder={placeholder}
                    value={value}
                    // onKeyPress={onKeyPress}
                    // editable={editable}
                    // secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    // onSubmitEditing={() => Keyboard.dismiss()}
                    style={[ styles.black,fontSize(25), flex(1),styles.textCenter]}
             />
           </KeyboardAvoidingView>
          </View>
          
    
  )
}


