import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Employee from '../screens/Employee';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Employee" component={Employee}  options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}