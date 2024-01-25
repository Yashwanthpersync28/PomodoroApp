import React, { useState } from 'react'
import {View , StatusBar , ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex, heightValue, padding, styles,} from '../../../../styles/Styles'
import { HeaderSearch } from '../HeaderSearch'
import { Header } from '../Header'
import { Icons } from '../../../../components/Icons'
import { Colors } from '../../../../styles/Colors'
import {Dayheadings} from './components/Dayheadings'
import TaskCardDetails from '../TaskCardDetails'


const Completedtask = ({navigation,route}) => {
    const [showSearchHeader,setSearchHeader]=useState(false)
    const {name,data}=route.params
  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bglgWhite]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
     <View style={[{height:heightValue(12)}]}>
        {showSearchHeader?<HeaderSearch handleBacktoHeader={()=>setSearchHeader(false)}/>:
        <Header
         headername={name}
         IconfamilyRight={Icons.Entypo}
         IconNameRight={'dots-three-vertical'}
         onPress={() => console.log('hbn')}
         bgcolor={styles.white}
         color={styles.black}
         goBack={() => navigation.goBack()}
         showLeftIocn={true}
         IconNameLeft={'arrowleft'}
         IconfamilyLeft={Icons.AntDesign}
        showSearch={true}
        handleSearch={()=>setSearchHeader(true)}
        />}
        
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={[flex(1),styles.column]}>
        {name==='Trash'? <TaskCardDetails data={data}/>:
        <>       
         <Dayheadings headingname={'Today'} focusTime={'2h 10m'} completed={'2'} taskdata={'vhbjn'} name={name} data={data}/>
         <Dayheadings headingname={'Yesterday'} focusTime={'2h 5m'} completed={'2'} name={name} data={data}/>
        </>

  }
     </View>
     </ScrollView>

    </SafeAreaView>
  )
}

export default Completedtask
