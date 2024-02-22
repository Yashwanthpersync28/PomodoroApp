import React, { useEffect, useState } from 'react'
import { flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../styles/Styles'
import {View,Text,ScrollView} from 'react-native'
import { Colors } from '../../../styles/Colors';
import { useSelector } from 'react-redux';

export const PomodoroRecords = () => {
  //states
  const [completedTasks,setCompletedTasks]=useState([])
  //selectors
  const Task=useSelector((state)=>state.user.userTasks.userTask);
const Darkmode=useSelector((state)=>state.system.darkMode);

  console.log('Task',Task);
  
  useEffect(()=>{
    const getDataa=Task.filter((tasks,index)=>{
      return tasks.completed
        })
        setCompletedTasks(getDataa)
    console.log('getDataa',getDataa) 
  },[])
  
    const timer = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '02:00', '04:00', '06:00'];
  // Get today's date
  const today = new Date();
  // Create an array of the last 7 days
  const last7Days = [...Array(7)].map((_, index) => {
    const date = new Date();
    date.setDate(today.getDate() - index - 2); // Subtract index and 2 to exclude today and yesterday
    return date;
  });
  // Format the dates to 'MM/dd' format
  const formattedDates = last7Days.map(date => {
    const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name (e.g., Jan, Feb, etc.)
    const day = date.getDate(); // Get the day of the month
    return `${month}${day}`;
  });
  console.log('formattedDates',formattedDates);
console.log('date',new Date());

//to get last 7 days dates
function getLastSevenDays(dateString) {
  const dates = [];
  const currentDate = new Date(dateString);
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    const formattedDate = date.toISOString().split('T')[0];
    dates.push(formattedDate);
  }
  
  return dates;
}
const lastsevenDays=getLastSevenDays(new Date())
console.log('lastsevenDays',lastsevenDays);


    return (
      <View style={[styles.row,marginPosition(10),Darkmode?styles.bgtaskCardDblack:styles.bgsmokeWhite,]}>
       <View style={[styles.column, Darkmode?styles.bgtaskCardDblack:styles.bgsmokeWhite, { width: widthValue(6) }]}>
      <View style={[{ height: heightValue(16) },Darkmode?styles.bgtaskCardDblack: styles.bgsmokeWhite]}></View>
      <View style={[flex(1),Darkmode?styles.bgtaskCardDblack: styles.bgWhite, styles.column]}>
        <View style={[{ height: heightValue(16) },Darkmode?styles.bgtaskCardDblack: styles.bgWhite, styles.allCenter]}>
          <Text style={[Darkmode?styles.smokeGray:styles.gray,fontSize(16)]}>Today</Text>
        </View>
        <View style={[{ height: heightValue(16) }, Darkmode?styles.bgtaskCardDblack:styles.bgWhite, styles.allCenter]}>
          <Text style={[Darkmode?styles.smokeGray:styles.gray,fontSize(16)]}>Yester...</Text>
        </View>
        {formattedDates.slice(0, 5).map((date, index) => (
          <View key={index} style={[{ height: heightValue(16) },Darkmode?styles.bgtaskCardDblack: styles.bgWhite,styles.allCenter,marginPosition(0)]}>
            <Text style={[Darkmode?styles.smokeGray:styles.gray,fontSize(16)]}>{date}</Text>
          </View>
        ))}
      </View>
    </View>
        
        {/* header timer */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.bgsmokeWhite, styles.column,marginPosition(0)]}>
            {/* timer starts */}
            <View style={[styles.bgsmokeWhite, { height: heightValue(16) }, styles.row]}>
              {timer.map((time, index) => {
                return (
                  <View key={index} style={[styles.allCenter,marginPosition(0,5),{width:widthValue(7.4)}]}>
                    <Text style={[Darkmode?styles.smokeGray:styles.gray,fontSize(16)]}>{time}</Text>
                  </View>
                )
              })}
            </View>
            {/* timer ends */}
            <View style={[flex(1), styles.column]}>
              {lastsevenDays.map((lastsevenDays,index)=>(
                       
                       //roe wise
                              <View style={[{height:heightValue(16)},styles.row]}>
                                {/* //1st child 8am */}
                                   <View style={[marginPosition(0, 0, 0, 27), { height: heightValue(16), width: widthValue(7.5) }, styles.row, styles.allCenter, padding(5)]}>
                                   {completedTasks.map((eightAm, index) => {
                                       if (eightAm.completedAt >= '08:00:00' && eightAm.completedAt < '10:00:00' && eightAm.completedDate===lastsevenDays) {
                                       return (
                                            <View key={index} style={{ height: 30, width: 6, backgroundColor: Colors.Orange, borderRadius: 2, marginRight: 5 }}></View>
                                             )
                                        } else {
                                            return null
                                            }
                                         })}
                                   </View>
                                {/* 1st child 8am ends */}
                               

                               {/* //2nd */}
                                   <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                                       {completedTasks.map((eightAm, index) => {
                                       if (eightAm.completedAt >= '10:00:00' && eightAm.completedAt < '12:00:00' && eightAm.completedDate===lastsevenDays) {
                                       return (
                                            <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                             )
                                        } else {
                                            return null
                                            }
                                         })}
                                    </View>

                                    {/* //3rd */}
                                    <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                                       {completedTasks.map((eightAm, index) => {
                                              if (eightAm.completedAt >= '12:00:00' && eightAm.completedAt < '14:00:00' && eightAm.completedDate===lastsevenDays) {
                                                   return (
                                                   <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5}}></View>
                                                       )
                                                  } else {
                                               return null
                                                  }
                                               })}
                                        </View>
                                        {/* //4th */}
                                        <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                                       {completedTasks.map((eightAm, index) => {
                                              if (eightAm.completedAt >= '14:00:00' && eightAm.completedAt < '16:00:00' && eightAm.completedDate===lastsevenDays) {
                                                   return (
                                                   <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                                       )
                                                  } else {
                                               return null
                                                  }
                                               })}
                                        </View>
                              
                              {/* //5th  */}
                              <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                                       {completedTasks.map((eightAm, index) => {
                                              if (eightAm.completedAt >= '16:00:00' && eightAm.completedAt < '18:00:00' && eightAm.completedDate===lastsevenDays) {
                                                   return (
                                                   <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                                       )
                                                  } else {
                                               return null
                                                  }
                                               })}
                                        </View>
                             {/* //6th */}
                             <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                              {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '18:00:00' && eightAm.completedAt < '20:00:00' && eightAm.completedDate===lastsevenDays) {
                                 return (
                                      <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                       )
                                   } else {
                                return null
                                    }
                                   })}
                               </View>
                             {/* //7th */}
                             <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                              {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '20:00:00' && eightAm.completedAt < '22:00:00' && eightAm.completedDate===lastsevenDays) {
                                 return (
                                      <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5}}></View>
                                       )
                                   } else {
                                return null
                                    }
                                   })}
                               </View>
                               {/* //8th */}
                               <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                              {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '22:00:00' && eightAm.completedAt < '24:00:00' && eightAm.completedDate===lastsevenDays) {
                                 return (
                                      <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                       )
                                   } else {
                                return null
                                    }
                                   })}
                               </View>
                               {/* //9th */}

                               <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                      {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '24:00:00' && eightAm.completedAt < '02:00:00' && eightAm.completedDate===lastsevenDays) {
                                return (
                                     <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                        )
                                    } else {
                                 return null
                                }
                                  })}
                              </View>





                               <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                              {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '02:00:00' && eightAm.completedAt < '04:00:00' && eightAm.completedDate===lastsevenDays) {
                                 return (
                                      <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                       )
                                   } else {
                                return null
                                    }
                                   })}
                               </View>
                               {/* 10th */}
                               <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

                              {completedTasks.map((eightAm, index) => {
                                  if (eightAm.completedAt >= '04:00:00' && eightAm.completedAt < '06:00:00' && eightAm.completedDate===lastsevenDays) {
                                 return (
                                      <View key={index} style={{ height: 30, width: 6, backgroundColor: eightAm.Project.Color, borderRadius: 2, marginRight: 5 }}></View>
                                       )
                                   } else {
                                return null
                                    }
                                   })}
                               </View>
                        
                        
                        
                        
                        
                           </View>
              ))}
             
            </View>
            
          </View>
        </ScrollView>
      </View>
    )
  }






//   {[...Array(10)].map((_,index)=>(
//     <View  style={[marginPosition(0,0,0,7),{height:heightValue(16),width:widthValue(7.5)},styles.row,styles.allCenter,paddingPosition(5,5,5,0)]}>

//         <View style={{ height: 30, width: 6, backgroundColor: Colors.Orange, borderRadius: 2, marginLeft:0}}></View>
//          <View style={{ height: 30, width: 6, backgroundColor: Colors.Orange, borderRadius: 2, marginLeft:5}}></View>
//           <View style={{ height: 30, width: 6, backgroundColor: Colors.Orange, borderRadius: 2, marginLeft:5}}></View>
//            <View style={{ height: 30, width: 6, backgroundColor: Colors.Orange, borderRadius: 2, marginLeft:5}}></View>
//      </View>
// ))}