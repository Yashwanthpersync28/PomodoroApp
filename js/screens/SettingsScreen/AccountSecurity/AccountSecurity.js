import { View, Text, Button,Alert } from 'react-native'
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
// import { setBiometrics } from '../../../redux/userReducer/BiometricsReducer'



 export const AccountSecurity = () => {

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

const currentModal = useSelector(state=>state.user.currentModal);

const deleteAcc = ()=>{
 dispatch(setCurrentModal(24))
 console.warn('hi')
}



const enableBiometric = ()=>{
  const BiometricFeature = {
    ...biometric,
    BiometricEnabled:!isBioEnabled,
  }
  dispatch(setBiometrics(BiometricFeature))
}


const enableFaceId = ()=>{
  const FaceID = {
    ...biometric,
    faceIdEnabled:!faceIdEnabled,
  }
  dispatch(setBiometrics(FaceID))
}


// rnBiometrics.isSensorAvailable()
//   .then((resultObject) => {
//     const { available, biometryType } = resultObject

//     if (available && biometryType === BiometryTypes.TouchID) {
//       console.log('TouchID is supported')
//     } else if (available && biometryType === BiometryTypes.FaceID) {
//       console.log('FaceID is supported')
//     } else if (available && biometryType === BiometryTypes.Biometrics) {
//       console.log('Biometrics is supported')
//     } else {
//       console.log('Biometrics not supported')
//     }
//   })

  const bio = async () => {
    const rnBiometrics = new ReactNativeBiometrics()
    rnBiometrics.isSensorAvailable()
        .then((result) => {
            const { available, biometryType } = result
            console.log('Biometric authentication successful', result, rnBiometrics, BiometryTypes, rnBiometrics.BiometricsFaceID);
            if (available && biometryType === BiometryTypes.TouchID) {
                console.log('TouchID is supported')
              } else if (available && biometryType === BiometryTypes.FaceID) {
                console.log('FaceID is supported')
              } else if (available && biometryType === BiometryTypes.Biometrics) {
                console.log('Biometrics is supported')
              } else {
                console.log('Biometrics not supported')
              }
            if (result.biometryType === BiometryTypes.Biometrics || result.biometryType === BiometryTypes.FaceID || result.biometryType === BiometryTypes.TouchID) {
                rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to access the app' })
                    .then((success) => {
                        if (success) {
                            if(success.success){
                                Alert.alert("Successs", "User successfully authenticated")
                                console.log('Biometric authentication successful', success);
                            } else {
                                Alert.alert("Waring",  success.error)
                            }                                
                        } else {
                            console.log('Biometric authentication failed');
                        }
                    })
                    .catch((error) => {
                        console.error('Biometric authentication error:', error);
                        Alert.alert("Waring", error)
                    });
            }
        })
        .catch((error) => {
            console.error('Biometrics check error:', error);
        });
}

//BIometric part//

return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,20)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Account & Security'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(2)}]}>
      <PreferenceComponent  showIcon={false} showDetail={false} PreferanceName={'Biometric ID'} isEnabled={isBioEnabled} switchFunction={enableBiometric}/>
      <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}  PreferanceName={'Face ID'}   isEnabled={faceIdEnabled} switchFunction={enableFaceId}/>
      <PreferenceComponent  showIcon={true}  showDetail={true}  PreferanceName={'Change Password'} detail2={''} onPress={changePassScreen} PreviousScreen={PreviousScreen} />
      <PreferenceComponent  showIcon={true}  showDetail={true} detail1={''} detail2={''}  PreferanceName={'Delete Account'} onPress={deleteAcc}/>
        </View> 
        {currentModal ===24 &&  <Logout visibleAt={currentModal ===24 }/>}
    </View>
  )
}



