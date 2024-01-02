import React from "react";
import { View, Platform } from "react-native"
import { useSelector } from "react-redux";
import { AppNavigationContainer } from "./navigation";
import { bgColor, flex, heightValue } from "./styles/Styles";

export const AppContainer = ({navigation}) => {
    const { darkMode } = useSelector(state => state.system)
    
    return(
        <View style={[{paddingTop: Platform.OS == "ios" ? heightValue(20) : 0}, flex(1), bgColor(darkMode)]}>
            <AppNavigationContainer/>
        </View>
    )
}