import React, { useState } from 'react'
import { View , Text , TouchableOpacity} from 'react-native'
import { flex, marginPosition, radius, styles } from '../../../../../styles/Styles'
import { useSelector } from 'react-redux';


const Sessions = ({ onPress, sessions }) => {
 const Darkmode=useSelector((state)=>state.system.darkMode);

  console.log('sessions',sessions);
    const [data,setdata]=useState([1,2,3,4,5,6,7,8])
    const [session,setsession]=useState(sessions)
    // console.log('session',session);
    //get the user selected session
    const handleUserSessions=(index)=>{
        const SessionResult=data.find((data=>{
            return data===index+1
        }))
        setsession(SessionResult)
        onPress(SessionResult)
        console.log('Sessions',SessionResult);
    }
  return (
    <View style={[styles.allCenter,flex(1)]}>
         
    <View style={[styles.row,styles.allCenter]}>
      {data.map((num,index)=>{
        return(
            <TouchableOpacity onPress={()=>handleUserSessions(index)}>
       <View key={index} style={[{height:28,width:28},radius(50),session===index+1 ? styles.bgOrange:Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,styles.allCenter,marginPosition(0,10)]}>
             <Text style={[session===index+1 ? styles.white:Darkmode?styles.white:styles.black]}>{num}</Text>
       </View>
       </TouchableOpacity>
        )
      })}
    </View>
    
  
  </View>
  )
}

export default Sessions
