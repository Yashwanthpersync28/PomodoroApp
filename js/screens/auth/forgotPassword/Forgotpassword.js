import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, padding, styles, marginPosition, heightValue, widthValue, radius, fontSize, fontWeight, lineHeight } from '../../../styles/Styles';
import { BackButtonComponent, ButtonComponent, TextInputCompnent } from '../../../components';
import { View, Text , Alert,ScrollView ,Image} from 'react-native';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { OtpTextInput } from './Components/OtpTextInput';
import { OtpTimer } from './Components/OtpTimer';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux/userDataReducer/UserDetailsReducer';
import { Icons } from '../../../components/Icons';
import { handlePasswordvalidation } from '../../../constants/PasswordValidaton';

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
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true);
  const [inputone,setinputone]=useState('');
  const [inputTwo,setinputTwo]=useState('');
  const [inputThree,setinputThree]=useState('');
  const [inputfour,setinputfour]=useState('');
  const [disable,setdisable]=useState(true);
  const [id,setId]=useState(null)
  const [passwordError,setPasswordError]=useState('')
///selectors
const userDetails=useSelector((state)=>state.UserDetails.userList)
const dispatch=useDispatch()
  // handling screens based on count value
  const handleCount = () => {
    setCount(count+1)
    console.log('if',id);
  //{- - - handle email - - - //}
  // setCount(count + 1)
  }
  ////checking otp
  const [OtpError,setOTPerror]=useState('');
  const otp='1111'
  const Checkotp = () => {
    const enteredOtp = inputone + inputTwo + inputThree + inputfour;
    if (enteredOtp === otp) {
      setCount((prevCount) => {
        console.log('equal');
        setOTPerror('')
        return prevCount + 1;
      });
    } else {
      setOTPerror('Invalid Otp')
      console.log('not equal');
    }
  };

  const [EmailError,setEmailError]=useState('');
 
///email validation
const handleEmailChange = (text) => {
  setEmail(text);
};
useEffect(() => {
  if(Email.length>1){
  const user = userDetails.find(
    (useremail) => useremail.email.toLowerCase() === Email.toLowerCase()
  );
  if(user){
    setId(user.id)
  }
  // setId(user.id)
  console.log('useruseruser',user);
  
// console.log('users',user.id);
  const result = Boolean(user);

  if (result) {
    setEmailError('');
  } else {
    setEmailError('Invalid email id');
  }
}

}, [Email, userDetails]);

/////confirm password
const [ConfirmError,setConfError]=useState('')

