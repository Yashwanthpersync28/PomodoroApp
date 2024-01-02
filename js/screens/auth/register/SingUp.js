import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  fontSize,
  marginPosition,
  paddingPosition,
  styles,
  widthValue,
  radius,
  heightValue,
  flex,
  borderWidth,
  padding
} from '../../../styles/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { margin } from '../../../styles/Styles';

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView
      style={[paddingPosition(10, 20, 20, 20), {width: widthValue(1.15)},]}>
      <View style={[{width:widthValue(1),height:heightValue(16),justifyContent:'center'},]}>
        <FontAwesome5 name={'arrow-left'} style={[styles.gray, fontSize(20)]} />
      </View>
      <View style={[{width: widthValue(1.15)}]}>
        {/* ----Header Component----- */}
        <View style={[{gap: 10}, marginPosition(10, 0, 10, 0)]}>
          <Text
            style={[
              fontSize(25),
              styles.black,
              {fontWeight: '700', fontFamily: 'NotoSans'},
            ]}>
            Join Focusify Today 👤
          </Text>
          <Text
            style={[
              fontSize(15),
              styles.gray,
              {fontWeight: '400', fontFamily: 'NotoSans'},
            ]}>
            Unlock your Productivity Potential!
          </Text>
        </View>
        {/* ----Header Component----- */}

        {/* ----Email  & Password Component----- */}
        <View style={[]}>
        <View style={[marginPosition(10, 0, 10)]}>
          <Text style={[fontSize(16), styles.black, {fontWeight: '600'}]}>
            Email
          </Text>
          <View
            style={[
              styles.row,
              styles.bglightWhite,
              styles.allCenter,
              // paddingPosition(5, 10, 5, 5),
              marginPosition(10),
              {width: widthValue(1.1), height:heightValue(14), gap: 5},
              radius(10),
              styles.selfStart,
            ]}>
            <Feather
              name="mail"
              style={[fontSize(17), styles.gray, {fontWeight: '600'}]}
            />
            <TextInput
              placeholder="Email"
              style={[{width: widthValue(1.4)}, fontSize(18)]}></TextInput>
          </View>
        </View>
        <View>
          <Text
            style={[
              fontSize(16),
              styles.black,
              {fontWeight: '600'},
              marginPosition(10),
            ]}>
            Password
          </Text>
          <View
            style={[
              styles.row,
              styles.selfStart,
              styles.allCenter,
              styles.bglightWhite,
              // paddingPosition(5, 10, 5, 25),
              marginPosition(10),
              {width: widthValue(1.1), height:heightValue(14), gap: 5},
              radius(10),
            ]}>
            <View style={[styles.row, {gap: 5}, styles.allCenter]}>
              <EvilIcons
                name="lock"
                style={[
                  fontSize(25),
                  styles.gray,
                  {fontWeight: '600'},
                  paddingPosition(0, -10),
                ]}
              />
              <TextInput
                placeholder="Password"
                style={[{width: widthValue(1.4)}, fontSize(20)]}
                secureTextEntry={showPassword}
                maxLength={12}></TextInput>
            </View>
            <TouchableOpacity onPress={handlePassword}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                style={[
                  fontSize(16),
                  styles.gray,
                  {fontWeight: '600'},
                  styles.black,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* ----Email  & Password Component----- */}
        <Text
          style={[
            styles.textCenter,
            fontSize(16),
            marginPosition(25, 10, 10, 10),
            styles.black,
          ]}>
          Already have an Account ? <Text style={[styles.Orange]}> Log in</Text>
        </Text>

       {/*  ---or---  component */}
        <View
  style={[
    styles.centerHorizontal,
    styles.row,
    styles.allCenter,
    {
      width: widthValue(1.1),
      alignItems: 'center',
      height: heightValue(20),
    },marginPosition(18,0,18)
  ]}
>
  <View style={[flex(1), {height:1},styles.bglightWhite]} />
  <Text style={[marginPosition(0,0,5),styles.black,fontSize(16),{fontWeight:'300'}]}>or</Text>
  <View style={[flex(1), {height:1},styles.bglightWhite]} />
</View>
{/*  ---or---  component */}
</View>

{/*  SignUp with different platforms  component */}
<View style={[{gap:20},{width:widthValue(1.1),}]}>
  <TouchableOpacity style={[{width:widthValue(1.1),height:heightValue(16)},borderWidth(1),styles.borderLightGray,radius(30),styles.row,paddingPosition(14,10,0,10),styles.spaceBetweenVertical,]}>
    <Image source={require('../../../assets/Images/google.jpeg')} style={[{width:widthValue(18),height:widthValue(18)}]}></Image>
    <Text style={[styles.black,{fontWeight:'500'},fontSize(15)]}>Continue with Google</Text>
    <Text></Text>
  </TouchableOpacity>
    <TouchableOpacity style={[{width:widthValue(1.1),height:heightValue(16)},borderWidth(1),styles.borderLightGray,radius(30),styles.row,paddingPosition(14,10,0,10),styles.spaceBetweenVertical,]}>
    <Image source={require('../../../assets/Images/Apple.jpeg')} style={[{width:widthValue(18),height:widthValue(18)}]}></Image>
    <Text style={[styles.black,{fontWeight:'500'},fontSize(15)]}>Continue with Apple</Text>
    <Text></Text>
  </TouchableOpacity>
    <TouchableOpacity style={[{width:widthValue(1.1),height:heightValue(16)},borderWidth(1),styles.borderLightGray,radius(30),styles.row,paddingPosition(14,10,0,10),styles.spaceBetweenVertical,]}>
    <Image source={require('../../../assets/Images/facebook.jpeg')} style={[{width:widthValue(18),height:widthValue(18)}]}></Image>
    <Text style={[styles.black,{fontWeight:'500'},fontSize(15)]}>Continue with Facebook</Text>
    <Text></Text>
  </TouchableOpacity>
  <TouchableOpacity style={[{width:widthValue(1.1),height:heightValue(16)},styles.allCenter,styles.bgdarkOrange,radius(30),styles.row,]}>
    <Text style={[styles.white,{fontWeight:'500'},fontSize(15)]}>Sign up</Text>
  </TouchableOpacity>
</View>
{/*  SignUp with different platforms  component */}

      </View>
    </SafeAreaView>
  );
};

export default SingUp;
