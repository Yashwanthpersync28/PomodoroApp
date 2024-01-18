import React, { useState, useEffect } from "react";
import { View , Text , TouchableOpacity , ScrollView , StatusBar} from "react-native";
import { useDispatch, useSelector } from "react-redux";


// Components
import { ButtonComponent, TextInputCompnent, BackButtonComponent } from "../../../components";
import { padding , styles, marginPosition, flex, fontSize} from "../../../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeadingComponent } from "../../../components/view/HeadingComponent";
import Icon, { Icons } from "../../../components/Icons";
import LoaderModalComponent from "../../../components/modals/LoaderModalComponent";
import { setOnboarding } from "../../../redux/ShowComponentReducer/ShowOnboardingReducer";
import { setRememberMe } from "../../../redux/rememberReducer/RemembermeReducer";


export const LoginScreen = ({navigation}) => {
  const rememberMeData = useSelector((state) => state.RememberMe);
  const { email } = rememberMeData;
  const {password} = rememberMeData
  const {rememberMe}=rememberMeData
  console.log("Email from RememberMe:", email);
   // - - - States - - - //
  const [modalVisible,setmodalVisible]=useState(false);
  const [Email,setEmail]=useState(rememberMe ? email : "");
  const [Password,setPassword]=useState(rememberMe ? password : "");
  const [secureTextEntry,setsecureTextEntry]=useState(true);
  const [remember,setRemember]=useState(rememberMe)
  const [EmailError,setEmailError]=useState('');
  const [PasswordError,setPasswordError]=useState('')
  const [disable,setDisable]=useState(true)

    // - - - Selector - - - //
    const dispatch = useDispatch()
    const { userVerify, user } = useSelector(state => state.auth)
    const userDetails=useSelector((state)=>state.UserDetails.userList)
    // const RememberMe=useSelector((state)=>state.RememberMe.RememberMe);
    // console.log('fdxgchvbjkn',RememberMe.email);

    console.log('datas',userDetails);
    //- - -Goto Forgotpassword page - - - //
    const handleforgotPassword=()=>{
      navigation.navigate('forgot')
    }

    //- - -open Loader Modal - - - //
    const handletoBottomTabNavigation=()=>{
      setmodalVisible(true)
    }

    //- - -Login page validation - - - //
    const handleLogin=()=>{
      const user = userDetails.find(
        (credentials) =>
         credentials.email === Email && credentials.password === Password
      );
      console.log('hope',user);

     if(user){
      dispatch(setOnboarding(true))
      navigation.navigate('BottomTabNavigation')
      if (remember) {
        // Dispatch the setRememberMe action with email, password, and rememberMe values
        dispatch(
          setRememberMe({
            email: Email,
            password: Password,
            rememberMe: true,
          })
        );
      } else {
        // Dispatch the setRememberMe action with default values if Remember Me is unchecked
        dispatch(
          setRememberMe({
            email: "",
            password: "",
            rememberMe: false,
          })
        );
      }
      // {id:user.id}
      // addproject
      // addtags  
      // BottomTabNavigation
    }
    else{
      setPasswordError('invalid Password')

    }
    console.log('xdfghjkl');

    }
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
};
/// - - - handle disable button - - -  //
useEffect(()=>{
 
  if(Email.length>4 && Password.length>6){
    if(EmailError==="" && PasswordError===""){
      setDisable(false)
    }
    else setDisable(true)
  }
  else setDisable(true)
  
  
},[Email,Password])

    return(   
<SafeAreaView style={[flex(1), padding(20),styles.bgsmokewhite]}>
<StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
<ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), styles.bgWhite, flex(1)]}
      >

  
  <View style={[flex(0.3)]}>
    <BackButtonComponent onPress={()=>navigation.navigate('signup')}/>
  </View>
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
      IconFamily ={Icons.MaterialCommunityIcons}
      Iconname={'email'}
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
      IconFamily ={Icons.SimpleLineIcons}
      Iconname={'lock'}
      ShowPasswordIcon={true}
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
    <ButtonComponent title={'Login'} onPress={handletoBottomTabNavigation} disabled={disable}/>
    {modalVisible ? <LoaderModalComponent visible={modalVisible} onClose={() => setmodalVisible(false)} name={'Login...'} handleLogin={handleLogin}/> : null}
  </View>
  </ScrollView>
</SafeAreaView>



    )
}

