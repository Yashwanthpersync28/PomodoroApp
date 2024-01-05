import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, padding, styles, marginPosition, heightValue, widthValue, radius } from '../../../styles/Styles';
import { BackButtonComponent, ButtonComponent, TextInputCompnent } from '../../../components';
import { View, Text , Alert} from 'react-native';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { OtpTextInput } from './Components/OtpTextInput';

export const Forgotpassword = ({navigation}) => {
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
          <HeadingComponent name={'Secure Your Account? 🔐'} details={'Almost there! Create a new password for your Focusify account to keep it secure. Remember to choose a strong and unique password'} />
        ) : null}
        {count === 2 ? (
          <HeadingComponent name={'Enter OTP Code 🔒'} details={'we have sent you an OTP code to your registered email address. Please check your ibox and enter the code'} />
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
            />
          </>
        ) : null}
        {count === 1 ? <>
          {/* Otp input box container */}
        <View style={[styles.row,styles.spaceBetween]}>
          <OtpTextInput onChangeText={(val)=>setinputone(val)} maxLength={1} keyboardType={'numeric'} value={inputone}/>
          <OtpTextInput onChangeText={(val)=>setinputTwo(val)} maxLength={1} keyboardType={'numeric'} value={inputTwo}/>
          <OtpTextInput onChangeText={(val)=>setinputThree(val)} maxLength={1} keyboardType={'numeric'} value={inputThree}/>
          <OtpTextInput onChangeText={(val)=>setinputfour(val)} maxLength={1} keyboardType={'numeric'} value={inputfour}/>
        </View>
        
        
        
        </>:null}
      </View>
      <View style={[marginPosition(0), flex(4), { justifyContent: 'flex-end', alignItems: 'center' }]}>
        <ButtonComponent title={'Send OTP Code'} onPress={handleCount} />
      </View>
    </SafeAreaView>
  );
};


