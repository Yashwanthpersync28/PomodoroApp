import React, { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { buttonColor, fontSize, marginPosition, padding, radius, styles } from "../../styles/Styles";
import { IconComponent } from "../view";
import { useSelector } from "react-redux";

export const BackButtonComponent = ({onPress, style,}) => {
  const Darkmode=useSelector((state)=>state.system.darkMode);
//   8c8b8d
    const [darkMode, setDarkMode] = useState(false)
    
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[style]} >
                <IconComponent name={'arrow-left-thick'} size={24} style={[ marginPosition(0,4),Darkmode?styles.DarkmodeText:styles.black]}/>
            </TouchableOpacity>
        </View>
    )
}

