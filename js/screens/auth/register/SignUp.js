
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, fontSize, heightValue, marginPosition, padding, styles, widthValue } from '../../../styles/Styles';
import { BackButtonComponent } from '../../../components/touchables/BackButton';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { TextInputCompnent } from '../../../components/inputs/TextInputComponent';
import { ButtonComponent } from '../../../components/touchables/Button';
import LoaderModalComponent from '../../../components/modals/LoaderModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setOnboarding } from '../../../redux/ShowComponentReducer/ShowOnboardingReducer';
import { addUser } from '../../../redux/userDataReducer/UserDetailsReducer';

export const SignUp = ({ navigation }) => {
  const showOnboarding=useSelector((state)=>state.showcomponent.ShowOnboarding);
  const detailss=useSelector((state)=>state.UserDetails);
const dispatch=useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [EmailError,setEmailError]=useState('');
  const [PasswordError,setPasswordError]=useState('')

  const openModal = () => {
    setModalVisible(true);
  };

  const handletoLogin = () => {
    dispatch(addUser({email:Email,password:Password}))
    dispatch(setOnboarding(!showOnboarding))
    console.log('showcomp',showOnboarding);
    navigation.navigate('login');
    console.log('details',detailss);
  };


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

  return (
    <SafeAreaView style={[flex(1)]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(20), styles.bgWhite, flex(1)]}
      >
        <View style={[styles.centerVertical, flex(0.3)]}>
          <BackButtonComponent onPress={() => navigation.navigate('onboarding')} />
        </View>
        <View style={[flex(0.3)]}>
          <HeadingComponent name={'Join Focusify Today 👤'} details={'Unlock Your Productivity Potential!'} />
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
            name={'lock'}
          />
          {PasswordError===''?null:
          <Text style={[styles.Orange]}>{PasswordError}</Text>}
        </View>
        <View style={[styles.column, styles.centerVertical, padding(10), flex(0.3)]}>
          <View style={[styles.row,styles.centerVertical]}>
          <Text style={[styles.black]}>Already have an account ?</Text>
          <TouchableOpacity onPress={handletoLogin}>
            <Text style={[styles.Orange, marginPosition(0, 0, 0, 5)]}>Log in</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.allCenter, flex(4), { justifyContent: 'flex-end', alignItems: 'center' }]}>
          <ButtonComponent title={'Signup'} onPress={openModal} />
          {modalVisible ? (
            <LoaderModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} name={'Signup...'} handleLogin={handletoLogin} />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
