import { View, Text } from 'react-native'
import React from 'react'
import { styles, widthValue,flex, padding } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'




 export const AppApearance = () => {

  const navigation = useNavigation();

  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[flex(.1),{width:widthValue(1)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Date & Time'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[flex(.38)]}>
        <PreferenceComponent showIcon={true}  showDetail={true}  PreferanceName={'Time Format'} detail2={'System Default'} />
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={'Monday'}  PreferanceName={'Start Day of Week'}/>
        </View>  
    </View>
  )
}