const handleconfirmPassword=(pass,confpass)=>{
  console.log('val',confpass);
  setConfirmpass(confpass)
  if(confpass===pass){
    setConfError('')
    if(passwordError.length>1){
      setConfError('Password not valid')
    }
  }
  else{
    setConfError('Password does not match')
  }
}
//Update password
const UpdatePassword=()=>{

  const UserUpdatedPassword = userDetails.map(user => {
    if (user.id === id) {
        return {
            ...user,
            password: confirmPass,
            
        };
    }
    return user;
});
dispatch(addUser(UserUpdatedPassword))
setCount(3)
}
const handlepass=(val)=>{
    const PasswordvalidationResult=handlePasswordvalidation(val)
    console.log('returnss',PasswordvalidationResult);
    setPasswordError(PasswordvalidationResult)
}
  return (
    <SafeAreaView style={[flex(1), styles.bgWhite, padding(20)]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), styles.bgWhite, flex(1)]}
      >
      <View style={[flex(0.3)]}>
        {count === 0 ? <BackButtonComponent onPress={()=>navigation.navigate('login')}/>:null}
        {count === 1 ? <BackButtonComponent onPress={()=>setCount(count-1)}/>:null}
        {count === 2 ? <BackButtonComponent onPress={()=>setCount(count-1)}/>:null}

      </View>
      <View style={[flex(0.3)]}>
        {count === 0 ? (
          <HeadingComponent name={'Forgot Your Password? '} details={'No worries. We\'ll help you reset it. Please enter the email associated with your Focusify account.'} icon={'🔑'}/>
        ) : null}
        {count === 1 ? (
          <HeadingComponent name={'Enter OTP Code '} details={'we have sent you an OTP code to your registered email address. Please check your ibox and enter the code'} icon={'🔒'}/>

        ) : null}
        {count === 2 ? (
          <HeadingComponent name={'Secure Your Account? '} details={'Almost there! Create a new password for your Focusify account to keep it secure. Remember to choose a strong and unique password'} icon={'🔐'}/>
        ) : null}
      </View>
      <View style={[flex(2)]}>
        {count === 0 ? (
          <>
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Your Registered Email</Text>
            <TextInputCompnent
              placeholder={'Email'}
              value={Email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              IconFamily ={Icons.MaterialCommunityIcons}
              Iconname={'email'}
              bgColor={styles.bglgWhite}
            />
          {EmailError===''?null:
            <Text style={[styles.Orange]}>{EmailError}</Text>}
          </>
        ) : null}
        {count === 2 ? (
          <>
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>New Password</Text>
            <TextInputCompnent
              placeholder={'Password'}
              value={Password}
              onChangeText={(val) => {setPassword(val),handleconfirmPassword(val,confirmPass),handlepass(val)}}
              secureTextEntry={secureTextEntryPassword}
              showText={() => setSecureTextEntryPassword(!secureTextEntryPassword)}
              IconFamily ={Icons.SimpleLineIcons}
              Iconname={secureTextEntryPassword ? 'lock' : 'lock-open'}
              ShowPasswordIcon={true}
              bgColor={styles.bglgWhite}
            />
            {passwordError===''?null:
          <Text style={[styles.Orange]}>{passwordError}</Text>}
            <Text style={[padding(0, 10, 0, 10, 0), styles.black, { fontWeight: '600' }]}>Confirm Password</Text>
            <TextInputCompnent
              placeholder={'Confirm Password'}
              value={confirmPass}
              onChangeText={(val)=>handleconfirmPassword(Password,val)}
              secureTextEntry={secureTextEntryConfirmPassword}
              showText={() => setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword)}
              IconFamily ={Icons.SimpleLineIcons}
              Iconname={secureTextEntryConfirmPassword ? 'lock' : 'lock-open'}
              ShowPasswordIcon={true}
              bgColor={styles.bglgWhite}
            />
             {ConfirmError===''?null:
          <Text style={[styles.Orange]}>{ConfirmError}</Text>}
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
               <View style={[styles.allCenter]}>
               {OtpError===''?null:
          <Text style={[styles.Orange]}>{OtpError}</Text>}
          </View>
        </View>
        </>:null}
        
      </View>
      {count===3 ? <>
        <View style={[styles.column,styles.allCenter]}>
               <Image source={require('../../../assets/Images/GotohomepageImage.png')} style={[{height:100,width:100}]}/>
               <Text style={[styles.black,fontSize(30),fontWeight('bold'),lineHeight(35)]}>You're All Set!</Text>
               <Text style={[styles.textCenter,fontSize(17),styles.Gray,{width:widthValue(2)},lineHeight(20),marginPosition(10)]}>Congratulation's Your password has been changed successfully</Text>

         </View>
        </>:null}
      <View style={[marginPosition(0), flex(3), { justifyContent: 'flex-end', alignItems: 'center' }]}>
        {count ===0 ? <ButtonComponent  title={'Send OTP Code'} onPress={handleCount} disabled={!(EmailError==='' && Email.length>6)}/>:null}
        {count ===1 ? <ButtonComponent title={'Submit OTP'} onPress={Checkotp}/>:null}
        {count ===2 ? <ButtonComponent title={'Save New Password'} onPress={UpdatePassword} disabled={!(ConfirmError==='' && Password.length>6 && confirmPass.length>6)}/>:null}
        {count ===3 ? <ButtonComponent title={'Go to Homepage'} onPress={()=>navigation.navigate('BottomTabNavigation')} />:null}
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

