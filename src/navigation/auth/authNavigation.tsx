import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from '../../screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const authNavigation = () => {
    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Register' component={AuthScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default authNavigation;


