import React, { useState } from 'react';
import { View, Text , TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { flex, fontSize, heightValue, marginPosition, padding, styles, widthValue } from '../../../styles/Styles';
import { BackButtonComponent } from '../../../components/touchables/BackButton';
import { HeadingComponent } from '../../../components/view/HeadingComponent';
import { TextInputCompnent } from '../../../components/inputs/TextInputComponent';
import { ButtonComponent } from '../../../components/touchables/Button';
import LoaderModalComponent from '../../../components/modals/LoaderModalComponent';

export const SignUp = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const handletoLogin=()=>{
     navigation.navigate('login')
  }

  return (
    <SafeAreaView style={[flex(1)]}>
      <View style={[padding(20), styles.bgWhite, flex(1)]}>
        <View style={[styles.centerVertical, flex(0.3)]}>
          <BackButtonComponent onPress={()=>navigation.navigate('onboarding')}/>
        </View>
        <View style={[flex(1)]}>
          <HeadingComponent name={'Join Focusify Today 👤'} details={'Unlock Your Productivity Potential!'} />
        </View>
        <View style={[flex(2)]}>
          <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Email</Text>
          <TextInputCompnent
            placeholder={'Email'}
            value={Email}
            onChangeText={(val) => setEmail(val)}
            keyboardType="email-address"
            showMaterialIcons={true}
            name={'email'}

          />
          <Text style={[padding(0, 10, 0, 10, 0), styles.black]}>Password</Text>
          <TextInputCompnent
            placeholder={'Password'}
            value={Password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={secureTextEntry}
            showText={() => setsecureTextEntry(!secureTextEntry)}
            showMaterialIcons={false}
            ShowPasswordIcon={true}
            name={'lock'}

          />
        </View>
        <View style={[styles.row, styles.allCenter, padding(20), flex(0.5)]}>
          <Text style={[styles.black]}>Already have an account ?</Text>
          <TouchableOpacity onPress={handletoLogin}>
          <Text style={[styles.Orange, marginPosition(0, 0, 0, 5)]}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.allCenter, flex(3), { justifyContent: 'flex-end', alignItems: 'center' }]}>
          <ButtonComponent title={'Signup'} onPress={openModal} />
          {modalVisible ? <LoaderModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} name={'Signup...'} handleLogin={handletoLogin}/> : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
