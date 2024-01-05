import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./StackNavigation";
import BottomTabNavigation from "./BottomTabNavigation";
import {Forgotpassword} from "../screens/auth/forgotPassword/Forgotpassword";
import { LoginScreen } from "../screens/auth/login/Login";
// import SingUp from "../screens/auth/register/SignUp";
import { mainapp } from "../screens/auth/MainApp/mainapp";
import { createStackNavigator } from "@react-navigation/stack";
import {SignUp} from "../screens/auth/register/SignUp";
import { Onboarding } from "../screens/auth/onboarding/Onboarding";
// import SingUp from "../screens/auth/register/SignUp";
// Navigation Types
const Stack = createStackNavigator();

export const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'mainapp'}
                    component={mainapp}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'signup'}
                    component={SignUp}
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
                    name={'onboarding'}
                    component={Onboarding}
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