import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList,Keyboard} from 'react-native'
import React from 'react'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'



export const DetailComponent = ({name,placeholder,value,EmailIconType,EmailIcon,onChangeText,keyboardType})=>{
    return (
        <View style={[margin(0,10)]}>
            <Text style={[styles.black,fontSize(18),padding(0,10),{fontWeight:'500'}]}>
                {name}
            </Text>
            <View style={[styles.row,styles.bglgWhite,radius(5),styles.centerHorizontal]}>
            <Icon name={EmailIcon} type={EmailIconType} style={[fontSize(25),styles.black,paddingPosition(0,0,0,10)]}/>
            <TextInput style={[,fontSize(20),{fontWeight:'500',width:widthValue(1.2),marginLeft:10}]} placeholder={placeholder} value={value}   keyboardType={keyboardType} onSubmitEditing={() => Keyboard.dismiss()}/>
            </View>
        </View>
    )
}