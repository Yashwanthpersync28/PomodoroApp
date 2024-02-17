import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding } from '../../../styles/Styles'
import { Icons } from '../../../components/Icons'


export const Terms = () => {

    const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  return (
    <View style={[flex(1),styles.bgWhite,padding(0,10,20)]}>
        <View style={[{height:heightValue(15)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Terms of Services'} goBack={PreviousScreen}/>
      </View>
    </View>
  )
}



