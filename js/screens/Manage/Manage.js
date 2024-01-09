import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue, zIndex } from '../../styles/Styles';
// import HomepageHeader from '../dashboard/Components/HomepageHeader';
import Icon, { Icons } from '../../components/Icons';
import { ManageButtons } from './components/ManageButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlusModal } from '../../components/modals/PlusModal';
import { PriorityModal } from '../../components/modals/PriorityModal';
import { HomepageHeader } from '../dashboard/Components/HomepageHeader';

export const Manage = ({navigation}) => {
    const [modalVisible,setmodalVisible]=useState(false)
    const handlePlusmodal=()=>{
        setmodalVisible(true)
    }
  return (
    <SafeAreaView style={[flex(1),padding(0,0,20,0,20)]}>
      <View style={[flex(0.3)]}>
        <HomepageHeader IconFamily={Icons.Entypo} name={'dots-three-vertical'} bgcolor={styles.white} color={styles.black} />
      </View>
      
    <View style={[flex(2)]}>
        {modalVisible ?
        //  <PlusModal visible={modalVisible}/>
        <PriorityModal/>
         :null}
    <View style={[{ height: 45, width: 45, position: 'absolute', top: 0, right: 20, zIndex: 1, ...styles.allCenter, ...styles.bgOrange ,top:450,right:0},radius(50)]}>
          <TouchableOpacity onPress={handlePlusmodal}>
            <Icon name={modalVisible ? 'x' : 'plus'} type={Icons.Feather} style={[styles.white, { fontSize: 25 }, padding(0, 0, 10, 0, 10)]} />
          </TouchableOpacity>
        </View>
      <ScrollView style={[flex(1),{zIndex: 0 }]} showsVerticalScrollIndicator={false}>
        <View style={[{height:heightValue(14)}]}>
        <Text style={[styles.white]}>hello</Text>
        </View>
        <View style={[{height:heightValue(2.8)},styles.rowWrap,styles.spaceEvenly]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Today'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons color={'#3ca2f2'} heading={'Tomorrow'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Planed'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'lightgreen'} heading={'Completed'} IconFamily={Icons.AntDesign} iconname={'checkcircleo'} showhours={false}/>
           <ManageButtons  color={'red'} heading={'Trash'} IconFamily={Icons.Octicons} iconname={'trash'} showhours={false}/>
        </View>
        <View style={[styles.column,marginPosition(10),styles.positionRelative]}>
         <View style={[styles.row,marginPosition(0,0,10)]}>
            <Text style={[styles.black,padding(0,0,10,0,0)]}>Projects</Text>
            <View style={[styles.allCenter]}>
            <View style={[borderColor('gray'),borderWidth(0,0,0,0.7,0),{width:widthValue(1.5)}]}></View>
            </View>
         </View>
         <View style={[styles.rowWrap,styles.spaceEvenly]}>
           <ManageButtons  color={'#6fbe6d'} heading={'Pomodoro App vghjhvceuykjbck hvfyjgcbeu bcjjhmsvbd '} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons color={'#3ca2f2'} heading={'Fashion App'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'AI chatting App'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Dating App'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'Quiz App'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'PLan app'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#fdaf63'} heading={'This Week'} IconFamily={Icons.Foundation} iconname={'calendar'} hours={'13h 20m (10s)'} showhours={true}/>
           <ManageButtons  color={'#af4fba'} heading={'Planed'} IconFamily={Icons.FontAwesome} iconname={'calendar-check-o'} hours={'13h 20m (10s)'} showhours={true}/>
        </View>
        </View>
        
        {/* Additional views can be added as needed */}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};
