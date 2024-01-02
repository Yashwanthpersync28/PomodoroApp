import React, { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { buttonColor, fontSize, marginPosition, opacity, padding, radius, styles } from "../../styles/Styles";

export const ButtonComponent = ({title, onPress, loading, center, disabled, style}) => {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonColor(darkMode), padding(10, 10, 20), radius(center ? 100: 6), center && styles.selfCenter, styles.allCenter, disabled && opacity(0.5), style]}>
            {loading ? <View style={[styles.row]}>
                <Text style={[marginPosition(0,10), styles.white,]}>Loading</Text>
                <ActivityIndicator/>
            </View> : <Text style={[styles.white, {fontWeight: "600"}, fontSize(22)]}>{title}</Text>}
        </TouchableOpacity>
    )
}


