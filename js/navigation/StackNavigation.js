import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { mainapp } from '../screens/auth/MainApp/mainapp';


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
            </Stack.Navigator>
    );
}