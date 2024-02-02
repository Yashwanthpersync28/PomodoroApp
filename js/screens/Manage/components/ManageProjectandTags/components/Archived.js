import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { flex, heightValue, paddingPosition, styles } from '../../../../../styles/Styles'
import {View,Text,ScrollView} from 'react-native'
import { Icons } from '../../../../../components/Icons'
import { Header } from '../../Header'
import { ManageItemslist } from './ManageItemslist'
import { useSelector } from 'react-redux'

export const Archived = ({navigation,route}) => {
    const { name , data} = route.params;
 console.log('dataaaa',data);
 const ArchievedData=useSelector((state)=>state.user.ProjectAndTagsArchieveReducer.ArchieveTags)
 console.log('ArchievedData',ArchievedData);
  return (
    <SafeAreaView style={[flex(1), paddingPosition(0, 10, 0, 10), styles.bglgWhite]}>
        <View style={[{height:heightValue(14)}]}>
        <Header
          headername={name}
          onPress={() => navigation.goBack()}
          bgcolor={styles.white}
          color={styles.black}
          goBack={() => navigation.goBack()}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
        </View>
        <View style={[flex(1),styles.bgWhite]}>
            <ScrollView>
                 <ManageItemslist data={ArchievedData} showProjects={true}/>
                         
            </ScrollView>
        </View>
   </SafeAreaView>
  )
}


