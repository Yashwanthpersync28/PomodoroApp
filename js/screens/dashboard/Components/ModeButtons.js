import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles, widthValue, fontSize, marginPosition, borderWidth } from '../../../styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon,{Icons} from '../../../components/Icons';

const Button = ({ icon, text, onPress,}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.centerHorizontal,]}>
      {icon === 'alert-circle' && <Feather name={icon} style={[fontSize(30)]} />}
      {icon === 'hourglass' && <FontAwesome6 name={icon} style={[fontSize(30)]} />}
      {icon === 'itunes-note' && <FontAwesome5 name={icon} style={[fontSize(30)]} />}
      <Text style={[fontSize(18), marginPosition(10)]}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export const ModeButtons = ({setCurrentModal  }) => (
  <View style={[{ width: widthValue(1) }, styles.row, styles.bgWhite, styles.spaceEvenly, styles.centerHorizontal, marginPosition(0, 0, 30, 0)]}>
    <Button icon="alert-circle" text="Strict Mode" onPress={()=>setCurrentModal(2)} />
    <Button icon="hourglass" text="Timer Mode" onPress={()=>setCurrentModal(3)} />
    <Button icon="itunes-note" text="White Noise" onPress={()=>setCurrentModal(4)} />
  </View>
);
