import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, padding, styles, marginPosition } from '../../../styles/Styles';
import { BackButtonComponent, ButtonComponent, TextInputCompnent } from '../../../components';
import { View, Text } from 'react-native';
import { HeadingComponent } from '../../../components/view/HeadingComponent';

const Forgotpassword = () => {
  const [Email, setEmail] = useState('');
  const [count, setCount] = useState(0);
  const [Password, setPassword] = useState('');
  const [confirmPass, setConfirmpass] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // handling screens based on count value
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView style={[flex(1), styles.bgWhite, padding(20)]}>
      <View style={[flex(0.6)]}>
        <BackButtonComponent />
      </View>
      <View style={[flex(1.5)]}>
        {count === 0 ? (
          <HeadingComponent name={'Forgot Your Password? 👤'} details={'No worries. We\'ll help you reset it. Please enter the email associated with your Focusify account.'} />
        ) : null}
        {count === 1 ? (
          <HeadingComponent name={'Secure Your Account? 👤'} details={'Almost there! Create a new password for your Focusify account to keep it secure. Remember to choose a strong and unique password'} />
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
        {count === 1 ? (
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
      </View>
      <View style={[marginPosition(0), flex(4), { justifyContent: 'flex-end', alignItems: 'center' }]}>
        <ButtonComponent title={'Send OTP Code'} onPress={handleCount} />
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;
