import React from 'react'
import {View,Text,StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex , fontSize, marginPosition, paddingPosition, radius, styles } from '../../../../styles/Styles'
import Icon, { Icons } from '../../../../components/Icons'
import { Header } from '../Header'
import { ToggleButtons } from '../../../../components/view/ToggleButtons'

export const ManageProjectandTags = () => {
  return (
    <SafeAreaView style={[flex(1),paddingPosition(0,10,0,10),styles.bgWhite]}>
        <StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
       <View style={[flex(0.2)]}>
       <Header headername={'Manage Project & Tags'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'} onPress={()=>console.log('fcghvjbkn')} bgcolor={styles.white} color={styles.black} goBack={()=>console.log('kjhg')} showLeftIocn={true} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign}/>
       </View>
       <View style={[flex(0.2)]}>
        <ToggleButtons/>
       </View>
       <View style={[flex(0.2),styles.row]}>
          <Icon name={'plus'} type={Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,10)]}/>
          <Text style={[styles.Orange,fontSize(22)]}>Add Tags</Text>
       </View>
       <View style={[flex(2),styles.bgBlue]}></View>
       <View style={[flex(0.2),styles.bgOrange]}></View>

       

   
   </SafeAreaView>
  )
}


