import React from 'react'
import {View , StatusBar , ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex, heightValue, padding, styles,} from '../../../../styles/Styles'
import { HeaderSearch } from '../HeaderSearch'
import { Icons } from '../../../../components/Icons'
import { Colors } from '../../../../styles/Colors'
import { Dayheadings } from '../Completed/components/Dayheadings'
import { Header } from '../Header'




const Trash = () => {
    const [showSearchHeader,setSearchHeader]=useState(false)
  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20),styles.bglgWhite]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>
     <View style={[{height:heightValue(12)}]}>
        {showSearchHeader?<HeaderSearch handleBacktoHeader={()=>setSearchHeader(false)}/>:
        <Header
         headername={'Completed'}
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
        <Dayheadings headingname={'Today'} focusTime={'2h 10m'} completed={'2'} taskdata={'vhbjn'}/>
        <Dayheadings headingname={'Yesterday'} focusTime={'2h 5m'} completed={'2'}/>

     </View>
     </ScrollView>

    </SafeAreaView>
  )
}

export default Trash
