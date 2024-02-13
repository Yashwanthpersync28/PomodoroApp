import React, { useState } from 'react'
import {View,Text,Modal,TouchableOpacity} from 'react-native';
import { flex , widthValue , radius , paddingPosition , borderColor , borderWidth, styles , padding, fontSize, marginPosition ,} from '../../styles/Styles';

import CustomizedButtons from '../../screens/auth/onboarding/component/CustomizedButtons';
import { Header } from '../../screens/Manage/components/Header';
import Icon, { Icons } from '../Icons';
import { DuedateCalendar } from '../../screens/Manage/components/Calendar/DuedateCalendar';
import { Colors } from '../../styles/Colors';
import { ProgressCalendar } from '../../screens/Report/components/ProgressCalendar';



export const DueDateModal = ({onClose,OnpressDate,handletoAddtask}) => {

    const calendarheaderData=[{'name':'Today','Iconfamily':Icons.Feather,'IconName':'sun','color':styles.bgLeafGreen},
    {'name':'Tomorrow','Iconfamily':Icons.Feather,'IconName':'sunrise','color':styles.bgBlue},
    {'name':'This Week','Iconfamily':Icons.MaterialCommunityIcons,'IconName':'calendar-week','color':styles.bgSmokePurple},
    {'name':'Planned','Iconfamily':Icons.MaterialCommunityIcons,'IconName':'calendar-check','color':styles.bgOrange}]

    const GoToAddtask=()=>{
      handletoAddtask(1)
    }
    const today= new Date();
  const handleDays=(index)=>{
    console.log('index',index);
     if(index===1){
      console.log('today',today);
      
     }
  }

  return (
  <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
  <View style={[flex(0.2)]}>
    <TouchableOpacity onPress={onClose} style={[flex(1)]}>
    </TouchableOpacity>
    </View>
    <View style={[flex(0.8), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
      <View style={[styles.allCenter, flex(0.5), borderColor(Colors.borderGray), borderWidth(0, 0, 0, 1)]}>
        <Header headername={'Due Date'} bgcolor={styles.white} color={styles.black} showLeftIocn={true}/>
      </View>
      <View style={[styles.spaceBetween, flex(0.6), styles.row,borderColor(Colors.borderGray),borderWidth(0,0,0,1)]}>
          {calendarheaderData.map((data,index)=>{
              return(
                  <View style={[styles.column,styles.allCenter]}>
                    <TouchableOpacity onPress={()=>handleDays(index)} style={[styles.allCenter]}>
                          <View style={[{height:40,width:40},data.color,styles.allCenter,radius(20)]}>
                                <Icon name={data.IconName} type={data.Iconfamily} style={[styles.white,fontSize(20)]}/>
                          </View>
                          <Text style={[styles.black,fontSize(16),marginPosition(3),styles.textCenter]}>{data.name}</Text>
                  </TouchableOpacity>
                </View>
              )
          })}
       
      </View>
      <View style={[ flex(2.5),marginPosition(15,0,15)]}>
          <View style={[flex(1),borderWidth(1),borderColor(Colors.borderGray),radius(15),padding(5)]}>
           <DuedateCalendar OnpressDate={OnpressDate}/>
          {/* <ProgressCalendar/> */} 
        </View>
      </View>

      <View style={[flex(0.6), styles.row, styles.allCenter,borderColor(Colors.borderGray),borderWidth(0,1)]}>
        <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
          <CustomizedButtons handlecontinue={GoToAddtask} name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(2.5) }]} />
          <CustomizedButtons name={'OK'} bgcolor={styles.bgOrange} color={styles.white} style={[{ width: widthValue(2.5) }]} handlecontinue={GoToAddtask} />
        </View>
      </View>
    </View>
  </View>
  )
}


