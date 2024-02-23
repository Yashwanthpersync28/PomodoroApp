import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding, margin, fontSize, widthValue, marginPosition, lineHeight } from '../../../styles/Styles'
import { Icons } from '../../../components/Icons'
import ScrollBar from 'react-native-colored-scrollbar';
import { useSelector } from 'react-redux'


export const PrivacyPolicy = () => {
  const darkMode = useSelector(state=>state.system.darkMode)


    const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }


const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
console.log(formattedDate); // Output: February 19, 2024

  return (
    <View style={[flex(1),darkMode?styles.bgdarkmodeBlack:styles.bgWhite,padding(0,10,20)]}>
        <View style={[{height:heightValue(15)}]}>
      <Header  color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Privacy  Policy'} goBack={PreviousScreen}/>
      </View>
      <Text style={[margin(0,20,0),darkMode?styles.lightishGray:styles.gray,fontSize(18)]}>Last Updated on: {formattedDate} </Text>
      <ScrollBar
          indicatorBackground={darkMode?'#262830':"#f7f5f5"}
          indicatorColor='#ff6347'
          persistent={true}
          style={{ flex:1, backgroundColor:'transparent'}}>
            <View style={[{width:widthValue(1.2)}]}>
              <Text style={[darkMode?styles.lightWhite:styles.black,fontSize(18),{fontWeight:'700'},marginPosition(0,0,10,10)]}>1. Infromation We Collect: </Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(20)]}>We may collect the following information when you use focusify </Text>
              <View style={[marginPosition(10,10,0,20)]}>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
                * Personal Information: to provide our service. We may collect your name,email address and other information yopu provided during registrationj or use of the app</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              </View>
            </View>
            <View style={[{width:widthValue(1.2)}]}>
              <Text style={[darkMode?styles.lightWhite:styles.black,fontSize(18),{fontWeight:'700'},marginPosition(0,0,10,10)]}>2. How we use your Information. </Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(20)]}>We may collect the following information when you use focusify </Text>
              <View style={[marginPosition(10,10,0,20)]}>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
                * Personal Information: to provide our service. We may collect your name,email address and other information yopu provided during registrationj or use of the app</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              </View>
            </View>
            <View style={[{width:widthValue(1.2)}]}>
              <Text style={[darkMode?styles.lightWhite:styles.black,fontSize(18),{fontWeight:'700'},marginPosition(0,0,10,10)]}>3. How we use your Information. </Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(20)]}>We may collect the following information when you use focusify </Text>
              <View style={[marginPosition(10,10,0,20)]}>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
                * Personal Information: to provide our service. We may collect your name,email address and other information yopu provided during registrationj or use of the app</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              </View>
            </View>
            <View style={[{width:widthValue(1.2)}]}>
              <Text style={[darkMode?styles.lightWhite:styles.black,fontSize(18),{fontWeight:'700'},marginPosition(0,0,10,10)]}>4. How we use your Information. </Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(20)]}>We may collect the following information when you use focusify </Text>
              <View style={[marginPosition(10,10,0,20)]}>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
                * Personal Information: to provide our service. We may collect your name,email address and other information yopu provided during registrationj or use of the app</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              <Text style={[darkMode?styles.lightishGray:styles.gray,fontSize(18),{fontWeight:'400'},marginPosition(0,0,10,10),lineHeight(25)]}>
              *  Usage Data:  We collect on how you interact with Focusify,including the features you use ,the time you spent on the app and your  preferences</Text>
              </View>
            </View>
          </ScrollBar>
    </View>
  )
}


