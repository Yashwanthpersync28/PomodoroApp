import { View, Text ,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding, widthValue ,fontSize, margin, marginPosition,radius} from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { useSelector } from 'react-redux'
export const ContactSupport = () => {
  const darkMode = useSelector(state=>state.system.darkMode)


    const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }

  const ContactCard = ({iconName,IconType,text,onPress})=>{
    return(

    <TouchableOpacity style={[darkMode?styles.bgtaskCardDblack:styles.bgWhite,{width:widthValue(1.1)},padding(0,18,15),styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,margin(0,12,0),radius(5)]} onPress={onPress}>
      <View style={[styles.row,darkMode?styles.bgtaskCardDblack:styles.bgWhite,styles.centerHorizontal]}>
          <Icon name={iconName} type={IconType} style={[styles.Orange, fontSize(26),marginPosition(0,20,0,5)]} />
          <Text style={[darkMode?styles.lightWhite:styles.black,{fontWeight:'600'},fontSize(18)]}>{text}</Text>
          </View>
          {/* <Icon name={'chevron-right'} type={Icons.FontAwesome5} style={[styles.white, fontSize(30)]} /> */}
        <Icon name={'chevron-right'} type={Icons.Feather} style={[fontSize(23),darkMode?styles.lightWhite: styles.black]} />
    </TouchableOpacity>
    )
  }

  return (
    <View style={[flex(1),padding(0,10,20),darkMode?styles.bgdarkmodeBlack:'']}>
        <View style={[{height:heightValue(15)},]}>
      <Header  color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Contact Support'} goBack={PreviousScreen}/>
      </View>
      <View style={[margin(0,15,0)]}>
      <ContactCard  iconName={'customerservice'} IconType={Icons.AntDesign} text={'Customer Support'} onPress={()=>Linking.openURL('https://perisync.com/')}/>
      <ContactCard  iconName={'globe'} IconType={Icons.SimpleLineIcons} text={'Website'} onPress={()=>Linking.openURL('https://perisync.com/')}/>
      <ContactCard  iconName={'whatsapp'} IconType={Icons.FontAwesome} text={'WhatsApp'} onPress={()=>Linking.openURL('https://perisync.com/')}/>
      <ContactCard  iconName={'facebook'} IconType={Icons.MaterialCommunityIcons} text={'Facebook'} onPress={()=>Linking.openURL('https://www.facebook.com/perisync/')}/>
      <ContactCard  iconName={'twitter'} IconType={Icons.Entypo} text={'Twitter'} onPress={()=>Linking.openURL('https://twitter.com/')}/>
      <ContactCard  iconName={'instagram'} IconType={Icons.Entypo} text={'Instagram'} onPress={()=>Linking.openURL('https://www.instagram.com/perisynctech/')}/>
      </View>
    </View>
  )
}

