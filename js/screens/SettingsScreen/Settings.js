import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { flex ,fontSize,marginPosition,padding,paddingPosition,styles,widthValue,margin, heightValue} from '../../styles/Styles'
import {PomodoroPreference} from './PomodoroPreference'
import { PreferenceComponent} from './Components/PreferenceComponent'
import Icon, { Icons } from '../../components/Icons'
import { Header } from '../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'


export const Settings = () => {

  const navigation = useNavigation();

  

const SettingComponent = ({PreferanceName,onPress,leftIconType,IconLeft})=>{

  return(
  <TouchableOpacity style={[flex(6),styles.spaceBetweenVertical,styles.centerHorizontal,styles.row,marginPosition(20,5,25,10)]} onPress={onPress} >
    <View style={[styles.row]}>
     <Icon name={IconLeft} type={leftIconType}  style={[styles.black,fontSize(30)]} /> 
     <Text style={[fontSize(20),styles.black,{fontWeight:"500"},marginPosition(0,0,0,30)]}>{PreferanceName}</Text>
     </View>
        <View style={[styles.row,styles.centerHorizontal]}>
      <Icon name={"chevron-small-right"} type={Icons.Entypo}  style={[styles.black,fontSize(30)]} /> 
      </View>
     </TouchableOpacity>
  )
}

  return (
    <View style={[flex(1),styles.bgWhite,paddingPosition(10,20,0,10),{width:widthValue(1)}]}>
    <View style={[{height:heightValue(15)}]}> 
      <Header color={styles.black} headername={'Settings'} />
      </View> 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[paddingPosition(10,0,0,10)]}>
      <SettingComponent  PreferanceName={'My profile'} leftIconType={Icons.Ionicons} IconLeft={'person-outline'} onPress={()=>navigation.navigate('Profile')} />
      <SettingComponent  PreferanceName={'Pomodoro Preference'} leftIconType={Icons.Entypo} IconLeft={'stopwatch'} onPress={()=>navigation.navigate('PomodoroPreference')}/>
      <SettingComponent  PreferanceName={'Date & Time'} leftIconType={Icons.Feather} IconLeft={'clock'}/>
      <SettingComponent  PreferanceName={'Notifications'} leftIconType={Icons.Fontisto} IconLeft={'bell'}/>
      <SettingComponent  PreferanceName={'Account & Security'} leftIconType={Icons.MaterialIcons} IconLeft={'security'}/>
      <SettingComponent  PreferanceName={'App Apearance'} leftIconType={Icons.FontAwesome} IconLeft={'eye'}/>
      <SettingComponent  PreferanceName={'Help & Support'} leftIconType={Icons.FontAwesome5} IconLeft={'hand-holding-heart'}/>
      <SettingComponent  PreferanceName={'FAQ'} leftIconType={Icons.AntDesign} IconLeft={'filetext1'}/>
      {/* <SettingComponent  PreferanceName={'Contact Support'} leftIconType={Icons.Feather} IconLeft={'at-sign'}/>
      <SettingComponent  PreferanceName={'Privacy Policy'} leftIconType={Icons.MaterialIcons} IconLeft={'lock-person'}/>
      <SettingComponent  PreferanceName={'Terms of Services'} leftIconType={Icons.FontAwesome5} IconLeft={'file-signature'}/> */}
      <SettingComponent  PreferanceName={'Log out'} leftIconType={Icons.AntDesign} IconLeft={'logout'}/>
            </ScrollView>
    </View>
  )
}


