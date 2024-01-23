import LoginScreen from '../../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RegisterScreen from '../../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const authNavigation = () => {
    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Register' component={RegisterScreen} />
                <stack.Screen name='Login' component={LoginScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default authNavigation;


