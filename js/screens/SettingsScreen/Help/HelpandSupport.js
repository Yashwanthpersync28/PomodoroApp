import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { DarkModeMOdal } from '../Components/DarkModeModal'
import { modalData } from '../../../constants/ModalsData'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'

 export const HelpandSupport = () => {
  const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Help & Support'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(4.5)}]}>
        <PreferenceComponent showIcon={true}  showDetail={true}  PreferanceName={'FAQ'} detail2={''}  onPress={()=>navigation.navigate('FAQ')} PreviousScreen={PreviousScreen}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Contact Support'} onPress={()=>navigation.navigate('ContactSupport')} PreviousScreen={PreviousScreen}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Privacy Policy'} onPress={()=>navigation.navigate('PrivacyPolicy')} PreviousScreen={PreviousScreen}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Terms of Services'} onPress={()=>navigation.navigate('Terms')} PreviousScreen={PreviousScreen}/>
        </View> 
        {/* {currentModal === 16 && <DarkModeMOdal selectedThing={selectedMode}  closeModal={closeModal} visibleAt={currentModal===16} handleFuntion={handleDarkMode}  data={modalData.darkMode}/>}  */}
        {/* {currentModal === 17 && <DarkModeMOdal selectedThing={selectedLang}  closeModal={closeModal} visibleAt={currentModal===17} handleFuntion={handleLanguage}  data={modalData.language}/>}  */}
    </View>
  )
}
