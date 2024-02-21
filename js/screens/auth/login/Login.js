import React, { useState, useEffect } from "react";
import { View , Text , TouchableOpacity , ScrollView , StatusBar} from "react-native";
import { useDispatch, useSelector } from "react-redux";


// Components
import { ButtonComponent, TextInputCompnent, BackButtonComponent } from "../../../components";
import { padding , styles, marginPosition, flex, fontSize, fontWeight} from "../../../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeadingComponent } from "../../../components/view/HeadingComponent";
import Icon, { Icons } from "../../../components/Icons";
import LoaderModalComponent from "../../../components/modals/LoaderModalComponent";
import { setDashboard, setOnboarding } from "../../../redux/ShowComponentReducer/ShowOnboardingReducer";
import { setRememberMe } from "../../../redux/rememberReducer/RemembermeReducer";
import { handlePasswordvalidation } from "../../../constants/PasswordValidaton";
import { addUserData } from "../../../redux/userReducer/UserInformationReducer";
import { Colors } from "../../../styles/Colors";


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
  const Darkmode=useSelector((state)=>state.system.darkMode);

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
      dispatch(setDashboard(true))
      navigation.navigate('BottomTabNavigation')
        const userInfo = {
          ...userInfo,
        email:Email,
        password:Password,
        fullname:Email,
        username:Email,
        gender:'',
        phoneNumber:'',
        }
        dispatch(addUserData(userInfo))
      
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

        // Dispatched the setRememberMe action with default values if Remember Me is unchecked
        dispatch(
          setRememberMe({
            email: '',
            password: '',
            rememberMe: false,
          })
        );
      }
     
    }
    else{
      const emailExists = userDetails.some(
        (credentials) => credentials.email === Email
      );
  
      if (emailExists) {
        setPasswordError('Incorrect Password');
      } else {
        setEmailError('Email not found');
      }
      

    }
    console.log('xdfghjkl');

    }
////email validation
const handleEmailChange = (text) => {
  setEmail(text);
  // Validations
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

  setEmailError(emailRegex.test(text) ? '' : 'Invalid email format');

};

////password validation
const handlePassword = (val) => {
  setPassword(val);
  const passwordValidation=handlePasswordvalidation(val)
  setPasswordError(passwordValidation)
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
<SafeAreaView style={[flex(1), padding(20),Darkmode?styles.bgdarkmodeBlack:styles.bgWhite]}>
<StatusBar backgroundColor = {Darkmode?Colors.darkmodeBlack:Colors.white} barStyle = "dark-content"/>
<ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), Darkmode?styles.bgdarkmodeBlack:styles.bgWhite, flex(1)]}
      >

  
  <View style={[flex(0.3)]}>
    <BackButtonComponent onPress={()=>navigation.navigate('signup')}/>
  </View>
  <View style={[flex(0.3)]}>
    <HeadingComponent name={'Welcome Back '} details={'Let\'s Get Back to Productivity'} icon={'👋'}/>
  </View>
  <View style={[flex(0.3)]}>
    <Text style={[padding(0, 10, 0, 10, 0), Darkmode?styles.inputColor:styles.black,fontWeight('bold')]}>Email</Text>
    <TextInputCompnent
      placeholder={'Email'}
      value={Email}
      onChangeText={handleEmailChange}
      keyboardType="email-address"
      IconFamily ={Icons.MaterialCommunityIcons}
      Iconname={'email'}
      bgColor={Darkmode?styles.bgtaskCardDblack:styles.bglgWhite}
      showGray={Darkmode?true:false}

    />
    {EmailError===''?null:
          <Text style={[styles.Orange]}>{EmailError}</Text>}
    <Text style={[padding(0, 10, 0, 10, 0), Darkmode?styles.inputColor:styles.black,fontWeight('bold')]}>Password</Text>
    <TextInputCompnent
      placeholder={'Password'}
      value={Password}
      onChangeText={handlePassword}
      secureTextEntry={secureTextEntry}
      showText={() => setsecureTextEntry(!secureTextEntry)}
      IconFamily ={Icons.SimpleLineIcons}
      Iconname={'lock'}
      ShowPasswordIcon={true}
      bgColor={Darkmode?styles.bgtaskCardDblack:styles.bglgWhite}
      showGray={Darkmode?true:false}


    />
    {PasswordError===''?null:
          <Text style={[styles.Orange,fontSize(16.5)]}>{PasswordError}</Text>}
  </View>
  <View style={[styles.row, marginPosition(0), flex(0.3), styles.centerVertical]}>
  <View style={[styles.row, flex(3), styles.selfStart]}>
    <TouchableOpacity onPress={() => setRemember(!remember)}>
      <Icon name={remember ? 'check-square' : 'square'} type={Icons.Feather} style={[fontSize(25), styles.Orange]}/> 
    </TouchableOpacity>
    <View style={[styles.allCenter]}>
      <Text style={[Darkmode?styles.inputColor:styles.black, marginPosition(0, 0, 0, 10), fontSize(17),fontWeight('bold')]}>Remember Me</Text>
    </View>
  </View>
  <View style={[flex(1.5), styles.centerHorizontal, { alignItems: 'flex-end' }]}>
    <TouchableOpacity onPress={handleforgotPassword}>
      <Text style={[Darkmode?styles.inputColor:styles.Orange, fontSize(17)]}>Forgot password?</Text>
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

