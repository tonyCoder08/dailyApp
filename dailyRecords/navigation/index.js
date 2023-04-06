import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEmployee from '../screens/AddEmployee';
import AddSite from '../screens/AddSite';
import Employee from '../screens/Employee';
import EmployeeProfile from '../screens/EmployeeProfile';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import SitePage from '../screens/SitePage';
import Day from '../screens/Day';
import SignIn from '../screens/User/SignIn';
import SignUp from '../screens/User/SignUp';
import Profile from '../screens/User/Profile';
import { useContext } from 'react';
import Flow from '../context';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    const {user} = useContext(Flow)
    return (
        <Stack.Navigator>
            {
                !user ? (
                    <>
                        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    </>
                ) :
                    (

                        <>
                            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                            <Stack.Screen name="Employee" component={Employee} options={{ headerShown: false }} />
                            <Stack.Screen name="EmployeeProfile" component={EmployeeProfile} options={{ headerShown: false }} />
                            <Stack.Screen name="Site" component={SitePage} options={{ headerShown: false }} />
                            <Stack.Screen name="AddEmployee" component={AddEmployee} options={{ headerShown: false }} />
                            <Stack.Screen name="AddSite" component={AddSite} options={{ headerShown: false }} />
                            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
                            <Stack.Screen name="Day" component={Day} options={{ headerShown: false }} />
                        </>
                    )
            }
        </Stack.Navigator>
    )
}