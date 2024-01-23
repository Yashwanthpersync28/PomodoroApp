import React from 'react'
import { flex, fontSize, styles, widthValue } from '../../../styles/Styles'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import Icon from '../../../components/Icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
export const Header = ({headername,IconfamilyRight,IconNameRight,onPress,IconNameLeft,IconfamilyLeft,goBack,showLeftIocn}) => {
  return (
   <View style={[styles.row,flex(1)]}>
    <View style={[flex(0.2),styles.centerVertical]}>
    <TouchableOpacity onPress={goBack}>
      {showLeftIocn?
       <Icon name={IconNameLeft} type={IconfamilyLeft} style={[styles.black,fontSize(30)]} />:
     <Image
     source={require('../../../assets/Images/timericon2.png')}
     style={[{width: widthValue(6), height: widthValue(6)}]}
   />}
     </TouchableOpacity>
    </View>
    <View style={[flex(1),styles.allCenter]}>
        <Text style={[fontSize(25),styles.black,{fontWeight:"700"}]}>{headername}</Text>
    </View>
    <View style={[flex(0.2),{justifyContent:'center',alignItems:'flex-end'}]}>
        <TouchableOpacity onPress={onPress}>
     <Icon name={IconNameRight} type={IconfamilyRight} style={[styles.black,fontSize(30)]} />
     </TouchableOpacity>
    </View>
   </View>
  )
}


