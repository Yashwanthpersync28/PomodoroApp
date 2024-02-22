import React from 'react'
import { flex, fontSize, marginPosition, radius, styles, widthValue } from '../../../styles/Styles'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import Icon, { Icons } from '../../../components/Icons'
import { TextInputCompnent } from '../../../components'
// import { TouchableOpacity } from 'react-native-gesture-handler'
export const HeaderSearch = ({darkMode,handleBacktoHeader,onChangeText,handleX,value}) => {
 
    return (
   <View style={[styles.row,flex(1)]}>
    <View style={[flex(0.1),styles.centerVertical]}>
      <TouchableOpacity onPress={handleBacktoHeader}>
          <Icon name={'arrowleft'} type={Icons.AntDesign} style={[darkMode?styles.white:styles.black,fontSize(30)]} />
      </TouchableOpacity>
    </View>
    <View style={[flex(1),styles.allCenter,radius(20)]}>
       <TextInputCompnent
       Iconname={'search'}
       IconFamily={Icons.EvilIcons}
       bgColor={darkMode?styles.bgtaskCardDblack:styles.bgWhite}
       onChangeText={onChangeText}
       showFontsize={true}
       ShowXbbutton={true}
       handleX={handleX}
       value={value}
       />
    </View>
    
   </View>
  )
}


