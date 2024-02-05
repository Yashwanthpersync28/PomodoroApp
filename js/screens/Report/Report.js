
import React, { useState } from 'react'
import { flex ,heightValue,marginPosition,paddingPosition,radius,styles} from '../../styles/Styles'
import {View,Text,StatusBar,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../Manage/components/Header'
import { Icons } from '../../components/Icons'
import { ToggleButtons } from '../../components/view/ToggleButtons'
import { MiniCards } from '../Manage/components/TasklistBasedonDays/components/MiniCards'
import { Colors } from '../../styles/Colors'

export const Report = ({navigation}) => {

  const [showpomodoro,setShowPomodoro]=useState(true)
  return (
    <SafeAreaView style={[flex(1), paddingPosition(0, 10, 0, 10), styles.bglgWhite]}>
    <StatusBar backgroundColor={Colors.lgWhite} barStyle="dark-content" />
    {/* header */}
    <View style={[flex(0.1)]}>
      <Header
        headername={'Report'}
        IconfamilyRight={Icons.Entypo}
        IconNameRight={'dots-three-vertical'}
        onPress={() => console.log('dfg')}
        bgcolor={styles.white}
        color={styles.black}
        goBack={() => navigation.goBack()}
        showLeftIocn={false}
        IconNameLeft={'arrowleft'}
        IconfamilyLeft={Icons.AntDesign}
      />
    </View>
    <View style={[flex(0.2)]}>
        <ToggleButtons title1={'Pomodoro'} title2={'Tasks'} onPressProject={() => setShowPomodoro(true)} showProjects={showpomodoro} onPressTags={() => setShowPomodoro(false)} />
      </View>
      <View style={[{height:heightValue(4.2)}]}>
          <View style={[styles.rowWrap,styles.spaceEvenly,styles.centerHorizontal]}>
            <MiniCards number={'3'} name={showpomodoro?'Focus Time Today':'Task Completed today'}/>
            <MiniCards number={'02:05'} name={showpomodoro?'Focus Time This Week':'Task Completed this week'}/>
            <MiniCards number={'3r4'} name={showpomodoro?'Focus Time This Two Week':'Task completed this two weeks'}/>
            <MiniCards number={'124'} name={showpomodoro?'Focus Time This Month':'Task completed this month'}/>
          </View>
     </View>
     <View style={[flex(1)]}>
     <ScrollView>
         <View style={[styles.bgWhite,{height:heightValue(2.4)},radius(5),marginPosition(10)]}></View>
         <View style={[styles.bgWhite,{height:heightValue(2.4)},radius(5),marginPosition(10)]}></View>
         <View style={[styles.bgWhite,{height:heightValue(2.4)},radius(5),marginPosition(10)]}></View>

         </ScrollView>
     </View>
    
    </SafeAreaView>
  )
}
