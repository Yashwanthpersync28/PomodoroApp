import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { styles,radius,heightValue,widthValue,fontSize, marginPosition} from '../../../../styles/Styles'

const CustomizedButtons = ({name,handlecontinue,bgcolor,color,width,style,disable}) => {
  return (
   
     <TouchableOpacity onPress={handlecontinue} disabled={disable}>
      <View style={[radius(30),{height:heightValue(15),},bgcolor,styles.allCenter,marginPosition(0,0,0),style]}>
        <Text style={[color,fontSize(20),{fontfamily:500},]}>{name}</Text>
      </View>
    </TouchableOpacity>
  
  )
}

export default CustomizedButtons
