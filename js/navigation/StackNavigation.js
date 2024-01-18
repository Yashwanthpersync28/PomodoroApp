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
import { useSelector } from "react-redux";
import { Splash } from "../screens/auth/splash/Splash";
import { Manage } from "../screens/Manage/Manage";
import { Add } from "../screens/Manage/components/Add";
import { AddProject } from "../screens/Manage/components/AddProject/AddProject";
import { Addtags } from "../screens/Manage/components/AddTags/Addtags";
import { Project } from "../screens/Manage/components/project/Project";
import { TimerComponent } from "../screens/dashboard/Components/TimerComponent";
import { Notification1 } from "../screens/SettingsScreens/Notification1";
// import SingUp from "../screens/auth/register/SignUp";
// Navigation Types
const Stack = createStackNavigator();

export const AppNavigationContainer = () => {
    const showOnboarding=useSelector((state)=>state.showcomponent.ShowOnboarding);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTabNavigation">
                 <Stack.Screen
                    name={'splash'}
                    component={Splash}
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
                <Stack.Screen
                    name={'addproject'}
                    component={AddProject}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'addtags'}
                    component={Addtags}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'project'}
                    component={Project}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'Notification1'}
                    component={Notification1}
                    options={{
                        header: () => null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}