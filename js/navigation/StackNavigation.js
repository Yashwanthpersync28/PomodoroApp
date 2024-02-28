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
import { Notification1 } from "../screens/dashboard/Notification1";
import { Timer } from "../screens/dashboard/Components/Timer";
import { PomodoroScreen } from "../screens/dashboard/PomodoroScreen";
import { ManageProjectandTags } from "../screens/Manage/components/ManageProjectandTags/ManageProjectandTags";
import { Archived } from "../screens/Manage/components/ManageProjectandTags/components/Archived";
import { Task } from "../screens/Manage/components/Task/Task";
import Completedtask from "../screens/Manage/components/Completed/Completedtask";
import { TrophyScreen } from "../screens/dashboard/TrophyScreen";
import {Tasklist} from "../screens/Manage/components/TasklistBasedonDays/Tasklist"
import{ Profile} from "../screens/SettingsScreen/profile/Profile";
import { PomodoroPreference } from "../screens/SettingsScreen/PomodoroPreference";
import { DateTime } from "../screens/SettingsScreen/Components/DateTime/DateTime";
import { Notification } from "../screens/SettingsScreen/Notification/Notification";
import { AccountSecurity } from "../screens/SettingsScreen/AccountSecurity/AccountSecurity";
import { AppApearance } from "../screens/SettingsScreen/AppApearance/AppApearance";
import { HelpandSupport } from "../screens/SettingsScreen/Help/HelpandSupport";
import { Terms } from "../screens/SettingsScreen/Help/Terms";
import { PrivacyPolicy } from "../screens/SettingsScreen/Help/PrivacyPolicy";
import { FAQ } from "../screens/SettingsScreen/Help/FAQ";
import { ContactSupport } from "../screens/SettingsScreen/Help/ContactSupport";
import { ChangePassword, ChangePasswordModal } from "../screens/SettingsScreen/changePassword/ChangePassword";
import { CreatePassword } from "../screens/SettingsScreen/AccountSecurity/Components/CreatePassword";
import { PasscodeScreen } from "../screens/auth/forgotPassword/Components/PasscodeScreen";
// import SingUp from "../screens/auth/register/SignUp";
// Navigation Types
const Stack = createStackNavigator();

export const AppNavigationContainer = () => {
    const showOnboarding=useSelector((state)=>state.showcomponent.ShowOnboarding);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splash">
                 <Stack.Screen
                    name={'splash'}
                    component={Splash}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'signup'}
                    component={SignUp}
                    options={{
                        header: () => null,
                        animationEnabled:false


                    }}
                />
                <Stack.Screen
                    name={'login'}
                    component={LoginScreen}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'onboarding'}
                    component={Onboarding}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'forgot'}
                    component={Forgotpassword}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />

                <Stack.Screen
                    name={'BottomTabNavigation'}
                    component={BottomTabNavigation}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'Notification1'}
                    component={Notification1}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'addproject'}
                    component={AddProject}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'addtags'}
                    component={Addtags}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'project'}
                    component={Project}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'tag'}
                    component={Tags}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
               
                 <Stack.Screen
                    name={'AddTask'}
                    component={AddTask}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'manageProjectandTags'}
                    component={ManageProjectandTags}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'archived'}
                    component={Archived}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'task'}
                    component={Task}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'completedtask'}
                    component={Completedtask}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                <Stack.Screen
                    name={'TrophyScreen'}
                    component={TrophyScreen}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />  
                 <Stack.Screen
                    name={'tasklists'}
                    component={Tasklist}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'manage'}
                    component={Manage}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'Profile'}
                    component={Profile}
                    options={{
                        header: () => null,
                        animationEnabled:false


                    }}
                />
                 <Stack.Screen
                    name={'PomodoroPreference'}
                    component={PomodoroPreference}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'DateTime'}
                    component={DateTime}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'Notification'}
                    component={Notification}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'AccountSecurity'}
                    component={AccountSecurity}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'AppApearance'}
                    component={AppApearance}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'HelpandSupport'}
                    component={HelpandSupport}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'Terms'}
                    component={Terms}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'PrivacyPolicy'}
                    component={PrivacyPolicy}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'FAQ'}
                    component={FAQ}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'ContactSupport'}
                    component={ContactSupport}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'ChangePassword'}
                    component={ChangePassword}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'CreatePassword'}
                    component={CreatePassword}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
                 <Stack.Screen
                    name={'PasscodeScreen'}
                    component={PasscodeScreen}
                    options={{
                        header: () => null,
                        animationEnabled:false

                    }}
                />
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}