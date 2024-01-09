import React, { useState, useEffect } from "react";
import { View , Text , TouchableOpacity , ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { performLoginActions } from "../../../actions/authActions";
import { webSocketConnection } from "../../../actions/webSocket";
import { userVerifyApi, otpVerifyApi } from "../../../api/authApi";

// Components
import { ButtonComponent, TextInputCompnent, TextComponent, ScreenViewComponent, BackButtonComponent } from "../../../components";
import { Colors } from "../../../styles/Colors";
import {  bgColor, margin, padding, textColor, styles, radius, marginPosition, flex, buttonColor, fontSize, heightValue, widthValue } from "../../../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeadingComponent } from "../../../components/view/HeadingComponent";
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import Icon, { Icons } from "../../../components/Icons";
import LoaderModalComponent from "../../../components/modals/LoaderModalComponent";
// import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";

export const LoginScreen = ({navigation}) => {
  const [modalVisible,setmodalVisible]=useState(false);
    const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [secureTextEntry,setsecureTextEntry]=useState(true);
  const [remember,setRemember]=useState(false)
    // - - - Selector - - - //
    const dispatch = useDispatch()
    const { userVerify, user } = useSelector(state => state.auth)
    // - - - States - - - //
    const [mobileNum, setMobileNumber] = useState()
    const [securityCode, setSecurityCode] = useState()
    const [mobileVerified, setMobileVerified] = useState(false)

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if(userVerify.status == "fulfilled"){
            setMobileVerified(true)
        }
        if(userVerify.status == "rejected"){
            alert(userVerify.data.message)
        }  
    },[userVerify.loading])

    useEffect(() => {
        if(user.status == "fulfilled"){
            // - - - - - Web Socket Connection - - - - - //
            // dispatch(webSocketConnection())
           
            // setTimeout(async() => {
            //     navigation.navigate("Dashboard")
            // }, 1000);
        }
        if(user.status == "rejected"){
            alert(user.data.message)
        } 
    },[user.loading])

    // - - - API Calls - - - //
    const submit = async () => {
        if(!mobileVerified){
            dispatch(userVerifyApi({mobileNum: parseInt(mobileNum)}))
        } else {
            clear()
            const resp =  await dispatch(performLoginActions({mobileNum: parseInt(mobileNum), securityCode: parseInt(securityCode)}));
        }
    }

    // Clear TextInputs
    const clear = () => {
        setMobileNumber("")
        setSecurityCode("")
        setMobileVerified(false)
    }
    // const navigation=useNavigation()
    const handleforgotPassword=()=>{
      navigation.navigate('forgot')
    }
    const handletoBottomTabNavigation=()=>{
      setmodalVisible(true)
    }
    const handleLogin=()=>{
      // const data=useSelector((state)=>state.UserDetails.userList.email);
      // console.log(data);
      navigation.navigate('BottomTabNavigation')

    }

    const [EmailError,setEmailError]=useState('');
    const [PasswordError,setPasswordError]=useState('')
////email validation
const handleEmailChange = (text) => {
  setEmail(text);
  // Validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setEmailError(emailRegex.test(text) ? '' : 'Invalid email format');
};

////password validation
const handlePassword = (val) => {
  setPassword(val);

  const minLength = 6;
  const hasNumber = /\d/.test(val);
  const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(val);
  const hasUpperCase = /[A-Z]/.test(val);

  // let error = '';

  if (val.length < minLength) {
    setPasswordError(`Password must be at least ${minLength} characters. `);
  }

  else if (!hasNumber) {
    setPasswordError('Password must contain at least one number. ');
  }

  else if (!hasSpecialSymbol) {
    setPasswordError('Password must contain at least one special symbol. ');
  }

  else if (!hasUpperCase) {
    setPasswordError('Password must contain at least one uppercase letter. ');
  }
  else{
    setPasswordError('')
  }

  // setError(error.trim()); // Trim to remove any leading or trailing spaces
};







    return(   
<SafeAreaView style={[flex(1), padding(20),styles.bgsmokewhite]}>
<ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), styles.bgWhite, flex(1)]}
      >

  
  <View style={[flex(0.3)]}>
    <BackButtonComponent onPress={()=>navigation.navigate('signup')}/>
  </View>
  {/* <ScrollView> */}
  <View style={[flex(0.3)]}>
    <HeadingComponent name={'Welcome Back 👋'} details={'Let\'s Get Back to Productivity'} />
  </View>
  <View style={[flex(0.3)]}>
    <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Email</Text>
    <TextInputCompnent
      placeholder={'Email'}
      value={Email}
      onChangeText={handleEmailChange}
      keyboardType="email-address"
      showMaterialIcons={true}
      name={'email'}
    />
    {EmailError===''?null:
          <Text style={[styles.Orange]}>{EmailError}</Text>}
    <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Password</Text>
    <TextInputCompnent
      placeholder={'Password'}
      value={Password}
      onChangeText={handlePassword}
      secureTextEntry={secureTextEntry}
      showText={() => setsecureTextEntry(!secureTextEntry)}
      showMaterialIcons={false}
      ShowPasswordIcon={true}
      name={'lock-open'}
    />
    {PasswordError===''?null:
          <Text style={[styles.Orange]}>{PasswordError}</Text>}
  </View>
  <View style={[styles.row, marginPosition(0), flex(0.3), styles.centerVertical]}>
  <View style={[styles.row, flex(3), styles.selfStart]}>
    <TouchableOpacity onPress={() => setRemember(!remember)}>
      <Icon name={remember ? 'check-square' : 'square'} type={Icons.Feather} style={[fontSize(25), styles.Orange]}/> 
    </TouchableOpacity>
    <View style={[styles.allCenter]}>
      <Text style={[styles.black, marginPosition(0, 0, 0, 10), fontSize(16)]}>Remember Me</Text>
    </View>
  </View>
  <View style={[flex(1.5), styles.centerHorizontal, { alignItems: 'flex-end' }]}>
    <TouchableOpacity onPress={handleforgotPassword}>
      <Text style={[styles.Orange, fontSize(16)]}>Forgot password?</Text>
    </TouchableOpacity>
  </View>
</View>

  <View style={[marginPosition(0), flex(5.5), { justifyContent: 'flex-end', alignItems: 'center' }]}>
    <ButtonComponent title={'Login'} onPress={handletoBottomTabNavigation}/>
    {modalVisible ? <LoaderModalComponent visible={modalVisible} onClose={() => setmodalVisible(false)} name={'Login...'} handleLogin={handleLogin}/> : null}
  </View>
  {/* </ScrollView> */}
  </ScrollView>
</SafeAreaView>


    )
}