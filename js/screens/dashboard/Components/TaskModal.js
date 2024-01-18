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
} from 'react-native';
import React, { useState } from 'react';
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
} from '../../../styles/Styles';
import Modal from 'react-native-modal';
import Icon, { Icons } from '../../../components/Icons';
import {TaskCard} from '../../../components/touchables/TaskCard';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export const TaskModal = ({ closeModal,currentModal,setSelectedTask,setSession }) => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding'+ 47 : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -230}>
        <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={[padding(0), styles.bgWhite, flex(1)]}
      >
            <Modal
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                isVisible={currentModal===1}
                hasBackdrop={true}
                backdropColor="black"
                backdropOpacity={0.5}
                onBackdropPress={closeModal}
                style={[{ margin: 0, width: widthValue(1), height: heightValue(2),}]}>
                <View
                    style={[
                        styles.bgWhite,
                        {
                            position: 'absolute',
                            bottom: 0,
                            width: widthValue(1),
                        },
                        padding(20),
                        radius(0, 20, 0, 0, 20),
                        styles.spaceBetweenVertical,
                    ]}>
                    <View style={[styles.row, styles.allCenter, styles.selfEnd]}>
                        <View>
                            <Text
                                style={[
                                    styles.black,
                                    styles.textCenter,
                                    { fontWeight: '500', marginRight: 115 },
                                    fontSize(24),
                                    paddingPosition(0, 0, 20, 0)

                                ]}>
                                Select Task
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon name={"plus"} type={Icons.Feather} style={[styles.tomotoRed]} />
                        </TouchableOpacity>
                    </View>

                    <View style={[borderWidth(0, 1, 0, 1, 0), styles.borderLightWhite,]}>

                        <View style={[styles.row, styles.centerHorizontal, padding(0, 2, 15), radius(8), { backgroundColor: '#fafafa' }, marginPosition(20)]}>
                            <Icon name={"search"} type={Icons.EvilIcons} style={[styles.lightGray, fontSize(35), marginPosition(0, 10)]} />
                            <TextInput placeholder='Search task' placeholderTextColor={'#cecece'} style={[fontSize(20)]} />
                        </View>
                        <View style={[styles.row, styles.centerHorizontal, margin(0, 20)]}>
                            <Text style={[marginPosition(0, 10), styles.gray, { fontWeight: '500' }]}>Today Tasks</Text>
                            <View style={[borderWidth(0, 1), styles.borderLightWhite, { height: .5, width: widthValue(1.45) }]}></View>
                        </View>
                        <View>
                        <TaskCard closeModal={closeModal} setSelectedTask={setSelectedTask} setSession={setSession}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};
