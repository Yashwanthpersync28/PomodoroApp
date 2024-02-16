import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    flex,
    styles,
    widthValue,
    radius,
    heightValue,
    fontSize,
    paddingPosition,
    marginPosition,
    zIndex,
    shadow,
    screenWidth,
    screenHeight,
    lineHeight,
    borderWidth,
    padding,
    margin,
    borderColor,
} from '../../../styles/Styles';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../../../components/Icons';
import {TaskCard} from '../../../components/touchables/TaskCard';

import { useNavigation } from '@react-navigation/native';



export const CancelModal = ({ closeModal,currentModal,closeTask,setdata,setTaskColor,addTask}) => {



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Modal
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                isVisible={currentModal===19}
                hasBackdrop={true}
                backdropColor="black"
                backdropOpacity={0.5}
                onBackdropPress={closeModal}
                style={[{ margin: 0, width: widthValue(1), height: heightValue(2)},styles.allCenter]}>
                <View
                    style={[
                        styles.bgWhite,
                        {
                            height:heightValue(4),
                            width: widthValue(1.1),
                        },
                        styles.centerHorizontal,
                        padding(30),
                        radius(22),
                        styles.spaceBetweenVertical
                    ]}> 
                    <View style={[styles.centerHorizontal]}>
                    <Text style={[styles.Orange,fontSize(25),{fontWeight:'600'}]}>Pomodoro Clock is Running</Text>             
                    <Text style={[styles.black,fontSize(22),{fontWeight:'400'},margin(0,10)]}>Want to close the Task ?</Text> 
                    </View>
                        <View style={[styles.row,styles.spaceBetweenVertical,{width:widthValue(1.4)},]}>
                            <TouchableOpacity onPress={()=>{closeTask(),closeModal()}} style={[styles.bgSmokeRed,padding(0,5,30),radius(30)]}>
                                <Text style={[{fontWeight:'500'},styles.white,fontSize(22)]}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModal} style={[styles.bgLeafGreen,padding(0,5,15),radius(30)]}>
                                <Text style={[{color:'white',fontWeight:'600'},fontSize(22)]}>Continue</Text>
                            </TouchableOpacity>
                            </View>     
                </View>
            </Modal> 
            </KeyboardAvoidingView>
    );
};

// import React, { useState } from "react";
// import { Button, Text, View } from "react-native";
// import Modal from "react-native-modal";

// export const CancelModal = ()=> {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Button title="Show modal" onPress={toggleModal} />

//       <Modal isVisible={isModalVisible}>
//         <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
//           <Text style={{color:'black'}}>Hello!</Text>

//           <Button title="Hide modal" onPress={toggleModal} />
//         </View>
//       </Modal>
//     </View>
//   );
// }
