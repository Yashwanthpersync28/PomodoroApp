import React, { useEffect } from "react";
import { View, Platform, Alert } from "react-native"
import { useSelector } from "react-redux";

import { bgColor, flex, heightValue } from "./styles/Styles";
import { AppNavigationContainer } from "./navigation/StackNavigation";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

export const AppContainer = ({navigation}) => {
    const { darkMode } = useSelector(state => state.system)
    // const isBiometricEnabled = useSelector(state=>state.auth.)
  const Biometrics = useSelector(state=>state.auth.biometric)
  const isBiometricEnabled = Biometrics.isBiometricEnabled;
  const isFaceEnabled = Biometrics.faceIdEnabled;
  console.log('isBiometricEnabled',isBiometricEnabled)

  useEffect(()=>{
    if(isBiometricEnabled === true || isFaceEnabled===true){
    biometric();
}
  },[])

  const biometric = async () => {
    const rnBiometrics = new ReactNativeBiometrics()
    rnBiometrics.isSensorAvailable()
    .then((result)=>{
        const {available,biometryType} = result
        console.log('Biometric authentication succesfull',result,rnBiometrics,BiometryTypes,rnBiometrics.BiometricsFaceID);
        if(available && biometryType === BiometryTypes.TouchID){
            console.log('Touch ID is Supported')
        }
         else if (available && biometryType === BiometryTypes.FaceID){
            console.log('Face ID is Supported')
         } else if (available && biometryType === BiometryTypes.Biometrics){
            console.log('Biometrics is supported')
         } else {
            console.log('Biometrics is not supported')
         }
         if(result.biometryType === BiometryTypes.Biometrics || result.biometryType === BiometryTypes.FaceID || result.biometryType === BiometryTypes.TouchID){
            rnBiometrics.simplePrompt({  promptMessage:'Authenticate to access  the app'  })
            .then((success)=>{
                if(success){
                    if(success.success){
                    Alert.alert('Authentication Succesfull')
                    navigation.navigate('PomodoroScreen');
                    }else {
                        Alert.alert("Warniong", success.error)
                    }
                } else {
                    console.log('Biometric Authentication failed');
                }
            })
            .catch((error)=>{
                console.error('Biometric authentication error:',error);
                Alert.alert('Warning',error)
            });
         }
    }).catch((error)=>{
        console.error('Biometrics check error:',error)
    })
  }
    return(
        <View style={[{paddingTop: Platform.OS == "ios" ? heightValue(20) : 0}, flex(1), bgColor(darkMode)]}>
            <AppNavigationContainer/>   
        </View>
    )
}