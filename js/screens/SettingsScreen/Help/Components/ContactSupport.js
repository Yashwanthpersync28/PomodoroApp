import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding } from '../../../../styles/Styles'
import { Icons } from '../../../../components/Icons'
export const ContactSupport = () => {

    const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }

  // const contactCard = ()=>{

  // }
  return (
    <View style={[flex(1),styles.bgWhite,padding(0,10,20)]}>
        <View style={[{height:heightValue(15)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Contact Support'} goBack={PreviousScreen}/>
      </View>
    </View>
  )
}

