import { View, Text, Button,Alert, Platform } from 'react-native'
import React,{useEffect} from 'react'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'
import ReactNativeBiometrics , { BiometryTypes,Biometrics }from 'react-native-biometrics'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { setBiometrics } from '../../../redux/authReducer/biometricReducer'
import { useState } from 'react'
import LoaderModalComponent from '../../../components/modals/LoaderModalComponent'
import ChangePassword, { ChangePasswordModal } from '../changePassword/ChangePassword'
// import { setBiometrics } from '../../../redux/userReducer/BiometricsReducer'



 export const AccountSecurity = () => {
  const [pass,setPass] = useState(false)
  const darkMode = useSelector(state=>state.system.darkMode)


  const authPass = useSelector(state=>state.auth.authPass.AuthPassword);
  console.log('authPass',authPass)

  const Ios = Platform.OS = 'ios'
  const android = Platform.OS = 'android'
  // const [showlock,setShowLock] = false
  console.log(pass)
  const [modalVisible,setModalVisible ] = useState(false)
  const biometric = useSelector(state=>state.auth.biometric)
  const isBioEnabled = biometric.BiometricEnabled;
  const faceIdEnabled = biometric.faceIdEnabled;
  console.log('biometric',biometric)

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  const changePassScreen = ()=>{
    navigation.navigate('ChangePassword')
}  

const showSetPassword = ()=>{
  setPass(true)
}
// const currentModal = useSelector(state=>state.user.currentModal);
const currentModal = useSelector((state)=>state.user.currentModal.currentModal)


const deleteAcc = ()=>{
 dispatch(setCurrentModal(0))
 dispatch({type: "RESET_STATE" }) 
 navigation.navigate('signup')
}

const closeModal = ()=>{
 dispatch(setCurrentModal(0))

}
// const enableBiometric = ()=>{
//   if(!authPass){
//     Alert.alert(
//       'To use Biometric Feature please setPassword first',
//       [
//           { text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
//           { text: 'OK', onPress: () => navigation.navigate('CreatePassword') },

//       ]
//   );
//   } else {
//   const BiometricFeature = {
//     ...biometric,
//     BiometricEnabled:!isBioEnabled,
//   }
//   dispatch(setBiometrics(BiometricFeature))
// }
// }
const enableBiometric = () => {
  if (!authPass) {
    Alert.alert(
      'To use Biometric Feature',
      'Please set a password first',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
        { text: "Let's set password", onPress: () => navigation.navigate('CreatePassword') },
      ]
    );
  } else {
    const BiometricFeature = {
      ...biometric,
      BiometricEnabled: !isBioEnabled,
    };
    dispatch(setBiometrics(BiometricFeature));
  }
};


const enableFaceId = ()=>{
  const FaceID = {
    ...biometric,
    faceIdEnabled:!faceIdEnabled,
  }
  dispatch(setBiometrics(FaceID))
}


// // rnBiometrics.isSensorAvailable()
// //   .then((resultObject) => {
// //     const { available, biometryType } = resultObject

// //     if (available && biometryType === BiometryTypes.TouchID) {
// //       console.log('TouchID is supported')
// //     } else if (available && biometryType === BiometryTypes.FaceID) {
// //       console.log('FaceID is supported')
// //     } else if (available && biometryType === BiometryTypes.Biometrics) {
// //       console.log('Biometrics is supported')
// //     } else {
// //       console.log('Biometrics not supported')
// //     }
// //   })

//   const bio = async () => {
//     const rnBiometrics = new ReactNativeBiometrics()
//     rnBiometrics.isSensorAvailable()
//         .then((result) => {
//             const { available, biometryType } = result
//             console.log('Biometric authentication successful', result, rnBiometrics, BiometryTypes, rnBiometrics.BiometricsFaceID);
//             if (available && biometryType === BiometryTypes.TouchID) {
//                 console.log('TouchID is supported')
//               } else if (available && biometryType === BiometryTypes.FaceID) {
//                 console.log('FaceID is supported')
//               } else if (available && biometryType === BiometryTypes.Biometrics) {
//                 console.log('Biometrics is supported')
//               } else {
//                 console.log('Biometrics not supported')
//               }
//             if (result.biometryType === BiometryTypes.Biometrics || result.biometryType === BiometryTypes.FaceID || result.biometryType === BiometryTypes.TouchID) {
//                 rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to access the app' })
//                     .then((success) => {
//                         if (success) {
//                             if(success.success){
//                                 Alert.alert("Successs", "User successfully authenticated")
//                                 console.log('Biometric authentication successful', success);
//                             } else {
//                                 Alert.alert("Waring",  success.error)
//                             }                                
//                         } else {
//                             console.log('Biometric authentication failed');
//                         }
//                     })
//                     .catch((error) => {
//                         console.error('Biometric authentication error:', error);
//                         Alert.alert("Waring", error)
//                     });
//             }
//         })
//         .catch((error) => {
//             console.error('Biometrics check error:', error);
//         });
// }
//BIometric part//

return (
    <View style={[darkMode?styles.bgdarkmodeBlack:styles.bgWhite,flex(1),padding(0,0,20)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Account & Security'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(2)}]}>
      <PreferenceComponent  showIcon={true} showDetail={false} PreferanceName={'Set Password'} onPress={()=>navigation.navigate('CreatePassword')}/>
      {Platform.OS ==='android' &&
      <PreferenceComponent  showIcon={false} showDetail={false} PreferanceName={'Biometric ID'} isEnabled={isBioEnabled} switchFunction={enableBiometric}/> }
     {Platform.OS === 'ios' &&
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Face ID'}   isEnabled={faceIdEnabled} switchFunction={enableFaceId}/> }
      <PreferenceComponent  showIcon={true}  showDetail={true}  PreferanceName={'Change Password'} detail2={''} onPress={changePassScreen}  />
      <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Delete Account'} onPress={()=>{dispatch(setCurrentModal(26))}}/>
        </View> 
    {modalVisible ? <LoaderModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} name={'Deleting your Account'} handleLogin={deleteAcc}/> : null}
    {currentModal === 26 && <Logout HeaderName={'Delete Account'} VisibleAt={currentModal === 26} question={'Are you sure, you want to delete your Account Permanently ?'} option1={'No'} option2={'Yes'} OnPress1={()=>dispatch(setCurrentModal(0))} OnPress2={()=>{setModalVisible(true)}}/>}
    </View>
  )
}



