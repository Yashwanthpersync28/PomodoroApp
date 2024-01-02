import React, { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { buttonColor, fontSize, marginPosition, padding, radius, styles } from "../../styles/Styles";
import { IconComponent } from "../view";

export const BackButtonComponent = ({navigation, onPress, style}) => {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <View>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={[style]} >
                <IconComponent name={'arrow-left-thick'} size={24} style={[ marginPosition(0,4)]}/>
            </TouchableOpacity>
        </View>
    )
}


