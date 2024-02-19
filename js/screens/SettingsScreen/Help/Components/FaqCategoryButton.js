import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { styles,flex, heightValue, padding, widthValue,marginPosition,fontSize,radius,borderWidth,borderColor, margin, paddingPosition, lineHeight } from '../../../../styles/Styles'


export const FaqCategoryButton = ({onPress,buttonText,isActive}) => {
  return (
          <View
          style={[
            styles.centerHorizontal,
          ]}>
            <View style={[marginPosition(10)]}>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.centerVertical,
              radius(30),
              marginPosition(0,0,20),
              borderWidth(.2),
              padding(0,7,20),
              styles.borderLightWhite,
              isActive ? styles.bgOrange:styles.bgWhite,
            margin(0,0,15)
            ]}>
            <View
              style={[styles.row, styles.centerHorizontal,styles.spaceEvenly]}>
             <Text style={[fontSize(18),isActive ?styles.white:styles.black, {fontWeight:'400'}]}>
              {buttonText}
              </Text> 
            </View>
          </TouchableOpacity>
          </View>
        </View>
        )
      }


