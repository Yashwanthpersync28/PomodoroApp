import React, { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { buttonColor, fontSize, heightValue, marginPosition, opacity, padding, radius, styles, widthValue } from "../../styles/Styles";
import { useSelector } from "react-redux";

export const ButtonComponent = ({title, onPress, loading, center, disabled, style}) => {
    // const [darkMode, setDarkMode] = useState(false)
    const darkMode = useSelector(state=>state.system.darkMode)


    return(
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[{width:widthValue(1.2),height:heightValue(16)},buttonColor(disabled), padding(10, 10, 20), radius(30), center && styles.selfCenter, styles.allCenter, disabled && opacity(1), style]}>
            {loading ? <View style={[styles.row]}>
                <Text style={[marginPosition(0,10), styles.white,]}>Loading</Text>
                <ActivityIndicator/>
            </View> : <Text style={[styles.white, {fontWeight: "600"}, fontSize(22)]}>{title}</Text>}
        </TouchableOpacity>
    )
}


