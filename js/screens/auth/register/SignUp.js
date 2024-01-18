
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform , StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, fontSize, heightValue, marginPosition, padding, styles, widthValue } from '../../../styles/Styles';
import { BackButtonComponent } from '../../../components/touchables/BackButton';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { TextInputCompnent } from '../../../components/inputs/TextInputComponent';
import { ButtonComponent } from '../../../components/touchables/Button';
import LoaderModalComponent from '../../../components/modals/LoaderModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux/userDataReducer/UserDetailsReducer';
import { Icons } from '../../../components/Icons';

export const SignUp = ({ navigation }) => {
  //selectors
  const dispatch=useDispatch();
  const userDatas=useSelector((state)=>state.UserDetails.userList)
  console.log('fcgvhbjkn',userDatas.length);
  //states
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [EmailError,setEmailError]=useState('');
  const [PasswordError,setPasswordError]=useState('')
  const [disable,setdisable]=useState(true)

  //to open Loader modal
  const openModal = () => {
    setModalVisible(true);
  };
///Store user data in redux
  const handletoLogin = () => {
    // dispatch(addUser({email:Email,password:Password}))
    const newUser = {
      email: Email,
      password: Password,
      id: userDatas.length,
      tasks: [],
      Tags: [],
      Project: [],
    };
  
    dispatch(addUser(newUser));
    navigation.navigate('login')
  };

console.log('dtfygvhub',userDatas);
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

//to handle disable button
useEffect(()=>{
  if(Email.length>5 && Password.length>6){
  if(EmailError==="" && PasswordError===""){
    setdisable(false)
  }
  else{
    setdisable(true)
  }
}
else{
   setdisable(true) 
}
},[Email,Password])

  return (
   
    <SafeAreaView style={[flex(1)]}>
       <StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
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
        <View style={[styles.column, styles.centerVertical, padding(10), flex(0.3)]}>
          <View style={[styles.row,styles.centerVertical]}>
          <Text style={[styles.black]}>Already have an account ?</Text>
          <TouchableOpacity onPress={handletoLogin}>
            <Text style={[styles.Orange, marginPosition(0, 0, 0, 5)]}>Log in</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.allCenter, flex(4), { justifyContent: 'flex-end', alignItems: 'center' }]}>
          <ButtonComponent title={'Signup'} onPress={openModal} disabled={disable}/>
          {modalVisible ? (
            <LoaderModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} name={'Signup...'} handleLogin={handletoLogin} />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};
