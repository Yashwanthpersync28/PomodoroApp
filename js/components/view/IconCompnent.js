import React from "react";
import { View } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { Colors } from "../../styles/Colors";

export const IconComponent = ({name, size, style, color}) => {

    const { darkMode } = useSelector(state => state.system.darkMode)
    return(
        <MCIcon name={name} color={color ? color : darkMode ? Colors.white : Colors.black} size={size} style={style}/>
    )
}