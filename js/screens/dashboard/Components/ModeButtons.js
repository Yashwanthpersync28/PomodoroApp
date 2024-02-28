import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles, widthValue, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon,{Icons} from '../../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentModal } from '../../../redux/userReducer/modalReducer';


const Button = ({ icon, text, onPress,iconType,darkMode}) => (


  <TouchableOpacity onPress={onPress}>
    <View style={[styles.centerHorizontal]}>
    <Icon name={icon} type={iconType}  style={[fontSize(30),darkMode?styles.lightishGray:styles.iconGray]}  />
    <Text style={[fontSize(15.5), marginPosition(10),styles.iconGray]}>{text}</Text> 
    </View>
  </TouchableOpacity>
);

export const ModeButtons = ({displayTimerMode}) => {
  const darkMode = useSelector(state=>state.system.darkMode)

  const dispatch = useDispatch();
  return(
  <View style={[{ width: widthValue(1) }, styles.row,darkMode?styles.bgdarkmodeBlack: styles.bgWhite, styles.spaceEvenly, styles.centerHorizontal, marginPosition(0, 0, 30, 0)]}>
    <Button icon="alert-circle" text="Strict Mode" iconType={Icons.Feather} onPress={()=>dispatch(setCurrentModal(2))} darkMode={darkMode}/>
    <Button icon="hourglass-outline" text="Timer Mode" iconType={Icons.Ionicons} onPress={displayTimerMode} darkMode={darkMode}/>
    <Button icon="music-note" text="White Noise" iconType={Icons.Fontisto} onPress={()=>dispatch(setCurrentModal(4))} darkMode={darkMode}/>
  </View>
  )
};
