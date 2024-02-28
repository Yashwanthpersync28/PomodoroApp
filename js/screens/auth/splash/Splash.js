// import LottieView from 'lottie-react-native'
import LottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View,Alert } from 'react-native'
import { flex, fontSize, heightValue, styles, widthValue } from '../../../styles/Styles'
import { timer } from '../../../constants/imageConstant'
import { loading } from '../../../constants/LottieConstants'
import { useSelector } from 'react-redux'
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

export const Splash = ({navigation}) => {

  //selectors//
  const showonboarding = useSelector((state)=>state.showcomponent.ShowOnboarding)
  const showDashboard=useSelector((state)=>state.showcomponent.ShowDashboard)
  const Biometrics = useSelector(state=>state.auth.biometric)
  console.log(
    Biometrics,'Biometrics'
  )
  const isBiometricEnabled = Biometrics.BiometricEnabled;
  const isFaceEnabled = Biometrics.faceIdEnabled;
  ///for handling onboarding and signup
  useEffect(()=>{
    setTimeout(() => {
      if(isBiometricEnabled ===true){
      biometric() 
    }
     
      else {
      if(showonboarding){
        if(showDashboard || isBiometricEnabled === true){
              navigation.navigate('BottomTabNavigation')
        }
        else{ navigation.navigate('signup')}
      }
      else{
        navigation.navigate('onboarding')
        console.log('showcompppp',showonboarding);
      }
    }}, 1000);
    
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
                    // Alert.alert('Authentication Succesfull')
        navigation.navigate('BottomTabNavigation');
                    }else {
                        Alert.alert("Warniong", success.error)
                    }
                } else {
                    console.log('Biometric Authentication failed');
                }
            })
            .catch((error)=>{
                // console.error('Biometric authentication error:',error);
                console.log('Error message:', error.message);
                Alert.alert(
                  'Authentication Failed',
                  'Biometric authentication failed. Do you want to use your passcode instead?',
                  [
                      { text: 'Use Passcode', onPress: () => navigation.navigate('PasscodeScreen') },
                      { text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel' }
                  ]
              );
            });
         } else {
          if(showonboarding){
            if(showDashboard &&isBiometricEnabled === true){
            console.log('showcomp',showonboarding);
            }
            else{ navigation.navigate('signup')}
          }
          else{
            navigation.navigate('onboarding')
            console.log('showcompppp',showonboarding);
          }
        }
    }).catch((error)=>{
        console.error('Biometrics check error:',error)
    })
  }

  return (
    <SafeAreaView>
    <View style={[{height:'100%',justifyContent:'center',alignItems:'center'},styles.bgOrange]}>
      <View style={[flex(1.2),{justifyContent:'flex-end',alignItems:'flex-end'}]}>
          <Image source={timer} style={{height:150,width:150}}/>
      </View>
      <Text style={[styles.smokewhite,fontSize(30),{fontWeight:'600'}]}>Focusify</Text>
      <View style={[flex(1),styles,styles.allCenter]}>
           <LottieView source={loading} autoPlay={true} style={[{height:heightValue(12),width:widthValue(4)}]}/> 
      </View>
    </View>
    </SafeAreaView>
  )
}





