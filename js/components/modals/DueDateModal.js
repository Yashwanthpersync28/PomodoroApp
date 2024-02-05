import React, { useState } from 'react'
import {View,Text,Modal,TouchableOpacity} from 'react-native';
import { flex , widthValue , radius , paddingPosition , borderColor , borderWidth, styles , padding, fontSize, marginPosition ,} from '../../styles/Styles';

import CustomizedButtons from '../../screens/auth/onboarding/component/CustomizedButtons';
import { Header } from '../../screens/Manage/components/Header';
import Icon, { Icons } from '../Icons';
import { DuedateCalendar } from '../../screens/Manage/components/Calendar/DuedateCalendar';



export const DueDateModal = ({visible,onClose,OnpressDate,handletoAddtask}) => {

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
  //   <Modal
  //   animationType="slide"
  //   transparent={true}
  //   visible={visible}
  //   onRequestClose={onClose}>
  //   <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
  //   <View style={[flex(0.2)]}>
  //     <TouchableOpacity onPress={onClose} style={[flex(1)]}>
  //     </TouchableOpacity>
  //     </View>
  //     <View style={[flex(0.8), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
  //       <View style={[styles.allCenter, flex(0.5), borderColor('#e3e1e1'), borderWidth(0, 0, 0, 1)]}>
  //         <Header headername={'Due Date'} bgcolor={styles.white} color={styles.black} />
  //       </View>
  //       <View style={[styles.spaceBetween, flex(0.6), styles.row,borderColor('#e3e1e1'),borderWidth(0,0,0,1)]}>
  //           {calendarheaderData.map((data,index)=>{
  //               return(
  //                   <View style={[styles.column,styles.allCenter]}>
  //                     <TouchableOpacity onPress={()=>handleDays(index)}>
  //                   <View style={[{height:40,width:40},data.color,styles.allCenter,radius(20)]}>
  //                      <Icon name={data.IconName} type={data.Iconfamily} style={[styles.white,fontSize(20)]}/>
  //                   </View>
                   
  //                   <Text style={[styles.black,fontSize(16),marginPosition(3)]}>{data.name}</Text>
  //                   </TouchableOpacity>
  //                 </View>
  //               )
  //           })}
         
  //       </View>
  //       <View style={[ flex(2.5),marginPosition(15,0,15)]}>
  //           <View style={[flex(1),borderWidth(1),borderColor('#e3e1e1'),radius(15),styles.allCenter]}>
  //            <DuedateCalendar OnpressDate={OnpressDate}/>
             
             
  //         </View>
  //       </View>

  //       <View style={[flex(0.6), styles.row, padding(0, 0, 20, 0, 20), styles.allCenter,borderColor('#e3e1e1'),borderWidth(0,1)]}>
  //         <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
  //           <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
  //           <CustomizedButtons name={'OK'} bgcolor={styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={GoToAddtask} />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // </Modal>
  <View style={[flex(1),styles.column, { backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
  <View style={[flex(0.2)]}>
    <TouchableOpacity onPress={onClose} style={[flex(1)]}>
    </TouchableOpacity>
    </View>
    <View style={[flex(0.8), { width: widthValue(1) }, styles.bgWhite, radius(0, 20, 0, 0, 20), paddingPosition(0, 20, 0, 20)]}>
      <View style={[styles.allCenter, flex(0.5), borderColor('#e3e1e1'), borderWidth(0, 0, 0, 1)]}>
        <Header headername={'Due Date'} bgcolor={styles.white} color={styles.black} showLeftIocn={true}/>
      </View>
      <View style={[styles.spaceBetween, flex(0.6), styles.row,borderColor('#e3e1e1'),borderWidth(0,0,0,1)]}>
          {calendarheaderData.map((data,index)=>{
              return(
                  <View style={[styles.column,styles.allCenter]}>
                    <TouchableOpacity onPress={()=>handleDays(index)}>
                  <View style={[{height:40,width:40},data.color,styles.allCenter,radius(20)]}>
                     <Icon name={data.IconName} type={data.Iconfamily} style={[styles.white,fontSize(20)]}/>
                  </View>
                 
                  <Text style={[styles.black,fontSize(16),marginPosition(3)]}>{data.name}</Text>
                  </TouchableOpacity>
                </View>
              )
          })}
       
      </View>
      <View style={[ flex(2.5),marginPosition(15,0,15)]}>
          <View style={[flex(1),borderWidth(1),borderColor('#e3e1e1'),radius(15),styles.allCenter]}>
           <DuedateCalendar OnpressDate={OnpressDate}/>
           
           
        </View>
      </View>

      <View style={[flex(0.6), styles.row, padding(0, 0, 20, 0, 20), styles.allCenter,borderColor('#e3e1e1'),borderWidth(0,1)]}>
        <View style={[styles.spaceBetweenVertical, styles.row, flex(1)]}>
          <CustomizedButtons name={'Cancel'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} style={[{ width: widthValue(3) }]} />
          <CustomizedButtons name={'OK'} bgcolor={styles.bgOrange} color={styles.white} style={[{ width: widthValue(3) }]} handlecontinue={GoToAddtask} />
        </View>
      </View>
    </View>
  </View>
  )
}


