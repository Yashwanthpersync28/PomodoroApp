import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { performLoginActions } from "../../../actions/authActions";
import { webSocketConnection } from "../../../actions/webSocket";
import { userVerifyApi, otpVerifyApi } from "../../../api/authApi";
// Components
import { ButtonComponent, TextInputCompnent, TextComponent, ScreenViewComponent } from "../../../components";
import { Colors } from "../../../styles/Colors";
import {  bgColor, margin, padding, textColor, styles, radius, marginPosition, flex, buttonColor, fontSize } from "../../../styles/Styles";

export const LoginScreen = ({navigation}) => {
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
    return(
        <ScreenViewComponent style={[padding(20)]}>
            <View style={[flex(1), styles.allCenter]}>
                <TextComponent title={"PST Chat"} size={40} textCenter color={Colors.blue} style={[marginPosition(0,0,20)]}/>
                <TextComponent title={"Login to send and recieve messages"} size={16} textCenter />
            </View>
            <View style={[flex(1)]}>                
                <TextInputCompnent value={mobileNum?.toString()} emptyString={"emptyString"} title={"user name"} onChangeText={setMobileNumber} editable={!mobileVerified} placeholder={"Mobile Number"} keyboardType={"numeric"} enableClear={mobileVerified ? true : false} clearPressed={()=> clear() }/>
                {mobileVerified && <TextInputCompnent value={securityCode?.toString()} emptyString={"emptyString"} title={"Password"} onChangeText={setSecurityCode} editable={true} placeholder={"OTP"} keyboardType={"numeric"} style={[marginPosition(20)]}/>}
            </View>
            <View style={[flex(0.5)]}>   
                <ButtonComponent loading={false} onPress={() => submit()}  title={mobileVerified ? "SIGN IN" : "SEND OTP"} />
            </View>
        </ScreenViewComponent>
    )
}