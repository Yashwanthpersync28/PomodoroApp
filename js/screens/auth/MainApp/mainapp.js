import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Splash } from '../splash/Splash';
import { Onboarding } from '../onboarding/Onboarding';
import { useDispatch, useSelector } from 'react-redux';
import { SignUp } from '../register/SignUp';
import { LoginScreen } from '../login/Login';
import { setOnboarding } from '../../../redux/ShowComponentReducer/ShowOnboardingReducer';
import { useNavigation } from '@react-navigation/native';

export const mainapp = ({ navigation }) => {
  const [showSplash, setSplash] = useState(true);
  const showOnboarding = useSelector((state) => state.showcomponent.ShowOnboarding);
  const dispatch = useDispatch();
//  const navigation=useNavigation()
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
      dispatch(setOnboarding(!showOnboarding));
       navigation.navigate('login')
    }, 1000);
  }, []);

  return (
    <View>
      {showOnboarding ? (showSplash ? <Splash /> : <SignUp />) : (showSplash ? <Splash /> : <Onboarding />)}
      {/* <LoginScreen/> */}
    </View>
  );
};
