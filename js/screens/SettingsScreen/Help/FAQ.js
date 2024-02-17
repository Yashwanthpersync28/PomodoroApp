import { View, Text, ScrollView,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding, widthValue,marginPosition,fontSize,radius,borderWidth,borderColor, margin, paddingPosition } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { TimerButton } from '../../dashboard/Components/TimerButton'
import { useState } from 'react'

export const FAQ = () => {

    const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }

  const [activeButton,setActiveButton] = useState(0)
  const FaqButton = ({onPress,buttonText}) => {
    return (
      <View
      style={[
        styles.centerHorizontal,
      ]}>
        <View style={[marginPosition(10)]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.centerVertical,
          radius(30),
          marginPosition(0,0,20),
          borderWidth(.2),
          padding(0,7,20),
          styles.borderGray,
          activeButton? styles.bgOrange:styles.bgWhite,
        margin(0,0,15)
        ]}>
        <View
          style={[styles.row, styles.centerHorizontal,styles.spaceEvenly]}>
         <Text style={[fontSize(18),activeButton?styles.white:styles.black, {fontWeight:'400'}]}>
          {buttonText}
          </Text> 
        </View>
      </TouchableOpacity>
      </View>
    </View>
    )
  }
  const FaqList = ()=>{
    
  }
  return (
    <View style={[flex(1)]}>
        <View style={[{height:heightValue(15)},padding(0,10,20)]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'FAQ'} goBack={PreviousScreen}/>
      </View>

      
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={[{height:heightValue(12)},styles.row,paddingPosition(0,0,0,5),margin(0,15,0)]}>
  <FaqButton  buttonText={'General'} onPress={()=>{setActiveButton(0)}}/>
  <FaqButton  buttonText={'Account'} onPress={()=>{setActiveButton(2)}}/>
  <FaqButton  buttonText={'Services'}/>
  <FaqButton  buttonText={'Contact and Support'}/>
  <FaqButton  buttonText={'Terms & Services'}/>
      </ScrollView>
    
                        <View style={[padding(0,0,20),styles.row,styles.centerHorizontal,{height:heightValue(15),width: widthValue(1.1),},styles.bgWhite ,margin(0, 15,20),radius(8) ]}>
                          <Icon name={'search'} type={Icons.Feather} style={[fontSize(25), styles.lightGray]} />
                         <TextInput  placeholder='Search' style={[padding(0,0,20),fontSize(18)]}/>
                        </View>
  
      <ScrollView contentContainerStyle={[{minHeight:heightValue(1)},marginPosition(10,20,10,20)]}>
      <View style={[styles.bgWhite,{width:widthValue(1.1),height:40},radius(0,10,10,0,0)]}>
<Text>Hi</Text>
    </View>
      </ScrollView>
    
    </View>
  )
}
