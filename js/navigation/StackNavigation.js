import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./StackNavigation";
import BottomTabNavigation from "./BottomTabNavigation";
import Forgotpassword from "../screens/auth/forgotPassword/Forgotpassword";
import { LoginScreen } from "../screens/auth/login/Login";
import SingUp from "../screens/auth/register/SingUp";
import { mainapp } from "../screens/auth/MainApp/mainapp";
import { createStackNavigator } from "@react-navigation/stack";
// Navigation Types
const Stack = createStackNavigator();
export const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'splash'}
                    component={mainapp}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'signup'}
                    component={SingUp}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'login'}
                    component={LoginScreen}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'forgot'}
                    component={Forgotpassword}
                    options={{
                        header: () => null,
                    }}
                />

                <Stack.Screen
                    name={'BottomTabNavigation'}
                    component={BottomTabNavigation}
                    options={{
                        header: () => null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}