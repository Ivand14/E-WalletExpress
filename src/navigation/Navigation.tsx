import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator  initialRouteName='InitialScreen'>
            <Stack.Screen name='InitialScreen' component={InitialScreen} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default Navigation;

