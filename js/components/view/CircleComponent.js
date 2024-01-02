import React from 'react';
import { View, TouchableOpacity, Image } from "react-native";
import { Colors } from '../../styles/Colors';
import { borderWidth, heightValue, radius, styles } from '../../styles/Styles';
import { TextComponent } from './TextComponent';

export const CircleComponent = ({size, imageURL, caption, color, bgColor, borderColor, onPress, style}) => {
    return(
        <TouchableOpacity onPress={() => onPress && onPress()} style={[style]}>
            <View style={[borderWidth(1), radius(200), {borderColor: borderColor ? borderColor : Colors.black, height: heightValue(size ? 20/size : 15), width: heightValue(size ? 20/size : 15)}, styles.allCenter, bgColor]}>
                {/* {imageURL && <Image  source={{uri: imageURL}}/>} */}
                <TextComponent size={size*20} color={color} fontWeight={'500'} title={caption}/>
            </View>
        </TouchableOpacity>
    )
}