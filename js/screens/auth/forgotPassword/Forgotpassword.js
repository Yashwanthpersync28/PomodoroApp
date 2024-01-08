import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, padding, styles, marginPosition, heightValue, widthValue, radius } from '../../../styles/Styles';
import { BackButtonComponent, ButtonComponent, TextInputCompnent } from '../../../components';
import { View, Text , Alert} from 'react-native';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { OtpTextInput } from './Components/OtpTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OtpTimer } from './Components/OtpTimer';

export const Forgotpassword = ({navigation}) => {
  //refs
  const focusOne=useRef();
  const focusTwo=useRef();
  const focusThree=useRef();
  const focusFour=useRef();
//color chnage
 const [oneBg,setoneBg]=useState(true);
 const [twoBg,setTwoBg]=useState(false);
 const [threeBg,setThreeBg]=useState(false);
 const [fourBg,setfourBg]=useState(false);

/////value
  const [Email, setEmail] = useState('');
  const [count, setCount] = useState(0);
  const [Password, setPassword] = useState('');
  const [confirmPass, setConfirmpass] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [inputone,setinputone]=useState('');
  const [inputTwo,setinputTwo]=useState('');
  const [inputThree,setinputThree]=useState('');
  const [inputfour,setinputfour]=useState('');

  // handling screens based on count value
  const handleCount = () => {
    if(count===2){
      Alert.alert(
        'Congratulations',
        'Password changed sucessfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('BottomTabNavigation'),
          },
        ],
      );
    }
    setCount(count + 1);
  };
  ////checking otp
  const otp='1111'
  const Checkotp = () => {
    const enteredOtp = inputone + inputTwo + inputThree + inputfour;
    if (enteredOtp === otp) {
      // setdisabled(false)
      // Use a callback inside setCount to ensure the state is updated
      setCount((prevCount) => {
        console.log('equal');
        return prevCount + 1;
      });
    } else {
      console.log('not equal');
      // setdisabled(true)
    }
  };
 

  return (
    <SafeAreaView style={[flex(1), styles.bgWhite, padding(20)]}>
      <View style={[flex(0.6)]}>
        {count === 0 ? <BackButtonComponent onPress={()=>navigation.navigate('login')}/>:null}
        {count === 1 ? <BackButtonComponent onPress={()=>setCount(count-1)}/>:null}
        {count === 2 ? <BackButtonComponent onPress={()=>setCount(count-1)}/>:null}

      </View>
      <View style={[flex(1.5)]}>
        {count === 0 ? (
          <HeadingComponent name={'Forgot Your Password? 🔑'} details={'No worries. We\'ll help you reset it. Please enter the email associated with your Focusify account.'} />
        ) : null}
        {count === 1 ? (
          <HeadingComponent name={'Enter OTP Code 🔒'} details={'we have sent you an OTP code to your registered email address. Please check your ibox and enter the code'} />

        ) : null}
        {count === 2 ? (
          <HeadingComponent name={'Secure Your Account? 🔐'} details={'Almost there! Create a new password for your Focusify account to keep it secure. Remember to choose a strong and unique password'} />
        ) : null}
      </View>
      <View style={[flex(3)]}>
        {count === 0 ? (
          <>
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Your Registered Email</Text>
            <TextInputCompnent
              placeholder={'Email'}
              value={Email}
              onChangeText={(val) => setEmail(val)}
              keyboardType="email-address"
              showMaterialIcons={true}
              name={'email'}
            />
          </>
        ) : null}
        {count === 2 ? (
          <>
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Your Registered Email</Text>
            <TextInputCompnent
              placeholder={'Password'}
              value={Password}
              onChangeText={(val) => setPassword(val)}
              secureTextEntry={secureTextEntry}
              showText={() => setSecureTextEntry(!secureTextEntry)}
              showMaterialIcons={false}
              ShowPasswordIcon={true}
              name={'lock'}
            />
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Confirm Password</Text>
            <TextInputCompnent
              placeholder={'Confirm Password'}
              value={confirmPass}
              onChangeText={(val) => setConfirmpass(val)}
              secureTextEntry={secureTextEntry}
              showText={() => setSecureTextEntry(!secureTextEntry)}
              showMaterialIcons={false}
              ShowPasswordIcon={true}
              name={'lock'}
            />
          </>
        ) : null}
        {count === 1 ? <>
          {/* Otp input box container */}
          <View style={[styles.coloum]}>
        <View style={[styles.row,styles.spaceBetween]}>
          <OtpTextInput onChangeText={(val) => {
            if (val.length >= 1) {
              focusTwo.current.focus();
              setoneBg(false)
              setTwoBg(true)
               }
               else if(val.length < 1){
              focusOne.current.focus();
                setoneBg(true)
                setTwoBg(false)
               }
               setinputone(val)}} maxLength={1} keyboardType={'numeric'} value={inputone} refval={focusOne} focusBg={oneBg}/>
          <OtpTextInput onChangeText={(val) => {
            if (val.length >= 1) {
              focusThree.current.focus();
              setTwoBg(false)
              setThreeBg(true)
               }
               else if(val.length < 1){
                focusOne.current.focus()
                setTwoBg( true)
                setThreeBg(false)
               }
               setinputTwo(val)}} maxLength={1} keyboardType={'numeric'} value={inputTwo} refval={focusTwo} focusBg={twoBg}/>
          <OtpTextInput onChangeText={(val) => {
            if (val.length >= 1) {
              focusFour.current.focus();
              setThreeBg(false)
              setfourBg(true)
               }
               else if(val.length < 1){
                focusTwo.current.focus()
                setThreeBg(true)
              setfourBg(false)
               }
               setinputThree(val)}} maxLength={1} keyboardType={'numeric'} value={inputThree} refval={focusThree} focusBg={threeBg}/>
          <OtpTextInput onChangeText={(val) => {
            if (val.length >= 1) {
              focusFour.current.focus();
              setfourBg(false)

               }
               else if(val.length < 1){
                focusThree.current.focus()
              setfourBg(true)

               }
               setinputfour(val)}} maxLength={1} keyboardType={'numeric'} value={inputfour} refval={focusFour} focusBg={fourBg}/>
              
        </View>
               <OtpTimer/>
        </View>
        </>:null}
      </View>
      <View style={[marginPosition(0), flex(4), { justifyContent: 'flex-end', alignItems: 'center' }]}>
        {count ===0 ? <ButtonComponent  title={'Send OTP Code'} onPress={handleCount} />:null}
        {count ===1 ? <ButtonComponent title={'Submit OTP'} onPress={Checkotp}/>:null}
        {count ===2 ? <ButtonComponent title={'Save New Password'} onPress={handleCount} />:null}

      </View>
    </SafeAreaView>
  );
};


