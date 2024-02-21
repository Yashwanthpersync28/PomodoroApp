import React, { useEffect, useState } from 'react';
import { View, Modal, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { flex, fontSize, padding, radius, styles, widthValue } from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const LoaderModalComponent = ({ visible, onClose , name,handleLogin}) => {
  const navigation = useNavigation();
  const Darkmode=useSelector((state)=>state.system.darkMode);

  useEffect(() => {
    // Use setTimeout to delay the navigation after 3 seconds
    const timeoutId = setTimeout(() => {
        onClose()
      handleLogin();
    }, 2000);

    // Clear the timeout to prevent it from firing if the modal is closed before 3 seconds
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // const handleLogin = () => {
  //   navigation.navigate('login');
  // };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={[flex(1), styles.allCenter, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
        <View style={[{ width: widthValue(1.3) }, radius(10), padding(40), styles.allCenter,Darkmode?styles.bgtaskCardDblack:styles.bgWhite]}>
          <LottieView
            source={require('../../assets/Lottieview/loadingOrange.json')}
            autoPlay
            loop
            style={[{ height: 70, width: 70 }, styles.black]}
          />
          <TouchableOpacity>
            <Text style={[Darkmode?styles.white:styles.black, fontSize(20)]}>{name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoaderModalComponent;