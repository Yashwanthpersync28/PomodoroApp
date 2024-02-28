import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {PomodoroScreen} from "../screens/dashboard/PomodoroScreen";
import Homepage from "../screens/auth/login/Homepage/Homepage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fontSize, heightValue, styles } from '../styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import { BottomTabs } from '../constants/BottomTabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon,{Icons} from '../components/Icons';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    const darkmode = useSelector(state=>state.system.darkMode)
  return (
    <Tab.Navigator 
    initialRouteName='PomodoroScreen'
    screenOptions=
       {
        {
            headerShown:false,
            tabBarInactiveTintColor:darkmode?'gray':'black',
            tabBarActiveTintColor:'#ff6347',
            
            tabBarStyle:{
                backgroundColor:darkmode?'#181a21':'white',
                borderTopWidth:.1,
                borderTopColor:darkmode?'#262830':'#dfdfdf',
                shadowOpacity:0,
                elevation:0,
                
                paddingBottom:20,
                paddingHorizontal:20,
                height:heightValue(10),
            },
            tabBarLabelStyle:{
                fontSize:12,
                fontWeight:'500',
                marginTop:-13,
            },  
        }
    }
    >
        {BottomTabs.map((menu)=>(
            <Tab.Screen 
            key={menu.name}
            name={menu.name} 
            component={menu.component}
            options={{
                tabBarLabel:menu.label,
                    tabBarIcon:({focused})=>(
     <Icon name={menu.icon} type={menu.iconType} style={[fontSize(26)]} color={focused? '#ff6347':'#7f7f7f'} /> 
                    )
                }
            }/>
        ))}
    </Tab.Navigator>
  )
}

export default BottomTabNavigation