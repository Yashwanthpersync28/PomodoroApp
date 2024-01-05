import React, { useState, useEffect } from "react";
import { View , Text , TouchableOpacity} from "react-native";
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
// import { TouchableOpacity } from "react-native-gesture-handler";

export const LoginScreen = ({navigation}) => {
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
    return(
        // <ScreenViewComponent style={[padding(20)]}>
        //     <View style={[flex(1), styles.allCenter]}>
        //         <TextComponent title={"PST Chat"} size={40} textCenter color={Colors.blue} style={[marginPosition(0,0,20)]}/>
        //         <TextComponent title={"Login to send and recieve messages"} size={16} textCenter />
        //     </View>
        //     <View style={[flex(1)]}>                
        //         <TextInputCompnent value={mobileNum?.toString()} emptyString={"emptyString"} title={"user name"} onChangeText={setMobileNumber} editable={!mobileVerified} placeholder={"Mobile Number"} keyboardType={"numeric"} enableClear={mobileVerified ? true : false} clearPressed={()=> clear() }/>
        //         {mobileVerified && <TextInputCompnent value={securityCode?.toString()} emptyString={"emptyString"} title={"Password"} onChangeText={setSecurityCode} editable={true} placeholder={"OTP"} keyboardType={"numeric"} style={[marginPosition(20)]}/>}
        //     </View>
        //     <View style={[flex(0.5)]}>   
        //         <ButtonComponent loading={false} onPress={() => submit()}  title={mobileVerified ? "SIGN IN" : "SEND OTP"} />
        //     </View>
        // </ScreenViewComponent>
<SafeAreaView style={[flex(1), padding(20),styles.bgsmokewhite]}>
  <View style={[flex(0.6)]}>
    <BackButtonComponent />
  </View>
  <View style={[flex(1.3)]}>
    <HeadingComponent name={'Welcome Back 👤'} details={'Let\'s Get Back to Productivity'} />
  </View>
  <View style={[flex(3.3)]}>
    <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Email</Text>
    <TextInputCompnent
      placeholder={'Email'}
      value={Email}
      onChangeText={(val) => setEmail(val)}
      keyboardType="email-address"
      showMaterialIcons={true}
    />
    <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Password</Text>
    <TextInputCompnent
      placeholder={'Password'}
      value={Password}
      onChangeText={(val) => setPassword(val)}
      secureTextEntry={secureTextEntry}
      showText={() => setsecureTextEntry(!secureTextEntry)}
      showMaterialIcons={false}
      ShowPasswordIcon={true}
    />
  </View>
  <View style={[styles.row, marginPosition(0), styles.spaceBetweenVertical, flex(0.5)]}>
    <View style={[styles.row, flex(4), styles.centerHorizontal]}>
      <TouchableOpacity onPress={() => setRemember(!remember)}>
        <Feather name={remember ? 'check-square' : 'square'} style={[fontSize(25), styles.Orange]} />
      </TouchableOpacity>
      <Text style={[styles.black, marginPosition(0, 0, 0, 10), fontSize(16)]}>Remember Me</Text>
    </View>
    <View style={[flex(2), styles.allCenter]}>
        <TouchableOpacity onPress={handleforgotPassword}>
        <Text style={[styles.Orange, fontSize(16)]}>Forgot password?</Text>
        </TouchableOpacity>
    </View>
  </View>
  <View style={[marginPosition(0), flex(5), { justifyContent: 'flex-end', alignItems: 'center' }]}>
    <ButtonComponent title={'Login'} />
  </View>
</SafeAreaView>

    )
}