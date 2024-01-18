import { View, Text } from 'react-native'
import React from 'react'
import { styles, widthValue,fontSize, marginPosition, borderWidth, heightValue,radius } from '../../styles/Styles'
import Icon, { Icons } from '../../components/Icons'

export const NotificationCard = () => {
  return (
    <View style={[styles.bgWhite,styles.row,styles.spaceBetweenVertical,{width:widthValue(1.15)},marginPosition(30)]}>
        <View style={[styles.borderBlack,borderWidth(1), {width:widthValue(9),height:widthValue(9)},radius(30),styles.allCenter]}>
      <Icon name={"security"} type={Icons.MaterialIcons} style={[styles.black,]} /></View>
      <View style={[styles.black,{width:widthValue(1.6)},styles.selfStart]}>
        <Text style={[fontSize(20),styles.black,{fontWeight:'500'}]}>Account Security Alert 🔐</Text>
        <Text style={[fontSize(18),styles.black,{fontWeight:'400'},marginPosition(10)]}>we noticed some unusual activity in your account.Please review your recent logins and update your password if necessary</Text>
        <Text style={[fontSize(15),styles.black,{fontWeight:'400'},marginPosition(5)]}>9:41 AM</Text>
      </View>
      <Icon name={"arrowright"} type={Icons.AntDesign} style={[styles.black,]} />
    </View>
  )
}
