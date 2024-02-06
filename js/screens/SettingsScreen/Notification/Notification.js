import { View, Text } from 'react-native'
import React from 'react'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'

import { useNavigation } from '@react-navigation/native'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'

export const Notification = () => {
    const navigation = useNavigation();

    const PreviousScreen = ()=>{
      navigation.goBack();
    }
  return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Notification'} goBack={PreviousScreen}/></View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(1.4)}]}>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}    PreferanceName={'Pomodoro Alerts'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}     PreferanceName={'Security Alerts'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Reminders'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Updates'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Productivity Insights'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Notifications'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Weekly Summary'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Goal Progress'}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'FeedBacks and Updates'}/>
        </View>  
    </View>
  )
}
