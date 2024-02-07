
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform , StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, fontSize, fontWeight, heightValue, marginPosition, padding, styles, widthValue } from '../../../styles/Styles';
import { BackButtonComponent } from '../../../components/touchables/BackButton';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { TextInputCompnent } from '../../../components/inputs/TextInputComponent';
import { ButtonComponent } from '../../../components/touchables/Button';
import LoaderModalComponent from '../../../components/modals/LoaderModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux/userDataReducer/UserDetailsReducer';
import { Icons } from '../../../components/Icons';
import { handlePasswordvalidation } from '../../../constants/PasswordValidaton';

export const SignUp = ({ navigation }) => {
  //selectors
  const dispatch=useDispatch();
  const userDatas=useSelector((state)=>state.UserDetails.userList)
  console.log('fcgvhbjkn',userDatas);
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

    const newUser = {
      email: Email,
      password: Password,
      id: userDatas.length+1,
    };
  
    dispatch(addUser([...userDatas,newUser]));
    
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
  const passwordvalidation=handlePasswordvalidation(val)
setPasswordError(passwordvalidation)
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
          <BackButtonComponent onPress={() => navigation.goBack()} />
        </View>
        <View style={[flex(0.3)]}>
          <HeadingComponent name={'Join Focusify Today'} details={'Unlock Your Productivity Potential!'} icon={'👤'}/>
        </View>
        <View style={[flex(0.3)]}>
          <Text style={[padding(0, 10, 0, 10, 0), styles.black,fontWeight('bold')]}>Email</Text>
          <TextInputCompnent
            placeholder={'Email'}
            value={Email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            IconFamily ={Icons.MaterialCommunityIcons}
            Iconname={'email'}
            bgColor={styles.bglgWhite}
            // fontsize={20}
          />
          {EmailError===''?null:
          <Text style={[styles.Orange,fontSize(16.5)]}>{EmailError}</Text>}
          <Text style={[padding(0, 10, 0, 10, 0), styles.black, fontWeight('bold')]}>Password</Text>
          <TextInputCompnent
            placeholder={'Password'}
            value={Password}
            onChangeText={handlePassword}
            secureTextEntry={secureTextEntry}
            showText={() => setsecureTextEntry(!secureTextEntry)}
            IconFamily ={Icons.SimpleLineIcons}
            Iconname={'lock'}
            ShowPasswordIcon={true}
            bgColor={styles.bglgWhite}
          />
          {PasswordError===''?null:
          <Text style={[styles.Orange,fontSize(16.5)]}>{PasswordError}</Text>}
        </View>
        <View style={[styles.column, styles.centerVertical, padding(10), flex(0.3)]}>
          <View style={[styles.row,styles.centerVertical]}>
          <Text style={[styles.black,fontSize(20)]}>Already have an account ?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <Text style={[styles.Orange, marginPosition(0, 0, 0, 5),fontSize(20),fontWeight('bold')]}>Log in</Text>
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
