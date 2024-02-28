import { View, Text, ScrollView,TouchableOpacity, Button, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { flex ,fontSize,marginPosition,padding,paddingPosition,styles,widthValue,margin, heightValue} from '../../styles/Styles'
import {PomodoroPreference} from './PomodoroPreference'
import { PreferenceComponent} from './Components/PreferenceComponent'
import Icon, { Icons } from '../../components/Icons'
import { Header } from '../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from './Logout/Logout'
import { setCurrentModal } from '../../redux/userReducer/modalReducer'
import { setDashboard } from '../../redux/ShowComponentReducer/ShowOnboardingReducer'


export const Settings = () => {
  const darkMode = useSelector(state=>state.system.darkMode)


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
  
  const logOut = ()=>{
   dispatch(setDashboard(false))
   navigation.navigate('login')
    dispatch(setCurrentModal(0));
  }
  const closeModal = ()=>{
    dispatch(setCurrentModal(0))
  }
const SettingComponent = ({PreferanceName,onPress,leftIconType,IconLeft})=>{

  return(
  <TouchableOpacity style={[styles.spaceBetweenVertical,styles.centerHorizontal,styles.row,marginPosition(20,5,20,10)]} onPress={onPress} >
    <View style={[styles.row]}>
     <Icon name={IconLeft} type={leftIconType}  style={[darkMode?styles.white:styles.black,fontSize(25)]} /> 
     <Text style={[fontSize(18),darkMode?styles.white:styles.black,{fontWeight:"500"},marginPosition(0,0,0,30)]}>{PreferanceName}</Text>
     </View>
        <View style={[styles.row,styles.centerHorizontal]}>
      <Icon name={"chevron-small-right"} type={Icons.Entypo}  style={[darkMode?styles.white:styles.black,fontSize(25)]} /> 
      </View>
     </TouchableOpacity>
  )
}

  return (
    <SafeAreaView style={[flex(1),darkMode?styles.bgdarkmodeBlack:styles.bgWhite,paddingPosition(10,20,0,10),{width:widthValue(1)}]}>
      <StatusBar color={darkMode?styles.bgdarkmodeBlack:styles.bgWhite} />
    <View style={[{height:heightValue(15)},Platform.OS === 'ios'?paddingPosition(0,15,0,15):paddingPosition(0,0,0,0)]}> 
      <Header color={darkMode?styles.white:styles.black} headername={'Settings'} />
      </View> 
          <View  style={[Platform.OS === 'ios'?paddingPosition(10,15,0,15):paddingPosition(10,0,0,10)]}>
      <SettingComponent  PreferanceName={'My profile'} leftIconType={Icons.Ionicons} IconLeft={'person-outline'} onPress={()=>navigation.navigate('Profile')} />
      <SettingComponent  PreferanceName={'Pomodoro Preference'} leftIconType={Icons.Entypo} IconLeft={'stopwatch'} onPress={()=>navigation.navigate('PomodoroPreference')}/>
      {/* <SettingComponent  PreferanceName={'Date & Time'} leftIconType={Icons.Feather} IconLeft={'clock'} onPress={()=>navigation.navigate('DateTime')}/> */}
      <SettingComponent  PreferanceName={'Notifications'} leftIconType={Icons.Fontisto} IconLeft={'bell'} onPress={()=>navigation.navigate('Notification')}/>
      <SettingComponent  PreferanceName={'Account & Security'} leftIconType={Icons.MaterialIcons} IconLeft={'security'} onPress={()=>navigation.navigate('AccountSecurity')}/>
      <SettingComponent  PreferanceName={'App Apearance'} leftIconType={Icons.FontAwesome} IconLeft={'eye'} onPress={()=>navigation.navigate('AppApearance')}/>
      <SettingComponent  PreferanceName={'Help & Support'} leftIconType={Icons.MaterialIcons} IconLeft={'contact-support'} onPress={()=>navigation.navigate('HelpandSupport')}/>
      <SettingComponent  PreferanceName={'Log out'} leftIconType={Icons.AntDesign} IconLeft={'logout'} onPress={()=>dispatch(setCurrentModal(13))}/>
      {currentModal === 13 && <Logout  VisibleAt={currentModal === 13} OnPress1={closeModal} OnPress2={logOut} HeaderName={'Logout'} option1={'Cancel'} option2={'Yes, Logout'} question={'Are you sure you want to log out?'}/>} 
            </View>
    </SafeAreaView>
  )
}


