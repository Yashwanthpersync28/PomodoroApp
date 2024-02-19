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


export const Profile = () => {

    const userDetails = useSelector((state)=>state.user.Userinfo.UserInfo)
    const  emailId = userDetails.email;
    const passWord = userDetails.password;
    console.log('emailId',emailId,'passWord',passWord)

    const updateUserDetails = ()=>{
       const userdata ={
            ...userDetails,
            email:email,
            fullname:fullname,
            username:username,
            gender:selectedGender,
            phoneNumber:number, 
            profilePic:selectedImage,
       }
       dispatch(addUserData(userdata))
       dispatch(setCurrentModal(21))
    }
   
    console.log('selectedImage',selectedImage)


    const gender = [
        { id: '1', mode: 'Male' },
        { id: '2', mode: 'Female' },
        { id: '3', mode: 'Others' }
    ]

    const currentModal = useSelector((state) => state.user.currentModal.currentModal)
    // console.log('email',userDetails)
    const dispatch = useDispatch();

    const [showProfilePic, setShowProfilePic] = useState(false)
    const [selectedImage, setSelectedImage] = useState(userDetails.profilePic || profile)
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
    const handleImage = () => {
        Alert.alert('Select Image', 'Choose an Option to Update Image.', [
            { text: 'CANCEL' },
            {
                text: 'SELECT FROM GALLERY', onPress: () => {

                    let options = {
                        storageOptions: {
                            path: 'image',
                        },
                    }
                    launchImageLibrary(options, response => {
                        setSelectedImage(response.assets[0].uri);
                        console.log(response.assets[0].uri);
                        setShowProfilePic(true)
                    })
                }
            },
            {
                text: 'TAKE PHOTO', onPress: () => {

                    let options = {
                        storageOptions: {
                            path: 'image',
                        }
                    };
                    launchCamera(options, response => {
                        setSelectedImage(response.assets[0].uri);
                        console.log(response.assets[0].uri);
                        setShowProfilePic(true)
                    })
                }
            }

        ])
    }

    const handleGenderModal = (item) => {
        setSelectedGender(item.mode)
        closeModal();
    }
    return (
        <SafeAreaView style={[flex(1), styles.bgWhite]}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={[{ height: heightValue(12) }, padding(0, 0, 30),]}>
                <Header color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'My Profile'} goBack={PreviousScreen} />
            </View>
            <View style={[styles.centerHorizontal, marginPosition(15, 0, 0, 0), padding(0, 0, 30)]}>
                <TouchableWithoutFeedback style={[styles.black, fontSize(50), borderWidth(1), { width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75)), styles.allCenter]} onPress={handleImage} >
        <View style={[styles.positionRelative]}>
                    {showProfilePic ? <Image source={{ uri: selectedImage }} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} /> :
                        <Image source={profile} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} />}
                <Icon name={'pencil-box'} type={Icons.MaterialCommunityIcons} style={[fontSize(30), styles.Orange, styles.positionAbsolute, { bottom: 5, right: 8 }]} />
                </View>

                </TouchableWithoutFeedback>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[marginPosition(30), { height: heightValue(1.2) }, padding(0, 0, 30),]}>
                <View style={[margin(0, 10)]}>
                    <Text style={[styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Full Name
                    </Text>
                    <View style={[styles.row, styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon style={[fontSize(25), styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20), { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={fullname} placeholder={'Julius Ceaser'} onChangeText={handleFullname} onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>

                </View>
                <View style={[margin(0, 10)]}>
                    <Text style={[styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Username
                    </Text>
                    <View style={[styles.row, styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon name={'person-outline'} type={Icons.Ionicons} style={[fontSize(25), styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20), { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={username} onChangeText={handleUsername} placeholder='ceaser' onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>
                </View>
                <View style={[margin(0, 10)]}>
                    <Text style={[styles.black, fontSize(18), padding(0, 10), { fontWeight: '500' }]}>
                        Email
                    </Text>
                    <View style={[styles.row, styles.bglgWhite, radius(5), styles.centerHorizontal]}>
                        <Icon name={'mail'} type={Icons.Feather} style={[fontSize(25), styles.black, paddingPosition(0, 0, 0, 10)]} />
                        <TextInput style={[, fontSize(20), { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} value={email} onChangeText={handleEmailChange} placeholder='juliusceaser@gmail.com' onSubmitEditing={() => Keyboard.dismiss()} />
                    </View>
                </View>
                <View>

                    <Text style={[styles.black, fontSize(18), margin(0, 15, 0), { fontWeight: '500' }]}>
                        Phone Number
                    </Text>
                    <View style={[{ width: widthValue(1.17) }, styles.row, styles.bglgWhite, radius(5)]}>
                        <TouchableOpacity style={[margin(0, 10), styles.bglgWhite,]} onPress={showCountryModal}>
                            <View style={[styles.row, styles.spaceBetweenVertical, padding(0, 0, 10), styles.centerHorizontal]}>
                                <Text style={[styles.black, fontSize(18), padding(0, 5, 5), { fontWeight: '500' }]}>{selectedCountry.emoji}</Text>
                                <Icon name={'chevron-down'} type={Icons.Entypo} style={[fontSize(18), styles.black,]} />
                            </View>
                            {currentModal === 12 && <CountryCodeModal selectedCountry={selectedCountry} currentModal={currentModal} showModal={showModal} setSelectedGender={setSelectedGender} closeModal={closeModal} handleCountrySelected={handleCountrySelected} />}
                        </TouchableOpacity>
                        <View style={[styles.row, styles.centerHorizontal, radius(5)]}>
                            <Text style={[fontSize(20), { fontWeight: '500', marginLeft: 0 }, styles.black]}>{selectedCountry.dial_code}</Text>
                            <TextInput style={[fontSize(20), { fontWeight: '500', width: widthValue(1.2), marginLeft: 10 }]} placeholder={'9876543210'} value={number} onChangeText={(text)=>handlePhone(text)} maxLength={10} keyboardType='number-pad' />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[styles.black, fontSize(18), marginPosition(15, 0), { fontWeight: '500' }]}>
                        Gender
                    </Text>
                    <TouchableOpacity style={[margin(0, 10), { width: widthValue(1.17) }, styles.bglgWhite]} onPress={showModal}>
                        <View style={[styles.row, styles.spaceBetweenVertical, padding(0, 5, 10), styles.centerHorizontal]}>
                            <Text style={[styles.black, fontSize(18), padding(0, 10, 10), { fontWeight: '500' }]}>{selectedGender}</Text>
                            <Icon name={'chevron-down'} type={Icons.Entypo} style={[fontSize(25), styles.Orange,]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Text style={[styles.tomotoRed, fontSize(15), styles.textCenter]}>{error && emailError}</Text>
            <View style={[styles.flexEnd, { width: widthValue(1) }, padding(0, 20, 0), styles.bgWhite, styles.centerHorizontal]}>
                <ButtonComponent title={'Save'} disabled={!(error==='' && emailError === '' && number.length >= 9 && fullname.trim() !== '' && username.trim() !== '')} onPress={updateUserDetails}/>
            </View>
            {currentModal ===21 && <Logout VisibleAt={currentModal ===21} HeaderName={'Your Information'} question={'Your data updated succesfully'} option1={'Close'} option2={'Ok'} OnPress1={closeModal} OnPress2={closeModal}/>}
            {currentModal === 11 && <DarkModeMOdal selectedThing={selectedGender} closeModal={closeModal} visibleAt={currentModal === 11} handleFuntion={handleGenderModal} data={gender} />}
        </SafeAreaView>

    )
}
