import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../Manage/components/Header'
import { styles } from '../../styles/Styles'
import { Icons } from '../../components/Icons'

export const PomodoroPreference = () => {
  return (
    <View style={[styles.bgWhite]}>
      <Header IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Pomodoro Preferences'}/>
    </View>
  )
}
