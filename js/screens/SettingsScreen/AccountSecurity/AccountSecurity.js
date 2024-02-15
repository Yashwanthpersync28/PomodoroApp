import { View, Text } from 'react-native'
import React from 'react'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'



 export const AccountSecurity = () => {

  const navigation = useNavigation();

  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  const changePassScreen = ()=>{
    navigation.navigate('ChangePassword')

}  
return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,20)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Account & Security'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(4)}]}>
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Biometric ID'}/>
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Face ID'}/>
        <PreferenceComponent  showIcon={true}  showDetail={true}  PreferanceName={'Change Password'} detail2={''} onPress={changePassScreen} PreviousScreen={PreviousScreen}/>
        <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Delete Account'}/>

        </View>  
    </View>
  )
}
