import React, { useState } from "react";
import { View, Text, Platform, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../styles/Colors";
import { borderColor, borderWidth, flex, fontSize, marginPosition, opacity, padding, paddingPoistion, radius, styles, textColor } from "../../styles/Styles";
import { IconComponent } from "../view";

export const CheckBoxComponent = ({ style, size, onPress, check }) => {

    const { darkMode } = useSelector(state => state.system)
    // const [check, setCheck] = useState(false)

    // console.log("asdfasdf", check);
    return(
        <TouchableOpacity onPress={onPress} style={[borderWidth(0.5), padding(4), radius(6), {width: size ? size*30 : 30, height: size ? size*30 : 30}, styles.selfStart, styles.allCenter, style ]}>
            <IconComponent size={size ? size*20 : 30} name={check ? "check" : ""}/>
        </TouchableOpacity>
    )
}