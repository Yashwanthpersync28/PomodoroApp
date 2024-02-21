import React from "react";
import { View, Text, Platform, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../styles/Colors";
import { borderColor, borderWidth, flex, fontSize, marginPosition, opacity, padding, paddingPoistion, radius, styles, textColor } from "../../styles/Styles";
import { IconComponent } from "../view";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon, { Icons } from "../Icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const TextInputCompnent = ({showFontsize, IconFamily , Iconname , placeholder, value, onChangeText, editable, onKeyPress, maxLength, keyboardType, enableClear, clearPressed, style , secureTextEntry , showText , ShowPasswordIcon,bgColor , showGray,ShowXbbutton,handleX}) => {
    const Darkmode=useSelector((state)=>state.system.darkMode);

    const { darkMode } = useSelector(state => state.system)
    return(
        <View style={[styles.row, padding(10), styles.centerHorizontal, radius(6),bgColor]}>
            <Icon name={Iconname} type={IconFamily} style={[showFontsize?fontSize(30):fontSize(20),Darkmode?styles.DarkmodeText:styles.black]}/>
            <View style={[styles.row, flex(1.5), value == "" && opacity(0.7), styles.centerHorizontal ]}>
                <TextInput
                    placeholderTextColor={showGray ? Colors.lightGray : Colors.black}
                    placeholder={placeholder}
                    value={value}
                    onKeyPress={onKeyPress}
                    editable={editable}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    style={[ textColor(darkMode), fontSize(18), flex(1), padding(0, 6, 12)]}
                />
                {enableClear && <TouchableOpacity onPress={clearPressed}>
                    <IconComponent name={"close"} size={20}/>
                </TouchableOpacity> }
            </View>
            {ShowPasswordIcon ? 
           <Feather name={ secureTextEntry? 'eye-off' : 'eye'} style={[fontSize(20),Darkmode?styles.DarkmodeText:styles.black]} onPress={showText}/>
       :null}
       <TouchableWithoutFeedback onPress={handleX}>
       {ShowXbbutton ? 
           <Feather name={'x'} type={Icons.Feather} style={[fontSize(25),styles.black]}/>
       :null}
         </TouchableWithoutFeedback>
   </View>
    )
}