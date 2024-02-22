import { View, Text, ScrollView,TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import { Header } from '../../Manage/components/Header'
import { useNavigation } from '@react-navigation/native'
import { styles,flex, heightValue, padding, widthValue,marginPosition,fontSize,radius,borderWidth,borderColor, margin, paddingPosition, lineHeight } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'
import { useState } from 'react'
import  { FaqCategoryButton } from './Components/FaqCategoryButton'
import { modalData } from '../../../constants/ModalsData'
import { useSelector } from 'react-redux'

import { searchFilter } from '../../../helpers/searchHelper'

export const FAQ = () => {

  const darkMode = useSelector(state=>state.system.darkMode)
  // const darkmode = useSelector(state=>state.system.darkMode)
  // console.log('darkmode',darkmode)
  const [currentBtn,setCurrentBtn] = useState(0)
  const [showAnswer,setShowAnswer] = useState(false)
  const [currentList,setCuurrentList] = useState(0)

  //SEARCH FUNCTIOPNLITY STARTS

  //states for search functionality
  const gendata = modalData.faqData.filter(detail=>detail.category === 'General')[0]?.questions;
  const Accdata = modalData.faqData.filter(detail=>detail.category === 'Account')[0]?.questions;
  const Servicedata = modalData.faqData.filter(detail=>detail.category === 'Services')[0]?.questions;
  const ContactData = modalData.faqData.filter(detail=>detail.category === 'Contact and Support')[0]?.questions;
  const [searchText,setSearchText] = useState('')
  const [filteredDataGen,setFilteredDataGen] = useState(gendata)
  const [filteredDataAcc,setFilteredDataAcc] = useState(Accdata)
  const [filteredDataSer,setFilteredDataSer] = useState(Servicedata)
  const [filteredDataCS,setFilteredDataCS] = useState(ContactData)
// console.log(filteredData)

const handleSearch = (text) => {
  setSearchText(text);

  if (text === '') {
    setFilteredDataGen(gendata);
    setFilteredDataAcc(Accdata);
    setFilteredDataSer(Servicedata);
    setFilteredDataCS(ContactData);
  } else {
    const filteredArrayGen = searchFilter(gendata, text, 'title');
    setFilteredDataGen(filteredArrayGen);

    const filteredArrayAcc = searchFilter(Accdata, text, 'title');
    setFilteredDataAcc(filteredArrayAcc);

    const filteredArraySer = searchFilter(Servicedata, text,'title');
    setFilteredDataSer(filteredArraySer);

    const filteredArrayCS = searchFilter(Servicedata,text, 'title');
    setFilteredDataCS(filteredArrayCS);
  }
}

   //SEARCH FUNCTIOPNLITY ENDS
  const navigation = useNavigation();
  const PreviousScreen = ()=>{
    navigation.goBack();
  }
  const handleToggle = (id)=>{
    setShowAnswer(prevFaq=>prevFaq === id? null :id)
  }

 

// start of render Item component for flatlist
  const renderItem = ({item})=>{
    return(
    <View>
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        darkMode?styles.bgtaskCardDblack: styles.bgWhite,
        paddingPosition(15,20, 0, 20),
        { width: widthValue(1.1) },
        marginPosition(15, 0, 0, 0),
        radius(0, 8, 0, 0, 8),
      ]}
      onPress={()=>handleToggle(item.id)}>
      <View style={[styles.row, styles.spaceBetweenVertical, styles.centerHorizontal, borderWidth(0,0,0,1,0),
         paddingPosition(10,0,20,0),
        darkMode?styles.borderDarkmode:styles.borderLightWhite,]}>
        <Text style={[darkMode?styles.lightWhite: styles.black, fontSize(18), {fontWeight:'500', width: widthValue(1.3) }]}>
          {item.title}
        </Text>
        <Icon name={'chevron-down'} type={Icons.Feather} style={[fontSize(18),darkMode?styles.lightWhite: styles.black]} />
      </View>
    </TouchableOpacity>
    {showAnswer  === item.id &&
      <View
        style={[
           darkMode?styles.bgtaskCardDblack:styles.bgWhite,
          padding(0, 20, 20),
          { width: widthValue(1.1) },
          marginPosition(0, 0, 10, 0),
          radius(0, 0, 8, 8, 0),
        ]}>
        <Text style={[ darkMode?styles.lightWhite:styles.gray,fontSize(17),lineHeight(22),]}>{item.detail}</Text>
      </View>
  }
  </View>
    )
  }
  // end render Item component for flatlist
  return (
    <View style={[flex(1),darkMode?styles.bgdarkmodeBlack:'']}>
        <View style={[{height:heightValue(15)},padding(0,10,20)]}>
      <Header  color={darkMode?styles.lightWhite:styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'FAQ'} goBack={PreviousScreen}/>
      </View>

      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={[{height:heightValue(12)},styles.row,paddingPosition(0,0,0,5),margin(0,15,0)]}>
  <FaqCategoryButton  buttonText={'General'} onPress={()=>{setCurrentBtn(0),setCuurrentList(0)}} isActive={currentBtn === 0}/>
  <FaqCategoryButton  buttonText={'Account'} onPress={()=>{setCurrentBtn(1),setCuurrentList(1)}} isActive={currentBtn === 1}/>
  <FaqCategoryButton  buttonText={'Services'} onPress={()=>{setCurrentBtn(2),setCuurrentList(2)}} isActive={currentBtn === 2}/>
  <FaqCategoryButton  buttonText={'Contact and Support'} onPress={()=>{setCurrentBtn(3),setCuurrentList(3)}} isActive={currentBtn === 3}/>
      </ScrollView>
                        <View style={[padding(0,0,20),styles.row,styles.centerHorizontal,{height:heightValue(15),width: widthValue(1.1),},darkMode?styles.bgtaskCardDblack:styles.bgWhite ,margin(0, 15,20),radius(8) ]}>
                          <Icon name={'search'} type={Icons.Feather} style={[fontSize(25),styles.gray]} />  
                         <TextInput  placeholder='Search' style={[padding(0,0,20),fontSize(18),darkMode?styles.lightWhite:styles.black]}  placeholderTextColor={'gray'} onChangeText={(text)=>handleSearch(text)}/>
                        </View>
      <ScrollView contentContainerStyle={[{minHeight:heightValue(1.3)},marginPosition(10,20,10,20)]}>
    <View>
      {currentList === 0 &&
    <FlatList 
  renderItem={renderItem} 
  data={filteredDataGen}
  keyExtractor={item => item.id}
/>
}
      {currentList === 1 &&
    <FlatList 
  renderItem={renderItem} 
  data={filteredDataAcc}
  keyExtractor={item => item.id}
/>
}
      {currentList === 2 &&
    <FlatList 
  renderItem={renderItem} 
  data={filteredDataSer}
  keyExtractor={item => item.id}
/>
}
{currentList === 3 &&
    <FlatList 
  renderItem={renderItem} 
  data={filteredDataCS}
  keyExtractor={item => item.id}
/>
}
    </View>
      </ScrollView>
    
    </View>
  )
  }

