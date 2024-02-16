import { View, Text } from 'react-native'
import React from 'react'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { Header } from '../../Manage/components/Header'
import { styles,flex,padding,widthValue,heightValue, margin } from '../../../styles/Styles'
import { Icons } from '../../../components/Icons'
import { ButtonComponent, TextInputCompnent } from '../../../components'
import { useState } from 'react'
import { handlePasswordvalidation } from '../../../constants/PasswordValidaton'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

 export const ChangePassword = ({}) => {
  const userDetails = useSelector(state=>state.UserDetails.userList)
  console.log('userDetails',userDetails)

  const navigation = useNavigation();

  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  // setUserId(userDetails.map(user=>user.id))

  // console.log(userId,'useridjkbhbjh')
  const [password,setPassword] = useState('')
  const [conPassword,setConPassword] = useState('')
  const [securedpass,setSecuredPass] = useState(true)
  const [securedCP,setSecuredCP] = useState(true)
  const [passError,setPassError] = useState('')
  const [conError,setConError] = useState('')
  console.log(password,'passchanging')
  console.log(conPassword,'Conpasschanging')
  const handlePassword = (pass)=>{
    const ValidPass = handlePasswordvalidation(pass)
    console.log(ValidPass,'passValidatioopnm')
    setPassError(ValidPass)
  }

  const handleConPassword = (pass,confirmPass)=>{
    console.log('conpassbnjhbhhg',confirmPass)
    setConPassword(confirmPass)
    if(confirmPass === pass){
      setConError('')
      if(passError.length>1){
        setConError('password not Valid')
      }
    } else{
      setConError('Password does not match')
    }
  }

//  const UpdatePassword = ()=>{
// alert('password changed succesfully')
//  }
  return (
     <View style={[styles.bgWhite,flex(1),padding(0,0,20)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Change Password'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[styles.spaceBetweenVertical]}>
        <View>
      <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>New Password</Text>
            <TextInputCompnent
              placeholder={'Password'}
              value={password}
              onChangeText={(pass)=>{setPassword(pass),handlePassword(pass),handleConPassword(pass,conPassword)}}
              secureTextEntry={securedpass}
              showText={() => setSecuredPass(!securedpass)}
              IconFamily ={Icons.SimpleLineIcons}
              Iconname={securedpass ? 'lock' : 'lock-open'}
              ShowPasswordIcon={true}
              bgColor={styles.bglgWhite}
            />
            </View>
            <Text style={[margin(0,2,0),styles.tomotoRed]}>{passError}</Text>
            <View style={[margin(0,20,0)]}>
          <Text style={[padding(0, 0, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Confirm Password</Text>
            <TextInputCompnent
              placeholder={'Confirm Password'}
              value={conPassword}
              onChangeText={(confirmPass)=>handleConPassword(password,confirmPass)}
              secureTextEntry={securedCP}
              showText={() => setSecuredCP(!securedCP)}
              IconFamily ={Icons.SimpleLineIcons}
              Iconname={securedCP ? 'lock' : 'lock-open'}
              ShowPasswordIcon={true}
              bgColor={styles.bglgWhite}
            />
            <Text style={[margin(0,2,0),styles.tomotoRed]}>{conError}</Text>

            </View>
            <View style={[styles.centerHorizontal]}>
        <ButtonComponent  title={'Update New Password'}  disabled={!(conError==='' && password.length>6 && conPassword.length>6)}/>
        </View>
        </View>  
    </View>
  )
}

