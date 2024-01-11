import React from 'react'
import { flex, fontSize, styles } from '../../../styles/Styles'
import {View,Text,TouchableOpacity} from 'react-native'
import Icon from '../../../components/Icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
export const Header = ({headername,IconfamilyRight,IconNameRight,onPress,IconNameLeft,IconfamilyLeft,goBack}) => {
  return (
   <View style={[styles.row,flex(1)]}>
    <View style={[flex(0.3),styles.centerVertical]}>
    <TouchableOpacity onPress={goBack}>

     <Icon name={IconNameLeft} type={IconfamilyLeft} style={[styles.black,fontSize(30)]} />
     </TouchableOpacity>
    </View>
    <View style={[flex(1),styles.allCenter]}>
        <Text style={[fontSize(25),styles.black,{fontWeight:"700"}]}>{headername}</Text>
    </View>
    <View style={[flex(0.3),{justifyContent:'center',alignItems:'flex-end'}]}>
        <TouchableOpacity onPress={onPress}>
     <Icon name={IconNameRight} type={IconfamilyRight} style={[styles.black,fontSize(30)]} />
     </TouchableOpacity>
    </View>
   </View>
  )
}


