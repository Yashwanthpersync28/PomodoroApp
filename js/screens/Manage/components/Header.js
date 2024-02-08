import React from 'react'
import { flex, fontSize, margin, marginPosition, styles, widthValue } from '../../../styles/Styles'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import Icon, { Icons } from '../../../components/Icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
export const Header = ({headername,IconfamilyRight,IconNameRight,onPress,IconNameLeft,IconfamilyLeft,goBack,showLeftIocn,color,showSearch,handleSearch}) => {
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
        <Text style={[fontSize(24),color,{fontWeight:"600"}]}>{headername}</Text>
    </View>
    <View style={[flex(0.2),{justifyContent:'flex-end',alignItems:'center'},styles.row]}>
       <TouchableOpacity onPress={handleSearch}>
       {showSearch &&
         <Icon name={'search1'} type={Icons.AntDesign} style={[styles.black,fontSize(30),marginPosition(0,10)]} /> 
         }
       </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={[styles.row,{justifyContent:'center',alignItems:'flex-end'}]}>
       
     <Icon name={IconNameRight} type={IconfamilyRight} style={[styles.black,fontSize(26)]} />
     </TouchableOpacity>
    </View>
   </View>
  )
}


