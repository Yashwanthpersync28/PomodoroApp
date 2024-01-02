import React from "react";
import { View, Text, Platform, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../styles/Colors";
import { borderColor, borderWidth, flex, fontSize, marginPosition, opacity, padding, paddingPoistion, radius, styles, textColor } from "../../styles/Styles";
import { IconComponent } from "../view";

export const TextInputCompnent = ({ placeholder, value, onChangeText, editable, onKeyPress, maxLength, keyboardType, enableClear, clearPressed, style }) => {

    const { darkMode } = useSelector(state => state.system)
    return(
        <View style={[styles.row, padding(10), styles.centerHorizontal, borderWidth(0.5), radius(6), borderColor(Colors.blue),style]}>
            <View style={[styles.row, flex(1.5), value == "" && opacity(0.7), styles.centerHorizontal ]}>
                <TextInput
                    placeholderTextColor={darkMode ? Colors.white : Colors.black}
                    placeholder={placeholder}
                    value={value}
                    onKeyPress={onKeyPress}
                    editable={editable}
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
        </View>
    )
}