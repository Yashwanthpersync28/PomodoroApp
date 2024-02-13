import React from 'react';
import { View , Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Pie from 'react-native-pie';
import { flex, fontSize, fontWeight, heightValue, marginPosition, position, styles, widthValue } from '../../styles/Styles';
import { Colors } from '../../styles/Colors';
import Icon, { Icons } from '../../components/Icons';

export const ProjectTimeDistribution = () => {
 
const data=[{projectName:'Pomodoroo',color:Colors.Orange,focusTime:'15h 20m',percentage:'50%'},
{projectName:'twf',color:Colors.green,focusTime:'12h 20m',percentage:'40%'},
{projectName:'zam-zam',color:Colors.purple,focusTime:'3h 20m',percentage:'10%'},
{projectName:'samrtBijule',color:Colors.WaterBlue,focusTime:'2h 20m',percentage:'5%'},
{projectName:'ShareApi',color:Colors.blue,focusTime:'10h 20m',percentage:'35%'}
]
  return (
    <View style={[flex(1),styles.allCenter]}>
      <View style={[marginPosition(20),styles.positionRelative,{height:heightValue(4)},styles.allCenter]}>
      <Pie
              radius={50}
              innerRadius={45}
              sections={[
                {
                  percentage: 10,
                  color: Colors.purple,
                },
                {
                  percentage: 20,
                  color: Colors.green,
                },
                {
                  percentage: 10,
                  color: Colors.LightGold,
                },
                {
                  percentage: 10,
                  color: Colors.WaterBlue,
                },
                {
                  percentage: 10,
                  color: Colors.Orange,
                },
                {
                  percentage: 20,
                  color: Colors.SmokePink,
                },
                {
                  percentage: 20,
                  color: Colors.blue,
                }
              ]}
              strokeCap={'butt'}
            />
            <View style={[styles.positionAbsolute,styles.allCenter]}>
                     <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>39h 40m</Text>
               </View>
            </View>
            <View style={[{width:widthValue(1.2)},marginPosition(10,0,10),styles.spaceBetween,styles.rowWrap]}>
               {data.map((project,index)=>{
                return(
                 
                  <View style={[styles.row,styles.centerHorizontal,{width:widthValue(3)},marginPosition(10)]}>
                       <View style={[styles.centerHorizontal,{width:widthValue(16)}]}>
                            <Icon name={'briefcase'} type={Icons.Entypo} style={[fontSize(24),styles.textAlignVertical,{color:project.color}]}/>
                       </View>
                       <View style={[styles.column,marginPosition(0,0,0,10)]}>
                           <Text style={[styles.black,fontSize(18),fontWeight('bold')]}>{project.projectName}</Text>
                           <Text style={[styles.gray,fontSize(13)]}>{`${project.focusTime} - ${project.percentage}`}</Text>
                      </View>
                  </View>        
           
                )
               })}
                </View>
               
              
    </View>
  );
};


