import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles, widthValue, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon,{Icons} from '../../../components/Icons';
import { useDispatch } from 'react-redux';
import { setCurrentModal } from '../../../redux/userReducer/modalReducer';


const Button = ({ icon, text, onPress,iconType}) => (

  <TouchableOpacity onPress={onPress}>
    <View style={[styles.centerHorizontal]}>
    <Icon name={icon} type={iconType}  style={[fontSize(30),styles.iconGray]}  />
    <Text style={[fontSize(15.5), marginPosition(10),styles.iconGray]}>{text}</Text> 
    </View>
  </TouchableOpacity>
);

export const ModeButtons = () => {

  const dispatch = useDispatch();
  return(
  <View style={[{ width: widthValue(1) }, styles.row, styles.bgWhite, styles.spaceEvenly, styles.centerHorizontal, marginPosition(0, 0, 30, 0)]}>
    <Button icon="alert-circle" text="Strict Mode" iconType={Icons.Feather} onPress={()=>dispatch(setCurrentModal(2))} />
    <Button icon="hourglass-outline" text="Timer Mode" iconType={Icons.Ionicons} onPress={()=>dispatch(setCurrentModal(3))} />
    <Button icon="itunes-note" text="White Noise" iconType={Icons.FontAwesome5} onPress={()=>dispatch(setCurrentModal(4))} />
  </View>
  )
};
