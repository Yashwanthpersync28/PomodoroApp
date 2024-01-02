import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";
import { bgColor, flex, padding } from "../../styles/Styles";

export const ScreenViewComponent = ({children, style, avoidKeyboardDismiss}) => {
    const { darkMode } = useSelector(state => state.system)
    const ViewType = avoidKeyboardDismiss ? View : TouchableWithoutFeedback
    
    return(
        <ViewType style={[flex(1)]} onPress={()=> Keyboard.dismiss()}>
            <View  style={[bgColor(darkMode), flex(1), style]}>
                {children}
            </View>
        </ViewType>
    )
}