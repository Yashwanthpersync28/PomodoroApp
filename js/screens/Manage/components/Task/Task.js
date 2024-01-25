import React, { useState } from 'react'
import {View,Text,ScrollView,TextInput,StatusBar} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Header } from '../Header'
import { borderColor, borderWidth, flex, fontSize, fontWeight, heightValue, marginPosition, padding, paddingPosition, radius, styles, textColor, widthValue } from '../../../../styles/Styles'
import Icon, { Icons } from '../../../../components/Icons'
import { TextInputCompnent } from '../../../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DeleteTaskModal } from '../../../../components/modals/DeleteTaskModal'
import { TaskDeletedModal } from '../../../../components/modals/TaskDeletedModal'
import { Colors } from '../../../../styles/Colors'



export const Task = ({navigation}) => {
  //states
  const [showOptions,setShowoptions]=useState(false)
  const [subtask,setSubtask]=useState('')
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isTaskdeletedModalVisible,setTaskdeletedModalVisible]=useState(false)

    const taskdata=[{startIcon:'check',name:'Pomodoro',details:'4',endIcon:'check',endIconcolor:'green'},
    {startIcon:'calendar',name:'Due Date',details:'Today',endIcon:'calendar',endIconcolor:'green'},
    {startIcon:'flag',name:'Priority',details:'Medium',endIcon:'flag',endIconcolor:'green'},
    {startIcon:'breifcase',name:'Project',details:'Pomodoro App',endIcon:'breifcase',endIconcolor:'green'},
    {startIcon:'bell',name:'Remainder',details:'Today',endIcon:'bell',endIconcolor:'green'},
    {startIcon:'repeat',name:'Repeat',details:'none',endIcon:'repeat',endIconcolor:'green'}]

    const optionsdata=[{'name':'Pin','iconfamily':Icons.Entypo,'iconname':'pin'},{'name':'Share','iconfamily':Icons.AntDesign,'iconname':'sharealt'},
    {'name':'Dublicate','iconfamily':Icons.MaterialIcons,'iconname':'file-copy'},{'name':'Comment','iconfamily':Icons.Fontisto,'iconname':'commenting'},
    {'name':'Location','iconfamily':Icons.EvilIcons,'iconname':'location'},{'name':'Delete','iconfamily':Icons.MaterialCommunityIcons,'iconname':'delete-outline'}]

    //handle options
    const handleOptions=(val)=>{
      console.log('val',val);
        if(val==='Delete'){
          setShowoptions(!showOptions)
          setDeleteModalVisible(true);
        }
    }
  return (
   <SafeAreaView style={[styles.bglgWhite,flex(1), paddingPosition(0, 20, 0, 20)]}>
    <StatusBar backgroundColor = {Colors.lgWhite} barStyle = "dark-content"/>

    <View style={[{height:heightValue(14)}]}>
    <Header
          headername={'Task'}
          IconfamilyRight={Icons.Entypo}
          IconNameRight={'dots-three-vertical'}
          onPress={() => setShowoptions(!showOptions)}
          bgcolor={styles.white}
          color={styles.black}
          goBack={() => navigation.goBack()}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
    </View>
    {/* render deletemodal */}
    {isDeleteModalVisible && <DeleteTaskModal onClose={() => setDeleteModalVisible(false)} handletoTaskDeleted={()=>setTaskdeletedModalVisible(true)}/>}
    {isTaskdeletedModalVisible && <TaskDeletedModal onClose={() => setTaskdeletedModalVisible(false)}/>}
    {/* option's */}
    {showOptions ? 
    <View style={[{ position: 'absolute', top: 40, right: 20, zIndex: 1,width:widthValue(3)},padding(10),radius(10),styles.column,styles.bgWhite]}>
     {/* <View style={[{width:widthValue(3)},padding(10),radius(10),styles.column,styles.bgWhite]}> */}
       {optionsdata.map((options,index)=>{
        return(
          <TouchableOpacity onPress={()=>handleOptions(options.name)}>
            <View key={index} style={[styles.row,options.name==='Delete'?null:borderColor('#f2f0f0'),options.name==='Delete'?null:borderWidth(0,0,0,1),paddingPosition(5,0,5)]}>
            <Icon name={options.iconname} type={options.iconfamily} style={[options.name==='Delete'?styles.Orange:styles.black,fontSize(20),styles.textAlignVertical]}/>
            <Text style={[options.name==='Delete'?styles.Orange:styles.black,fontSize(18),fontWeight('bold'),marginPosition(0,0,0,5)]}>{options.name}</Text>
           </View>
           </TouchableOpacity>
           )
       })}
         
     {/* </View> */}
    </View>:null}
    {/*  */}
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={[styles.bgWhite,{height:heightValue(14)},marginPosition(0,0,15),radius(5),styles.row,borderColor('blue'),borderWidth(0,0,2),styles.centerHorizontal]}>
      <View style={[flex(0.2),marginPosition(0,0,0,10)]}>
          <Icon name={'play'} type={Icons.AntDesign} style={[styles.Orange,fontSize(20)]}/>
      </View>
      <View style={[flex(2)]}>
          <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>Create a design</Text>
     </View>
     <View style={[flex(0.2)]}>
          <Icon name={'play'} type={Icons.AntDesign} style={[styles.Orange,fontSize(20)]}/>
     </View>
   </View>
{/* task detail cards */}
    <View style={[{height:heightValue(2.4),backgroundColor:'#fbfbfb'},styles.column,padding(10),radius(10),styles.allCenter]}>
        {taskdata.map((item,index)=>{
            return(
        <View style={[styles.row,{height:heightValue(16)},styles.centerHorizontal,borderColor('#f2f0f0'),borderWidth(0,0,0,1)]}>
        <Icon name={item.startIcon} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
        <Text style={[styles.black,fontSize(20),fontWeight('bold')]}>{item.name}</Text>
        <View style={[flex(1),styles.flexEnd,marginPosition(0,10)]}>
        <Text style={[styles.black,fontWeight('bold')]}>{item.details}</Text>
        </View>
        <Icon name={item.endIcon} type={Icons.Feather} style={[{color:item.endIconcolor},fontSize(20)]}/>

        </View> 
            )
        })}
   </View>
   {/* add sub task */}
   <View style={[marginPosition(10),radius(10)]}>
   <TextInputCompnent
      placeholder={'Add subtask'}
      value={subtask}
      onChangeText={(val)=>setSubtask(val)}
      IconFamily ={Icons.Feather}
      Iconname={'plus'}
      bgColor={styles.bgWhite}
    />
    </View>
    <View style={[marginPosition(10)]}>
        <Text style={[styles.black,fontWeight('800')]}>Tags</Text>
        <View style={[styles.rowWrap,marginPosition(10)]}>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>work</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>work</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>workhgfhdhb</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>work</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>work</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(6),styles.row,styles.allCenter,borderColor('green'),borderWidth(1),radius(20),marginPosition(0,10,10)]}>
                <Text style={[styles.black]}>work</Text>
                <Icon name={'x'} type={Icons.Feather} style={[styles.black,fontSize(20),marginPosition(0,10)]}/>
              </View>
              <View style={[padding(8),styles.allCenter,borderColor('gray'),borderWidth(1),radius(15),marginPosition(0,10,10)]}>
                <Icon name={'plus'} type={Icons.Feather} style={[styles.black,fontSize(20)]}/>
              </View>
              
        </View>
    </View>
    {/* add note */}
    <View style={[marginPosition(15)]}>
         <Text style={[styles.black,fontWeight('800')]}>Add a Note</Text>
         <View style={[styles.bgWhite,{height:heightValue(10)},paddingPosition(0,10,0,10),radius(6),marginPosition(10)]}>
             <TextInput placeholder={'Add a note..'} style={[styles.black,fontSize(20),{ textAlignVertical: 'top' }]} placeholderTextColor={'black'} multiline={true} numberOfLines={3}/>
         </View>
    </View>
    {/* for uploading Attachment */}
    <View style={[marginPosition(15,0,15)]}>
         <Text style={[styles.black,fontWeight('800')]}>Add attachement</Text>
         <View style={[styles.bgWhite,{height:heightValue(10)},padding(10),radius(6),styles.allCenter,styles.column,marginPosition(10)]}>
            <Icon name={'addfile'} type={Icons.AntDesign} style={[styles.gray,fontSize(20)]}/>
            <Text style={[styles.gray,fontSize(18)]}>Upload</Text>
         </View>
    </View>
   <View style={[styles.bgOrange]}>

   </View>
   </ScrollView>
   </SafeAreaView>
  )
}


