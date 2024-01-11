import { View, Text } from 'react-native'
import React from 'react'
import { HeadingComponent } from '../../components/view/HeadingComponent'

export const Notification1 = () => {
  return (
    <View
        style={[
          {width: widthValue(1)},
          paddingPosition(20, 20, 0, 20),
          bgcolor
        ]}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
            {height:heightValue(20)}
          ]}>
          <Image
            source={timer}
            style={[{width: widthValue(12), height: widthValue(12)}]}
          />
          <Text style={[ color,fontSize(25), {fontWeight: '600'}]}>
            Notifications
          </Text>
          <Icon name={name} type={IconFamily} style={[color, fontSize(25)]} />
          
          {/* <Feather name="bell" style={[styles.white, fontSize(30)]} /> */}
          {/* <Icon name={"bell"} type={Icons.Feather} style={[styles.white,fontSize(30)]} /> */}
        </View>
      </View>
  )
}
