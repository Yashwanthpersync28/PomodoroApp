import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { mainapp } from '../screens/auth/MainApp/mainapp';
import SingUp from '../screens/auth/register/SingUp';
import { LoginScreen } from '../screens/auth/login/Login';
import Forgotpassword from '../screens/auth/forgotPassword/Forgotpassword';


const Stack = createStackNavigator();

export const StackNavigation = ()=> {
    const { at } = useSelector(state => state.auth.user)

    return (
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
            </Stack.Navigator>
    );
}