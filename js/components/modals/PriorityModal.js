import React from 'react'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../styles/Styles'
import {View,Modal,Text} from 'react-native'
import CustomizedButtons from '../../screens/auth/onboarding/component/CustomizedButtons'
import Icon, { Icons } from '../Icons'
import { Header } from '../../screens/Manage/components/Header'
// import { Header } from '@react-navigation/stack'

export const PriorityModal = ({ visible, onClose }) => {
    const prioritylist=[{name:'High Priority',color:'#df5941'},{name:'Medium Priority',color:'#ff8e26'},{name:'Low Priority',color:'#4bb058'},{name:'No Priority',color:'#607d8a'}]
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}>
    <View style={[flex(1), { backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'flex-end',alignItems:'center'}]}>
     <View style={[flex(0.6),{width:widthValue(1)},styles.bgWhite,radius(0,20,0,0,20),paddingPosition(0,20,0,20)]}>
      <View style={[styles.allCenter,flex(0.7),borderColor('#e3e1e1'),borderWidth(0,0,0,1)]}>
        {/* <View style={[borderColor('#e3e1e1'),borderWidth(0,0,0,0.6),{width:widthValue(1.2)},flex(1),styles.allCenter]}>
        <Text style={[styles.black,{fontWeight:'600'},fontSize(28)]}>Priority</Text>
        </View> */}
        <Header headername={'Priority'} bgcolor={styles.white} color={styles.black} />
      </View>
      <View style={[styles.allCenter,flex(3),styles.column]}>
        {prioritylist.map((list,index)=>{
            return(
                <View key ={index} style={[flex(1),styles.row,borderColor('#e3e1e1'),borderWidth(0,0,0,0.6),{width:widthValue(1.2),alignItems:'center'}]}>
                <View style={[{height:35,width:35},radius(30),{backgroundColor:list.color},styles.allCenter]}>
                <Icon name={'flag'} type={Icons.Ionicons} style={[styles.white, { fontSize: 20 }, ]} />
                </View>
               <View style={[styles.allCenter]}>
                <Text style={[styles.black,marginPosition(0,0,0,10)]}>{list.name}</Text>
            </View>
                
            </View>
            )
        })}
      </View>
      
      <View style={[flex(1),styles.row,padding(0,0,20,0,20),styles.allCenter]}>
        <View style={[styles.spaceBetweenVertical,styles.row,flex(1)]}>
      <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{width:widthValue(3)}]}/>
      <CustomizedButtons name={'OK'}  bgcolor={styles.bgOrange} color={styles.white}style={[{width:widthValue(3)}]}/>
      </View>
      </View>
     </View>
    </View>
  </Modal>
  )
}


