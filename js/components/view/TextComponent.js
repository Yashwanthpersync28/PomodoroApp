import React from "react";
import { Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { fontSize, lineHeight as fontHeight, styles, textColor } from "../../styles/Styles";

export const TextComponent = ({color, onPress, fontWeight, lineHeight, numberOfLines, opacity, size, style, textCenter, title,  }) => {
    
    const { darkMode } = useSelector(state => state.system);
    const MainView = onPress ? Pressable : View
    return(
        <MainView onPress={() => onPress && onPress()}>
            <Text 
                numberOfLines={numberOfLines} 
                style={[{color: color ? color : null}, !color && textColor(darkMode), fontSize(size ? size : 14), fontHeight(lineHeight), { fontWeight: fontWeight, opacity: opacity}, textCenter && styles.textCenter, style ]}
            >
                {title}
            </Text>
        </MainView>
    )
}