import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { borderWidth, flex, fontSize, padding, radius, styles } from "../../styles/Styles";

export const SwitchTabs = () => {
    const [active, setActive] = useState(false);
    const Tab = ({active, title, onPress}) => {
        return(
            <TouchableOpacity onPress={onPress} style={[flex(1), active && styles.bgBlue, padding(14), radius(12), styles.allCenter]}>
                <Text style={[!active ? styles.black : styles.white, fontSize(18)]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={[styles.row, styles.overflowHide, radius(12), borderWidth(1)]}>
           <Tab title={"Tab 1"} onPress={() => setActive(true)} active={active}/>
           <Tab title={"Tab 2"} onPress={() => setActive(false)} active={!active}/>
        </View>
    )
} 
