import { View, Text } from 'react-native'
import React from 'react'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'
import ReactNativeBiometrics from 'react-native-biometrics'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'



 export const AccountSecurity = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  const changePassScreen = ()=>{
    navigation.navigate('ChangePassword')
}  


const currentModal = useSelector(state=>state.user.currentModal);

const deleteAcc = ()=>{
 dispatch(setCurrentModal(24))
 console.warn('hi')
}
// const rnBiometrics = new ReactNativeBiometrics();
// const {biometryType} = await rnBiometrics.isSensorAvailable();

// if (biometryType === BiometryTypes.Biometrics) {
//   //do something face id specific
// }

return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,20)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Account & Security'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(2)}]}>
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Biometric ID'} switchFunction={()=>console.log('hi')}/>
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Face ID'} switchFunction={()=>console.log('hi')}/>
      <PreferenceComponent  showIcon={true}  showDetail={true}  PreferanceName={'Change Password'} detail2={''} onPress={changePassScreen} PreviousScreen={PreviousScreen} />
      <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Delete Account'} onPress={deleteAcc}/>
        </View> 
        {currentModal ===24 &&  <Logout visibleAt={currentModal ===24 }/>}
    </View>
  )
}
