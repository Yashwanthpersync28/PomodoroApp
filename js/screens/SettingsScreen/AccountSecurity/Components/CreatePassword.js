import { View, Text, TextInput ,TouchableOpacity,Keyboard} from 'react-native'
import React from 'react'
import { flex, padding, styles, marginPosition, heightValue, widthValue, margin,radius, fontSize, fontWeight, lineHeight,borderWidth } from '../../../../styles/Styles';
import { useRef } from 'react';
import { useState } from 'react';
import { Icons } from '../../../../components/Icons';
import { Header } from '../../../Manage/components/Header';
import { useNavigation } from '@react-navigation/native';
import { InputNumber } from './InputNumber';
import { ButtonComponent } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthPassword } from '../../../../redux/authReducer/passwordReducer';
import LoaderModalComponent from '../../../../components/modals/LoaderModalComponent';


export const CreatePassword = () => {
  const navigation = useNavigation();
  const password = useSelector(state=>state.auth.authPass.AuthPassword)
  const dispatch = useDispatch();


  const PreviousScreen= ()=>{
    navigation.goBack();
  }

  const AuthPassword = ()=>{
    setModalVisible(true)
    dispatch(setAuthPassword(passcode))
    PreviousScreen()
  }
const [modalVisible,setModalVisible] = useState(false)
  const focusOne=useRef();
  const focusTwo=useRef();
  const focusThree=useRef();
  const focusFour=useRef();
  const focusFive=useRef();
  const focusSix=useRef();
//color chnage
 const [oneBg,setoneBg]=useState(true);
 const [twoBg,setTwoBg]=useState(false);
 const [threeBg,setThreeBg]=useState(false);
 const [fourBg,setfourBg]=useState(false);
 const [fiveBg,setfiveBg]=useState(false);
 const [sixBg,setsixBg]=useState(false);

/////value
  const [inputone,setinputone]=useState('');
  const [inputTwo,setinputTwo]=useState('');
  const [inputThree,setinputThree]=useState('');
  const [inputfour,setinputfour]=useState('');
  const [inputfive,setinputfive]=useState('');
  const [inputsix,setinputsix]=useState('');

  const passcode = inputone+inputTwo+inputThree+inputfour+inputfive+inputsix

  return (
    <View style={[padding(0,0,10),flex(1)]}>
       <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Set Password'} onPress={PreviousScreen}/></View> 
          <View style={[styles.coloum]}>
        <View style={[styles.row,styles.spaceBetween,{width:widthValue(1.1),},margin(0,20,10),styles.centerHorizontal]}>
          <InputNumber onChangeText={(val) => {
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
               setinputone(val)}} maxLength={1} keyboardType={'numeric'} value={inputone} refval={focusOne} focusBg={oneBg} height={heightValue(13)} width={widthValue(7)}/>
          <InputNumber 
          onChangeText={(val) => {
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
               setinputTwo(val)}} maxLength={1} keyboardType={'numeric'} value={inputTwo} refval={focusTwo} focusBg={twoBg} height={heightValue(13)} width={widthValue(7)}/>
          <InputNumber onChangeText={(val) => {
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
               setinputThree(val)}} maxLength={1} keyboardType={'numeric'} value={inputThree} refval={focusThree} focusBg={threeBg} height={heightValue(13)} width={widthValue(7)}/>
          <InputNumber onChangeText={(val) => {
            if (val.length >= 1) {
              focusFive.current.focus();
              setfourBg(false)
              setfiveBg(true)
               }
               else if(val.length < 1){
                focusThree.current.focus()
              setfourBg(true)
              setfiveBg(false)
               }
               setinputfour(val)}} maxLength={1} keyboardType={'numeric'} value={inputfour} refval={focusFour} focusBg={fourBg}height={heightValue(13)} width={widthValue(7)}/>
              
          <InputNumber onChangeText={(val) => {
            if (val.length >= 1) {
              focusSix.current.focus();
              // setfourBg(false)
              setfiveBg(false)
              setsixBg(true)

               }
               else if(val.length < 1){
                focusFour.current.focus()
                setinputfive(true)
              setsixBg(false)
              
               }
               setinputfive(val)}} maxLength={1} keyboardType={'numeric'} value={inputfive} refval={focusFive} focusBg={fiveBg} height={heightValue(13)} width={widthValue(7)}/>
              
          <InputNumber onChangeText={(val) => {
            if (val.length >= 1) {
              focusSix.current.focus();
              setsixBg(false)
               }
               else if(val.length < 1){
                focusFive.current.focus()
                setsixBg(true)
               }
               setinputsix(val)}} maxLength={1} keyboardType={'numeric'} value={inputsix} refval={focusSix} focusBg={sixBg} height={heightValue(13)} width={widthValue(7)}/>  
               </View> 
               <View style={[styles.centerHorizontal]}>
         <ButtonComponent title={'Submit Password'} disabled={(inputone && inputTwo &&inputThree && inputfour &&inputfive && inputsix)===''} onPress={AuthPassword}/>
         </View>
         {modalVisible ? <LoaderModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} name={'Updating your Pasword'} handleLogin={()=>dispatch(setCurrentModal(27))}/> : null}
        </View>
    </View>
  )
}

