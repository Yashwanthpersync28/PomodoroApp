import React, { useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon from react-native-vector-icons
import { styles,flex, widthValue, heightValue ,radius, opacity} from '../../../../styles/Styles';
import { authback } from '../../../../constants/imageConstant';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'del','checkmark'];
const dialPadSize = width * 0.2;
const pinLength = 6;


export const PasscodeScreen = () => {

  const navigation = useNavigation();
  const authPass = useSelector(state=>state.auth.authPass.AuthPassword);
  const [pinCode, setPinCode] = useState([]);
  const pinNum = pinCode.join('')
console.log(pinNum,'pinclomdkndjndjndjndfjk')
console.log(authPass,'compare')

const login = ()=>{
  if(pinNum===authPass){
    navigation.navigate('BottomTabNavigation')
  } else {
    console.log('didnt match man ')
  }
}

  const DialPad = ({ onPress }) => {
    return (
      <View style={[{width:widthValue(1.2)},styles.row,styles.rowWrap,styles.allCenter]}>
        {dialPad.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(item)}
            disabled={item === ''}
            style={[{  width:widthValue(5) ,
               height:heightValue(10),
                
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item === 'del' ? '#fffdfa' : '#fffdfa', // Glossy background colors
                shadowColor: '#000', // Shadow for glossy effect
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                margin:10,
                },radius(60)]
            }>
            {item === 'del' ? (
              <Icon name="backspace-outline" size={dialPadSize / 2} color="black" />
            ) : item === 'checkmark' ? (
                <Icon name="checkmark" size={dialPadSize / 2} color="black" /> 
                // Updated line
            ) : (
              <Text style={{ fontSize: dialPadSize / 2, color: 'black' }}>{item}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ImageBackground source={authback} style={[styles.allCenter,flex(1)]}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 60, color: 'white' }}>
        Login with Passcode
      </Text>
      <View style={[{ marginBottom: 40, height: 30, },styles.row]}>
        {[...Array(pinLength).keys()].map((index) => {
          const isSelected = !!pinCode[index];
          return (
            <View
              key={index}
              style={{
                width: 22,
                height: isSelected ? 22 : 2,
                borderRadius: 22,
                marginRight:20,
                backgroundColor:'gray',
                color:'gray',
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === 'del') {
            setPinCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
          } if (typeof item === 'number') {
            if (pinCode.length < pinLength) {
              setPinCode((prevCode) => [...prevCode, item]);
             // Add the pressed digit
            }
          } else if(item ==='checkmark'){
            console.log('checkmark')
            login()
          }
        }}

      />
      {/* {pinCode.length === pinLength && (
        <Text style={{ marginTop: 20 }}>Pin code entered: {pinCode.join('')}</Text>
      )} */}
    </ImageBackground>
  );
};
