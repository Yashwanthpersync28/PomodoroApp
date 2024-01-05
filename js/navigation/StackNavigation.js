import { createStackNavigator } from '@react-navigation/stack';
// Non Auth Screens
import { LoginScreen } from '../screens/auth/login/Login';
// Auth Screens
import { DashboardScreen } from '../screens/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import Splash from '../screens/auth/splash/Splash';
import SingUp from '../screens/auth/register/SingUp';
import Homepage from '../screens/auth/login/Homepage/Homepage';

const Stack = createStackNavigator();

export const StackNavigation = ()=> {
    const { at } = useSelector(state => state.auth.user)

    return (
        <Stack.Navigator
        // initialRouteName='splash'
            screenOptions={{
                headerShown: false

            }}
        >
            {at == "" ?
                // Non Auth
                <Stack.Group>
                    <Stack.Screen name="splash" component={Splash} />
                </Stack.Group> :
                // Auth
                <Stack.Group>
                    <Stack.Screen name="Dashboard" component={DashboardScreen} />
                </Stack.Group>
                // <Stack.Group>
                //     <Stack.Screen name="HomePage" component={Homepage} />
                // </Stack.Group>
            }
        </Stack.Navigator>
    );
}