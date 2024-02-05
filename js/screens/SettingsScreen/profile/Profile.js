import { View, Text ,SafeAreaView,StatusBar, Image, TouchableWithoutFeedback,Alert, TextInput, ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import Icon, { Icons } from '../../../components/Icons'
import { styles,flex, padding, heightValue, widthValue,fontSize, borderWidth,radius, margin, marginPosition, fontWeight, shadow, paddingPosition } from '../../../styles/Styles'
import { profile } from '../../../constants/imageConstant'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonComponent } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { setCurrentModal } from '../../../redux/userReducer/modalReducer'
import { GenderModal } from './Components/GenderModal'



 export const Profile = () => {

    // const userDetails = useSelector((state)=>state.UserDetails.userList[0].email)
    // const  email = userDetails.map(user=>user.email[0])
    // const emailId = email.map(email=>email)

    const currentModal = useSelector((state)=>state.user.currentModal.currentModal)
    // console.log('email',userDetails)
    const dispatch = useDispatch();

    const [showProfilePic,setShowProfilePic] = useState(false)
    const [selectedImage,setSelectedImage] = useState(null)
    const [selectedGender,setSelectedGender] = useState('')


    const showModal = ()=>{
        dispatch(setCurrentModal(11))
        
    } 


    const DetailComponent = ({name,placeholder,value,EmailIconType,EmailIcon})=>{
        return (
            <View style={[margin(0,10)]}>
                <Text style={[styles.black,fontSize(18),padding(0,10),{fontWeight:'500'}]}>
                    {name}
                </Text>
                <View style={[styles.row,styles.bglgWhite,radius(5),styles.centerHorizontal]}>
    <Icon name={EmailIcon} type={EmailIconType} style={[fontSize(25),styles.black,paddingPosition(0,0,0,10)]}/>
                <TextInput style={[,fontSize(20),{fontWeight:'500',width:widthValue(1.2),marginLeft:10}]} placeholder={placeholder} value={value}/>
                </View>
            </View>
        )
    }
    const navigation = useNavigation();

    const PreviousScreen = ()=>{
        navigation.goBack();
      }
    const handleImage = ()=>{
        Alert.alert('Select Image', 'Choose an Option to Update Image.',[
            {text:'CANCEL'},
            {text:'SELECT FROM GALLERY',onPress:()=>{

                let options = {
                    storageOptions:{
                        path:'image',
                    },
                }
                launchImageLibrary(options, response=>{
                    setSelectedImage(response,assets[0].uri);
                    console.log(response,assets[0].uri);
                    setShowProfilePic(true)
                })
            }},
            {text : 'TAKE PHOTO',onPress: ()=>{

                let options={
                    storageOptions:{
                        path:'image',
                    }
                };
                launchCamera(options,response=>{
                    setSelectedImage(response.assets[0].uri);
                    console.log(response.assets[0].uri);
                    setShowProfilePic(true)
                })
            }}

        ])
    }

  return (
    <SafeAreaView style={[flex(1),styles.bgWhite]}>
            <StatusBar backgroundColor = "white" barStyle = "dark-content"/>
        <View style={[{height:heightValue(10)},padding(0,0,30),]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'My Profile'} goBack={PreviousScreen}/>
    </View>
    <View style={[styles.centerHorizontal,marginPosition(15,0,0,0),styles.positionRelative,padding(0,0,30),]}>
     <TouchableWithoutFeedback style={[styles.black,fontSize(50),borderWidth(1),{width:widthValue(3.2),height:widthValue(3.2)},radius(widthValue(1.75)),styles.allCenter]} onPress={handleImage} >
     
     {showProfilePic ? <Image source={{uri:selectedImage}} style={[{width:widthValue(3.2),height:widthValue(3.2)},radius(widthValue(1.75))]}/> :
     <Image source={profile} style={[{width:widthValue(3.2),height:widthValue(3.2)},radius(widthValue(1.75))]}/> }
    </TouchableWithoutFeedback> 
    <Icon name={'pencil-box'} type={Icons.MaterialCommunityIcons} style={[fontSize(30),styles.Orange,styles.positionAbsolute,{bottom:4,right:144}]}/>
    </View>   

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[marginPosition(30),{height:heightValue(1.2)},padding(0,0,30),]}>
        <DetailComponent name={'Full name'} placeholder={'Julius Ceaser'}/>
        <DetailComponent name={'Username'} placeholder={'juliusCeaser'} EmailIcon={'person-outline'} EmailIconType={Icons.Ionicons}/>
        <DetailComponent name={'Email'} placeholder={'juliusCeaser@gmail.com'} EmailIcon={'mail'} EmailIconType={Icons.Feather}/>
        <DetailComponent name={'Phone Number'} placeholder={'8585858585'}/> 
        
        <View>
        <Text style={[styles.black,fontSize(18),marginPosition(15,0),{fontWeight:'500'}]}>
                    Gender
                </Text>
        <TouchableOpacity style={[margin(0,10),{width:widthValue(1.17)},styles.bglgWhite]} onPress={showModal}>
            <View style={[styles.row,styles.spaceBetweenVertical,padding(0,10,10),styles.centerHorizontal]}>
                <Text style={[styles.black,fontSize(18),padding(0,10,10),{fontWeight:'500'}]}>Male</Text>
    <Icon name={'chevron-down'} type={Icons.Entypo} style={[fontSize(25),styles.Orange,]}/>
    </View>
        </TouchableOpacity>
        </View>
    </ScrollView>
    
    <View style={[styles.flexEnd,{width:widthValue(1)},padding(10),styles.bgWhite,styles.centerHorizontal]}>
        <ButtonComponent title={'Save'}/>
    </View>
    {currentModal === 11 && <GenderModal  currentModal={currentModal} showModal={showModal} setSelectedGender={setSelectedGender}/>}
    </SafeAreaView>
    
  )
}
