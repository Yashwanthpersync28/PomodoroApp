import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { flex } from "../../styles/Styles";

export const LoaderCompnent = ({style, color}) => {
    return(
        <View style={[flex(1), style]}>
            <ActivityIndicator size={"large"} color={color}/>
        </View>
    )
}
