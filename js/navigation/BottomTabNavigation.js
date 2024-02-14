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

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName='PomodoroScreen'
    screenOptions=
       {
        {
            headerShown:false,
            tabBarInactiveTintColor:'black',
            tabBarActiveTintColor:'#ff6347',
            tabBarStyle:{
                backgroundColor:'white',
                borderTopWidth:0,
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