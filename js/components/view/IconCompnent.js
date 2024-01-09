import React from "react";
import { View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useSelector } from "react-redux";
import { Colors } from "../../styles/Colors";

export const IconComponent = ({name, size, style, color}) => {

    const { darkMode } = useSelector(state => state.system.darkMode)
    return(
        <FontAwesome6 name={'arrow-left-long'} color={color ? color : darkMode ? Colors.white : Colors.gray} size={size} style={style}/>
    )
}