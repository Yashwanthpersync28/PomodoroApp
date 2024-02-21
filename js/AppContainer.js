import React, { useEffect } from "react";
import { View, Platform, Alert } from "react-native"
import { useSelector } from "react-redux";

import { bgColor, flex, heightValue } from "./styles/Styles";
import { AppNavigationContainer } from "./navigation/StackNavigation";

export const AppContainer = () => {
    const { darkMode } = useSelector(state => state.system)

    return(
        <View style={[{paddingTop: Platform.OS == "ios" ? heightValue(20) : 0}, flex(1), bgColor(darkMode)]}>
            <AppNavigationContainer/>   
        </View>
    )
}