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
import { AddTask } from "../screens/Manage/components/AddTask/AddTask";
import { PriorityModal } from "../components/modals/PriorityModal";
import Tags from "../screens/Manage/components/tags/Tags";
import { TimerComponent } from "../screens/dashboard/Components/TimerComponent";
import { Notification1 } from "../screens/SettingsScreens/Notification1";
import { Timer } from "../screens/dashboard/Components/Timer";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen";
import { ManageProjectandTags } from "../screens/Manage/components/ManageProjectandTags/ManageProjectandTags";
import { Archived } from "../screens/Manage/components/ManageProjectandTags/components/Archived";
import { Task } from "../screens/Manage/components/Task/Task";
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
                    name={'Notification1'}
                    component={Notification1}
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
                    name={'tag'}
                    component={Tags}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'PomodoroScreen'}
                    component={PomodoroScreen}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'AddTask'}
                    component={AddTask}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'manage'}
                    component={Manage}
                    options={{
                        header: () => null,
                    }}
                />
                 <Stack.Screen
                    name={'manageProjectandTags'}
                    component={ManageProjectandTags}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'archived'}
                    component={Archived}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen
                    name={'task'}
                    component={Task}
                    options={{
                        header: () => null,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}