import { View, Text, SafeAreaView, StatusBar, Image, TouchableWithoutFeedback, Alert, TextInput, ScrollView, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import Icon, { Icons } from '../../../components/Icons'
import { styles, flex, padding, heightValue, widthValue, fontSize, borderWidth, radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'
import { profile } from '../../../constants/imageConstant'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonComponent, TextInputCompnent } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { GenderModal } from './Components/GenderModal'
import { CountryCodeModal } from './Components/CountryCodeModal'
import { modalData } from '../../../constants/ModalsData'
import { DarkModeMOdal } from '../Components/DarkModeModal'
import { addUserData } from '../../../redux/userReducer/UserInformationReducer'
import { Logout } from '../Logout/Logout'
import { useEffect } from 'react'


export const Profile = () => {

    const userDetails = useSelector((state)=>state.user.Userinfo.UserInfo)
    console.log(userDetails,'userDetails')
    const  emailId = userDetails.email;
    const passWord = userDetails.password;
    const profilePic = userDetails.profilePic;
    console.log('emailId',emailId,'passWord',passWord)
    const darkMode = useSelector(state=>state.system.darkMode)
    console.log('darkmmsndnd',darkMode)
    console.log(userDetails.profilePic,'imaghnknkhnk')
    const [showProfilePic, setShowProfilePic] = useState(false)


    useEffect(()=>{
        // setTimeout(() => {
            // Assuming userDetails.profilePic contains the profile picture URI
            if(profilePic === 5){
            setShowProfilePic(false);
            } else{
            setShowProfilePic(true);
            }
        // }, 1000);
    })
    const gender = [
        { id: '1', mode: 'Male' },
        { id: '2', mode: 'Female' },
        { id: '3', mode: 'Others' }
    ]

    const currentModal = useSelector((state) => state.user.currentModal.currentModal)
    // console.log('email',userDetails)
    const dispatch = useDispatch();

    // const [selectedImage, setSelectedImage] = useState(userDetails.profilePic)
    const initialGender = gender[0].mode;
    console.log('initialGender', initialGender)
    const [selectedGender, setSelectedGender] = useState(initialGender)
    const [email, setEmail] = useState(userDetails.email)
    const [emailError, setEmailError] = useState('')
    const [error, setError] = useState('')
    const [fullname, setFullname] = useState(userDetails.fullname || '')
    const [username, setUsername] = useState(userDetails.username || '')
    const [number, setNumber] = useState(userDetails.phoneNumber || '')
    console.log('number',number)

    console.log('fullname', fullname)

    const handleFullname = (text) => {
        setFullname(text);
        const name = fullname.trim() === ''
        setError(name ? 'Please Enter your name' : '')
    }

    const handleUsername = (text) => {
        setUsername(text);
        const spaceRegex = /\s/.test(text);
        setError(spaceRegex ? 'Username cannot contain spaces' : '');
    }
    const handleEmailChange = (text) => {
        setEmail(text)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        setEmailError(emailRegex.test(text) ? '' : 'Invalid email format');
    }

    const handlePhone = (text) => {
        setNumber(text)
        const numberval = number.trim() === '';
        // const length =  number.length() < 10
        setError(numberval ? 'Please enter Your Phone Number' : '')
    }
    console.log('selectedGender', selectedGender)
    const InitialCountry = modalData.countryCode[0]
    const [selectedCountry, setSelectedCountry] = useState(InitialCountry)

    const closeModal = () => {
        dispatch(setCurrentModal(0))
    }
    const showModal = () => {
        dispatch(setCurrentModal(11))
    }

    const showCountryModal = () => {
        dispatch(setCurrentModal(12))
    }

    const handleCountrySelected = (item) => {
        setSelectedCountry(item)
        closeModal();
    }
    const navigation = useNavigation();

    const PreviousScreen = () => {
        navigation.goBack();
    }

    const updateUserDetails = ()=>{
        const userdata ={
             ...userDetails,
             email:email,
             fullname:fullname,
             username:username,
             gender:selectedGender,
             phoneNumber:number, 
        }
        dispatch(addUserData(userdata))
        dispatch(setCurrentModal(21))
        // navigation.goBack();
     }
    
    //  console.log('selectedImage',selectedImage)
 
    // const handleImage = () => {
    //     Alert.alert('Select Image', 'Choose an Option to Update Image.', [
    //         { text: 'CANCEL' },
    //         {
    //             text: 'SELECT FROM GALLERY', onPress: () => {

    //                 let options = {
    //                     storageOptions: {
    //                         path: 'image',
    //                     },
    //                 }
    //                 launchImageLibrary(options, response => {
    //                     const userdata ={
    //                         ...userdata,
    //                     profilePic:response.assets[0].uri,
    //                     }
    //                     dispatch(addUserData(userdata))
    //                     setShowProfilePic(true)
    //                 })
    //             }
    //         },
    //         {
    //             text: 'TAKE PHOTO', onPress: () => {

    //                 let options = {
    //                     storageOptions: {
    //                         path: 'image',
    //                     }
    //                 };
    //                 launchCamera(options, response => {
    //                     const userdata ={
    //                         ...userdata,
    //                     profilePic:response.assets[0].uri,
    //                     }
    //                     dispatch(addUserData(userdata))
    //                     setShowProfilePic(true)
    //                 })
    //             }
    //         }

    //     ])
    // }
// Inside the handleImage function where you update the profile picture
const handleImage = () => {
    Alert.alert('Select Image', 'Choose an Option to Update Image.', [
        { text: 'CANCEL' },
        {
            text: 'SELECT FROM GALLERY', onPress: () => {
                let options = {
                    storageOptions: {
                        path: 'image',
                    },
                };
                launchImageLibrary(options, response => {
                    if (response.assets && response.assets.length > 0) {
                        const selectedImageUri = response.assets[0].uri;
                        const userdata = {
                            ...userDetails,
                            profilePic: selectedImageUri,
                        };
                        dispatch(addUserData(userdata));
                        setShowProfilePic(true);
    console.log(userDetails,'userDetails')

                    }
                });
            }
        },
        {
            text: 'TAKE PHOTO', onPress: () => {
                let options = {
                    storageOptions: {
                        path: 'image',
                    },
                };
                launchCamera(options, response => {
                    if (response.assets && response.assets.length > 0) {
                        const selectedImageUri = response.assets[0].uri;
                        const userdata = {
                            ...userDetails,
                            profilePic: selectedImageUri,
                        };
                        dispatch(addUserData(userdata));
                        setShowProfilePic(true);
    console.log(userDetails,'userDetails')
                    }
                });
            }
        }
    ]);
};


    const handleGenderModal = (item) => {
        setSelectedGender(item.mode)
        closeModal();
    }
    return (
        <SafeAreaView style={[flex(1),darkMode?styles.bgdarkmodeBlack: styles.bgWhite]}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={[{ height: heightValue(12) }, padding(0, 0, 30),]}>
                <Header color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'My Profile'} goBack={PreviousScreen} />
            </View>
            <View style={[styles.centerHorizontal, marginPosition(15, 0, 0, 0), padding(0, 0, 30)]}>
                <TouchableWithoutFeedback style={[styles.black, fontSize(50), borderWidth(1), { width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75)), styles.allCenter]} onPress={handleImage} >
        <View style={[styles.positionRelative]}>
        {showProfilePic ? <Image source={{ uri: profilePic }} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} /> :
                        <Image source={profile} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} />}
                <Icon name={'pencil-box'} type={Icons.MaterialCommunityIcons} style={[fontSize(30), styles.Orange, styles.positionAbsolute, { bottom: 5, right: 8 }]} />
                </View>

                </TouchableWithoutFeedback>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[marginPosition(30), { height: heightValue(1.2) }, padding(0, 0, 30),]}>
                <View style={[margin(0, 10)]}>
                    <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Full Name
                    </Text>
                    <View style={[styles.row, darkMode?styles.bgtaskCardDblack:styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon style={[fontSize(25),darkMode?styles.lightWhite: styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20),darkMode?styles.lightWhite:styles.black, { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={fullname}  onChangeText={handleFullname} onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>

                </View>
                <View style={[margin(0, 10)]}>
                    <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Username
                    </Text>
                    <View style={[styles.row, darkMode?styles.bgtaskCardDblack:styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon name={'person-outline'} type={Icons.Ionicons} style={[fontSize(25),darkMode?styles.lightWhite: styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20),darkMode?styles.lightWhite:styles.black,  { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={username} onChangeText={handleUsername}  onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>
                </View>
                <View style={[margin(0, 10)]}>
                    <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Email
                    </Text>
                    <View style={[styles.row, darkMode?styles.bgtaskCardDblack:styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon name={'mail'} type={Icons.Feather} style={[fontSize(25),darkMode?styles.lightWhite: styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20),darkMode?styles.lightWhite:styles.black,  { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={email} onChangeText={handleEmailChange} onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>
                </View>
                <View>
                    <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), margin(0, 15, 0), { fontWeight: '500' }]}>
                        Phone Number
                    </Text>
                    <View style={[{ width: widthValue(1.17) }, styles.row, darkMode?styles.bgtaskCardDblack:styles.bglgWhite, radius(5)]}>
                        <TouchableOpacity style={[margin(0, 10), darkMode?styles.bgtaskCardDblack:styles.bglgWhite,]} onPress={showCountryModal}>
                            <View style={[styles.row, styles.spaceBetweenVertical, padding(0, 0, 10), styles.centerHorizontal]}>
                                <Text style={[styles.black, fontSize(18), padding(0, 5, 5), { fontWeight: '500' }]}>{selectedCountry.emoji}</Text>
                                <Icon name={'chevron-down'} type={Icons.Entypo} style={[fontSize(18),darkMode?styles.lightWhite: styles.black,]} />
                            </View>
                            {currentModal === 12 && <CountryCodeModal selectedCountry={selectedCountry} currentModal={currentModal} showModal={showModal} setSelectedGender={setSelectedGender} closeModal={closeModal} handleCountrySelected={handleCountrySelected} />}
                        </TouchableOpacity>
                        <View style={[styles.row, styles.centerHorizontal, radius(5)]}>
                            <Text style={[fontSize(20), { fontWeight: '500', marginLeft: 0 },darkMode?styles.lightWhite: styles.black]}>{selectedCountry.dial_code}</Text>
                            <TextInput style={[fontSize(20),darkMode?styles.lightWhite:styles.black,  { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} placeholder={'9876543210'} placeholderTextColor={darkMode?'gray':'black'} value={number} onChangeText={(text)=>handlePhone(text)}  maxLength={10} keyboardType='number-pad' />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), marginPosition(15, 0), { fontWeight: '500' }]}>
                        Gender
                    </Text>
                    <TouchableOpacity style={[margin(0, 10), { width: widthValue(1.17) }, darkMode?styles.bgtaskCardDblack:styles.bglgWhite]} onPress={showModal}>
                        <View style={[styles.row, styles.spaceBetweenVertical, padding(0, 5, 10), styles.centerHorizontal]}>
                            <Text style={[darkMode?styles.lightWhite:styles.black, fontSize(18), padding(0, 10, 10), { fontWeight: '500' }]}>{selectedGender}</Text>
                            <Icon name={'chevron-down'} type={Icons.Entypo} style={[fontSize(25), styles.Orange,]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Text style={[styles.tomotoRed, fontSize(15), styles.textCenter]}>{error && emailError}</Text>
            <View style={[styles.flexEnd, { width: widthValue(1) }, padding(0, 20, 0),darkMode?styles.bgdarkmodeBlack: styles.bgWhite, styles.centerHorizontal]}>
                <ButtonComponent title={'Save'} disabled={!(error==='' && emailError === '' && number.length >= 9 && fullname.trim() !== '' && username.trim() !== '')} onPress={updateUserDetails}/>
            </View>
            {currentModal ===21 && <Logout VisibleAt={currentModal ===21} HeaderName={'Your Information'} question={'Your data updated succesfully'} option1={'Close'} option2={'Ok'} OnPress1={closeModal} OnPress2={closeModal}/>}
            {currentModal === 11 && <DarkModeMOdal selectedThing={selectedGender} closeModal={closeModal} visibleAt={currentModal === 11} handleFuntion={handleGenderModal} data={gender} />}
        </SafeAreaView>
    )
}
