import { View, Text } from 'react-native'
import React from 'react'
import { styles, widthValue,fontSize, marginPosition, borderWidth, heightValue,radius } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'

export const NotificationCard = () => {
  return (
    <View style={[styles.bgWhite,styles.row,styles.spaceBetweenVertical,{width:widthValue(1.15)},marginPosition(30)]}>
        <View style={[styles.borderBlack,borderWidth(1), {width:widthValue(13),height:widthValue(13)},radius(30),styles.allCenter]}>
      <Icon name={"security"} type={Icons.MaterialIcons} style={[styles.black,fontSize(22)]} /></View>
      <View style={[styles.black,{width:widthValue(1.6)},styles.selfStart]}>
        <Text style={[fontSize(18),styles.black,{fontWeight:'500'}]}>Account Security Alert 🔐</Text>
        <Text style={[fontSize(16),styles.black,{fontWeight:'400'},marginPosition(10)]}>we noticed some unusual activity in your account.Please review your recent logins and update your password if necessary</Text>
        <Text style={[fontSize(14),styles.black,{fontWeight:'400'},marginPosition(5)]}>9:41 AM</Text>
      </View>
      <Icon name={"chevron-small-right"} type={Icons.Entypo} style={[styles.black,fontSize(28)]} />
    </View>
  )
}
