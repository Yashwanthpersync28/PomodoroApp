import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, padding, radius, styles } from '../../../styles/Styles'
import Icon, { Icons } from '../../../components/Icons'

const TaskCardDetails = ({name,ShowplayIcon,data}) => {
    console.log('data',data);
  return (
    <>
    {data.map((dataitem,index)=>{
        return(
     <View style={[styles.bgWhite,radius(5),borderColor('blue'),borderWidth(0,0,2),padding(10),styles.row,,marginPosition(10,0,10)]}>  
        <View style={[flex(0.2),styles.selfStart]}>
            <Icon name={name==='Completed'?'checkcircle':'circle'} type={name==='Completed'?Icons.AntDesign:Icons.Entypo} style={[styles.Orange,fontSize(20)]}/>
        </View>
        <View style={[styles.column,flex(1)]}>
            <Text style={[name==='Completed'?styles.gray:styles.black,fontWeight('bold'),]}>{dataitem.Taskname}</Text>
            <View style={[styles.rowWrap,marginPosition(10)]}>
                {dataitem.Tags.map((tags,index)=>{
                    return(
                           <Text style={[{color:tags.color},marginPosition(0,5)]}>{tags.name}</Text> 
                    )
                })}
            
            </View>
            <View style={[styles.rowWrap,marginPosition(10),styles.centerHorizontal]}>
            <Icon name={'timer'} type={Icons.MaterialCommunityIcons} style={[styles.Orange,fontSize(20),marginPosition(0,5)]}/>
            <Text style={[styles.black,marginPosition(0,10)]}>5</Text>   
            <Icon name={'flag'} type={Icons.Feather} style={[{color:dataitem.Priority.color},fontSize(20),marginPosition(0,10)]}/>
            <Icon name={'briefcase'} type={Icons.Octicons} style={[{color:dataitem.Project.Color},fontSize(20),marginPosition(0,10)]}/>
            <Text style={[styles.gray]}>{dataitem.Project.Projectname}</Text>   
                
            </View>
        </View>
        <View style={[flex(0.2),styles.flexEnd]}>
        <Icon name={name==='Completed'?null:ShowplayIcon?'play':'dots-three-vertical'} type={Icons.Entypo} style={[styles.black,fontSize(20)]}/>

        </View>

    </View>
        )
    })}
    
    </>
  )
}

export default TaskCardDetails
