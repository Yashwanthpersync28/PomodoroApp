import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { DarkModeMOdal } from '../Components/DarkModeModal'
import { modalData } from '../../../constants/ModalsData'

 export const AppApearance = () => {
  const currentModal = useSelector((state)=>state.user.currentModal.currentModal) 

  const initialSelectedMode = modalData.darkMode[0].mode
  const [selectedMode,setSelectedMode] =  useState(initialSelectedMode)

  const initialAppLang = modalData.language[0].mode;
  const [selectedLang,setSelectedLang] = useState(initialAppLang)

  const navigation = useNavigation();

  const handleDarkMode = (item)=>{
    setSelectedMode(item.mode)
}
const handleLanguage = (item)=>{
  setSelectedLang(item.mode)
}
const closeModal=()=>{
    dispatch(setCurrentModal(0))
}
  const dispatch = useDispatch();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'App Apearance'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(6)}]}>
        <PreferenceComponent showIcon={true}  showDetail={true}  PreferanceName={'Theme'} detail2={selectedMode}  onPress={()=>dispatch(setCurrentModal(16))}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={selectedLang}  PreferanceName={'App Language'} onPress={()=>dispatch(setCurrentModal(17))}/>
        </View> 
        {currentModal === 16 && <DarkModeMOdal selectedThing={selectedMode}  closeModal={closeModal} visibleAt={currentModal===16} handleFuntion={handleDarkMode}  data={modalData.darkMode}/>} 
        {currentModal === 17 && <DarkModeMOdal selectedThing={selectedLang}  closeModal={closeModal} visibleAt={currentModal===17} handleFuntion={handleLanguage}  data={modalData.language}/>} 
    </View>
  )
}
