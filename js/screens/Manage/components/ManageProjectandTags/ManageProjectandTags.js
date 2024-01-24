import React, { useState } from 'react'
import {View,Text,StatusBar,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex , fontSize, marginPosition, paddingPosition, radius, styles } from '../../../../styles/Styles'
import Icon, { Icons } from '../../../../components/Icons'
import { Header } from '../Header'
import { ToggleButtons } from '../../../../components/view/ToggleButtons'

export const ManageProjectandTags = ({navigation}) => {
    const [showProjects,setshowProjects]=useState(true)
  return (
    <SafeAreaView style={[flex(1),paddingPosition(0,10,0,10),styles.bgWhite]}>
        <StatusBar backgroundColor = "#ffffff" barStyle = "dark-content"/>
       <View style={[flex(0.2)]}>
       <Header headername={'Manage Project & Tags'} IconfamilyRight={Icons.Entypo} IconNameRight={'dots-three-vertical'} onPress={()=>console.log('fcghvjbkn')} bgcolor={styles.white} color={styles.black} goBack={()=>navigation.navigate('manage')} showLeftIocn={true} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign}/>
       </View>
       <View style={[flex(0.2)]}>
        <ToggleButtons onPressProject={()=>setshowProjects(true)} showProjects={showProjects} onPressTags={()=>setshowProjects(false)}/>
       </View>
       <View style={[flex(0.2),styles.row,styles.centerHorizontal]}>
          <Icon name={'plus'} type={Icons.Feather} style={[styles.black,fontSize(30),marginPosition(0,10)]}/>
          <Text style={[styles.Orange,fontSize(22)]}>Add Tags</Text>
       </View>
       <View style={[flex(2)]}></View>
       <View style={[flex(0.2)]}>
       <View style={[styles.row,flex(1)]}>
    <View style={[flex(0.2),styles.centerVertical]}>
    <TouchableOpacity>
     
       <Icon name={'archive-outline'} type={Icons.Ionicons} style={[styles.black,fontSize(25)]} />
    
     </TouchableOpacity>
    </View>
    <View style={[flex(1),styles.allCenter]}>
        <Text style={[fontSize(20),styles.black]}>{'Archived Tags'}</Text>
    </View>
    <View style={[flex(0.2),{justifyContent:'center',alignItems:'flex-end'}]}>
        <TouchableOpacity >
     <Icon name={'right'} type={Icons.AntDesign} style={[styles.black,fontSize(25)]} />
     </TouchableOpacity>
    </View>
   </View>
       </View>

       

   
   </SafeAreaView>
  )
}


